(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=globalThis,Gr=fe.ShadowRoot&&(fe.ShadyCSS===void 0||fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ii=Symbol(),oi=new WeakMap;let Es=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Ii)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Gr&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=oi.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&oi.set(r,t))}return t}toString(){return this.cssText}};const Tr=e=>new Es(typeof e=="string"?e:e+"",void 0,Ii),As=(e,t)=>{if(Gr)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),i=fe.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)}},ni=Gr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return Tr(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ns,defineProperty:Ds,getOwnPropertyDescriptor:Ts,getOwnPropertyNames:Us,getOwnPropertySymbols:Rs,getPrototypeOf:Ls}=Object,V=globalThis,ai=V.trustedTypes,zs=ai?ai.emptyScript:"",Or=V.reactiveElementPolyfillSupport,ht=(e,t)=>e,ye={toAttribute(e,t){switch(t){case Boolean:e=e?zs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},_e=(e,t)=>!Ns(e,t),li={attribute:!0,type:String,converter:ye,reflect:!1,hasChanged:_e};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),V.litPropertyMetadata??(V.litPropertyMetadata=new WeakMap);class Z extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=li){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,r);i!==void 0&&Ds(this.prototype,t,i)}}static getPropertyDescriptor(t,r,s){const{get:i,set:o}=Ts(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const p=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??li}static _$Ei(){if(this.hasOwnProperty(ht("elementProperties")))return;const t=Ls(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ht("properties"))){const r=this.properties,s=[...Us(r),...Rs(r)];for(const i of s)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)r.unshift(ni(i))}else t!==void 0&&r.push(ni(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return As(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(r=>{var s;return(s=r.hostConnected)==null?void 0:s.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$EO(t,r){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:ye).toAttribute(r,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,r){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),p=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:ye;this._$Em=i,this[i]=p.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(t,r,s,i=!1,o){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??_e)(i?o:this[t],r))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,s){this._$AL.has(t)||this._$AL.set(t,r),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(s=this._$ES)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)==null||r.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(t){}firstUpdated(t){}}Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[ht("elementProperties")]=new Map,Z[ht("finalized")]=new Map,Or==null||Or({ReactiveElement:Z}),(V.reactiveElementVersions??(V.reactiveElementVersions=[])).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=globalThis,ve=dt.trustedTypes,ci=ve?ve.createPolicy("lit-html",{createHTML:e=>e}):void 0,Bi="$lit$",q=`lit$${(Math.random()+"").slice(9)}$`,ki="?"+q,Hs=`<${ki}>`,X=document,ut=()=>X.createComment(""),ft=e=>e===null||typeof e!="object"&&typeof e!="function",qi=Array.isArray,Ms=e=>qi(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Sr=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pi=/-->/g,hi=/>/g,K=RegExp(`>|${Sr}(?:([^\\s"'>=/]+)(${Sr}*=${Sr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),di=/'/g,gi=/"/g,Vi=/^(?:script|style|textarea|title)$/i,Fs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),a=Fs(1),tt=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),ui=new WeakMap,W=X.createTreeWalker(X,129);function Ji(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ci!==void 0?ci.createHTML(t):t}const Is=(e,t)=>{const r=e.length-1,s=[];let i,o=t===2?"<svg>":"",n=lt;for(let p=0;p<r;p++){const d=e[p];let w,h,u=-1,O=0;for(;O<d.length&&(n.lastIndex=O,h=n.exec(d),h!==null);)O=n.lastIndex,n===lt?h[1]==="!--"?n=pi:h[1]!==void 0?n=hi:h[2]!==void 0?(Vi.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=K):h[3]!==void 0&&(n=K):n===K?h[0]===">"?(n=i??lt,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,w=h[1],n=h[3]===void 0?K:h[3]==='"'?gi:di):n===gi||n===di?n=K:n===pi||n===hi?n=lt:(n=K,i=void 0);const x=n===K&&e[p+1].startsWith("/>")?" ":"";o+=n===lt?d+Hs:u>=0?(s.push(w),d.slice(0,u)+Bi+d.slice(u)+q+x):d+q+(u===-2?p:x)}return[Ji(e,o+(e[r]||"<?>")+(t===2?"</svg>":"")),s]};class wt{constructor({strings:t,_$litType$:r},s){let i;this.parts=[];let o=0,n=0;const p=t.length-1,d=this.parts,[w,h]=Is(t,r);if(this.el=wt.createElement(w,s),W.currentNode=this.el.content,r===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=W.nextNode())!==null&&d.length<p;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Bi)){const O=h[n++],x=i.getAttribute(u).split(q),f=/([.?@])?(.*)/.exec(O);d.push({type:1,index:o,name:f[2],strings:x,ctor:f[1]==="."?ks:f[1]==="?"?qs:f[1]==="@"?Vs:Pe}),i.removeAttribute(u)}else u.startsWith(q)&&(d.push({type:6,index:o}),i.removeAttribute(u));if(Vi.test(i.tagName)){const u=i.textContent.split(q),O=u.length-1;if(O>0){i.textContent=ve?ve.emptyScript:"";for(let x=0;x<O;x++)i.append(u[x],ut()),W.nextNode(),d.push({type:2,index:++o});i.append(u[O],ut())}}}else if(i.nodeType===8)if(i.data===ki)d.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(q,u+1))!==-1;)d.push({type:7,index:o}),u+=q.length-1}o++}}static createElement(t,r){const s=X.createElement("template");return s.innerHTML=t,s}}function et(e,t,r=e,s){var n,p;if(t===tt)return t;let i=s!==void 0?(n=r._$Co)==null?void 0:n[s]:r._$Cl;const o=ft(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((p=i==null?void 0:i._$AO)==null||p.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,s)),s!==void 0?(r._$Co??(r._$Co=[]))[s]=i:r._$Cl=i),i!==void 0&&(t=et(e,i._$AS(e,t.values),i,s)),t}class Bs{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??X).importNode(r,!0);W.currentNode=i;let o=W.nextNode(),n=0,p=0,d=s[0];for(;d!==void 0;){if(n===d.index){let w;d.type===2?w=new pe(o,o.nextSibling,this,t):d.type===1?w=new d.ctor(o,d.name,d.strings,this,t):d.type===6&&(w=new Js(o,this,t)),this._$AV.push(w),d=s[++p]}n!==(d==null?void 0:d.index)&&(o=W.nextNode(),n++)}return W.currentNode=X,i}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class pe{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,s,i){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=et(this,t,r),ft(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==tt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ms(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==E&&ft(this._$AH)?this._$AA.nextSibling.data=t:this.$(X.createTextNode(t)),this._$AH=t}g(t){var o;const{values:r,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=wt.createElement(Ji(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const n=new Bs(i,this),p=n.u(this.options);n.p(r),this.$(p),this._$AH=n}}_$AC(t){let r=ui.get(t.strings);return r===void 0&&ui.set(t.strings,r=new wt(t)),r}T(t){qi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,i=0;for(const o of t)i===r.length?r.push(s=new pe(this.k(ut()),this.k(ut()),this,this.options)):s=r[i],s._$AI(o),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,i,o){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}_$AI(t,r=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=et(this,t,r,0),n=!ft(t)||t!==this._$AH&&t!==tt,n&&(this._$AH=t);else{const p=t;let d,w;for(t=o[0],d=0;d<o.length-1;d++)w=et(this,p[s+d],r,d),w===tt&&(w=this._$AH[d]),n||(n=!ft(w)||w!==this._$AH[d]),w===E?t=E:t!==E&&(t+=(w??"")+o[d+1]),this._$AH[d]=w}n&&!i&&this.O(t)}O(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ks extends Pe{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===E?void 0:t}}class qs extends Pe{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class Vs extends Pe{constructor(t,r,s,i,o){super(t,r,s,i,o),this.type=5}_$AI(t,r=this){if((t=et(this,t,r,0)??E)===tt)return;const s=this._$AH,i=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==E&&(s===E||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Js{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const xr=dt.litHtmlPolyfillSupport;xr==null||xr(wt,pe),(dt.litHtmlVersions??(dt.litHtmlVersions=[])).push("3.0.2");const Gs=(e,t,r)=>{const s=(r==null?void 0:r.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;s._$litPart$=i=new pe(t.insertBefore(ut(),o),o,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gt extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Gs(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return tt}}var Fi;gt._$litElement$=!0,gt.finalized=!0,(Fi=globalThis.litElementHydrateSupport)==null||Fi.call(globalThis,{LitElement:gt});const Cr=globalThis.litElementPolyfillSupport;Cr==null||Cr({LitElement:gt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ks={attribute:!0,type:String,converter:ye,reflect:!1,hasChanged:_e},Ws=(e=Ks,t,r)=>{const{kind:s,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,e),s==="accessor"){const{name:n}=r;return{set(p){const d=t.get.call(this);t.set.call(this,p),this.requestUpdate(n,d,e)},init(p){return p!==void 0&&this.C(n,void 0,e),p}}}if(s==="setter"){const{name:n}=r;return function(p){const d=this[n];t.call(this,p),this.requestUpdate(n,d,e)}}throw Error("Unsupported decorator location: "+s)};function l(e){return(t,r)=>typeof r=="object"?Ws(e,t,r):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xs=e=>typeof e!="string"&&"strTag"in e,Ys=(e,t,r)=>{let s=e[0];for(let i=1;i<e.length;i++)s+=t[r?r[i-1]:i-1],s+=e[i];return s};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qs=e=>Xs(e)?Ys(e.strings,e.values):e;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zs{constructor(t){this.__litLocalizeEventHandler=r=>{r.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(fi,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(fi,this.__litLocalizeEventHandler)}}const to=e=>e.addController(new Zs(e)),eo=to;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=()=>(e,t)=>(e.addInitializer(eo),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ro{constructor(){this.settled=!1,this.promise=new Promise((t,r)=>{this._resolve=t,this._reject=r})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let io=new ro;io.resolve();/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=Qs;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so=Symbol();class ${get taskComplete(){return this.t||(this.status===1?this.t=new Promise((t,r)=>{this.i=t,this.o=r}):this.status===3?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,r,s){var o;this.u=0,this.status=0,(this.p=t).addController(this);const i=typeof r=="object"?r:{task:r,args:s};this._=i.task,this.v=i.args,this.j=i.argsEqual??oo,this.m=i.onComplete,this.g=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.l=i.initialValue,this.status=2,this.k=(o=this.A)==null?void 0:o.call(this))}hostUpdate(){this.autoRun===!0&&this.O()}hostUpdated(){this.autoRun==="afterUpdate"&&this.O()}A(){if(this.v===void 0)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),r=this.k;this.k=t,t===r||t===void 0||r!==void 0&&this.j(r,t)||await this.run(t)}async run(t){var n,p,d,w,h;let r,s;t??(t=this.A()),this.k=t,this.status===1?(n=this.T)==null||n.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this.p.requestUpdate()):this.p.requestUpdate();const i=++this.u;this.T=new AbortController;let o=!1;try{r=await this._(t,{signal:this.T.signal})}catch(u){o=!0,s=u}if(this.u===i){if(r===so)this.status=0;else{if(o===!1){try{(p=this.m)==null||p.call(this,r)}catch{}this.status=2,(d=this.i)==null||d.call(this,r)}else{try{(w=this.g)==null||w.call(this,s)}catch{}this.status=3,(h=this.o)==null||h.call(this,s)}this.l=r,this.h=s}this.p.requestUpdate()}}abort(t){var r;this.status===1&&((r=this.T)==null||r.abort(t))}get value(){return this.l}get error(){return this.h}render(t){var r,s,i,o;switch(this.status){case 0:return(r=t.initial)==null?void 0:r.call(t);case 1:return(s=t.pending)==null?void 0:s.call(t);case 2:return(i=t.complete)==null?void 0:i.call(t,this.value);case 3:return(o=t.error)==null?void 0:o.call(t,this.error);default:throw Error("Unexpected status: "+this.status)}}}const oo=(e,t)=>e===t||e.length===t.length&&e.every((r,s)=>!_e(r,t[s]));var ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function no(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ao=Array.isArray,Kr=ao,lo=typeof ue=="object"&&ue&&ue.Object===Object&&ue,co=lo,po=co,ho=typeof self=="object"&&self&&self.Object===Object&&self,go=po||ho||Function("return this")(),Wr=go,uo=Wr,fo=uo.Symbol,Xr=fo,wi=Xr,Gi=Object.prototype,wo=Gi.hasOwnProperty,mo=Gi.toString,ct=wi?wi.toStringTag:void 0;function bo(e){var t=wo.call(e,ct),r=e[ct];try{e[ct]=void 0;var s=!0}catch{}var i=mo.call(e);return s&&(t?e[ct]=r:delete e[ct]),i}var yo=bo,vo=Object.prototype,$o=vo.toString;function _o(e){return $o.call(e)}var Po=_o,mi=Xr,Oo=yo,So=Po,xo="[object Null]",Co="[object Undefined]",bi=mi?mi.toStringTag:void 0;function jo(e){return e==null?e===void 0?Co:xo:bi&&bi in Object(e)?Oo(e):So(e)}var Ki=jo;function Eo(e){return e!=null&&typeof e=="object"}var Ao=Eo,No=Ki,Do=Ao,To="[object Symbol]";function Uo(e){return typeof e=="symbol"||Do(e)&&No(e)==To}var Yr=Uo,Ro=Kr,Lo=Yr,zo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ho=/^\w*$/;function Mo(e,t){if(Ro(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Lo(e)?!0:Ho.test(e)||!zo.test(e)||t!=null&&e in Object(t)}var Fo=Mo;function Io(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Wi=Io,Bo=Ki,ko=Wi,qo="[object AsyncFunction]",Vo="[object Function]",Jo="[object GeneratorFunction]",Go="[object Proxy]";function Ko(e){if(!ko(e))return!1;var t=Bo(e);return t==Vo||t==Jo||t==qo||t==Go}var Wo=Ko,Xo=Wr,Yo=Xo["__core-js_shared__"],Qo=Yo,jr=Qo,yi=function(){var e=/[^.]+$/.exec(jr&&jr.keys&&jr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Zo(e){return!!yi&&yi in e}var tn=Zo,en=Function.prototype,rn=en.toString;function sn(e){if(e!=null){try{return rn.call(e)}catch{}try{return e+""}catch{}}return""}var on=sn,nn=Wo,an=tn,ln=Wi,cn=on,pn=/[\\^$.*+?()[\]{}|]/g,hn=/^\[object .+?Constructor\]$/,dn=Function.prototype,gn=Object.prototype,un=dn.toString,fn=gn.hasOwnProperty,wn=RegExp("^"+un.call(fn).replace(pn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function mn(e){if(!ln(e)||an(e))return!1;var t=nn(e)?wn:hn;return t.test(cn(e))}var bn=mn;function yn(e,t){return e==null?void 0:e[t]}var vn=yn,$n=bn,_n=vn;function Pn(e,t){var r=_n(e,t);return $n(r)?r:void 0}var Xi=Pn,On=Xi,Sn=On(Object,"create"),Oe=Sn,vi=Oe;function xn(){this.__data__=vi?vi(null):{},this.size=0}var Cn=xn;function jn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var En=jn,An=Oe,Nn="__lodash_hash_undefined__",Dn=Object.prototype,Tn=Dn.hasOwnProperty;function Un(e){var t=this.__data__;if(An){var r=t[e];return r===Nn?void 0:r}return Tn.call(t,e)?t[e]:void 0}var Rn=Un,Ln=Oe,zn=Object.prototype,Hn=zn.hasOwnProperty;function Mn(e){var t=this.__data__;return Ln?t[e]!==void 0:Hn.call(t,e)}var Fn=Mn,In=Oe,Bn="__lodash_hash_undefined__";function kn(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=In&&t===void 0?Bn:t,this}var qn=kn,Vn=Cn,Jn=En,Gn=Rn,Kn=Fn,Wn=qn;function it(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}it.prototype.clear=Vn;it.prototype.delete=Jn;it.prototype.get=Gn;it.prototype.has=Kn;it.prototype.set=Wn;var Xn=it;function Yn(){this.__data__=[],this.size=0}var Qn=Yn;function Zn(e,t){return e===t||e!==e&&t!==t}var ta=Zn,ea=ta;function ra(e,t){for(var r=e.length;r--;)if(ea(e[r][0],t))return r;return-1}var Se=ra,ia=Se,sa=Array.prototype,oa=sa.splice;function na(e){var t=this.__data__,r=ia(t,e);if(r<0)return!1;var s=t.length-1;return r==s?t.pop():oa.call(t,r,1),--this.size,!0}var aa=na,la=Se;function ca(e){var t=this.__data__,r=la(t,e);return r<0?void 0:t[r][1]}var pa=ca,ha=Se;function da(e){return ha(this.__data__,e)>-1}var ga=da,ua=Se;function fa(e,t){var r=this.__data__,s=ua(r,e);return s<0?(++this.size,r.push([e,t])):r[s][1]=t,this}var wa=fa,ma=Qn,ba=aa,ya=pa,va=ga,$a=wa;function st(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}st.prototype.clear=ma;st.prototype.delete=ba;st.prototype.get=ya;st.prototype.has=va;st.prototype.set=$a;var _a=st,Pa=Xi,Oa=Wr,Sa=Pa(Oa,"Map"),xa=Sa,$i=Xn,Ca=_a,ja=xa;function Ea(){this.size=0,this.__data__={hash:new $i,map:new(ja||Ca),string:new $i}}var Aa=Ea;function Na(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Da=Na,Ta=Da;function Ua(e,t){var r=e.__data__;return Ta(t)?r[typeof t=="string"?"string":"hash"]:r.map}var xe=Ua,Ra=xe;function La(e){var t=Ra(this,e).delete(e);return this.size-=t?1:0,t}var za=La,Ha=xe;function Ma(e){return Ha(this,e).get(e)}var Fa=Ma,Ia=xe;function Ba(e){return Ia(this,e).has(e)}var ka=Ba,qa=xe;function Va(e,t){var r=qa(this,e),s=r.size;return r.set(e,t),this.size+=r.size==s?0:1,this}var Ja=Va,Ga=Aa,Ka=za,Wa=Fa,Xa=ka,Ya=Ja;function ot(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}ot.prototype.clear=Ga;ot.prototype.delete=Ka;ot.prototype.get=Wa;ot.prototype.has=Xa;ot.prototype.set=Ya;var Qa=ot,Yi=Qa,Za="Expected a function";function Qr(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Za);var r=function(){var s=arguments,i=t?t.apply(this,s):s[0],o=r.cache;if(o.has(i))return o.get(i);var n=e.apply(this,s);return r.cache=o.set(i,n)||o,n};return r.cache=new(Qr.Cache||Yi),r}Qr.Cache=Yi;var tl=Qr,el=tl,rl=500;function il(e){var t=el(e,function(s){return r.size===rl&&r.clear(),s}),r=t.cache;return t}var sl=il,ol=sl,nl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,al=/\\(\\)?/g,ll=ol(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(nl,function(r,s,i,o){t.push(i?o.replace(al,"$1"):s||r)}),t}),cl=ll;function pl(e,t){for(var r=-1,s=e==null?0:e.length,i=Array(s);++r<s;)i[r]=t(e[r],r,e);return i}var hl=pl,_i=Xr,dl=hl,gl=Kr,ul=Yr,fl=1/0,Pi=_i?_i.prototype:void 0,Oi=Pi?Pi.toString:void 0;function Qi(e){if(typeof e=="string")return e;if(gl(e))return dl(e,Qi)+"";if(ul(e))return Oi?Oi.call(e):"";var t=e+"";return t=="0"&&1/e==-fl?"-0":t}var wl=Qi,ml=wl;function bl(e){return e==null?"":ml(e)}var yl=bl,vl=Kr,$l=Fo,_l=cl,Pl=yl;function Ol(e,t){return vl(e)?e:$l(e,t)?[e]:_l(Pl(e))}var Sl=Ol,xl=Yr,Cl=1/0;function jl(e){if(typeof e=="string"||xl(e))return e;var t=e+"";return t=="0"&&1/e==-Cl?"-0":t}var El=jl,Al=Sl,Nl=El;function Dl(e,t){t=Al(t,e);for(var r=0,s=t.length;e!=null&&r<s;)e=e[Nl(t[r++])];return r&&r==s?e:void 0}var Tl=Dl,Ul=Tl;function Rl(e,t,r){var s=e==null?void 0:Ul(e,t);return s===void 0?r:s}var Ll=Rl;const S=no(Ll);function Zi(e,t){return function(){return e.apply(t,arguments)}}const{toString:zl}=Object.prototype,{getPrototypeOf:Zr}=Object,Ce=(e=>t=>{const r=zl.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),M=e=>(e=e.toLowerCase(),t=>Ce(t)===e),je=e=>t=>typeof t===e,{isArray:nt}=Array,mt=je("undefined");function Hl(e){return e!==null&&!mt(e)&&e.constructor!==null&&!mt(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ts=M("ArrayBuffer");function Ml(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ts(e.buffer),t}const Fl=je("string"),R=je("function"),es=je("number"),Ee=e=>e!==null&&typeof e=="object",Il=e=>e===!0||e===!1,we=e=>{if(Ce(e)!=="object")return!1;const t=Zr(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Bl=M("Date"),kl=M("File"),ql=M("Blob"),Vl=M("FileList"),Jl=e=>Ee(e)&&R(e.pipe),Gl=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=Ce(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Kl=M("URLSearchParams"),Wl=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function he(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let s,i;if(typeof e!="object"&&(e=[e]),nt(e))for(s=0,i=e.length;s<i;s++)t.call(null,e[s],s,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),n=o.length;let p;for(s=0;s<n;s++)p=o[s],t.call(null,e[p],p,e)}}function rs(e,t){t=t.toLowerCase();const r=Object.keys(e);let s=r.length,i;for(;s-- >0;)if(i=r[s],t===i.toLowerCase())return i;return null}const is=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ss=e=>!mt(e)&&e!==is;function Ur(){const{caseless:e}=ss(this)&&this||{},t={},r=(s,i)=>{const o=e&&rs(t,i)||i;we(t[o])&&we(s)?t[o]=Ur(t[o],s):we(s)?t[o]=Ur({},s):nt(s)?t[o]=s.slice():t[o]=s};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&he(arguments[s],r);return t}const Xl=(e,t,r,{allOwnKeys:s}={})=>(he(t,(i,o)=>{r&&R(i)?e[o]=Zi(i,r):e[o]=i},{allOwnKeys:s}),e),Yl=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ql=(e,t,r,s)=>{e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Zl=(e,t,r,s)=>{let i,o,n;const p={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)n=i[o],(!s||s(n,e,t))&&!p[n]&&(t[n]=e[n],p[n]=!0);e=r!==!1&&Zr(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},tc=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const s=e.indexOf(t,r);return s!==-1&&s===r},ec=e=>{if(!e)return null;if(nt(e))return e;let t=e.length;if(!es(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},rc=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Zr(Uint8Array)),ic=(e,t)=>{const s=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=s.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},sc=(e,t)=>{let r;const s=[];for(;(r=e.exec(t))!==null;)s.push(r);return s},oc=M("HTMLFormElement"),nc=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,i){return s.toUpperCase()+i}),Si=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),ac=M("RegExp"),os=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),s={};he(r,(i,o)=>{let n;(n=t(i,o,e))!==!1&&(s[o]=n||i)}),Object.defineProperties(e,s)},lc=e=>{os(e,(t,r)=>{if(R(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const s=e[r];if(R(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},cc=(e,t)=>{const r={},s=i=>{i.forEach(o=>{r[o]=!0})};return nt(e)?s(e):s(String(e).split(t)),r},pc=()=>{},hc=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Er="abcdefghijklmnopqrstuvwxyz",xi="0123456789",ns={DIGIT:xi,ALPHA:Er,ALPHA_DIGIT:Er+Er.toUpperCase()+xi},dc=(e=16,t=ns.ALPHA_DIGIT)=>{let r="";const{length:s}=t;for(;e--;)r+=t[Math.random()*s|0];return r};function gc(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const uc=e=>{const t=new Array(10),r=(s,i)=>{if(Ee(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[i]=s;const o=nt(s)?[]:{};return he(s,(n,p)=>{const d=r(n,i+1);!mt(d)&&(o[p]=d)}),t[i]=void 0,o}}return s};return r(e,0)},fc=M("AsyncFunction"),wc=e=>e&&(Ee(e)||R(e))&&R(e.then)&&R(e.catch),c={isArray:nt,isArrayBuffer:ts,isBuffer:Hl,isFormData:Gl,isArrayBufferView:Ml,isString:Fl,isNumber:es,isBoolean:Il,isObject:Ee,isPlainObject:we,isUndefined:mt,isDate:Bl,isFile:kl,isBlob:ql,isRegExp:ac,isFunction:R,isStream:Jl,isURLSearchParams:Kl,isTypedArray:rc,isFileList:Vl,forEach:he,merge:Ur,extend:Xl,trim:Wl,stripBOM:Yl,inherits:Ql,toFlatObject:Zl,kindOf:Ce,kindOfTest:M,endsWith:tc,toArray:ec,forEachEntry:ic,matchAll:sc,isHTMLForm:oc,hasOwnProperty:Si,hasOwnProp:Si,reduceDescriptors:os,freezeMethods:lc,toObjectSet:cc,toCamelCase:nc,noop:pc,toFiniteNumber:hc,findKey:rs,global:is,isContextDefined:ss,ALPHABET:ns,generateString:dc,isSpecCompliantForm:gc,toJSONObject:uc,isAsyncFn:fc,isThenable:wc};function P(e,t,r,s,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),s&&(this.request=s),i&&(this.response=i)}c.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const as=P.prototype,ls={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ls[e]={value:e}});Object.defineProperties(P,ls);Object.defineProperty(as,"isAxiosError",{value:!0});P.from=(e,t,r,s,i,o)=>{const n=Object.create(as);return c.toFlatObject(e,n,function(d){return d!==Error.prototype},p=>p!=="isAxiosError"),P.call(n,e.message,t,r,s,i),n.cause=e,n.name=e.name,o&&Object.assign(n,o),n};const mc=null;function Rr(e){return c.isPlainObject(e)||c.isArray(e)}function cs(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function Ci(e,t,r){return e?e.concat(t).map(function(i,o){return i=cs(i),!r&&o?"["+i+"]":i}).join(r?".":""):t}function bc(e){return c.isArray(e)&&!e.some(Rr)}const yc=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function Ae(e,t,r){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=c.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,D){return!c.isUndefined(D[_])});const s=r.metaTokens,i=r.visitor||h,o=r.dots,n=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(i))throw new TypeError("visitor must be a function");function w(f){if(f===null)return"";if(c.isDate(f))return f.toISOString();if(!d&&c.isBlob(f))throw new P("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(f)||c.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function h(f,_,D){let I=f;if(f&&!D&&typeof f=="object"){if(c.endsWith(_,"{}"))_=s?_:_.slice(0,-2),f=JSON.stringify(f);else if(c.isArray(f)&&bc(f)||(c.isFileList(f)||c.endsWith(_,"[]"))&&(I=c.toArray(f)))return _=cs(_),I.forEach(function(ge,js){!(c.isUndefined(ge)||ge===null)&&t.append(n===!0?Ci([_],js,o):n===null?_:_+"[]",w(ge))}),!1}return Rr(f)?!0:(t.append(Ci(D,_,o),w(f)),!1)}const u=[],O=Object.assign(yc,{defaultVisitor:h,convertValue:w,isVisitable:Rr});function x(f,_){if(!c.isUndefined(f)){if(u.indexOf(f)!==-1)throw Error("Circular reference detected in "+_.join("."));u.push(f),c.forEach(f,function(I,z){(!(c.isUndefined(I)||I===null)&&i.call(t,I,c.isString(z)?z.trim():z,_,O))===!0&&x(I,_?_.concat(z):[z])}),u.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return x(e),t}function ji(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function ti(e,t){this._pairs=[],e&&Ae(e,this,t)}const ps=ti.prototype;ps.append=function(t,r){this._pairs.push([t,r])};ps.toString=function(t){const r=t?function(s){return t.call(this,s,ji)}:ji;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function vc(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function hs(e,t,r){if(!t)return e;const s=r&&r.encode||vc,i=r&&r.serialize;let o;if(i?o=i(t,r):o=c.isURLSearchParams(t)?t.toString():new ti(t,r).toString(s),o){const n=e.indexOf("#");n!==-1&&(e=e.slice(0,n)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class $c{constructor(){this.handlers=[]}use(t,r,s){return this.handlers.push({fulfilled:t,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(s){s!==null&&t(s)})}}const Ei=$c,ds={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_c=typeof URLSearchParams<"u"?URLSearchParams:ti,Pc=typeof FormData<"u"?FormData:null,Oc=typeof Blob<"u"?Blob:null,Sc={isBrowser:!0,classes:{URLSearchParams:_c,FormData:Pc,Blob:Oc},protocols:["http","https","file","blob","url","data"]},gs=typeof window<"u"&&typeof document<"u",xc=(e=>gs&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Cc=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),jc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gs,hasStandardBrowserEnv:xc,hasStandardBrowserWebWorkerEnv:Cc},Symbol.toStringTag,{value:"Module"})),H={...jc,...Sc};function Ec(e,t){return Ae(e,new H.classes.URLSearchParams,Object.assign({visitor:function(r,s,i,o){return H.isNode&&c.isBuffer(r)?(this.append(s,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ac(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Nc(e){const t={},r=Object.keys(e);let s;const i=r.length;let o;for(s=0;s<i;s++)o=r[s],t[o]=e[o];return t}function us(e){function t(r,s,i,o){let n=r[o++];const p=Number.isFinite(+n),d=o>=r.length;return n=!n&&c.isArray(i)?i.length:n,d?(c.hasOwnProp(i,n)?i[n]=[i[n],s]:i[n]=s,!p):((!i[n]||!c.isObject(i[n]))&&(i[n]=[]),t(r,s,i[n],o)&&c.isArray(i[n])&&(i[n]=Nc(i[n])),!p)}if(c.isFormData(e)&&c.isFunction(e.entries)){const r={};return c.forEachEntry(e,(s,i)=>{t(Ac(s),i,r,0)}),r}return null}function Dc(e,t,r){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(e)}const ei={transitional:ds,adapter:["xhr","http"],transformRequest:[function(t,r){const s=r.getContentType()||"",i=s.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return i&&i?JSON.stringify(us(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let p;if(o){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Ec(t,this.formSerializer).toString();if((p=c.isFileList(t))||s.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Ae(p?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),Dc(t)):t}],transformResponse:[function(t){const r=this.transitional||ei.transitional,s=r&&r.forcedJSONParsing,i=this.responseType==="json";if(t&&c.isString(t)&&(s&&!this.responseType||i)){const n=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(p){if(n)throw p.name==="SyntaxError"?P.from(p,P.ERR_BAD_RESPONSE,this,null,this.response):p}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:H.classes.FormData,Blob:H.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch"],e=>{ei.headers[e]={}});const ri=ei,Tc=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Uc=e=>{const t={};let r,s,i;return e&&e.split(`
`).forEach(function(n){i=n.indexOf(":"),r=n.substring(0,i).trim().toLowerCase(),s=n.substring(i+1).trim(),!(!r||t[r]&&Tc[r])&&(r==="set-cookie"?t[r]?t[r].push(s):t[r]=[s]:t[r]=t[r]?t[r]+", "+s:s)}),t},Ai=Symbol("internals");function pt(e){return e&&String(e).trim().toLowerCase()}function me(e){return e===!1||e==null?e:c.isArray(e)?e.map(me):String(e)}function Rc(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(e);)t[s[1]]=s[2];return t}const Lc=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ar(e,t,r,s,i){if(c.isFunction(s))return s.call(this,t,r);if(i&&(t=r),!!c.isString(t)){if(c.isString(s))return t.indexOf(s)!==-1;if(c.isRegExp(s))return s.test(t)}}function zc(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,s)=>r.toUpperCase()+s)}function Hc(e,t){const r=c.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+r,{value:function(i,o,n){return this[s].call(this,t,i,o,n)},configurable:!0})})}class Ne{constructor(t){t&&this.set(t)}set(t,r,s){const i=this;function o(p,d,w){const h=pt(d);if(!h)throw new Error("header name must be a non-empty string");const u=c.findKey(i,h);(!u||i[u]===void 0||w===!0||w===void 0&&i[u]!==!1)&&(i[u||d]=me(p))}const n=(p,d)=>c.forEach(p,(w,h)=>o(w,h,d));return c.isPlainObject(t)||t instanceof this.constructor?n(t,r):c.isString(t)&&(t=t.trim())&&!Lc(t)?n(Uc(t),r):t!=null&&o(r,t,s),this}get(t,r){if(t=pt(t),t){const s=c.findKey(this,t);if(s){const i=this[s];if(!r)return i;if(r===!0)return Rc(i);if(c.isFunction(r))return r.call(this,i,s);if(c.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=pt(t),t){const s=c.findKey(this,t);return!!(s&&this[s]!==void 0&&(!r||Ar(this,this[s],s,r)))}return!1}delete(t,r){const s=this;let i=!1;function o(n){if(n=pt(n),n){const p=c.findKey(s,n);p&&(!r||Ar(s,s[p],p,r))&&(delete s[p],i=!0)}}return c.isArray(t)?t.forEach(o):o(t),i}clear(t){const r=Object.keys(this);let s=r.length,i=!1;for(;s--;){const o=r[s];(!t||Ar(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const r=this,s={};return c.forEach(this,(i,o)=>{const n=c.findKey(s,o);if(n){r[n]=me(i),delete r[o];return}const p=t?zc(o):String(o).trim();p!==o&&delete r[o],r[p]=me(i),s[p]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return c.forEach(this,(s,i)=>{s!=null&&s!==!1&&(r[i]=t&&c.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const s=new this(t);return r.forEach(i=>s.set(i)),s}static accessor(t){const s=(this[Ai]=this[Ai]={accessors:{}}).accessors,i=this.prototype;function o(n){const p=pt(n);s[p]||(Hc(i,n),s[p]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}}Ne.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(Ne.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){this[r]=s}}});c.freezeMethods(Ne);const B=Ne;function Nr(e,t){const r=this||ri,s=t||r,i=B.from(s.headers);let o=s.data;return c.forEach(e,function(p){o=p.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function fs(e){return!!(e&&e.__CANCEL__)}function de(e,t,r){P.call(this,e??"canceled",P.ERR_CANCELED,t,r),this.name="CanceledError"}c.inherits(de,P,{__CANCEL__:!0});function Mc(e,t,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):t(new P("Request failed with status code "+r.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Fc=H.hasStandardBrowserEnv?function(){return{write:function(r,s,i,o,n,p){const d=[];d.push(r+"="+encodeURIComponent(s)),c.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),c.isString(o)&&d.push("path="+o),c.isString(n)&&d.push("domain="+n),p===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){const s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ic(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Bc(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ws(e,t){return e&&!Ic(t)?Bc(e,t):t}const kc=H.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let s;function i(o){let n=o;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=i(window.location.href),function(n){const p=c.isString(n)?i(n):n;return p.protocol===s.protocol&&p.host===s.host}}():function(){return function(){return!0}}();function qc(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Vc(e,t){e=e||10;const r=new Array(e),s=new Array(e);let i=0,o=0,n;return t=t!==void 0?t:1e3,function(d){const w=Date.now(),h=s[o];n||(n=w),r[i]=d,s[i]=w;let u=o,O=0;for(;u!==i;)O+=r[u++],u=u%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),w-n<t)return;const x=h&&w-h;return x?Math.round(O*1e3/x):void 0}}function Ni(e,t){let r=0;const s=Vc(50,250);return i=>{const o=i.loaded,n=i.lengthComputable?i.total:void 0,p=o-r,d=s(p),w=o<=n;r=o;const h={loaded:o,total:n,progress:n?o/n:void 0,bytes:p,rate:d||void 0,estimated:d&&n&&w?(n-o)/d:void 0,event:i};h[t?"download":"upload"]=!0,e(h)}}const Jc=typeof XMLHttpRequest<"u",Gc=Jc&&function(e){return new Promise(function(r,s){let i=e.data;const o=B.from(e.headers).normalize(),n=e.responseType;let p;function d(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let w;if(c.isFormData(i)){if(H.hasStandardBrowserEnv||H.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((w=o.getContentType())!==!1){const[f,..._]=w?w.split(";").map(D=>D.trim()).filter(Boolean):[];o.setContentType([f||"multipart/form-data",..._].join("; "))}}let h=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(f+":"+_))}const u=ws(e.baseURL,e.url);h.open(e.method.toUpperCase(),hs(u,e.params,e.paramsSerializer),!0),h.timeout=e.timeout;function O(){if(!h)return;const f=B.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),D={data:!n||n==="text"||n==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:f,config:e,request:h};Mc(function(z){r(z),d()},function(z){s(z),d()},D),h=null}if("onloadend"in h?h.onloadend=O:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(O)},h.onabort=function(){h&&(s(new P("Request aborted",P.ECONNABORTED,e,h)),h=null)},h.onerror=function(){s(new P("Network Error",P.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let _=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const D=e.transitional||ds;e.timeoutErrorMessage&&(_=e.timeoutErrorMessage),s(new P(_,D.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,e,h)),h=null},H.hasStandardBrowserEnv){const f=kc(u)&&e.xsrfCookieName&&Fc.read(e.xsrfCookieName);f&&o.set(e.xsrfHeaderName,f)}i===void 0&&o.setContentType(null),"setRequestHeader"in h&&c.forEach(o.toJSON(),function(_,D){h.setRequestHeader(D,_)}),c.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),n&&n!=="json"&&(h.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&h.addEventListener("progress",Ni(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",Ni(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=f=>{h&&(s(!f||f.type?new de(null,e,h):f),h.abort(),h=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const x=qc(u);if(x&&H.protocols.indexOf(x)===-1){s(new P("Unsupported protocol "+x+":",P.ERR_BAD_REQUEST,e));return}h.send(i||null)})},Lr={http:mc,xhr:Gc};c.forEach(Lr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Di=e=>`- ${e}`,Kc=e=>c.isFunction(e)||e===null||e===!1,ms={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let r,s;const i={};for(let o=0;o<t;o++){r=e[o];let n;if(s=r,!Kc(r)&&(s=Lr[(n=String(r)).toLowerCase()],s===void 0))throw new P(`Unknown adapter '${n}'`);if(s)break;i[n||"#"+o]=s}if(!s){const o=Object.entries(i).map(([p,d])=>`adapter ${p} `+(d===!1?"is not supported by the environment":"is not available in the build"));let n=t?o.length>1?`since :
`+o.map(Di).join(`
`):" "+Di(o[0]):"as no adapter specified";throw new P("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return s},adapters:Lr};function Dr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new de(null,e)}function Ti(e){return Dr(e),e.headers=B.from(e.headers),e.data=Nr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ms.getAdapter(e.adapter||ri.adapter)(e).then(function(s){return Dr(e),s.data=Nr.call(e,e.transformResponse,s),s.headers=B.from(s.headers),s},function(s){return fs(s)||(Dr(e),s&&s.response&&(s.response.data=Nr.call(e,e.transformResponse,s.response),s.response.headers=B.from(s.response.headers))),Promise.reject(s)})}const Ui=e=>e instanceof B?e.toJSON():e;function rt(e,t){t=t||{};const r={};function s(w,h,u){return c.isPlainObject(w)&&c.isPlainObject(h)?c.merge.call({caseless:u},w,h):c.isPlainObject(h)?c.merge({},h):c.isArray(h)?h.slice():h}function i(w,h,u){if(c.isUndefined(h)){if(!c.isUndefined(w))return s(void 0,w,u)}else return s(w,h,u)}function o(w,h){if(!c.isUndefined(h))return s(void 0,h)}function n(w,h){if(c.isUndefined(h)){if(!c.isUndefined(w))return s(void 0,w)}else return s(void 0,h)}function p(w,h,u){if(u in t)return s(w,h);if(u in e)return s(void 0,w)}const d={url:o,method:o,data:o,baseURL:n,transformRequest:n,transformResponse:n,paramsSerializer:n,timeout:n,timeoutMessage:n,withCredentials:n,adapter:n,responseType:n,xsrfCookieName:n,xsrfHeaderName:n,onUploadProgress:n,onDownloadProgress:n,decompress:n,maxContentLength:n,maxBodyLength:n,beforeRedirect:n,transport:n,httpAgent:n,httpsAgent:n,cancelToken:n,socketPath:n,responseEncoding:n,validateStatus:p,headers:(w,h)=>i(Ui(w),Ui(h),!0)};return c.forEach(Object.keys(Object.assign({},e,t)),function(h){const u=d[h]||i,O=u(e[h],t[h],h);c.isUndefined(O)&&u!==p||(r[h]=O)}),r}const bs="1.6.1",ii={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ii[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});const Ri={};ii.transitional=function(t,r,s){function i(o,n){return"[Axios v"+bs+"] Transitional option '"+o+"'"+n+(s?". "+s:"")}return(o,n,p)=>{if(t===!1)throw new P(i(n," has been removed"+(r?" in "+r:"")),P.ERR_DEPRECATED);return r&&!Ri[n]&&(Ri[n]=!0,console.warn(i(n," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,n,p):!0}};function Wc(e,t,r){if(typeof e!="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let i=s.length;for(;i-- >0;){const o=s[i],n=t[o];if(n){const p=e[o],d=p===void 0||n(p,o,e);if(d!==!0)throw new P("option "+o+" must be "+d,P.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new P("Unknown option "+o,P.ERR_BAD_OPTION)}}const zr={assertOptions:Wc,validators:ii},k=zr.validators;class $e{constructor(t){this.defaults=t,this.interceptors={request:new Ei,response:new Ei}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=rt(this.defaults,r);const{transitional:s,paramsSerializer:i,headers:o}=r;s!==void 0&&zr.assertOptions(s,{silentJSONParsing:k.transitional(k.boolean),forcedJSONParsing:k.transitional(k.boolean),clarifyTimeoutError:k.transitional(k.boolean)},!1),i!=null&&(c.isFunction(i)?r.paramsSerializer={serialize:i}:zr.assertOptions(i,{encode:k.function,serialize:k.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let n=o&&c.merge(o.common,o[r.method]);o&&c.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),r.headers=B.concat(n,o);const p=[];let d=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(r)===!1||(d=d&&_.synchronous,p.unshift(_.fulfilled,_.rejected))});const w=[];this.interceptors.response.forEach(function(_){w.push(_.fulfilled,_.rejected)});let h,u=0,O;if(!d){const f=[Ti.bind(this),void 0];for(f.unshift.apply(f,p),f.push.apply(f,w),O=f.length,h=Promise.resolve(r);u<O;)h=h.then(f[u++],f[u++]);return h}O=p.length;let x=r;for(u=0;u<O;){const f=p[u++],_=p[u++];try{x=f(x)}catch(D){_.call(this,D);break}}try{h=Ti.call(this,x)}catch(f){return Promise.reject(f)}for(u=0,O=w.length;u<O;)h=h.then(w[u++],w[u++]);return h}getUri(t){t=rt(this.defaults,t);const r=ws(t.baseURL,t.url);return hs(r,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){$e.prototype[t]=function(r,s){return this.request(rt(s||{},{method:t,url:r,data:(s||{}).data}))}});c.forEach(["post","put","patch"],function(t){function r(s){return function(o,n,p){return this.request(rt(p||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:o,data:n}))}}$e.prototype[t]=r(),$e.prototype[t+"Form"]=r(!0)});const be=$e;class si{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const s=this;this.promise.then(i=>{if(!s._listeners)return;let o=s._listeners.length;for(;o-- >0;)s._listeners[o](i);s._listeners=null}),this.promise.then=i=>{let o;const n=new Promise(p=>{s.subscribe(p),o=p}).then(i);return n.cancel=function(){s.unsubscribe(o)},n},t(function(o,n,p){s.reason||(s.reason=new de(o,n,p),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new si(function(i){t=i}),cancel:t}}}const Xc=si;function Yc(e){return function(r){return e.apply(null,r)}}function Qc(e){return c.isObject(e)&&e.isAxiosError===!0}const Hr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hr).forEach(([e,t])=>{Hr[t]=e});const Zc=Hr;function ys(e){const t=new be(e),r=Zi(be.prototype.request,t);return c.extend(r,be.prototype,t,{allOwnKeys:!0}),c.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return ys(rt(e,i))},r}const C=ys(ri);C.Axios=be;C.CanceledError=de;C.CancelToken=Xc;C.isCancel=fs;C.VERSION=bs;C.toFormData=Ae;C.AxiosError=P;C.Cancel=C.CanceledError;C.all=function(t){return Promise.all(t)};C.spread=Yc;C.isAxiosError=Qc;C.mergeConfig=rt;C.AxiosHeaders=B;C.formToJSON=e=>us(c.isHTMLForm(e)?new FormData(e):e);C.getAdapter=ms.getAdapter;C.HttpStatusCode=Zc;C.default=C;const tp=C,ep="https://graphsearch.epfl.ch/api",y=tp.create({baseURL:ep}),at=({id:e,fields:t},{signal:r})=>y.get(`/concepts/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),rp=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/concepts/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),ip=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/concepts/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),sp=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/concepts/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),op=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/concepts/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),np=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/concepts/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),ap=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/concepts/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),L=({locale:e})=>["_id","_url",`_description_large.${e}.value`,`name.${e}.value`].toString(),A=({locale:e})=>["_id","_url","course_code",`name.${e}.value`,`summary.${e}.value`].toString(),N=({locale:e})=>["_id","_url","video"].toString(),j=({locale:e})=>["_id","_url","name_display",`biography.${e}`].toString(),T=({locale:e})=>["_id","_url","title",`type.${e}`,"publisher","published_in","year","abstract"].toString(),U=({locale:e})=>["_id","_url",`name.${e}.value`,"path"].toString(),lp=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root,[data-theme]{background-color:hsl(var(--b1) / var(--tw-bg-opacity, 1));color:hsl(var(--bc) / var(--tw-text-opacity, 1))}html{-webkit-tap-highlight-color:transparent}:root{--p: 0 100% 50%;--pf: 0 100% 43%;--sf: 177 100% 26%;--af: 0 100% 43%;--nf: 0 0% 6%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--pc: 17 100% 90%;--sc: 173 38% 89%;--ac: 17 100% 90%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 17 100% 90%;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 177 100% 33%;--a: 0 100% 50%;--n: 0 0% 13%;--nc: 0 0% 100%;--er: 0 100% 50%;--b1: 0 0% 100%;--b2: 0 0% 90%;--b3: 0 0% 84%;--bc: 0 0% 13%;--rounded-box: .25rem;--rounded-btn: .125rem;--btn-text-case: none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.breadcrumbs{max-width:100%;overflow-x:auto;padding-top:.5rem;padding-bottom:.5rem}.breadcrumbs>ul,.breadcrumbs>ol{display:flex;align-items:center;white-space:nowrap;min-height:min-content}.breadcrumbs>ul>li,.breadcrumbs>ol>li{display:flex;align-items:center}.breadcrumbs>ul>li>a,.breadcrumbs>ol>li>a{display:flex;cursor:pointer;align-items:center}@media (hover:hover){.breadcrumbs>ul>li>a:hover,.breadcrumbs>ol>li>a:hover{text-decoration-line:underline}}.btn{display:inline-flex;flex-shrink:0;cursor:pointer;-webkit-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-color:transparent;border-color:hsl(var(--b2) / var(--tw-border-opacity));text-align:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.2s;border-radius:var(--rounded-btn, .5rem);height:3rem;padding-left:1rem;padding-right:1rem;min-height:3rem;font-size:.875rem;line-height:1em;gap:.5rem;font-weight:600;text-decoration-line:none;border-width:var(--border-btn, 1px);animation:button-pop var(--animation-btn, .25s) ease-out;text-transform:var(--btn-text-case, uppercase);--tw-border-opacity: 1;--tw-bg-opacity: 1;background-color:hsl(var(--b2) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--bc) / var(--tw-text-opacity));outline-color:hsl(var(--bc) / 1)}.btn-disabled,.btn[disabled],.btn:disabled{pointer-events:none}.btn-group>input[type=radio].btn{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-group>input[type=radio].btn:before{content:attr(data-title)}.btn:is(input[type=checkbox]),.btn:is(input[type=radio]){width:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn:is(input[type=checkbox]):after,.btn:is(input[type=radio]):after{--tw-content: attr(aria-label);content:var(--tw-content)}@media (hover: hover){.btn:hover{--tw-border-opacity: 1;border-color:hsl(var(--b3) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--b3) / var(--tw-bg-opacity))}.btn-primary:hover{--tw-border-opacity: 1;border-color:hsl(var(--pf) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf) / var(--tw-bg-opacity))}.btn.glass:hover{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn-outline:hover{--tw-border-opacity: 1;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--b1) / var(--tw-text-opacity))}.btn-outline.btn-primary:hover{--tw-border-opacity: 1;border-color:hsl(var(--pf) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-outline.btn-secondary:hover{--tw-border-opacity: 1;border-color:hsl(var(--sf) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--sf) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--sc) / var(--tw-text-opacity))}.btn-outline.btn-accent:hover{--tw-border-opacity: 1;border-color:hsl(var(--af) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--af) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--ac) / var(--tw-text-opacity))}.btn-outline.btn-success:hover{--tw-border-opacity: 1;border-color:hsl(var(--su) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--su) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--suc) / var(--tw-text-opacity))}.btn-outline.btn-info:hover{--tw-border-opacity: 1;border-color:hsl(var(--in) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--in) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--inc) / var(--tw-text-opacity))}.btn-outline.btn-warning:hover{--tw-border-opacity: 1;border-color:hsl(var(--wa) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--wa) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--wac) / var(--tw-text-opacity))}.btn-outline.btn-error:hover{--tw-border-opacity: 1;border-color:hsl(var(--er) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--er) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--erc) / var(--tw-text-opacity))}.btn-disabled:hover,.btn[disabled]:hover,.btn:disabled:hover{--tw-border-opacity: 0;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-bg-opacity: .2;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity: .2}.btn:is(input[type=checkbox]:checked):hover,.btn:is(input[type=radio]:checked):hover{--tw-border-opacity: 1;border-color:hsl(var(--pf) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf) / var(--tw-bg-opacity))}}.footer{display:grid;width:100%;grid-auto-flow:row;place-items:start;column-gap:1rem;row-gap:2.5rem;font-size:.875rem;line-height:1.25rem}.footer>*{display:grid;place-items:start;gap:.5rem}@media (min-width: 48rem){.footer{grid-auto-flow:column}.footer-center{grid-auto-flow:row dense}}.join{display:inline-flex;align-items:stretch;border-radius:var(--rounded-btn, .5rem)}.join :where(.join-item){border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:0;border-start-start-radius:0}.join .join-item:not(:first-child):not(:last-child),.join *:not(:first-child):not(:last-child) .join-item{border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:0;border-start-start-radius:0}.join .join-item:first-child:not(:last-child),.join *:first-child:not(:last-child) .join-item{border-start-end-radius:0;border-end-end-radius:0}.join .dropdown .join-item:first-child:not(:last-child),.join *:first-child:not(:last-child) .dropdown .join-item{border-start-end-radius:inherit;border-end-end-radius:inherit}.join :where(.join-item:first-child:not(:last-child)),.join :where(*:first-child:not(:last-child) .join-item){border-end-start-radius:inherit;border-start-start-radius:inherit}.join .join-item:last-child:not(:first-child),.join *:last-child:not(:first-child) .join-item{border-end-start-radius:0;border-start-start-radius:0}.join :where(.join-item:last-child:not(:first-child)),.join :where(*:last-child:not(:first-child) .join-item){border-start-end-radius:inherit;border-end-end-radius:inherit}@supports not selector(:has(*)){:where(.join *){border-radius:inherit}}@supports selector(:has(*)){:where(.join *:has(.join-item)){border-radius:inherit}}.link{cursor:pointer;text-decoration-line:underline}.breadcrumbs>ul>li>a:focus,.breadcrumbs>ol>li>a:focus{outline:2px solid transparent;outline-offset:2px}.breadcrumbs>ul>li>a:focus-visible,.breadcrumbs>ol>li>a:focus-visible{outline:2px solid currentColor;outline-offset:2px}.breadcrumbs>ul>li+*:before,.breadcrumbs>ol>li+*:before{content:"";margin-left:.5rem;margin-right:.75rem;display:block;height:.375rem;width:.375rem;--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:.4;border-top:1px solid;border-right:1px solid;background-color:transparent}[dir=rtl] .breadcrumbs>ul>li+*:before,[dir=rtl] .breadcrumbs>ol>li+*:before{--tw-rotate: -45deg}.btn:active:hover,.btn:active:focus{animation:button-pop 0s ease-out;transform:scale(var(--btn-focus-scale, .97))}.btn:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px}.btn-primary{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity));outline-color:hsl(var(--p) / 1)}.btn-primary.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--pf) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf) / var(--tw-bg-opacity))}.btn.glass{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-color:currentColor}.btn.glass.btn-active{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn-outline{border-color:currentColor;background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn-outline.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--b1) / var(--tw-text-opacity))}.btn-outline.btn-primary{--tw-text-opacity: 1;color:hsl(var(--p) / var(--tw-text-opacity))}.btn-outline.btn-primary.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--pf) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-outline.btn-secondary{--tw-text-opacity: 1;color:hsl(var(--s) / var(--tw-text-opacity))}.btn-outline.btn-secondary.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--sf) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--sf) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--sc) / var(--tw-text-opacity))}.btn-outline.btn-accent{--tw-text-opacity: 1;color:hsl(var(--a) / var(--tw-text-opacity))}.btn-outline.btn-accent.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--af) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--af) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--ac) / var(--tw-text-opacity))}.btn-outline.btn-success{--tw-text-opacity: 1;color:hsl(var(--su) / var(--tw-text-opacity))}.btn-outline.btn-success.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--su) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--su) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--suc) / var(--tw-text-opacity))}.btn-outline.btn-info{--tw-text-opacity: 1;color:hsl(var(--in) / var(--tw-text-opacity))}.btn-outline.btn-info.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--in) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--in) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--inc) / var(--tw-text-opacity))}.btn-outline.btn-warning{--tw-text-opacity: 1;color:hsl(var(--wa) / var(--tw-text-opacity))}.btn-outline.btn-warning.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--wa) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--wa) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--wac) / var(--tw-text-opacity))}.btn-outline.btn-error{--tw-text-opacity: 1;color:hsl(var(--er) / var(--tw-text-opacity))}.btn-outline.btn-error.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--er) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--er) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--erc) / var(--tw-text-opacity))}.btn.btn-disabled,.btn[disabled],.btn:disabled{--tw-border-opacity: 0;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-bg-opacity: .2;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity: .2}.btn-group>input[type=radio]:checked.btn,.btn-group>.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-group>input[type=radio]:checked.btn:focus-visible,.btn-group>.btn-active:focus-visible{outline-style:solid;outline-width:2px;outline-color:hsl(var(--p) / 1)}.btn:is(input[type=checkbox]:checked),.btn:is(input[type=radio]:checked){--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn:is(input[type=checkbox]:checked):focus-visible,.btn:is(input[type=radio]:checked):focus-visible{outline-color:hsl(var(--p) / 1)}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .98))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}.join>:where(*:not(:first-child)){margin-top:0;margin-bottom:0;margin-left:-1px}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.btn-xs{height:1.5rem;padding-left:.5rem;padding-right:.5rem;min-height:1.5rem;font-size:.75rem}.btn-square:where(.btn-xs){height:1.5rem;width:1.5rem;padding:0}.btn-circle:where(.btn-xs){height:1.5rem;width:1.5rem;border-radius:9999px;padding:0}.join.join-vertical{flex-direction:column}.join.join-vertical .join-item:first-child:not(:last-child),.join.join-vertical *:first-child:not(:last-child) .join-item{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:inherit;border-top-right-radius:inherit}.join.join-vertical .join-item:last-child:not(:first-child),.join.join-vertical *:last-child:not(:first-child) .join-item{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.join.join-horizontal{flex-direction:row}.join.join-horizontal .join-item:first-child:not(:last-child),.join.join-horizontal *:first-child:not(:last-child) .join-item{border-bottom-right-radius:0;border-top-right-radius:0;border-bottom-left-radius:inherit;border-top-left-radius:inherit}.join.join-horizontal .join-item:last-child:not(:first-child),.join.join-horizontal *:last-child:not(:first-child) .join-item{border-bottom-left-radius:0;border-top-left-radius:0;border-bottom-right-radius:inherit;border-top-right-radius:inherit}.btn-group .btn:not(:first-child):not(:last-child){border-radius:0}.btn-group .btn:first-child:not(:last-child){margin-left:-1px;margin-top:-0px;border-top-left-radius:var(--rounded-btn, .5rem);border-top-right-radius:0;border-bottom-left-radius:var(--rounded-btn, .5rem);border-bottom-right-radius:0}.btn-group .btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:var(--rounded-btn, .5rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--rounded-btn, .5rem)}.btn-group-horizontal .btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-horizontal .btn:first-child:not(:last-child){margin-left:-1px;margin-top:-0px;border-top-left-radius:var(--rounded-btn, .5rem);border-top-right-radius:0;border-bottom-left-radius:var(--rounded-btn, .5rem);border-bottom-right-radius:0}.btn-group-horizontal .btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:var(--rounded-btn, .5rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--rounded-btn, .5rem)}.btn-group-vertical .btn:first-child:not(:last-child){margin-left:-0px;margin-top:-1px;border-top-left-radius:var(--rounded-btn, .5rem);border-top-right-radius:var(--rounded-btn, .5rem);border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical .btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:var(--rounded-btn, .5rem);border-bottom-right-radius:var(--rounded-btn, .5rem)}.join.join-vertical>:where(*:not(:first-child)){margin-left:0;margin-right:0;margin-top:-1px}.join.join-horizontal>:where(*:not(:first-child)){margin-top:0;margin-bottom:0;margin-left:-1px}.static{position:static}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.inline{display:inline}.flex{display:flex}.flex-col{flex-direction:column}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-6{gap:1.5rem}.self-start{align-self:flex-start}.py-0{padding-top:0;padding-bottom:0}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-300{--tw-text-opacity: 1;color:rgb(193 193 193 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(112 112 112 / var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}
`,cp=`:host{--p: 0 100% 50%;--pf: 0 100% 43%;--sf: 177 100% 26%;--af: 0 100% 43%;--nf: 0 0% 6%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--pc: 17 100% 90%;--sc: 173 38% 89%;--ac: 17 100% 90%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 17 100% 90%;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 177 100% 33%;--a: 0 100% 50%;--n: 0 0% 13%;--nc: 0 0% 100%;--er: 0 100% 50%;--b1: 0 0% 100%;--b2: 0 0% 90%;--b3: 0 0% 84%;--bc: 0 0% 13%;--rounded-box: .25rem;--rounded-btn: .125rem;--btn-text-case: none}:host,[data-theme]{background-color:hsl(var(--b1) / var(--tw-bg-opacity, 1));color:hsl(var(--bc) / var(--tw-text-opacity, 1))}:host{-webkit-tap-highlight-color:transparent;line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}
`;var pp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,dp=(e,t,r,s)=>{for(var i=s>1?void 0:s?hp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&pp(t,r,i),i};class m extends gt{constructor(){super(...arguments),this.locale="en"}}m.styles=[Tr(cp),Tr(lp)];dp([l({type:String})],m.prototype,"locale",2);var gp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,vs=(e,t,r,s)=>{for(var i=s>1?void 0:s?up(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&gp(t,r,i),i};let Mr=class extends m{constructor(){super(...arguments),this.concept={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.concept._url} class="link font-medium self-start">
        ${S(this.concept,["name",this.locale,"value"])}
      </a>

      <p class="line-clamp-2 text-sm text-gray-600">
        ${S(this.concept,["_description_large",this.locale,"value"])}
      </p>
    </div> `}};vs([l({type:Object})],Mr.prototype,"concept",2);Mr=vs([b("graph-widget-concept")],Mr);var fp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,mp=(e,t,r,s)=>{for(var i=s>1?void 0:s?wp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&fp(t,r,i),i};let Li=class extends m{render(){return a`<div class="text-red-500"><slot></slot></div>`}};Li=mp([b("graph-widget-error")],Li);var bp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,vp=(e,t,r,s)=>{for(var i=s>1?void 0:s?yp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&bp(t,r,i),i};let zi=class extends m{render(){return a`<div>${g("Loading")}</div>`}};zi=vp([v(),b("graph-widget-loading")],zi);var $p=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,Pp=(e,t,r,s)=>{for(var i=s>1?void 0:s?_p(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&$p(t,r,i),i};let Hi=class extends m{render(){return a`<div class="text-gray-300">${g`No results`}</div>`}};Hi=Pp([v(),b("graph-widget-no-results")],Hi);var Op=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,xp=(e,t,r,s)=>{for(var i=s>1?void 0:s?Sp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Op(t,r,i),i};let Mi=class extends m{render(){return a`
      <section class="flex flex-col gap-6">
        <slot name="header"></slot>
        <slot class="flex flex-col gap-2"></slot>
        <slot name="footer"></slot>
      </section>
    `}};Mi=xp([b("graph-widget-section")],Mi);var Cp=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,$s=(e,t,r,s)=>{for(var i=s>1?void 0:s?jp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Cp(t,r,i),i};let Fr=class extends m{constructor(){super(...arguments),this.href=""}render(){return a`<a href=${this.href} class="btn btn-outline btn-xs btn-primary">
      ${g("View on Graph Search")}
    </a>`}};$s([l({type:String})],Fr.prototype,"href",2);Fr=$s([v(),b("graph-widget-section-link")],Fr);var Ep=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,_s=(e,t,r,s)=>{for(var i=s>1?void 0:s?Ap(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Ep(t,r,i),i};let Ir=class extends m{constructor(){super(...arguments),this.description=""}render(){return a`<span class="text-sm text-gray-600">${this.description}</span>
      <h1 class="text-xl font-medium"><slot class="line-clamp-2"></slot></h1>`}};_s([l({type:String})],Ir.prototype,"description",2);Ir=_s([b("graph-widget-section-title")],Ir);var Np=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,De=(e,t,r,s)=>{for(var i=s>1?void 0:s?Dp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Np(t,r,i),i};let bt=class extends m{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptConcepts=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([at({id:e,fields:L({locale:t})},{signal:i}),rp({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Concepts related to this concept")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};De([l({type:String})],bt.prototype,"concept-id",2);De([l({type:String})],bt.prototype,"limit",2);De([l({type:String})],bt.prototype,"offset",2);bt=De([v(),b("graph-widget-concept-concepts")],bt);var Tp=Object.defineProperty,Up=Object.getOwnPropertyDescriptor,Ps=(e,t,r,s)=>{for(var i=s>1?void 0:s?Up(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Tp(t,r,i),i};let Br=class extends m{constructor(){super(...arguments),this.course={}}render(){const e=[this.course.course_code,S(this.course,["name",this.locale,"value"])].filter(Boolean).join(": ");return a`<div class="flex flex-col gap-1">
      <a href=${this.course._url} class="link font-medium self-start"
        >${e}</a
      >
      <p class="line-clamp-2 text-sm text-gray-600">
        ${S(this.course,["summary",this.locale,"value"])}
      </p>
    </div> `}};Ps([l({type:Object})],Br.prototype,"course",2);Br=Ps([b("graph-widget-course")],Br);var Rp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Te=(e,t,r,s)=>{for(var i=s>1?void 0:s?Lp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Rp(t,r,i),i};let yt=class extends m{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptCourses=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([at({id:e,fields:L({locale:t})},{signal:i}),ip({id:e,fields:A({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Courses related to this concept")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Te([l({type:String})],yt.prototype,"concept-id",2);Te([l({type:String})],yt.prototype,"limit",2);Te([l({type:String})],yt.prototype,"offset",2);yt=Te([v(),b("graph-widget-concept-courses")],yt);var zp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,Os=(e,t,r,s)=>{for(var i=s>1?void 0:s?Hp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&zp(t,r,i),i};let kr=class extends m{constructor(){super(...arguments),this.lecture={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.lecture._url} class="link font-medium self-start">
        ${this.lecture.video.title}
      </a>

      <p class="line-clamp-2 text-sm text-gray-600">
        ${this.lecture.video.subtitle}
      </p>
    </div> `}};Os([l({type:Object})],kr.prototype,"lecture",2);kr=Os([b("graph-widget-lecture")],kr);var Mp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Ue=(e,t,r,s)=>{for(var i=s>1?void 0:s?Fp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Mp(t,r,i),i};let vt=class extends m{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptLectures=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([at({id:e,fields:L({locale:t})},{signal:i}),sp({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Lectures related to this concept")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Ue([l({type:String})],vt.prototype,"concept-id",2);Ue([l({type:String})],vt.prototype,"limit",2);Ue([l({type:String})],vt.prototype,"offset",2);vt=Ue([v(),b("graph-widget-concept-lectures")],vt);var Ip=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,Ss=(e,t,r,s)=>{for(var i=s>1?void 0:s?Bp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Ip(t,r,i),i};let qr=class extends m{constructor(){super(...arguments),this.person={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.person._url} class="link font-medium self-start">
        ${this.person.name_display}
      </a>

      <p class="line-clamp-2 text-sm text-gray-600">
        ${S(this.person,["biography",this.locale])}
      </p>
    </div>`}};Ss([l({type:Object})],qr.prototype,"person",2);qr=Ss([b("graph-widget-person")],qr);var kp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,Re=(e,t,r,s)=>{for(var i=s>1?void 0:s?qp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&kp(t,r,i),i};let $t=class extends m{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptPersons=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([at({id:e,fields:L({locale:t})},{signal:i}),op({id:e,fields:j({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("People related to this concept")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Re([l({type:String})],$t.prototype,"concept-id",2);Re([l({type:String})],$t.prototype,"limit",2);Re([l({type:String})],$t.prototype,"offset",2);$t=Re([v(),b("graph-widget-concept-persons")],$t);var Vp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,xs=(e,t,r,s)=>{for(var i=s>1?void 0:s?Jp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Vp(t,r,i),i};let Vr=class extends m{constructor(){super(...arguments),this.publication={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.publication._url} class="link font-medium self-start">
        ${this.publication.title}
      </a>
      ${this.publication.abstract&&a`<p class="line-clamp-2 text-sm text-gray-600">
        ${this.publication.abstract}
      </p>`}
      ${this.publication.publisher&&a` <i class="line-clamp-1">${this.publication.publisher}</i> `}
      ${this.publication.year}
    </div> `}};xs([l({type:Object})],Vr.prototype,"publication",2);Vr=xs([b("graph-widget-publication")],Vr);var Gp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,Le=(e,t,r,s)=>{for(var i=s>1?void 0:s?Kp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Gp(t,r,i),i};let _t=class extends m{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptPublications=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([at({id:e,fields:L({locale:t})},{signal:i}),np({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptPublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${"Publications related to this concept"}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Le([l({type:String})],_t.prototype,"concept-id",2);Le([l({type:String})],_t.prototype,"limit",2);Le([l({type:String})],_t.prototype,"offset",2);_t=Le([v(),b("graph-widget-concept-publications")],_t);var Wp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,Cs=(e,t,r,s)=>{for(var i=s>1?void 0:s?Xp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Wp(t,r,i),i};let Jr=class extends m{constructor(){super(...arguments),this.unit={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.unit._url} class="link font-medium self-start">
        ${S(this.unit,["name",this.locale,"value"])}
      </a>

      <nav class="breadcrumbs py-0 text-xs">
        <ul>
          ${this.unit.path.map((e,t,r)=>a`<li key=${e._id}>
              ${r.length>t+1?a`<a href=${e._url}>${e.initials}</a>`:a`<span class="text-gray-600">${e.initials}</span>`}
            </li>`)}
        </ul>
      </nav>
    </div>`}};Cs([l({type:Object})],Jr.prototype,"unit",2);Jr=Cs([b("graph-widget-unit")],Jr);var Yp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,ze=(e,t,r,s)=>{for(var i=s>1?void 0:s?Qp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Yp(t,r,i),i};let Pt=class extends m{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptUnits=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([at({id:e,fields:L({locale:t})},{signal:i}),ap({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Units related to this concept")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};ze([l({type:String})],Pt.prototype,"concept-id",2);ze([l({type:String})],Pt.prototype,"limit",2);ze([l({type:String})],Pt.prototype,"offset",2);Pt=ze([v(),b("graph-widget-concept-units")],Pt);const J=({id:e,fields:t},{signal:r})=>y.get(`/courses/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),Zp=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/courses/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),th=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/courses/${e}/core-lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),eh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/courses/${e}/core-persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),rh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/courses/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),ih=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/courses/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),sh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/courses/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),oh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/courses/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),nh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/courses/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data);var ah=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,He=(e,t,r,s)=>{for(var i=s>1?void 0:s?lh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&ah(t,r,i),i};let Ot=class extends m{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCourseConcepts=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([J({id:e,fields:A({locale:t})},{signal:i}),Zp({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCourseConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Concepts related to this course")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};He([l({type:String})],Ot.prototype,"course-id",2);He([l({type:String})],Ot.prototype,"limit",2);He([l({type:String})],Ot.prototype,"offset",2);Ot=He([v(),b("graph-widget-course-concepts")],Ot);var ch=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,Me=(e,t,r,s)=>{for(var i=s>1?void 0:s?ph(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&ch(t,r,i),i};let St=class extends m{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCourseLectures=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([J({id:e,fields:A({locale:t})},{signal:i}),th({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCourseLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Lectures in this course")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Me([l({type:String})],St.prototype,"course-id",2);Me([l({type:String})],St.prototype,"limit",2);Me([l({type:String})],St.prototype,"offset",2);St=Me([v(),b("graph-widget-course-core-lectures")],St);var hh=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,Fe=(e,t,r,s)=>{for(var i=s>1?void 0:s?dh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&hh(t,r,i),i};let xt=class extends m{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCoursePersons=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([J({id:e,fields:A({locale:t})},{signal:i}),eh({id:e,fields:j({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCoursePersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("People teaching this course")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Fe([l({type:String})],xt.prototype,"course-id",2);Fe([l({type:String})],xt.prototype,"limit",2);Fe([l({type:String})],xt.prototype,"offset",2);xt=Fe([v(),b("graph-widget-course-core-persons")],xt);var gh=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,Ie=(e,t,r,s)=>{for(var i=s>1?void 0:s?uh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&gh(t,r,i),i};let Ct=class extends m{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCourseCourses=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([J({id:e,fields:A({locale:t})},{signal:i}),rh({id:e,fields:A({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCourseCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Courses related to this course")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Ie([l({type:String})],Ct.prototype,"course-id",2);Ie([l({type:String})],Ct.prototype,"limit",2);Ie([l({type:String})],Ct.prototype,"offset",2);Ct=Ie([v(),b("graph-widget-course-courses")],Ct);var fh=Object.defineProperty,wh=Object.getOwnPropertyDescriptor,Be=(e,t,r,s)=>{for(var i=s>1?void 0:s?wh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&fh(t,r,i),i};let jt=class extends m{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCourseLectures=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([J({id:e,fields:A({locale:t})},{signal:i}),ih({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCourseLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Lectures related to this course")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Be([l({type:String})],jt.prototype,"course-id",2);Be([l({type:String})],jt.prototype,"limit",2);Be([l({type:String})],jt.prototype,"offset",2);jt=Be([v(),b("graph-widget-course-lectures")],jt);var mh=Object.defineProperty,bh=Object.getOwnPropertyDescriptor,ke=(e,t,r,s)=>{for(var i=s>1?void 0:s?bh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&mh(t,r,i),i};let Et=class extends m{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCoursePersons=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([J({id:e,fields:A({locale:t})},{signal:i}),sh({id:e,fields:j({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCoursePersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("People related to this course")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};ke([l({type:String})],Et.prototype,"course-id",2);ke([l({type:String})],Et.prototype,"limit",2);ke([l({type:String})],Et.prototype,"offset",2);Et=ke([v(),b("graph-widget-course-persons")],Et);var yh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,qe=(e,t,r,s)=>{for(var i=s>1?void 0:s?vh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&yh(t,r,i),i};let At=class extends m{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCoursePublications=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([J({id:e,fields:A({locale:t})},{signal:i}),oh({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCoursePublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Publications related to this course")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};qe([l({type:String})],At.prototype,"course-id",2);qe([l({type:String})],At.prototype,"limit",2);qe([l({type:String})],At.prototype,"offset",2);At=qe([v(),b("graph-widget-course-publications")],At);var $h=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Ve=(e,t,r,s)=>{for(var i=s>1?void 0:s?_h(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&$h(t,r,i),i};let Nt=class extends m{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCourseUnits=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([J({id:e,fields:A({locale:t})},{signal:i}),nh({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCourseUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Units related to this course")}
            >
              ${S(e,["name",this.locale,"value"])}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Ve([l({type:String})],Nt.prototype,"course-id",2);Ve([l({type:String})],Nt.prototype,"limit",2);Ve([l({type:String})],Nt.prototype,"offset",2);Nt=Ve([v(),b("graph-widget-course-units")],Nt);const G=({id:e,fields:t},{signal:r})=>y.get(`/lectures/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),Ph=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/lectures/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Oh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/lectures/${e}/core-courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Sh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/lectures/${e}/core-persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),xh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/lectures/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Ch=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/lectures/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),jh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/lectures/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Eh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/lectures/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Ah=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/lectures/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data);var Nh=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,Je=(e,t,r,s)=>{for(var i=s>1?void 0:s?Dh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Nh(t,r,i),i};let Dt=class extends m{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLectureConcepts=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:N({locale:t})},{signal:i}),Ph({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLectureConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Concepts related to this lecture")}
            >
              ${e.video.title}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Je([l({type:String})],Dt.prototype,"lecture-id",2);Je([l({type:String})],Dt.prototype,"limit",2);Je([l({type:String})],Dt.prototype,"offset",2);Dt=Je([v(),b("graph-widget-lecture-concepts")],Dt);var Th=Object.defineProperty,Uh=Object.getOwnPropertyDescriptor,Ge=(e,t,r,s)=>{for(var i=s>1?void 0:s?Uh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Th(t,r,i),i};let Tt=class extends m{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLectureCourses=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:N({locale:t})},{signal:i}),Oh({id:e,fields:A({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLectureCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Courses of this lecture")}
            >
              ${e.video.title}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Ge([l({type:String})],Tt.prototype,"lecture-id",2);Ge([l({type:String})],Tt.prototype,"limit",2);Ge([l({type:String})],Tt.prototype,"offset",2);Tt=Ge([v(),b("graph-widget-lecture-core-courses")],Tt);var Rh=Object.defineProperty,Lh=Object.getOwnPropertyDescriptor,Ke=(e,t,r,s)=>{for(var i=s>1?void 0:s?Lh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Rh(t,r,i),i};let Ut=class extends m{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLecturePersons=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:N({locale:t})},{signal:i}),Sh({id:e,fields:j({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLecturePersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("People teaching this lecture")}
            >
              ${e.video.title}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Ke([l({type:String})],Ut.prototype,"lecture-id",2);Ke([l({type:String})],Ut.prototype,"limit",2);Ke([l({type:String})],Ut.prototype,"offset",2);Ut=Ke([v(),b("graph-widget-lecture-core-persons")],Ut);var zh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,We=(e,t,r,s)=>{for(var i=s>1?void 0:s?Hh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&zh(t,r,i),i};let Rt=class extends m{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLectureCourses=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:N({locale:t})},{signal:i}),xh({id:e,fields:A({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLectureCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Courses related to this lecture")}
            >
              ${e.video.title}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};We([l({type:String})],Rt.prototype,"lecture-id",2);We([l({type:String})],Rt.prototype,"limit",2);We([l({type:String})],Rt.prototype,"offset",2);Rt=We([v(),b("graph-widget-lecture-courses")],Rt);var Mh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,Xe=(e,t,r,s)=>{for(var i=s>1?void 0:s?Fh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Mh(t,r,i),i};let Lt=class extends m{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLectureLectures=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:N({locale:t})},{signal:i}),Ch({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLectureLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Lectures related to this lecture")}
            >
              ${e.video.title}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Xe([l({type:String})],Lt.prototype,"lecture-id",2);Xe([l({type:String})],Lt.prototype,"limit",2);Xe([l({type:String})],Lt.prototype,"offset",2);Lt=Xe([v(),b("graph-widget-lecture-lectures")],Lt);var Ih=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,Ye=(e,t,r,s)=>{for(var i=s>1?void 0:s?Bh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Ih(t,r,i),i};let zt=class extends m{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLecturePersons=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:N({locale:t})},{signal:i}),jh({id:e,fields:j({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLecturePersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("People related to this lecture")}
            >
              ${e.video.title}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Ye([l({type:String})],zt.prototype,"lecture-id",2);Ye([l({type:String})],zt.prototype,"limit",2);Ye([l({type:String})],zt.prototype,"offset",2);zt=Ye([v(),b("graph-widget-lecture-persons")],zt);var kh=Object.defineProperty,qh=Object.getOwnPropertyDescriptor,Qe=(e,t,r,s)=>{for(var i=s>1?void 0:s?qh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&kh(t,r,i),i};let Ht=class extends m{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLecturePublications=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:N({locale:t})},{signal:i}),Eh({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLecturePublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${"Publications related to this lecture"}
            >
              ${e.video.title}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Qe([l({type:String})],Ht.prototype,"lecture-id",2);Qe([l({type:String})],Ht.prototype,"limit",2);Qe([l({type:String})],Ht.prototype,"offset",2);Ht=Qe([v(),b("graph-widget-lecture-publications")],Ht);var Vh=Object.defineProperty,Jh=Object.getOwnPropertyDescriptor,Ze=(e,t,r,s)=>{for(var i=s>1?void 0:s?Jh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Vh(t,r,i),i};let Mt=class extends m{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLectureUnits=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:N({locale:t})},{signal:i}),Ah({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLectureUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Units related to this lecture")}
            >
              ${e.video.title}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Ze([l({type:String})],Mt.prototype,"lecture-id",2);Ze([l({type:String})],Mt.prototype,"limit",2);Ze([l({type:String})],Mt.prototype,"offset",2);Mt=Ze([v(),b("graph-widget-lecture-units")],Mt);const F=({id:e,fields:t},{signal:r})=>y.get(`/persons/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),Gh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/persons/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Kh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/persons/${e}/core-courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Wh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/persons/${e}/core-lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Xh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/persons/${e}/core-publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Yh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/persons/${e}/core-units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Qh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/persons/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Zh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/persons/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),td=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/persons/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),ed=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/persons/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),rd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/persons/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data);var id=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,tr=(e,t,r,s)=>{for(var i=s>1?void 0:s?sd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&id(t,r,i),i};let Ft=class extends m{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonConcepts=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([F({id:e,fields:j({locale:t})},{signal:i}),Gh({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Concepts related to this person")}
            >
              ${e.name_display}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};tr([l({type:String})],Ft.prototype,"person-id",2);tr([l({type:String})],Ft.prototype,"limit",2);tr([l({type:String})],Ft.prototype,"offset",2);Ft=tr([v(),b("graph-widget-person-concepts")],Ft);var od=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,er=(e,t,r,s)=>{for(var i=s>1?void 0:s?nd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&od(t,r,i),i};let It=class extends m{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonCourses=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([F({id:e,fields:j({locale:t})},{signal:i}),Kh({id:e,fields:A({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Courses taught by this person")}
            >
              ${e.name_display}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};er([l({type:String})],It.prototype,"person-id",2);er([l({type:String})],It.prototype,"limit",2);er([l({type:String})],It.prototype,"offset",2);It=er([v(),b("graph-widget-person-core-courses")],It);var ad=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,rr=(e,t,r,s)=>{for(var i=s>1?void 0:s?ld(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&ad(t,r,i),i};let Bt=class extends m{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonLectures=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([F({id:e,fields:j({locale:t})},{signal:i}),Wh({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Lectures taught by this person")}
            >
              ${e.name_display}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};rr([l({type:String})],Bt.prototype,"person-id",2);rr([l({type:String})],Bt.prototype,"limit",2);rr([l({type:String})],Bt.prototype,"offset",2);Bt=rr([v(),b("graph-widget-person-core-lectures")],Bt);var cd=Object.defineProperty,pd=Object.getOwnPropertyDescriptor,ir=(e,t,r,s)=>{for(var i=s>1?void 0:s?pd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&cd(t,r,i),i};let kt=class extends m{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonPublications=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([F({id:e,fields:j({locale:t})},{signal:i}),Xh({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonPublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Publications by this person")}
            >
              ${e.name_display}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};ir([l({type:String})],kt.prototype,"person-id",2);ir([l({type:String})],kt.prototype,"limit",2);ir([l({type:String})],kt.prototype,"offset",2);kt=ir([v(),b("graph-widget-person-core-publications")],kt);var hd=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,sr=(e,t,r,s)=>{for(var i=s>1?void 0:s?dd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&hd(t,r,i),i};let qt=class extends m{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonUnits=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([F({id:e,fields:j({locale:t})},{signal:i}),Yh({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Units for this person")}
            >
              ${e.name_display}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};sr([l({type:String})],qt.prototype,"person-id",2);sr([l({type:String})],qt.prototype,"limit",2);sr([l({type:String})],qt.prototype,"offset",2);qt=sr([v(),b("graph-widget-person-core-units")],qt);var gd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,or=(e,t,r,s)=>{for(var i=s>1?void 0:s?ud(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&gd(t,r,i),i};let Vt=class extends m{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonCourses=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([F({id:e,fields:j({locale:t})},{signal:i}),Qh({id:e,fields:A({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Courses related to this person")}
            >
              ${e.name_display}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};or([l({type:String})],Vt.prototype,"person-id",2);or([l({type:String})],Vt.prototype,"limit",2);or([l({type:String})],Vt.prototype,"offset",2);Vt=or([v(),b("graph-widget-person-courses")],Vt);var fd=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,nr=(e,t,r,s)=>{for(var i=s>1?void 0:s?wd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&fd(t,r,i),i};let Jt=class extends m{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonLectures=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([F({id:e,fields:j({locale:t})},{signal:i}),Zh({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Lectures related to this person")}
            >
              ${e.name_display}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};nr([l({type:String})],Jt.prototype,"person-id",2);nr([l({type:String})],Jt.prototype,"limit",2);nr([l({type:String})],Jt.prototype,"offset",2);Jt=nr([v(),b("graph-widget-person-lectures")],Jt);var md=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,ar=(e,t,r,s)=>{for(var i=s>1?void 0:s?bd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&md(t,r,i),i};let Gt=class extends m{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonPersons=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([F({id:e,fields:j({locale:t})},{signal:i}),td({id:e,fields:j({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("People related to this person")}
            >
              ${e.name_display}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};ar([l({type:String})],Gt.prototype,"person-id",2);ar([l({type:String})],Gt.prototype,"limit",2);ar([l({type:String})],Gt.prototype,"offset",2);Gt=ar([v(),b("graph-widget-person-persons")],Gt);var yd=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,lr=(e,t,r,s)=>{for(var i=s>1?void 0:s?vd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&yd(t,r,i),i};let Kt=class extends m{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonPublications=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([F({id:e,fields:j({locale:t})},{signal:i}),ed({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonPublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Publications related to this person")}
            >
              ${e.name_display}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};lr([l({type:String})],Kt.prototype,"person-id",2);lr([l({type:String})],Kt.prototype,"limit",2);lr([l({type:String})],Kt.prototype,"offset",2);Kt=lr([v(),b("graph-widget-person-publications")],Kt);var $d=Object.defineProperty,_d=Object.getOwnPropertyDescriptor,cr=(e,t,r,s)=>{for(var i=s>1?void 0:s?_d(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&$d(t,r,i),i};let Wt=class extends m{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonUnits=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([F({id:e,fields:j({locale:t})},{signal:i}),rd({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${g(a`<graph-widget-section-title
              slot="header"
              description=${g("Units related to this person")}
            >
              ${e.name_display}
            </graph-widget-section-title> `)}
          ${t.items.length?t.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};cr([l({type:String})],Wt.prototype,"person-id",2);cr([l({type:String})],Wt.prototype,"limit",2);cr([l({type:String})],Wt.prototype,"offset",2);Wt=cr([v(),b("graph-widget-person-units")],Wt);const Y=({id:e,fields:t},{signal:r})=>y.get(`/publications/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),Pd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/publications/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Od=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/publications/${e}/core-persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Sd=async({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/publications/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),xd=async({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/publications/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Cd=async({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/publications/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),jd=async({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/publications/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Ed=async({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/publications/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data);var Ad=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,pr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Nd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Ad(t,r,i),i};let Xt=class extends m{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationConcepts=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Y({id:e,fields:T({locale:t})},{signal:i}),Pd({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Concepts related to this publication")}
          >
            ${e.title}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};pr([l({type:String})],Xt.prototype,"publication-id",2);pr([l({type:String})],Xt.prototype,"limit",2);pr([l({type:String})],Xt.prototype,"offset",2);Xt=pr([v(),b("graph-widget-publication-concepts")],Xt);var Dd=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,hr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Td(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Dd(t,r,i),i};let Yt=class extends m{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationPersons=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Y({id:e,fields:T({locale:t})},{signal:i}),Od({id:e,fields:j({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Authors of this publication")}
          >
            ${e.title}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};hr([l({type:String})],Yt.prototype,"publication-id",2);hr([l({type:String})],Yt.prototype,"limit",2);hr([l({type:String})],Yt.prototype,"offset",2);Yt=hr([v(),b("graph-widget-publication-core-persons")],Yt);var Ud=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,dr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Rd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Ud(t,r,i),i};let Qt=class extends m{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationCourses=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Y({id:e,fields:T({locale:t})},{signal:i}),Sd({id:e,fields:A({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Courses related to this publication")}
          >
            ${e.title}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};dr([l({type:String})],Qt.prototype,"publication-id",2);dr([l({type:String})],Qt.prototype,"limit",2);dr([l({type:String})],Qt.prototype,"offset",2);Qt=dr([v(),b("graph-widget-publication-courses")],Qt);var Ld=Object.defineProperty,zd=Object.getOwnPropertyDescriptor,gr=(e,t,r,s)=>{for(var i=s>1?void 0:s?zd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Ld(t,r,i),i};let Zt=class extends m{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationLectures=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Y({id:e,fields:T({locale:t})},{signal:i}),xd({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Lectures related to this publication")}
          >
            ${e.title}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};gr([l({type:String})],Zt.prototype,"publication-id",2);gr([l({type:String})],Zt.prototype,"limit",2);gr([l({type:String})],Zt.prototype,"offset",2);Zt=gr([v(),b("graph-widget-publication-lectures")],Zt);var Hd=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,ur=(e,t,r,s)=>{for(var i=s>1?void 0:s?Md(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Hd(t,r,i),i};let te=class extends m{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationPersons=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Y({id:e,fields:T({locale:t})},{signal:i}),Cd({id:e,fields:j({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Persons related to this publication")}
          >
            ${e.title}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};ur([l({type:String})],te.prototype,"publication-id",2);ur([l({type:String})],te.prototype,"limit",2);ur([l({type:String})],te.prototype,"offset",2);te=ur([v(),b("graph-widget-publication-persons")],te);var Fd=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,fr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Id(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Fd(t,r,i),i};let ee=class extends m{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationPublications=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Y({id:e,fields:T({locale:t})},{signal:i}),jd({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationPublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Publications related to this publication")}
          >
            ${e.title}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};fr([l({type:String})],ee.prototype,"publication-id",2);fr([l({type:String})],ee.prototype,"limit",2);fr([l({type:String})],ee.prototype,"offset",2);ee=fr([v(),b("graph-widget-publication-publications")],ee);var Bd=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,wr=(e,t,r,s)=>{for(var i=s>1?void 0:s?kd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Bd(t,r,i),i};let re=class extends m{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationUnits=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Y({id:e,fields:T({locale:t})},{signal:i}),Ed({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Units related to this publication")}
          >
            ${e.title}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};wr([l({type:String})],re.prototype,"publication-id",2);wr([l({type:String})],re.prototype,"limit",2);wr([l({type:String})],re.prototype,"offset",2);re=wr([v(),b("graph-widget-publication-units")],re);const Q=({id:e,fields:t},{signal:r})=>y.get(`/units/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),qd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/units/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Vd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/units/${e}/core-persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Jd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/units/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Gd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/units/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Kd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/units/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Wd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/units/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Xd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>y.get(`/units/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data);var Yd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,mr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Qd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Yd(t,r,i),i};let ie=class extends m{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitConcepts=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:U({locale:t})},{signal:i}),qd({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Concepts related to this unit")}
          >
            ${S(e,["name",this.locale,"value"])}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};mr([l({type:String})],ie.prototype,"unit-id",2);mr([l({type:String})],ie.prototype,"limit",2);mr([l({type:String})],ie.prototype,"offset",2);ie=mr([v(),b("graph-widget-unit-concepts")],ie);var Zd=Object.defineProperty,tg=Object.getOwnPropertyDescriptor,br=(e,t,r,s)=>{for(var i=s>1?void 0:s?tg(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Zd(t,r,i),i};let se=class extends m{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitPersons=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:U({locale:t})},{signal:i}),Vd({id:e,fields:j({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("People in this unit")}
          >
            ${S(e,["name",this.locale,"value"])}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};br([l({type:String})],se.prototype,"unit-id",2);br([l({type:String})],se.prototype,"limit",2);br([l({type:String})],se.prototype,"offset",2);se=br([v(),b("graph-widget-unit-core-persons")],se);var eg=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,yr=(e,t,r,s)=>{for(var i=s>1?void 0:s?rg(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&eg(t,r,i),i};let oe=class extends m{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitCourses=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:U({locale:t})},{signal:i}),Jd({id:e,fields:A({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Courses related to this unit")}
          >
            ${S(e,["name",this.locale,"value"])}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};yr([l({type:String})],oe.prototype,"unit-id",2);yr([l({type:String})],oe.prototype,"limit",2);yr([l({type:String})],oe.prototype,"offset",2);oe=yr([v(),b("graph-widget-unit-courses")],oe);var ig=Object.defineProperty,sg=Object.getOwnPropertyDescriptor,vr=(e,t,r,s)=>{for(var i=s>1?void 0:s?sg(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&ig(t,r,i),i};let ne=class extends m{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitLectures=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:U({locale:t})},{signal:i}),Gd({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Lectures related to this unit")}
          >
            ${S(e,["name",this.locale,"value"])}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};vr([l({type:String})],ne.prototype,"unit-id",2);vr([l({type:String})],ne.prototype,"limit",2);vr([l({type:String})],ne.prototype,"offset",2);ne=vr([v(),b("graph-widget-unit-lectures")],ne);var og=Object.defineProperty,ng=Object.getOwnPropertyDescriptor,$r=(e,t,r,s)=>{for(var i=s>1?void 0:s?ng(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&og(t,r,i),i};let ae=class extends m{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitPersons=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:U({locale:t})},{signal:i}),Kd({id:e,fields:j({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Persons related to this unit")}
          >
            ${S(e,["name",this.locale,"value"])}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};$r([l({type:String})],ae.prototype,"unit-id",2);$r([l({type:String})],ae.prototype,"limit",2);$r([l({type:String})],ae.prototype,"offset",2);ae=$r([v(),b("graph-widget-unit-persons")],ae);var ag=Object.defineProperty,lg=Object.getOwnPropertyDescriptor,_r=(e,t,r,s)=>{for(var i=s>1?void 0:s?lg(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&ag(t,r,i),i};let le=class extends m{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitPublications=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:U({locale:t})},{signal:i}),Wd({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitPublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Publications related to this unit")}
          >
            ${S(e,["name",this.locale,"value"])}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};_r([l({type:String})],le.prototype,"unit-id",2);_r([l({type:String})],le.prototype,"limit",2);_r([l({type:String})],le.prototype,"offset",2);le=_r([v(),b("graph-widget-unit-publications")],le);var cg=Object.defineProperty,pg=Object.getOwnPropertyDescriptor,Pr=(e,t,r,s)=>{for(var i=s>1?void 0:s?pg(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&cg(t,r,i),i};let ce=class extends m{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitUnits=new $(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:U({locale:t})},{signal:i}),Xd({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${g("Units related to this unit")}
          >
            ${S(e,["name",this.locale,"value"])}
          </graph-widget-section-title> `}
          ${t.items.length?t.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${e._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`})}};Pr([l({type:String})],ce.prototype,"unit-id",2);Pr([l({type:String})],ce.prototype,"limit",2);Pr([l({type:String})],ce.prototype,"offset",2);ce=Pr([v(),b("graph-widget-unit-units")],ce);
