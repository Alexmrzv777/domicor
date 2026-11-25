import{g as pe,_ as fe,a as he,L as ge,F as me,d as S,b as Ee,c as Oe,C as ye,r as q,e as Re}from"./cloud-BrRbG732.js";var H="@firebase/ai",F="3.1.0";/**
 * @license
 * Copyright 2024 Google LLC
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
 */const w="AI",_e="global",Ie="firebasevertexai.googleapis.com",D="v1beta",Y=F,Te="gl-js",Se="hybrid",Ae=180*1e3,Ce="gemini-3.5-flash-lite";/**
 * @license
 * Copyright 2024 Google LLC
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
 */class l extends me{constructor(e,n,s){const o=w,a=`${o}/${e}`,i=`${o}: ${n} (${a})`;super(e,i),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,l),Object.setPrototypeOf(this,l.prototype),this.toString=()=>i}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const J=["user","model","function","system"],ee={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},h={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},O={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},I={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
 * @license
 * Copyright 2024 Google LLC
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
 */const c={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",ALREADY_INITIALIZED:"already-initialized",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
 * @license
 * Copyright 2024 Google LLC
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
 */const A={STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"};/**
 * @license
 * Copyright 2024 Google LLC
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
 */const _={AGENT_PLATFORM:"AGENT_PLATFORM",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
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
 */class te{constructor(e){this.backendType=e}}class G extends te{constructor(){super(_.GOOGLE_AI)}_getModelPath(e,n){return`/${D}/projects/${e}/${n}`}_getTemplatePath(e,n){return`/${D}/projects/${e}/templates/${n}`}}class ne extends te{constructor(e){super(_.AGENT_PLATFORM),this.location=_e,e&&(this.location=e)}_getModelPath(e,n){return`/${D}/projects/${e}/locations/${this.location}/${n}`}_getTemplatePath(e,n){return`/${D}/projects/${e}/locations/${this.location}/templates/${n}`}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function we(t){if(t instanceof G)return`${w}/googleai`;if(t instanceof ne)return`${w}/agentplatform/${t.location}`;throw new l(c.ERROR,`Invalid backend: ${JSON.stringify(t.backendType)}`)}function be(t){const e=t.split("/");if(e[0]!==w)throw new l(c.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"agentplatform":const s=e[2];if(!s)throw new l(c.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new ne(s);case"googleai":return new G;default:throw new l(c.ERROR,`Invalid instance identifier string: '${t}'`)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const f=new ge("@firebase/ai");var R;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(R||(R={}));/**
 * @license
 * Copyright 2025 Google LLC
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
 */const se={type:"text",languages:["en"]},M=[se,{type:"image"}],k=[se];class E{constructor(e,n,s){this.languageModelProvider=e,this.mode=n,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:M,expectedOutputs:k}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=M),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=k)):this.onDeviceParams.createOptions={expectedInputs:M,expectedOutputs:k})}async isAvailable(e){if(!this.mode)return f.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===O.ONLY_IN_CLOUD)return f.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);if(this.mode===O.ONLY_ON_DEVICE){if(n===R.UNAVAILABLE)throw new l(c.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(n===R.DOWNLOADABLE||n===R.DOWNLOADING){f.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(s){throw new l(c.ERROR,s.message)}return!0}return!0}return n!==R.AVAILABLE?(f.debug(`On-device inference unavailable because availability is "${n}".`),!1):E.isOnDeviceRequest(e)?!0:(f.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(E.toLanguageModelMessage)),o=await n.prompt(s,this.onDeviceParams.promptOptions);return E.toResponse(o)}async generateContentStream(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(E.toLanguageModelMessage)),o=n.promptStreaming(s,this.onDeviceParams.promptOptions);return E.toStreamResponse(o)}async countTokens(e){throw new l(c.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return f.debug("Empty prompt rejected for on-device inference."),!1;for(const n of e.contents){if(n.parts.some(s=>"functionResponse"in s))return f.debug("Content with a function response part rejected for on-device inference."),!1;for(const s of n.parts)if("inlineData"in s&&s.inlineData&&E.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return f.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){const n=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);return(n===R.DOWNLOADABLE||n===R.DOWNLOADING)&&this.download(e),n}download(e){if(this.downloadPromise)return;const n={...this.onDeviceParams.createOptions};n&&!n.monitor&&e&&(n.monitor=s=>{s.addEventListener("downloadprogress",o=>{e(o.loaded)})}),this.downloadPromise=this.languageModelProvider?.create(n).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const n=await Promise.all(e.parts.map(E.toLanguageModelMessageContent));return{role:E.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if("text"in e&&typeof e.text=="string")return{type:"text",value:e.text};if("inlineData"in e&&e.inlineData){const s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new l(c.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new l(c.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,o){const a=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});o.enqueue(n.encode(`data: ${a}

`))}}))}}}E.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Ne(t,e,n){const o=(e||Re()).LanguageModel;if(o&&t)return new E(o,t,n)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Pe{constructor(e,n,s,o,a){this.app=e,this.backend=n,this.chromeAdapterFactory=a;const i=o?.getImmediate({optional:!0}),r=s?.getImmediate({optional:!0});this.auth=r||null,this.appCheck=i||null}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function De(t,{instanceIdentifier:e}){if(!e)throw new l(c.ERROR,"AIService instance identifier is undefined.");const n=be(e),s=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),a=t.getProvider("app-check-internal");return new Pe(s,n,o,a,Ne)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Le(t){if(t.app?.options?.apiKey)if(t.app?.options?.projectId){if(!t.app?.options?.appId)throw new l(c.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new l(c.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new l(c.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,backend:t.backend};if(Ee(t.app)&&t.app.settings.appCheckToken){const n=t.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:n})}else t.appCheck&&(t.options?.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>t.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>t.appCheck.getToken());return t.auth&&(e.getAuthToken=()=>t.auth.getToken()),e}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class N{constructor(e,n){this._apiSettings=Le(e),this.model=N.normalizeModelName(n,this._apiSettings.backend.backendType)}static normalizeModelName(e,n){return n===_.GOOGLE_AI?N.normalizeGoogleAIModelName(e):N.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */const Me="Timeout has expired.",v="AbortError";class ke{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){return this.params.singleRequestOptions?.baseUrl??`https://${Ie}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function ve(t){const e=[];return e.push(`${Te}/${Y}`),e.push(`fire/${Y}`),(t.params.apiSettings.inferenceMode===O.PREFER_ON_DEVICE||t.params.apiSettings.inferenceMode===O.PREFER_IN_CLOUD)&&e.push(Se),e.join(" ")}async function xe(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",ve(t)),e.append("x-goog-api-key",t.params.apiSettings.apiKey),t.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.params.apiSettings.appId),t.params.apiSettings.getAppCheckToken){const n=await t.params.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&f.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.params.apiSettings.getAuthToken){const n=await t.params.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function U(t,e){const n=new ke(t);let s;const o=t.singleRequestOptions?.signal,a=t.singleRequestOptions?.timeout!=null&&t.singleRequestOptions.timeout>=0?t.singleRequestOptions.timeout:Ae,i=new AbortController,r=setTimeout(()=>{i.abort(new DOMException(Me,v)),f.debug(`Aborting request to ${n} due to timeout (${a}ms)`)},a),u=AbortSignal.any(o?[o,i.signal]:[i.signal]);if(o&&o.aborted)throw clearTimeout(r),new DOMException(o.reason??"Aborted externally before fetch",v);try{const d={method:"POST",headers:await xe(n),signal:u,body:e};if(s=await fetch(n.toString(),d),!s.ok){let p="",g;try{const m=await s.json();p=m.error.message,m.error.details&&(p+=` ${JSON.stringify(m.error.details)}`,g=m.error.details)}catch{}throw s.status===403&&g&&g.some(m=>m.reason==="SERVICE_DISABLED")&&g.some(m=>m.links?.[0]?.description.includes("Google developers console API activation"))?new l(c.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${n.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:g}):new l(c.FETCH_ERROR,`Error fetching from ${n}: [${s.status} ${s.statusText}] ${p}`,{status:s.status,statusText:s.statusText,errorDetails:g})}}catch(d){let p=d;throw d.code!==c.FETCH_ERROR&&d.code!==c.API_NOT_ENABLED&&d instanceof Error&&d.name!==v&&(p=new l(c.ERROR,`Error fetching from ${n.toString()}: ${d.message}`),p.stack=d.stack),p}finally{clearTimeout(r)}return s}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function P(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&f.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),ie(t.candidates[0]))throw new l(c.RESPONSE_ERROR,`Response error: ${T(t)}. Response body stored in error.response`,{response:t});return!0}else return!1}function y(t){return"type"in t&&t.type?t:t.text!==void 0?{...t,type:"text"}:t.inlineData!==void 0?{...t,type:"inlineData"}:t.functionCall!==void 0?{...t,type:"functionCall"}:t.functionResponse!==void 0?{...t,type:"functionResponse"}:t.fileData!==void 0?{...t,type:"fileData"}:t.executableCode!==void 0?{...t,type:"executableCode"}:t.codeExecutionResult!==void 0?{...t,type:"codeExecutionResult"}:t}function L(t,e=I.IN_CLOUD){if(t.candidates?.[0]&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0),t.candidates)for(const s of t.candidates)s.content?.parts&&(s.content.parts=s.content.parts.map(y));const n=Fe(t);return n.inferenceSource=e,n}function Fe(t){return t.text=()=>{if(P(t))return K(t,e=>!("thought"in e&&e.thought));if(t.promptFeedback)throw new l(c.RESPONSE_ERROR,`Text not available. ${T(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(P(t)){const e=K(t,n=>!!("thought"in n&&n.thought));return e===""?void 0:e}else if(t.promptFeedback)throw new l(c.RESPONSE_ERROR,`Thought summary not available. ${T(t)}`,{response:t})},t.inlineDataParts=()=>{if(P(t))return Ge(t);if(t.promptFeedback)throw new l(c.RESPONSE_ERROR,`Data not available. ${T(t)}`,{response:t})},t.functionCalls=()=>{if(P(t))return oe(t);if(t.promptFeedback)throw new l(c.RESPONSE_ERROR,`Function call not available. ${T(t)}`,{response:t})},t}function K(t,e){const n=[];if(t.candidates?.[0].content?.parts)for(const s of t.candidates?.[0].content?.parts){const o=y(s);o.type==="text"&&e(o)&&n.push(o.text)}return n.length>0?n.join(""):""}function oe(t){if(!t)return;const e=[];if(t.candidates?.[0].content?.parts)for(const n of t.candidates?.[0].content?.parts){const s=y(n);s.type==="functionCall"&&e.push(s.functionCall)}if(e.length>0)return e}function Ge(t){const e=[];if(t.candidates?.[0].content?.parts)for(const n of t.candidates?.[0].content?.parts){const s=y(n);s.type==="inlineData"&&e.push(s)}if(e.length>0)return e}const Ue=[h.RECITATION,h.SAFETY,h.BLOCKLIST,h.PROHIBITED_CONTENT,h.SPII,h.MALFORMED_FUNCTION_CALL,h.IMAGE_SAFETY,h.IMAGE_PROHIBITED_CONTENT,h.IMAGE_OTHER,h.NO_IMAGE,h.IMAGE_RECITATION,h.LANGUAGE,h.UNEXPECTED_TOOL_CALL,h.TOO_MANY_TOOL_CALLS,h.MISSING_THOUGHT_SIGNATURE,h.MALFORMED_RESPONSE];function ie(t){return!!t.finishReason&&Ue.some(e=>e===t.finishReason)}function T(t){let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",t.promptFeedback?.blockReason&&(e+=` due to ${t.promptFeedback.blockReason}`),t.promptFeedback?.blockReasonMessage&&(e+=`: ${t.promptFeedback.blockReasonMessage}`);else if(t.candidates?.[0]){const n=t.candidates[0];ie(n)&&(e+=`Candidate was blocked due to ${n.finishReason}`,n.finishMessage&&(e+=`: ${n.finishMessage}`))}return e}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function $(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{type:"text",text:t}]};if(t.type==="text"||"text"in t&&typeof t.text=="string")return{role:"system",parts:[S(y(t))]};if(t.parts){const e=t.parts.map(n=>S(y(n)));return t.role?{...t,parts:e}:{role:"system",parts:e}}}}function b(t){let e=[];if(typeof t=="string")e=[{type:"text",text:t}];else for(const n of t)typeof n=="string"?e.push({type:"text",text:n}):e.push(S(y(n)));return $e(e)}function $e(t){const e={role:"user",parts:[]};let n=!1,s=!1;for(const o of t)o.type==="functionResponse"||"functionResponse"in o?s=!0:n=!0,e.parts.push(o);if(n&&s)throw new l(c.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!n&&!s)throw new l(c.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function x(t){let e;if(t.contents){const n=t;e={...n,contents:n.contents.map(s=>({...s,parts:s.parts?s.parts.map(y):[]}))}}else e={contents:[b(t)]};return t.systemInstruction&&(e.systemInstruction=$(t.systemInstruction)),e}function Ve(t){return t.parts&&Array.isArray(t.parts)?{...t,parts:t.parts.map(V)}:t}function V(t){let e;if("type"in t){const{type:n,...s}=t;e=s}else e=t;return e.functionResponse&&(e={...e,functionResponse:Ve(e.functionResponse)}),e}function B(t){return t.parts?{...t,parts:t.parts.map(V)}:t}function ae(t){return t==null||typeof t=="string"?t:"parts"in t&&Array.isArray(t.parts)?B(t):V(t)}function re(t){const e={...t};return e.contents&&(e.contents=e.contents.map(B)),e.systemInstruction&&(e.systemInstruction=ae(e.systemInstruction)),e}function Be(t){const e={...t};return e.contents&&(e.contents=e.contents.map(B)),e.systemInstruction&&(e.systemInstruction=ae(e.systemInstruction)),e}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ce(t){if(t.safetySettings?.forEach(e=>{if(e.method)throw new l(c.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),t.generationConfig?.topK){const e=Math.round(t.generationConfig.topK);e!==t.generationConfig.topK&&(f.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=e)}return t}function j(t){return{candidates:t.candidates?qe(t.candidates):void 0,promptFeedback:t.promptFeedback?He(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function je(t,e){return{generateContentRequest:{model:e,...t}}}function qe(t){const e=[];let n;return e&&t.forEach(s=>{let o;if(s.citationMetadata&&(o={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(n=s.safetyRatings.map(i=>({...i,severity:i.severity??ee.HARM_SEVERITY_UNSUPPORTED,probabilityScore:i.probabilityScore??0,severityScore:i.severityScore??0}))),s.content?.parts?.some(i=>"videoMetadata"in i&&i.videoMetadata))throw new l(c.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const a={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:n,citationMetadata:o,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(a)}),e}function He(t){const e=[];return(t.safetyRatings??[]).forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??ee.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const W=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function Ye(t,e,n){const s=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),o=ze(s),[a,i]=o.tee(),{response:r,firstValue:u}=await Je(i,e,n);return{stream:We(a,e,n),response:r,firstValue:u}}async function Je(t,e,n){const[s,o]=t.tee(),a=s.getReader(),{value:i}=await a.read();return{firstValue:i,response:Ke(o,e,n)}}async function Ke(t,e,n){const s=[],o=t.getReader();for(;;){const{done:a,value:i}=await o.read();if(a){let r=Xe(s);return e.backend.backendType===_.GOOGLE_AI&&(r=j(r)),L(r,n)}s.push(i)}}async function*We(t,e,n){const s=t.getReader();for(;;){const{value:o,done:a}=await s.read();if(a)break;let i;e.backend.backendType===_.GOOGLE_AI?i=L(j(o),n):i=L(o,n);const r=i.candidates?.[0];!r?.content?.parts&&!r?.finishReason&&!r?.citationMetadata&&!r?.urlContextMetadata||(yield i)}}function ze(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return a();function a(){return e.read().then(({value:i,done:r})=>{if(r){if(o.trim()){s.error(new l(c.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}o+=i;let u=o.match(W),d;for(;u;){try{d=JSON.parse(u[1])}catch{s.error(new l(c.PARSE_FAILED,`Error parsing JSON response: "${u[1]}`));return}s.enqueue(d),o=o.substring(u[0].length),u=o.match(W)}return a()})}}})}function Xe(t){const n={promptFeedback:t[t.length-1]?.promptFeedback};for(const s of t)if(s.candidates)for(const o of s.candidates){const a=o.index||0;n.candidates||(n.candidates=[]),n.candidates[a]||(n.candidates[a]={index:o.index}),n.candidates[a].citationMetadata=o.citationMetadata,n.candidates[a].finishReason=o.finishReason,n.candidates[a].finishMessage=o.finishMessage,n.candidates[a].safetyRatings=o.safetyRatings,n.candidates[a].groundingMetadata=o.groundingMetadata;const i=o.urlContextMetadata;if(typeof i=="object"&&i!==null&&Object.keys(i).length>0&&(n.candidates[a].urlContextMetadata=i),o.content){if(!o.content.parts)continue;n.candidates[a].content||(n.candidates[a].content={role:o.content.role||"user",parts:[]});for(const r of o.content.parts){if("text"in r&&r.text==="")continue;if(Object.keys(r).length===0)throw new l(c.INVALID_CONTENT,"Part should have at least one property, but there are none. This is likely caused by a malformed response from the backend.");const u=y({...r});Object.keys(u).length>0&&n.candidates[a].content.parts.push(u)}}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */const Qe=[c.FETCH_ERROR,c.ERROR,c.API_NOT_ENABLED];async function le(t,e,n,s){if(!e)return{response:await s(),inferenceSource:I.IN_CLOUD};switch(e.mode){case O.ONLY_ON_DEVICE:if(await e.isAvailable(t))return{response:await n(),inferenceSource:I.ON_DEVICE};throw new l(c.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case O.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:I.IN_CLOUD};case O.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:I.IN_CLOUD}}catch(o){if(o instanceof l&&Qe.includes(o.code)&&await e.isAvailable(t))return{response:await n(),inferenceSource:I.ON_DEVICE};throw o}case O.PREFER_ON_DEVICE:return await e.isAvailable(t)?{response:await n(),inferenceSource:I.ON_DEVICE}:{response:await s(),inferenceSource:I.IN_CLOUD};default:throw new l(c.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function Ze(t,e,n,s){return n=re(n),t.backend.backendType===_.GOOGLE_AI&&(n=ce(n)),U({task:"streamGenerateContent",model:e,apiSettings:t,stream:!0,singleRequestOptions:s},JSON.stringify(n))}async function ue(t,e,n,s,o){const a=await le(n,s,()=>s.generateContentStream(n),()=>Ze(t,e,n,o));return Ye(a.response,t,a.inferenceSource)}async function et(t,e,n,s){return n=re(n),t.backend.backendType===_.GOOGLE_AI&&(n=ce(n)),U({model:e,task:"generateContent",apiSettings:t,stream:!1,singleRequestOptions:s},JSON.stringify(n))}async function de(t,e,n,s,o){const a=await le(n,s,()=>s.generateContent(n),()=>et(t,e,n,o)),i=await tt(a.response,t);return{response:L(i,a.inferenceSource)}}async function tt(t,e){const n=await t.json();return e.backend.backendType===_.GOOGLE_AI?j(n):n}/**
 * @license
 * Copyright 2026 Google LLC
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
 */const z="SILENT_ERROR",X=10;class nt{constructor(e,n,s){this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,S(this._history).map(e=>({...e,parts:e.parts?e.parts.map(y):[]}))}async _sendMessage(e,n){let s={};await this._sendPromise;const o=[];return this._sendPromise=this._sendPromise.then(async()=>{let a,i=0;const r=this.requestOptions?.maxSequentialFunctionCalls??X;do{let u;if(a){i++;const g=await this._callFunctionsAsNeeded(a);u=b(g)}else u=b(e);const d=this._formatRequest(u,[...o]);o.push(u);const p=await this._callGenerateContent(d,n);if(p)if(s=p,a=this._getCallableFunctionCalls(p.response),p.response.candidates&&p.response.candidates.length>0){const g={parts:p.response.candidates?.[0].content.parts||[],role:p.response.candidates?.[0].content.role||"model"};o.push(S(g))}else{const g=T(p.response);g&&f.warn(`sendMessage() was unsuccessful. ${g}. Inspect response object for details.`)}else a=void 0}while(a&&i<r);a&&i>=r&&f.warn(`Automatic function calling exceeded the limit of ${r} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(o),s}async _sendMessageStream(e,n){await this._sendPromise;const s=[],a=(async()=>{let i,r=0;const u=this.requestOptions?.maxSequentialFunctionCalls??X;let d;do{let p;if(i){r++;const m=await this._callFunctionsAsNeeded(i);p=b(m)}else p=b(e);const g=this._formatRequest(p,[...s]);if(s.push(p),d=await this._callGenerateContentStream(g,n),i=this._getCallableFunctionCalls(d.firstValue),i&&d.firstValue&&d.firstValue.candidates&&d.firstValue.candidates.length>0){const m={...d.firstValue.candidates[0].content};m.role||(m.role="model"),s.push(m)}}while(i&&r<u);return i&&r>=u&&f.warn(`Automatic function calling exceeded the limit of ${u} function calls. Returning last model response.`),{stream:d.stream,response:d.response}})();return this._sendPromise=this._sendPromise.then(async()=>a).catch(i=>{throw new Error(z)}).then(i=>i.response).then(i=>{if(i.candidates&&i.candidates.length>0){this._history=this._history.concat(s);const r={...i.candidates[0].content};r.role||(r.role="model"),this._history.push(S(r))}else{const r=T(i);r&&f.warn(`sendMessageStream() was unsuccessful. ${r}. Inspect response object for details.`)}}).catch(i=>{i.message!==z&&i.name!=="AbortError"&&f.error(i)}),a}_getCallableFunctionCalls(e){const n=this.params?.tools?.find(o=>o.functionDeclarations);if(!n?.functionDeclarations)return;const s=oe(e);if(s){for(const o of s)if(!n.functionDeclarations?.some(i=>i.name===o.name&&typeof i.functionReference=="function"))return;return s}}async _callFunctionsAsNeeded(e){const n=[],s=[],o=this.params?.tools?.find(a=>a.functionDeclarations);if(o&&o.functionDeclarations){for(const i of e){const r=o.functionDeclarations.find(u=>u.name===i.name);if(r?.functionReference){const u=Promise.resolve(r.functionReference(i.args)).catch(d=>{const p=new l(c.ERROR,`Error in user-defined function "${r.name}": ${d.message}`);throw p.stack=d.stack,p});n.push({name:i.name,id:i.id,results:u}),s.push(u)}}await Promise.all(s);const a=[];for(const{name:i,id:r,results:u}of n){const d={name:i,response:await u};r&&(d.id=r),a.push({type:"functionResponse",functionResponse:d})}return a}else throw new l(c.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const st=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],ot={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},Q={user:["model"],function:["model"],model:["user","function"],system:[]};function it(t){let e=null;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new l(c.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!J.includes(s))throw new l(c.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(J)}`);if(!Array.isArray(o))throw new l(c.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(o.length===0)throw new l(c.INVALID_CONTENT,"Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o){if(r.type)a[r.type]+=1;else for(const u of["text","inlineData","functionCall","functionResponse","fileData","executableCode","codeExecutionResult"])u in r&&(a[u]+=1);"thought"in r&&r.thought&&(a.thought+=1),"thoughtSignature"in r&&r.thoughtSignature&&(a.thoughtSignature+=1)}const i=ot[s];for(const r of st)if(!i.includes(r)&&a[r]>0)throw new l(c.INVALID_CONTENT,`Content with role '${s}' can't contain '${r}' part`);if(e&&!Q[s].includes(e.role))throw new l(c.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(Q)}`);e=n}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class at extends nt{constructor(e,n,s,o,a){super(e,o,a),this.model=n,this.chromeAdapter=s,this.params=o,this.requestOptions=a,o?.history&&(it(o.history),this._history=S(o.history)),this.params?.systemInstruction!=null&&(this.params={...this.params,systemInstruction:$(this.params.systemInstruction)})}_formatRequest(e,n){return{safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,...n,e]}}_callGenerateContent(e,n){return de(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}_callGenerateContentStream(e,n){return ue(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}async sendMessage(e,n){return this._sendMessage(e,n)}async sendMessageStream(e,n){return this._sendMessageStream(e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function rt(t,e,n,s){n=Be(n);let o="";if(t.backend.backendType===_.GOOGLE_AI){const i=je(n,e);o=JSON.stringify(i)}else o=JSON.stringify(n);return(await U({model:e,task:"countTokens",apiSettings:t,stream:!1,singleRequestOptions:s},o)).json()}async function ct(t,e,n,s,o){if(s?.mode===O.ONLY_ON_DEVICE)throw new l(c.UNSUPPORTED,"countTokens() is not supported for on-device models.");return rt(t,e,n,o)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class lt extends N{constructor(e,n,s,o){super(e,n.model),this.chromeAdapter=o,this.generationConfig=n.generationConfig||{},ut(this.generationConfig),this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=$(n.systemInstruction),this.requestOptions=s||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===O.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===R.UNAVAILABLE){const s=new l(c.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===O.ONLY_ON_DEVICE)throw s;f.debug(s.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,n){const s=x(e);return de(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n})}async generateContentStream(e,n){const s=x(e),{stream:o,response:a}=await ue(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n});return{stream:o,response:a}}startChat(e){return new at(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,n){const s=x(e);return ct(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...n})}}function ut(t){if(t.thinkingConfig?.thinkingBudget!=null&&t.thinkingConfig?.thinkingLevel)throw new l(c.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(t.responseSchema!=null&&t.responseJsonSchema!=null)throw new l(c.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((t.responseSchema!=null||t.responseJsonSchema!=null)&&t.responseMimeType!=="application/json"&&t.responseMimeType!=="text/x.enum")throw new l(c.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class C{constructor(e){if(!e.type&&!e.anyOf)throw new l(c.INVALID_SCHEMA,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const n in e)this[n]=e[n];this.type=e.type,this.format=e.hasOwnProperty("format")?e.format:void 0,this.nullable=e.hasOwnProperty("nullable")?!!e.nullable:!1}toJSON(){const e={type:this.type};for(const n in this)this.hasOwnProperty(n)&&this[n]!==void 0&&(n!=="required"||this.type===A.OBJECT)&&(e[n]=this[n]);return e}static array(e){return new ht(e,e.items)}static object(e){return new gt(e,e.properties,e.optionalProperties)}static string(e){return new Z(e)}static enumString(e){return new Z(e,e.enum)}static integer(e){return new dt(e)}static number(e){return new pt(e)}static boolean(e){return new ft(e)}static anyOf(e){return new mt(e)}}class dt extends C{constructor(e){super({type:A.INTEGER,...e})}}class pt extends C{constructor(e){super({type:A.NUMBER,...e})}}class ft extends C{constructor(e){super({type:A.BOOLEAN,...e})}}class Z extends C{constructor(e,n){super({type:A.STRING,...e}),this.enum=n}toJSON(){const e=super.toJSON();return this.enum&&(e.enum=this.enum),e}}class ht extends C{constructor(e,n){super({type:A.ARRAY,...e}),this.items=n}toJSON(){const e=super.toJSON();return e.items=this.items.toJSON(),e}}class gt extends C{constructor(e,n,s=[]){super({type:A.OBJECT,...e}),this.properties=n,this.optionalProperties=s}toJSON(){const e=super.toJSON();e.properties={...this.properties};const n=[];if(this.optionalProperties){for(const s of this.optionalProperties)if(!this.properties.hasOwnProperty(s))throw new l(c.INVALID_SCHEMA,`Property "${s}" specified in "optionalProperties" does not exist.`)}for(const s in this.properties)this.properties.hasOwnProperty(s)&&(e.properties[s]=this.properties[s].toJSON(),this.optionalProperties.includes(s)||n.push(s));return n.length>0&&(e.required=n),delete e.optionalProperties,e}}class mt extends C{constructor(e){if(e.anyOf.length===0)throw new l(c.INVALID_SCHEMA,"The 'anyOf' array must not be empty.");super({...e,type:void 0}),this.anyOf=e.anyOf}toJSON(){const e=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(e.anyOf=this.anyOf.map(n=>n.toJSON())),e}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function Rt(t=he(),e){t=pe(t);const n=fe(t,w),s=e?.backend??new G,o=we(s),a=n.getImmediate({identifier:o}),i=a.options;if(i){const r=e?.useLimitedUseAppCheckTokens,u=!!i.useLimitedUseAppCheckTokens;if(r!=null&&!!r!==u)throw new l(c.ALREADY_INITIALIZED,`getAI() has already been called for app "${t.name}" and this backend with useLimitedUseAppCheckTokens: ${u}. This option cannot be changed after the AI instance has been initialized. Pass the desired options to the first getAI() call for this app and backend, or omit useLimitedUseAppCheckTokens to reuse the existing instance.`);return a}return a.options={useLimitedUseAppCheckTokens:e?.useLimitedUseAppCheckTokens??!1},a}const Et=["mode","onDeviceParams","inCloudParams"];function _t(t,e,n){const s=e;let o;if(s.mode){for(const r of Object.keys(e))Et.includes(r)||f.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${r}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);o=s.inCloudParams||{model:Ce}}else o=e;if(!o.model)throw new l(c.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const a=t.chromeAdapterFactory?.(s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),i=new lt(t,o,n,a);return i._apiSettings.inferenceMode=s.mode,i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ot(){Oe(new ye(w,De,"PUBLIC").setMultipleInstances(!0)),q(H,F),q(H,F,"esm2020")}Ot();export{G,C as S,_t as a,Rt as g};
