// Domicor offline cache. The app's page and every file it needs are cached
// together, so the installed app always opens, even with no signal. A new
// version is fetched in the background, and its page replaces the old one only
// once all of its files are cached (otherwise an update could open blank offline).
const CACHE = 'domicor-v4';
const SHELL = ['./', './index.html'];

async function cacheVersion(cache) {
  const res = await fetch('./index.html', { cache: 'no-cache' });
  if (!res.ok) return;
  const html = await res.clone().text();
  const files = new Set(['./manifest.webmanifest']);
  for (const m of html.matchAll(/(?:src|href)="([^"#?]+)"/g)) {
    const u = new URL(m[1], self.location.href);
    if (u.origin === self.location.origin && !u.pathname.endsWith('/')) files.add(u.href);
  }
  await cache.addAll([...files]); // all or nothing
  await Promise.all(SHELL.map((p) => cache.put(p, res.clone())));
}

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(cacheVersion).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  // Leave other sites and Firebase's own sign-in pages (/__/auth/...) alone.
  if (req.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/__/')) return;
  const isPage = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('/index.html');
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const hit = await cache.match(isPage ? './index.html' : req);
      if (isPage) {
        // Refresh the page and its files in the background; a failure keeps the old version.
        const refresh = cacheVersion(cache).catch(() => undefined);
        if (hit) {
          e.waitUntil(refresh);
          return hit;
        }
        return fetch(req);
      }
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok) cache.put(req, res.clone());
      return res;
    }),
  );
});

// Phone alerts. The server sends data only, so this code decides how each
// alert looks; tapping one opens Domicor on the right tab.
self.addEventListener('push', (e) => {
  let msg = {};
  try {
    msg = e.data ? e.data.json() : {};
  } catch {
    msg = { data: { title: 'Domicor', body: e.data ? e.data.text() : '' } };
  }
  const d = msg.data || msg.notification || {};
  const title = d.title || 'Domicor';
  e.waitUntil(
    self.registration.showNotification(title, {
      body: d.body || '',
      tag: d.tag || undefined,
      renotify: Boolean(d.tag),
      icon: './icon-192.png',
      badge: './icon-192.png',
      data: { url: './?tab=' + encodeURIComponent(d.tab || 'today') },
    }),
  );
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || './', self.location.href).href;
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((wins) => {
      for (const w of wins) {
        if (new URL(w.url).origin === self.location.origin) {
          w.postMessage({ type: 'open-tab', url });
          return w.focus();
        }
      }
      return self.clients.openWindow(url);
    }),
  );
});
