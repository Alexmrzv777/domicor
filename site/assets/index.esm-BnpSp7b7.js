import{g as w,_ as D,k as I,a as _,m as v,p as R,F as L,c as x,C as U,r as E,b as $}from"./cloud-CGzCUMLb.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F="type.googleapis.com/google.protobuf.Int64Value",M="type.googleapis.com/google.protobuf.UInt64Value";function O(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function k(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>k(t));if(typeof e=="function"||typeof e=="object")return O(e,t=>k(t));throw new Error("Data cannot be encoded in JSON: "+e)}function m(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case F:case M:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>m(t)):typeof e=="function"||typeof e=="object"?O(e,t=>m(t)):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class f extends L{constructor(t,n,r,s){super(`${y}/${t}`,n||"",s!=null?{url:s}:void 0),this.details=r,Object.setPrototypeOf(this,f.prototype)}}function G(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function T(e,t,n){let r=G(e),s=r,o;try{const c=t&&t.error;if(c){const i=c.status;if(typeof i=="string"){if(!N[i])return new f("internal",`Unknown backend error status: ${i} [${e}]`,void 0,n);r=N[i],s=`Backend error status: ${i}`}const a=c.message;typeof a=="string"&&(s=a),o=c.details,o!==void 0&&(o=m(o))}}catch{}return r==="ok"?null:new f(r,`${s} [${e}]`,o,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,n,r,s){this.app=t,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,$(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(o=>this.auth=o,()=>{}),this.messaging||r.get().then(o=>this.messaging=o,()=>{}),this.appCheck||s?.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(t){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(t);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A="us-central1",J=/^data: (.*?)(?:\n|$)/;function j(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new f("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class q{constructor(t,n,r,s,o=A,c=(...i)=>fetch(...i)){this.app=t,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new H(t,n,r,s),this.cancelAllRequests=new Promise(i=>{this.deleteService=()=>Promise.resolve(i())});try{const i=new URL(o);this.customDomain=i.origin+(i.pathname==="/"?"":i.pathname),this.region=A}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function V(e,t,n){const r=v(t);e.emulatorOrigin=`http${r?"s":""}://${t}:${n}`,r&&R(e.emulatorOrigin+"/backends")}function B(e,t,n){const r=s=>Y(e,t,s,{});return r.stream=(s,o)=>W(e,t,s,o),r}function P(e){return e.emulatorOrigin&&v(e.emulatorOrigin)?"include":void 0}async function X(e,t,n,r,s){n["Content-Type"]="application/json";let o;try{o=await r(e,{method:"POST",body:JSON.stringify(t),headers:n,credentials:P(s)})}catch{return{status:0,json:null}}let c=null;try{c=await o.json()}catch{}return{status:o.status,json:c}}async function S(e,t){const n={},r=await e.contextProvider.getContext(t.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function Y(e,t,n,r){const s=e._url(t);return K(e,s,n,r)}async function K(e,t,n,r){n=k(n);const s={data:n},o=await S(e,r),c=r.timeout||7e4,i=j(c),a=await Promise.race([X(t,s,o,e.fetchImpl,e),i.promise,e.cancelAllRequests]);if(i.cancel(),!a)throw new f("cancelled","Firebase Functions instance was deleted.");const h=T(a.status,a.json,t);if(h)throw h;if(!a.json)throw new f("internal","Response is not valid JSON object.",void 0,t);let l=a.json.data;if(typeof l>"u"&&(l=a.json.result),typeof l>"u")throw new f("internal","Response is missing data field.",void 0,t);return{data:m(l)}}function W(e,t,n,r){const s=e._url(t);return z(e,s,n,r||{})}async function z(e,t,n,r){n=k(n);const s={data:n},o=await S(e,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let c;try{c=await e.fetchImpl(t,{method:"POST",body:JSON.stringify(s),headers:o,signal:r?.signal,credentials:P(e)})}catch(d){if(d instanceof Error&&d.name==="AbortError"){const g=new f("cancelled","Request was cancelled.");return{data:Promise.reject(g),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(g)}}}}}}const p=T(0,null,t);return{data:Promise.reject(p),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(p)}}}}}}let i,a;const h=new Promise((d,p)=>{i=d,a=p});r?.signal?.addEventListener("abort",()=>{const d=new f("cancelled","Request was cancelled.");a(d)});const l=c.body.getReader(),u=Q(l,i,a,r?.signal,t);return{stream:{[Symbol.asyncIterator](){const d=u.getReader();return{async next(){const{value:p,done:g}=await d.read();return{value:p,done:g}},async return(){return await d.cancel(),{done:!0,value:void 0}}}}},data:h}}function Q(e,t,n,r,s){const o=(i,a)=>{const h=i.match(J);if(!h)return;const l=h[1];try{const u=JSON.parse(l);if("result"in u){t(m(u.result));return}if("message"in u){a.enqueue(m(u.message));return}if("error"in u){const d=T(0,u,s);a.error(d),n(d);return}}catch(u){if(u instanceof f){a.error(u),n(u);return}}},c=new TextDecoder;return new ReadableStream({start(i){let a="";return h();async function h(){if(r?.aborted){const l=new f("cancelled","Request was cancelled");return i.error(l),n(l),Promise.resolve()}try{const{value:l,done:u}=await e.read();if(u){a.trim()&&o(a.trim(),i),i.close();return}if(r?.aborted){const p=new f("cancelled","Request was cancelled");i.error(p),n(p),await e.cancel();return}a+=c.decode(l,{stream:!0});const d=a.split(`
`);a=d.pop()||"";for(const p of d)p.trim()&&o(p.trim(),i);return h()}catch(l){const u=l instanceof f?l:T(0,null,s);i.error(u),n(u)}}},cancel(){return e.cancel()}})}const b="@firebase/functions",C="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="auth-internal",ee="app-check-internal",te="messaging-internal";function ne(e){const t=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),o=n.getProvider(Z),c=n.getProvider(te),i=n.getProvider(ee);return new q(s,o,c,i,r)};x(new U(y,t,"PUBLIC").setMultipleInstances(!0)),E(b,C,e),E(b,C,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e=_(),t=A){const r=D(w(e),y).getImmediate({identifier:t}),s=I("functions");return s&&re(r,...s),r}function re(e,t,n){V(w(e),t,n)}function oe(e,t,n){return B(w(e),t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ne();export{ie as g,oe as h};
