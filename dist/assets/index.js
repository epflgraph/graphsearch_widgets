(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=globalThis,Gr=fe.ShadowRoot&&(fe.ShadyCSS===void 0||fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ii=Symbol(),ni=new WeakMap;let As=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Ii)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Gr&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=ni.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ni.set(r,t))}return t}toString(){return this.cssText}};const be=e=>new As(typeof e=="string"?e:e+"",void 0,Ii),Es=(e,t)=>{if(Gr)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),i=fe.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)}},ai=Gr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return be(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ns,defineProperty:Ds,getOwnPropertyDescriptor:Ts,getOwnPropertyNames:Us,getOwnPropertySymbols:Rs,getPrototypeOf:Ls}=Object,J=globalThis,li=J.trustedTypes,zs=li?li.emptyScript:"",Or=J.reactiveElementPolyfillSupport,dt=(e,t)=>e,ye={toAttribute(e,t){switch(t){case Boolean:e=e?zs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Pe=(e,t)=>!Ns(e,t),ci={attribute:!0,type:String,converter:ye,reflect:!1,hasChanged:Pe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),J.litPropertyMetadata??(J.litPropertyMetadata=new WeakMap);class tt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=ci){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,r);i!==void 0&&Ds(this.prototype,t,i)}}static getPropertyDescriptor(t,r,s){const{get:i,set:o}=Ts(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const p=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ci}static _$Ei(){if(this.hasOwnProperty(dt("elementProperties")))return;const t=Ls(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(dt("properties"))){const r=this.properties,s=[...Us(r),...Rs(r)];for(const i of s)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)r.unshift(ai(i))}else t!==void 0&&r.push(ai(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Es(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(r=>{var s;return(s=r.hostConnected)==null?void 0:s.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$EO(t,r){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:ye).toAttribute(r,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,r){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),p=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:ye;this._$Em=i,this[i]=p.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(t,r,s,i=!1,o){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??Pe)(i?o:this[t],r))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,s){this._$AL.has(t)||this._$AL.set(t,r),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(s=this._$ES)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)==null||r.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(t){}firstUpdated(t){}}tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},tt[dt("elementProperties")]=new Map,tt[dt("finalized")]=new Map,Or==null||Or({ReactiveElement:tt}),(J.reactiveElementVersions??(J.reactiveElementVersions=[])).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=globalThis,$e=ut.trustedTypes,pi=$e?$e.createPolicy("lit-html",{createHTML:e=>e}):void 0,Bi="$lit$",V=`lit$${(Math.random()+"").slice(9)}$`,qi="?"+V,Hs=`<${qi}>`,Y=document,ft=()=>Y.createComment(""),bt=e=>e===null||typeof e!="object"&&typeof e!="function",Vi=Array.isArray,Ms=e=>Vi(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Sr=`[ 	
\f\r]`,ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hi=/-->/g,di=/>/g,W=RegExp(`>|${Sr}(?:([^\\s"'>=/]+)(${Sr}*=${Sr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ui=/'/g,gi=/"/g,Ji=/^(?:script|style|textarea|title)$/i,Fs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),a=Fs(1),et=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),fi=new WeakMap,X=Y.createTreeWalker(Y,129);function Gi(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return pi!==void 0?pi.createHTML(t):t}const Is=(e,t)=>{const r=e.length-1,s=[];let i,o=t===2?"<svg>":"",n=ct;for(let p=0;p<r;p++){const d=e[p];let f,g,h=-1,x=0;for(;x<d.length&&(n.lastIndex=x,g=n.exec(d),g!==null);)x=n.lastIndex,n===ct?g[1]==="!--"?n=hi:g[1]!==void 0?n=di:g[2]!==void 0?(Ji.test(g[2])&&(i=RegExp("</"+g[2],"g")),n=W):g[3]!==void 0&&(n=W):n===W?g[0]===">"?(n=i??ct,h=-1):g[1]===void 0?h=-2:(h=n.lastIndex-g[2].length,f=g[1],n=g[3]===void 0?W:g[3]==='"'?gi:ui):n===gi||n===ui?n=W:n===hi||n===di?n=ct:(n=W,i=void 0);const S=n===W&&e[p+1].startsWith("/>")?" ":"";o+=n===ct?d+Hs:h>=0?(s.push(f),d.slice(0,h)+Bi+d.slice(h)+V+S):d+V+(h===-2?p:S)}return[Gi(e,o+(e[r]||"<?>")+(t===2?"</svg>":"")),s]};class wt{constructor({strings:t,_$litType$:r},s){let i;this.parts=[];let o=0,n=0;const p=t.length-1,d=this.parts,[f,g]=Is(t,r);if(this.el=wt.createElement(f,s),X.currentNode=this.el.content,r===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=X.nextNode())!==null&&d.length<p;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Bi)){const x=g[n++],S=i.getAttribute(h).split(V),m=/([.?@])?(.*)/.exec(x);d.push({type:1,index:o,name:m[2],strings:S,ctor:m[1]==="."?qs:m[1]==="?"?Vs:m[1]==="@"?Js:xe}),i.removeAttribute(h)}else h.startsWith(V)&&(d.push({type:6,index:o}),i.removeAttribute(h));if(Ji.test(i.tagName)){const h=i.textContent.split(V),x=h.length-1;if(x>0){i.textContent=$e?$e.emptyScript:"";for(let S=0;S<x;S++)i.append(h[S],ft()),X.nextNode(),d.push({type:2,index:++o});i.append(h[x],ft())}}}else if(i.nodeType===8)if(i.data===qi)d.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(V,h+1))!==-1;)d.push({type:7,index:o}),h+=V.length-1}o++}}static createElement(t,r){const s=Y.createElement("template");return s.innerHTML=t,s}}function rt(e,t,r=e,s){var n,p;if(t===et)return t;let i=s!==void 0?(n=r._$Co)==null?void 0:n[s]:r._$Cl;const o=bt(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((p=i==null?void 0:i._$AO)==null||p.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,s)),s!==void 0?(r._$Co??(r._$Co=[]))[s]=i:r._$Cl=i),i!==void 0&&(t=rt(e,i._$AS(e,t.values),i,s)),t}class Bs{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??Y).importNode(r,!0);X.currentNode=i;let o=X.nextNode(),n=0,p=0,d=s[0];for(;d!==void 0;){if(n===d.index){let f;d.type===2?f=new he(o,o.nextSibling,this,t):d.type===1?f=new d.ctor(o,d.name,d.strings,this,t):d.type===6&&(f=new Gs(o,this,t)),this._$AV.push(f),d=s[++p]}n!==(d==null?void 0:d.index)&&(o=X.nextNode(),n++)}return X.currentNode=Y,i}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class he{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,s,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=rt(this,t,r),bt(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==et&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ms(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&bt(this._$AH)?this._$AA.nextSibling.data=t:this.$(Y.createTextNode(t)),this._$AH=t}g(t){var o;const{values:r,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=wt.createElement(Gi(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const n=new Bs(i,this),p=n.u(this.options);n.p(r),this.$(p),this._$AH=n}}_$AC(t){let r=fi.get(t.strings);return r===void 0&&fi.set(t.strings,r=new wt(t)),r}T(t){Vi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,i=0;for(const o of t)i===r.length?r.push(s=new he(this.k(ft()),this.k(ft()),this,this.options)):s=r[i],s._$AI(o),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class xe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,i,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=j}_$AI(t,r=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=rt(this,t,r,0),n=!bt(t)||t!==this._$AH&&t!==et,n&&(this._$AH=t);else{const p=t;let d,f;for(t=o[0],d=0;d<o.length-1;d++)f=rt(this,p[s+d],r,d),f===et&&(f=this._$AH[d]),n||(n=!bt(f)||f!==this._$AH[d]),f===j?t=j:t!==j&&(t+=(f??"")+o[d+1]),this._$AH[d]=f}n&&!i&&this.O(t)}O(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class qs extends xe{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===j?void 0:t}}class Vs extends xe{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class Js extends xe{constructor(t,r,s,i,o){super(t,r,s,i,o),this.type=5}_$AI(t,r=this){if((t=rt(this,t,r,0)??j)===et)return;const s=this._$AH,i=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==j&&(s===j||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Gs{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const Cr=ut.litHtmlPolyfillSupport;Cr==null||Cr(wt,he),(ut.litHtmlVersions??(ut.litHtmlVersions=[])).push("3.1.0");const Ks=(e,t,r)=>{const s=(r==null?void 0:r.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;s._$litPart$=i=new he(t.insertBefore(ft(),o),o,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gt extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ks(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return et}}var Fi;gt._$litElement$=!0,gt.finalized=!0,(Fi=globalThis.litElementHydrateSupport)==null||Fi.call(globalThis,{LitElement:gt});const kr=globalThis.litElementPolyfillSupport;kr==null||kr({LitElement:gt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws={attribute:!0,type:String,converter:ye,reflect:!1,hasChanged:Pe},Xs=(e=Ws,t,r)=>{const{kind:s,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,e),s==="accessor"){const{name:n}=r;return{set(p){const d=t.get.call(this);t.set.call(this,p),this.requestUpdate(n,d,e)},init(p){return p!==void 0&&this.C(n,void 0,e),p}}}if(s==="setter"){const{name:n}=r;return function(p){const d=this[n];t.call(this,p),this.requestUpdate(n,d,e)}}throw Error("Unsupported decorator location: "+s)};function l(e){return(t,r)=>typeof r=="object"?Xs(e,t,r):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys=e=>typeof e!="string"&&"strTag"in e,Qs=(e,t,r)=>{let s=e[0];for(let i=1;i<e.length;i++)s+=t[r?r[i-1]:i-1],s+=e[i];return s};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zs=e=>Ys(e)?Qs(e.strings,e.values):e;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class to{constructor(t){this.__litLocalizeEventHandler=r=>{r.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(bi,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(bi,this.__litLocalizeEventHandler)}}const eo=e=>e.addController(new to(e)),ro=eo;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=()=>(e,t)=>(e.addInitializer(ro),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class io{constructor(){this.settled=!1,this.promise=new Promise((t,r)=>{this._resolve=t,this._reject=r})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let so=new io;so.resolve();/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let u=Zs;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=Symbol();class _{get taskComplete(){return this.t||(this.status===1?this.t=new Promise((t,r)=>{this.i=t,this.o=r}):this.status===3?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,r,s){var o;this.u=0,this.status=0,(this.p=t).addController(this);const i=typeof r=="object"?r:{task:r,args:s};this._=i.task,this.v=i.args,this.j=i.argsEqual??no,this.m=i.onComplete,this.g=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.l=i.initialValue,this.status=2,this.k=(o=this.A)==null?void 0:o.call(this))}hostUpdate(){this.autoRun===!0&&this.O()}hostUpdated(){this.autoRun==="afterUpdate"&&this.O()}A(){if(this.v===void 0)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),r=this.k;this.k=t,t===r||t===void 0||r!==void 0&&this.j(r,t)||await this.run(t)}async run(t){var n,p,d,f,g;let r,s;t??(t=this.A()),this.k=t,this.status===1?(n=this.T)==null||n.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this.p.requestUpdate()):this.p.requestUpdate();const i=++this.u;this.T=new AbortController;let o=!1;try{r=await this._(t,{signal:this.T.signal})}catch(h){o=!0,s=h}if(this.u===i){if(r===oo)this.status=0;else{if(o===!1){try{(p=this.m)==null||p.call(this,r)}catch{}this.status=2,(d=this.i)==null||d.call(this,r)}else{try{(f=this.g)==null||f.call(this,s)}catch{}this.status=3,(g=this.o)==null||g.call(this,s)}this.l=r,this.h=s}this.p.requestUpdate()}}abort(t){var r;this.status===1&&((r=this.T)==null||r.abort(t))}get value(){return this.l}get error(){return this.h}render(t){var r,s,i,o;switch(this.status){case 0:return(r=t.initial)==null?void 0:r.call(t);case 1:return(s=t.pending)==null?void 0:s.call(t);case 2:return(i=t.complete)==null?void 0:i.call(t,this.value);case 3:return(o=t.error)==null?void 0:o.call(t,this.error);default:throw Error("Unexpected status: "+this.status)}}}const no=(e,t)=>e===t||e.length===t.length&&e.every((r,s)=>!Pe(r,t[s]));var ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ao(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lo=Array.isArray,Kr=lo,co=typeof ge=="object"&&ge&&ge.Object===Object&&ge,po=co,ho=po,uo=typeof self=="object"&&self&&self.Object===Object&&self,go=ho||uo||Function("return this")(),Wr=go,fo=Wr,bo=fo.Symbol,Xr=bo,wi=Xr,Ki=Object.prototype,wo=Ki.hasOwnProperty,mo=Ki.toString,pt=wi?wi.toStringTag:void 0;function vo(e){var t=wo.call(e,pt),r=e[pt];try{e[pt]=void 0;var s=!0}catch{}var i=mo.call(e);return s&&(t?e[pt]=r:delete e[pt]),i}var yo=vo,$o=Object.prototype,_o=$o.toString;function Po(e){return _o.call(e)}var xo=Po,mi=Xr,Oo=yo,So=xo,Co="[object Null]",ko="[object Undefined]",vi=mi?mi.toStringTag:void 0;function jo(e){return e==null?e===void 0?ko:Co:vi&&vi in Object(e)?Oo(e):So(e)}var Wi=jo;function Ao(e){return e!=null&&typeof e=="object"}var Eo=Ao,No=Wi,Do=Eo,To="[object Symbol]";function Uo(e){return typeof e=="symbol"||Do(e)&&No(e)==To}var Yr=Uo,Ro=Kr,Lo=Yr,zo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ho=/^\w*$/;function Mo(e,t){if(Ro(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Lo(e)?!0:Ho.test(e)||!zo.test(e)||t!=null&&e in Object(t)}var Fo=Mo;function Io(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Xi=Io,Bo=Wi,qo=Xi,Vo="[object AsyncFunction]",Jo="[object Function]",Go="[object GeneratorFunction]",Ko="[object Proxy]";function Wo(e){if(!qo(e))return!1;var t=Bo(e);return t==Jo||t==Go||t==Vo||t==Ko}var Xo=Wo,Yo=Wr,Qo=Yo["__core-js_shared__"],Zo=Qo,jr=Zo,yi=function(){var e=/[^.]+$/.exec(jr&&jr.keys&&jr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function tn(e){return!!yi&&yi in e}var en=tn,rn=Function.prototype,sn=rn.toString;function on(e){if(e!=null){try{return sn.call(e)}catch{}try{return e+""}catch{}}return""}var nn=on,an=Xo,ln=en,cn=Xi,pn=nn,hn=/[\\^$.*+?()[\]{}|]/g,dn=/^\[object .+?Constructor\]$/,un=Function.prototype,gn=Object.prototype,fn=un.toString,bn=gn.hasOwnProperty,wn=RegExp("^"+fn.call(bn).replace(hn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function mn(e){if(!cn(e)||ln(e))return!1;var t=an(e)?wn:dn;return t.test(pn(e))}var vn=mn;function yn(e,t){return e==null?void 0:e[t]}var $n=yn,_n=vn,Pn=$n;function xn(e,t){var r=Pn(e,t);return _n(r)?r:void 0}var Yi=xn,On=Yi,Sn=On(Object,"create"),Oe=Sn,$i=Oe;function Cn(){this.__data__=$i?$i(null):{},this.size=0}var kn=Cn;function jn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var An=jn,En=Oe,Nn="__lodash_hash_undefined__",Dn=Object.prototype,Tn=Dn.hasOwnProperty;function Un(e){var t=this.__data__;if(En){var r=t[e];return r===Nn?void 0:r}return Tn.call(t,e)?t[e]:void 0}var Rn=Un,Ln=Oe,zn=Object.prototype,Hn=zn.hasOwnProperty;function Mn(e){var t=this.__data__;return Ln?t[e]!==void 0:Hn.call(t,e)}var Fn=Mn,In=Oe,Bn="__lodash_hash_undefined__";function qn(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=In&&t===void 0?Bn:t,this}var Vn=qn,Jn=kn,Gn=An,Kn=Rn,Wn=Fn,Xn=Vn;function st(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}st.prototype.clear=Jn;st.prototype.delete=Gn;st.prototype.get=Kn;st.prototype.has=Wn;st.prototype.set=Xn;var Yn=st;function Qn(){this.__data__=[],this.size=0}var Zn=Qn;function ta(e,t){return e===t||e!==e&&t!==t}var ea=ta,ra=ea;function ia(e,t){for(var r=e.length;r--;)if(ra(e[r][0],t))return r;return-1}var Se=ia,sa=Se,oa=Array.prototype,na=oa.splice;function aa(e){var t=this.__data__,r=sa(t,e);if(r<0)return!1;var s=t.length-1;return r==s?t.pop():na.call(t,r,1),--this.size,!0}var la=aa,ca=Se;function pa(e){var t=this.__data__,r=ca(t,e);return r<0?void 0:t[r][1]}var ha=pa,da=Se;function ua(e){return da(this.__data__,e)>-1}var ga=ua,fa=Se;function ba(e,t){var r=this.__data__,s=fa(r,e);return s<0?(++this.size,r.push([e,t])):r[s][1]=t,this}var wa=ba,ma=Zn,va=la,ya=ha,$a=ga,_a=wa;function ot(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}ot.prototype.clear=ma;ot.prototype.delete=va;ot.prototype.get=ya;ot.prototype.has=$a;ot.prototype.set=_a;var Pa=ot,xa=Yi,Oa=Wr,Sa=xa(Oa,"Map"),Ca=Sa,_i=Yn,ka=Pa,ja=Ca;function Aa(){this.size=0,this.__data__={hash:new _i,map:new(ja||ka),string:new _i}}var Ea=Aa;function Na(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Da=Na,Ta=Da;function Ua(e,t){var r=e.__data__;return Ta(t)?r[typeof t=="string"?"string":"hash"]:r.map}var Ce=Ua,Ra=Ce;function La(e){var t=Ra(this,e).delete(e);return this.size-=t?1:0,t}var za=La,Ha=Ce;function Ma(e){return Ha(this,e).get(e)}var Fa=Ma,Ia=Ce;function Ba(e){return Ia(this,e).has(e)}var qa=Ba,Va=Ce;function Ja(e,t){var r=Va(this,e),s=r.size;return r.set(e,t),this.size+=r.size==s?0:1,this}var Ga=Ja,Ka=Ea,Wa=za,Xa=Fa,Ya=qa,Qa=Ga;function nt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}nt.prototype.clear=Ka;nt.prototype.delete=Wa;nt.prototype.get=Xa;nt.prototype.has=Ya;nt.prototype.set=Qa;var Za=nt,Qi=Za,tl="Expected a function";function Qr(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(tl);var r=function(){var s=arguments,i=t?t.apply(this,s):s[0],o=r.cache;if(o.has(i))return o.get(i);var n=e.apply(this,s);return r.cache=o.set(i,n)||o,n};return r.cache=new(Qr.Cache||Qi),r}Qr.Cache=Qi;var el=Qr,rl=el,il=500;function sl(e){var t=rl(e,function(s){return r.size===il&&r.clear(),s}),r=t.cache;return t}var ol=sl,nl=ol,al=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ll=/\\(\\)?/g,cl=nl(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(al,function(r,s,i,o){t.push(i?o.replace(ll,"$1"):s||r)}),t}),pl=cl;function hl(e,t){for(var r=-1,s=e==null?0:e.length,i=Array(s);++r<s;)i[r]=t(e[r],r,e);return i}var dl=hl,Pi=Xr,ul=dl,gl=Kr,fl=Yr,bl=1/0,xi=Pi?Pi.prototype:void 0,Oi=xi?xi.toString:void 0;function Zi(e){if(typeof e=="string")return e;if(gl(e))return ul(e,Zi)+"";if(fl(e))return Oi?Oi.call(e):"";var t=e+"";return t=="0"&&1/e==-bl?"-0":t}var wl=Zi,ml=wl;function vl(e){return e==null?"":ml(e)}var yl=vl,$l=Kr,_l=Fo,Pl=pl,xl=yl;function Ol(e,t){return $l(e)?e:_l(e,t)?[e]:Pl(xl(e))}var Sl=Ol,Cl=Yr,kl=1/0;function jl(e){if(typeof e=="string"||Cl(e))return e;var t=e+"";return t=="0"&&1/e==-kl?"-0":t}var Al=jl,El=Sl,Nl=Al;function Dl(e,t){t=El(t,e);for(var r=0,s=t.length;e!=null&&r<s;)e=e[Nl(t[r++])];return r&&r==s?e:void 0}var Tl=Dl,Ul=Tl;function Rl(e,t,r){var s=e==null?void 0:Ul(e,t);return s===void 0?r:s}var Ll=Rl;const O=ao(Ll);function ts(e,t){return function(){return e.apply(t,arguments)}}const{toString:zl}=Object.prototype,{getPrototypeOf:Zr}=Object,ke=(e=>t=>{const r=zl.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),H=e=>(e=e.toLowerCase(),t=>ke(t)===e),je=e=>t=>typeof t===e,{isArray:at}=Array,mt=je("undefined");function Hl(e){return e!==null&&!mt(e)&&e.constructor!==null&&!mt(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const es=H("ArrayBuffer");function Ml(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&es(e.buffer),t}const Fl=je("string"),R=je("function"),rs=je("number"),Ae=e=>e!==null&&typeof e=="object",Il=e=>e===!0||e===!1,we=e=>{if(ke(e)!=="object")return!1;const t=Zr(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Bl=H("Date"),ql=H("File"),Vl=H("Blob"),Jl=H("FileList"),Gl=e=>Ae(e)&&R(e.pipe),Kl=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=ke(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Wl=H("URLSearchParams"),Xl=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function de(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let s,i;if(typeof e!="object"&&(e=[e]),at(e))for(s=0,i=e.length;s<i;s++)t.call(null,e[s],s,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),n=o.length;let p;for(s=0;s<n;s++)p=o[s],t.call(null,e[p],p,e)}}function is(e,t){t=t.toLowerCase();const r=Object.keys(e);let s=r.length,i;for(;s-- >0;)if(i=r[s],t===i.toLowerCase())return i;return null}const ss=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,os=e=>!mt(e)&&e!==ss;function Tr(){const{caseless:e}=os(this)&&this||{},t={},r=(s,i)=>{const o=e&&is(t,i)||i;we(t[o])&&we(s)?t[o]=Tr(t[o],s):we(s)?t[o]=Tr({},s):at(s)?t[o]=s.slice():t[o]=s};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&de(arguments[s],r);return t}const Yl=(e,t,r,{allOwnKeys:s}={})=>(de(t,(i,o)=>{r&&R(i)?e[o]=ts(i,r):e[o]=i},{allOwnKeys:s}),e),Ql=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Zl=(e,t,r,s)=>{e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},tc=(e,t,r,s)=>{let i,o,n;const p={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)n=i[o],(!s||s(n,e,t))&&!p[n]&&(t[n]=e[n],p[n]=!0);e=r!==!1&&Zr(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},ec=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const s=e.indexOf(t,r);return s!==-1&&s===r},rc=e=>{if(!e)return null;if(at(e))return e;let t=e.length;if(!rs(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},ic=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Zr(Uint8Array)),sc=(e,t)=>{const s=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=s.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},oc=(e,t)=>{let r;const s=[];for(;(r=e.exec(t))!==null;)s.push(r);return s},nc=H("HTMLFormElement"),ac=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,i){return s.toUpperCase()+i}),Si=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),lc=H("RegExp"),ns=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),s={};de(r,(i,o)=>{let n;(n=t(i,o,e))!==!1&&(s[o]=n||i)}),Object.defineProperties(e,s)},cc=e=>{ns(e,(t,r)=>{if(R(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const s=e[r];if(R(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},pc=(e,t)=>{const r={},s=i=>{i.forEach(o=>{r[o]=!0})};return at(e)?s(e):s(String(e).split(t)),r},hc=()=>{},dc=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ar="abcdefghijklmnopqrstuvwxyz",Ci="0123456789",as={DIGIT:Ci,ALPHA:Ar,ALPHA_DIGIT:Ar+Ar.toUpperCase()+Ci},uc=(e=16,t=as.ALPHA_DIGIT)=>{let r="";const{length:s}=t;for(;e--;)r+=t[Math.random()*s|0];return r};function gc(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const fc=e=>{const t=new Array(10),r=(s,i)=>{if(Ae(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[i]=s;const o=at(s)?[]:{};return de(s,(n,p)=>{const d=r(n,i+1);!mt(d)&&(o[p]=d)}),t[i]=void 0,o}}return s};return r(e,0)},bc=H("AsyncFunction"),wc=e=>e&&(Ae(e)||R(e))&&R(e.then)&&R(e.catch),c={isArray:at,isArrayBuffer:es,isBuffer:Hl,isFormData:Kl,isArrayBufferView:Ml,isString:Fl,isNumber:rs,isBoolean:Il,isObject:Ae,isPlainObject:we,isUndefined:mt,isDate:Bl,isFile:ql,isBlob:Vl,isRegExp:lc,isFunction:R,isStream:Gl,isURLSearchParams:Wl,isTypedArray:ic,isFileList:Jl,forEach:de,merge:Tr,extend:Yl,trim:Xl,stripBOM:Ql,inherits:Zl,toFlatObject:tc,kindOf:ke,kindOfTest:H,endsWith:ec,toArray:rc,forEachEntry:sc,matchAll:oc,isHTMLForm:nc,hasOwnProperty:Si,hasOwnProp:Si,reduceDescriptors:ns,freezeMethods:cc,toObjectSet:pc,toCamelCase:ac,noop:hc,toFiniteNumber:dc,findKey:is,global:ss,isContextDefined:os,ALPHABET:as,generateString:uc,isSpecCompliantForm:gc,toJSONObject:fc,isAsyncFn:bc,isThenable:wc};function P(e,t,r,s,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),s&&(this.request=s),i&&(this.response=i)}c.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ls=P.prototype,cs={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{cs[e]={value:e}});Object.defineProperties(P,cs);Object.defineProperty(ls,"isAxiosError",{value:!0});P.from=(e,t,r,s,i,o)=>{const n=Object.create(ls);return c.toFlatObject(e,n,function(d){return d!==Error.prototype},p=>p!=="isAxiosError"),P.call(n,e.message,t,r,s,i),n.cause=e,n.name=e.name,o&&Object.assign(n,o),n};const mc=null;function Ur(e){return c.isPlainObject(e)||c.isArray(e)}function ps(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function ki(e,t,r){return e?e.concat(t).map(function(i,o){return i=ps(i),!r&&o?"["+i+"]":i}).join(r?".":""):t}function vc(e){return c.isArray(e)&&!e.some(Ur)}const yc=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function Ee(e,t,r){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=c.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function($,A){return!c.isUndefined(A[$])});const s=r.metaTokens,i=r.visitor||g,o=r.dots,n=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(i))throw new TypeError("visitor must be a function");function f(m){if(m===null)return"";if(c.isDate(m))return m.toISOString();if(!d&&c.isBlob(m))throw new P("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(m)||c.isTypedArray(m)?d&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function g(m,$,A){let D=m;if(m&&!A&&typeof m=="object"){if(c.endsWith($,"{}"))$=s?$:$.slice(0,-2),m=JSON.stringify(m);else if(c.isArray(m)&&vc(m)||(c.isFileList(m)||c.endsWith($,"[]"))&&(D=c.toArray(m)))return $=ps($),D.forEach(function(B,js){!(c.isUndefined(B)||B===null)&&t.append(n===!0?ki([$],js,o):n===null?$:$+"[]",f(B))}),!1}return Ur(m)?!0:(t.append(ki(A,$,o),f(m)),!1)}const h=[],x=Object.assign(yc,{defaultVisitor:g,convertValue:f,isVisitable:Ur});function S(m,$){if(!c.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+$.join("."));h.push(m),c.forEach(m,function(D,I){(!(c.isUndefined(D)||D===null)&&i.call(t,D,c.isString(I)?I.trim():I,$,x))===!0&&S(D,$?$.concat(I):[I])}),h.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return S(e),t}function ji(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function ti(e,t){this._pairs=[],e&&Ee(e,this,t)}const hs=ti.prototype;hs.append=function(t,r){this._pairs.push([t,r])};hs.toString=function(t){const r=t?function(s){return t.call(this,s,ji)}:ji;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function $c(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ds(e,t,r){if(!t)return e;const s=r&&r.encode||$c,i=r&&r.serialize;let o;if(i?o=i(t,r):o=c.isURLSearchParams(t)?t.toString():new ti(t,r).toString(s),o){const n=e.indexOf("#");n!==-1&&(e=e.slice(0,n)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class _c{constructor(){this.handlers=[]}use(t,r,s){return this.handlers.push({fulfilled:t,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(s){s!==null&&t(s)})}}const Ai=_c,us={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pc=typeof URLSearchParams<"u"?URLSearchParams:ti,xc=typeof FormData<"u"?FormData:null,Oc=typeof Blob<"u"?Blob:null,Sc={isBrowser:!0,classes:{URLSearchParams:Pc,FormData:xc,Blob:Oc},protocols:["http","https","file","blob","url","data"]},gs=typeof window<"u"&&typeof document<"u",Cc=(e=>gs&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),kc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",jc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gs,hasStandardBrowserEnv:Cc,hasStandardBrowserWebWorkerEnv:kc},Symbol.toStringTag,{value:"Module"})),z={...jc,...Sc};function Ac(e,t){return Ee(e,new z.classes.URLSearchParams,Object.assign({visitor:function(r,s,i,o){return z.isNode&&c.isBuffer(r)?(this.append(s,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ec(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Nc(e){const t={},r=Object.keys(e);let s;const i=r.length;let o;for(s=0;s<i;s++)o=r[s],t[o]=e[o];return t}function fs(e){function t(r,s,i,o){let n=r[o++];const p=Number.isFinite(+n),d=o>=r.length;return n=!n&&c.isArray(i)?i.length:n,d?(c.hasOwnProp(i,n)?i[n]=[i[n],s]:i[n]=s,!p):((!i[n]||!c.isObject(i[n]))&&(i[n]=[]),t(r,s,i[n],o)&&c.isArray(i[n])&&(i[n]=Nc(i[n])),!p)}if(c.isFormData(e)&&c.isFunction(e.entries)){const r={};return c.forEachEntry(e,(s,i)=>{t(Ec(s),i,r,0)}),r}return null}function Dc(e,t,r){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(e)}const ei={transitional:us,adapter:["xhr","http"],transformRequest:[function(t,r){const s=r.getContentType()||"",i=s.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return i&&i?JSON.stringify(fs(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let p;if(o){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Ac(t,this.formSerializer).toString();if((p=c.isFileList(t))||s.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Ee(p?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),Dc(t)):t}],transformResponse:[function(t){const r=this.transitional||ei.transitional,s=r&&r.forcedJSONParsing,i=this.responseType==="json";if(t&&c.isString(t)&&(s&&!this.responseType||i)){const n=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(p){if(n)throw p.name==="SyntaxError"?P.from(p,P.ERR_BAD_RESPONSE,this,null,this.response):p}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:z.classes.FormData,Blob:z.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch"],e=>{ei.headers[e]={}});const ri=ei,Tc=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Uc=e=>{const t={};let r,s,i;return e&&e.split(`
`).forEach(function(n){i=n.indexOf(":"),r=n.substring(0,i).trim().toLowerCase(),s=n.substring(i+1).trim(),!(!r||t[r]&&Tc[r])&&(r==="set-cookie"?t[r]?t[r].push(s):t[r]=[s]:t[r]=t[r]?t[r]+", "+s:s)}),t},Ei=Symbol("internals");function ht(e){return e&&String(e).trim().toLowerCase()}function me(e){return e===!1||e==null?e:c.isArray(e)?e.map(me):String(e)}function Rc(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(e);)t[s[1]]=s[2];return t}const Lc=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Er(e,t,r,s,i){if(c.isFunction(s))return s.call(this,t,r);if(i&&(t=r),!!c.isString(t)){if(c.isString(s))return t.indexOf(s)!==-1;if(c.isRegExp(s))return s.test(t)}}function zc(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,s)=>r.toUpperCase()+s)}function Hc(e,t){const r=c.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+r,{value:function(i,o,n){return this[s].call(this,t,i,o,n)},configurable:!0})})}class Ne{constructor(t){t&&this.set(t)}set(t,r,s){const i=this;function o(p,d,f){const g=ht(d);if(!g)throw new Error("header name must be a non-empty string");const h=c.findKey(i,g);(!h||i[h]===void 0||f===!0||f===void 0&&i[h]!==!1)&&(i[h||d]=me(p))}const n=(p,d)=>c.forEach(p,(f,g)=>o(f,g,d));return c.isPlainObject(t)||t instanceof this.constructor?n(t,r):c.isString(t)&&(t=t.trim())&&!Lc(t)?n(Uc(t),r):t!=null&&o(r,t,s),this}get(t,r){if(t=ht(t),t){const s=c.findKey(this,t);if(s){const i=this[s];if(!r)return i;if(r===!0)return Rc(i);if(c.isFunction(r))return r.call(this,i,s);if(c.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=ht(t),t){const s=c.findKey(this,t);return!!(s&&this[s]!==void 0&&(!r||Er(this,this[s],s,r)))}return!1}delete(t,r){const s=this;let i=!1;function o(n){if(n=ht(n),n){const p=c.findKey(s,n);p&&(!r||Er(s,s[p],p,r))&&(delete s[p],i=!0)}}return c.isArray(t)?t.forEach(o):o(t),i}clear(t){const r=Object.keys(this);let s=r.length,i=!1;for(;s--;){const o=r[s];(!t||Er(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const r=this,s={};return c.forEach(this,(i,o)=>{const n=c.findKey(s,o);if(n){r[n]=me(i),delete r[o];return}const p=t?zc(o):String(o).trim();p!==o&&delete r[o],r[p]=me(i),s[p]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return c.forEach(this,(s,i)=>{s!=null&&s!==!1&&(r[i]=t&&c.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const s=new this(t);return r.forEach(i=>s.set(i)),s}static accessor(t){const s=(this[Ei]=this[Ei]={accessors:{}}).accessors,i=this.prototype;function o(n){const p=ht(n);s[p]||(Hc(i,n),s[p]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}}Ne.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(Ne.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){this[r]=s}}});c.freezeMethods(Ne);const F=Ne;function Nr(e,t){const r=this||ri,s=t||r,i=F.from(s.headers);let o=s.data;return c.forEach(e,function(p){o=p.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function bs(e){return!!(e&&e.__CANCEL__)}function ue(e,t,r){P.call(this,e??"canceled",P.ERR_CANCELED,t,r),this.name="CanceledError"}c.inherits(ue,P,{__CANCEL__:!0});function Mc(e,t,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):t(new P("Request failed with status code "+r.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Fc=z.hasStandardBrowserEnv?{write(e,t,r,s,i,o){const n=[e+"="+encodeURIComponent(t)];c.isNumber(r)&&n.push("expires="+new Date(r).toGMTString()),c.isString(s)&&n.push("path="+s),c.isString(i)&&n.push("domain="+i),o===!0&&n.push("secure"),document.cookie=n.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ic(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Bc(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ws(e,t){return e&&!Ic(t)?Bc(e,t):t}const qc=z.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let s;function i(o){let n=o;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=i(window.location.href),function(n){const p=c.isString(n)?i(n):n;return p.protocol===s.protocol&&p.host===s.host}}():function(){return function(){return!0}}();function Vc(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Jc(e,t){e=e||10;const r=new Array(e),s=new Array(e);let i=0,o=0,n;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),g=s[o];n||(n=f),r[i]=d,s[i]=f;let h=o,x=0;for(;h!==i;)x+=r[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),f-n<t)return;const S=g&&f-g;return S?Math.round(x*1e3/S):void 0}}function Ni(e,t){let r=0;const s=Jc(50,250);return i=>{const o=i.loaded,n=i.lengthComputable?i.total:void 0,p=o-r,d=s(p),f=o<=n;r=o;const g={loaded:o,total:n,progress:n?o/n:void 0,bytes:p,rate:d||void 0,estimated:d&&n&&f?(n-o)/d:void 0,event:i};g[t?"download":"upload"]=!0,e(g)}}const Gc=typeof XMLHttpRequest<"u",Kc=Gc&&function(e){return new Promise(function(r,s){let i=e.data;const o=F.from(e.headers).normalize();let{responseType:n,withXSRFToken:p}=e,d;function f(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}let g;if(c.isFormData(i)){if(z.hasStandardBrowserEnv||z.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((g=o.getContentType())!==!1){const[$,...A]=g?g.split(";").map(D=>D.trim()).filter(Boolean):[];o.setContentType([$||"multipart/form-data",...A].join("; "))}}let h=new XMLHttpRequest;if(e.auth){const $=e.auth.username||"",A=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa($+":"+A))}const x=ws(e.baseURL,e.url);h.open(e.method.toUpperCase(),ds(x,e.params,e.paramsSerializer),!0),h.timeout=e.timeout;function S(){if(!h)return;const $=F.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),D={data:!n||n==="text"||n==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:$,config:e,request:h};Mc(function(B){r(B),f()},function(B){s(B),f()},D),h=null}if("onloadend"in h?h.onloadend=S:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(S)},h.onabort=function(){h&&(s(new P("Request aborted",P.ECONNABORTED,e,h)),h=null)},h.onerror=function(){s(new P("Network Error",P.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let A=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const D=e.transitional||us;e.timeoutErrorMessage&&(A=e.timeoutErrorMessage),s(new P(A,D.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,e,h)),h=null},z.hasStandardBrowserEnv&&(p&&c.isFunction(p)&&(p=p(e)),p||p!==!1&&qc(x))){const $=e.xsrfHeaderName&&e.xsrfCookieName&&Fc.read(e.xsrfCookieName);$&&o.set(e.xsrfHeaderName,$)}i===void 0&&o.setContentType(null),"setRequestHeader"in h&&c.forEach(o.toJSON(),function(A,D){h.setRequestHeader(D,A)}),c.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),n&&n!=="json"&&(h.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&h.addEventListener("progress",Ni(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",Ni(e.onUploadProgress)),(e.cancelToken||e.signal)&&(d=$=>{h&&(s(!$||$.type?new ue(null,e,h):$),h.abort(),h=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d)));const m=Vc(x);if(m&&z.protocols.indexOf(m)===-1){s(new P("Unsupported protocol "+m+":",P.ERR_BAD_REQUEST,e));return}h.send(i||null)})},Rr={http:mc,xhr:Kc};c.forEach(Rr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Di=e=>`- ${e}`,Wc=e=>c.isFunction(e)||e===null||e===!1,ms={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let r,s;const i={};for(let o=0;o<t;o++){r=e[o];let n;if(s=r,!Wc(r)&&(s=Rr[(n=String(r)).toLowerCase()],s===void 0))throw new P(`Unknown adapter '${n}'`);if(s)break;i[n||"#"+o]=s}if(!s){const o=Object.entries(i).map(([p,d])=>`adapter ${p} `+(d===!1?"is not supported by the environment":"is not available in the build"));let n=t?o.length>1?`since :
`+o.map(Di).join(`
`):" "+Di(o[0]):"as no adapter specified";throw new P("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return s},adapters:Rr};function Dr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ue(null,e)}function Ti(e){return Dr(e),e.headers=F.from(e.headers),e.data=Nr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ms.getAdapter(e.adapter||ri.adapter)(e).then(function(s){return Dr(e),s.data=Nr.call(e,e.transformResponse,s),s.headers=F.from(s.headers),s},function(s){return bs(s)||(Dr(e),s&&s.response&&(s.response.data=Nr.call(e,e.transformResponse,s.response),s.response.headers=F.from(s.response.headers))),Promise.reject(s)})}const Ui=e=>e instanceof F?e.toJSON():e;function it(e,t){t=t||{};const r={};function s(f,g,h){return c.isPlainObject(f)&&c.isPlainObject(g)?c.merge.call({caseless:h},f,g):c.isPlainObject(g)?c.merge({},g):c.isArray(g)?g.slice():g}function i(f,g,h){if(c.isUndefined(g)){if(!c.isUndefined(f))return s(void 0,f,h)}else return s(f,g,h)}function o(f,g){if(!c.isUndefined(g))return s(void 0,g)}function n(f,g){if(c.isUndefined(g)){if(!c.isUndefined(f))return s(void 0,f)}else return s(void 0,g)}function p(f,g,h){if(h in t)return s(f,g);if(h in e)return s(void 0,f)}const d={url:o,method:o,data:o,baseURL:n,transformRequest:n,transformResponse:n,paramsSerializer:n,timeout:n,timeoutMessage:n,withCredentials:n,withXSRFToken:n,adapter:n,responseType:n,xsrfCookieName:n,xsrfHeaderName:n,onUploadProgress:n,onDownloadProgress:n,decompress:n,maxContentLength:n,maxBodyLength:n,beforeRedirect:n,transport:n,httpAgent:n,httpsAgent:n,cancelToken:n,socketPath:n,responseEncoding:n,validateStatus:p,headers:(f,g)=>i(Ui(f),Ui(g),!0)};return c.forEach(Object.keys(Object.assign({},e,t)),function(g){const h=d[g]||i,x=h(e[g],t[g],g);c.isUndefined(x)&&h!==p||(r[g]=x)}),r}const vs="1.6.2",ii={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ii[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});const Ri={};ii.transitional=function(t,r,s){function i(o,n){return"[Axios v"+vs+"] Transitional option '"+o+"'"+n+(s?". "+s:"")}return(o,n,p)=>{if(t===!1)throw new P(i(n," has been removed"+(r?" in "+r:"")),P.ERR_DEPRECATED);return r&&!Ri[n]&&(Ri[n]=!0,console.warn(i(n," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,n,p):!0}};function Xc(e,t,r){if(typeof e!="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let i=s.length;for(;i-- >0;){const o=s[i],n=t[o];if(n){const p=e[o],d=p===void 0||n(p,o,e);if(d!==!0)throw new P("option "+o+" must be "+d,P.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new P("Unknown option "+o,P.ERR_BAD_OPTION)}}const Lr={assertOptions:Xc,validators:ii},q=Lr.validators;class _e{constructor(t){this.defaults=t,this.interceptors={request:new Ai,response:new Ai}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=it(this.defaults,r);const{transitional:s,paramsSerializer:i,headers:o}=r;s!==void 0&&Lr.assertOptions(s,{silentJSONParsing:q.transitional(q.boolean),forcedJSONParsing:q.transitional(q.boolean),clarifyTimeoutError:q.transitional(q.boolean)},!1),i!=null&&(c.isFunction(i)?r.paramsSerializer={serialize:i}:Lr.assertOptions(i,{encode:q.function,serialize:q.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let n=o&&c.merge(o.common,o[r.method]);o&&c.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),r.headers=F.concat(n,o);const p=[];let d=!0;this.interceptors.request.forEach(function($){typeof $.runWhen=="function"&&$.runWhen(r)===!1||(d=d&&$.synchronous,p.unshift($.fulfilled,$.rejected))});const f=[];this.interceptors.response.forEach(function($){f.push($.fulfilled,$.rejected)});let g,h=0,x;if(!d){const m=[Ti.bind(this),void 0];for(m.unshift.apply(m,p),m.push.apply(m,f),x=m.length,g=Promise.resolve(r);h<x;)g=g.then(m[h++],m[h++]);return g}x=p.length;let S=r;for(h=0;h<x;){const m=p[h++],$=p[h++];try{S=m(S)}catch(A){$.call(this,A);break}}try{g=Ti.call(this,S)}catch(m){return Promise.reject(m)}for(h=0,x=f.length;h<x;)g=g.then(f[h++],f[h++]);return g}getUri(t){t=it(this.defaults,t);const r=ws(t.baseURL,t.url);return ds(r,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){_e.prototype[t]=function(r,s){return this.request(it(s||{},{method:t,url:r,data:(s||{}).data}))}});c.forEach(["post","put","patch"],function(t){function r(s){return function(o,n,p){return this.request(it(p||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:o,data:n}))}}_e.prototype[t]=r(),_e.prototype[t+"Form"]=r(!0)});const ve=_e;class si{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const s=this;this.promise.then(i=>{if(!s._listeners)return;let o=s._listeners.length;for(;o-- >0;)s._listeners[o](i);s._listeners=null}),this.promise.then=i=>{let o;const n=new Promise(p=>{s.subscribe(p),o=p}).then(i);return n.cancel=function(){s.unsubscribe(o)},n},t(function(o,n,p){s.reason||(s.reason=new ue(o,n,p),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new si(function(i){t=i}),cancel:t}}}const Yc=si;function Qc(e){return function(r){return e.apply(null,r)}}function Zc(e){return c.isObject(e)&&e.isAxiosError===!0}const zr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(zr).forEach(([e,t])=>{zr[t]=e});const tp=zr;function ys(e){const t=new ve(e),r=ts(ve.prototype.request,t);return c.extend(r,ve.prototype,t,{allOwnKeys:!0}),c.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return ys(it(e,i))},r}const C=ys(ri);C.Axios=ve;C.CanceledError=ue;C.CancelToken=Yc;C.isCancel=bs;C.VERSION=vs;C.toFormData=Ee;C.AxiosError=P;C.Cancel=C.CanceledError;C.all=function(t){return Promise.all(t)};C.spread=Qc;C.isAxiosError=Zc;C.mergeConfig=it;C.AxiosHeaders=F;C.formToJSON=e=>fs(c.isHTMLForm(e)?new FormData(e):e);C.getAdapter=ms.getAdapter;C.HttpStatusCode=tp;C.default=C;const ep=C,rp="https://graphsearch.epfl.ch/api",v=ep.create({baseURL:rp}),lt=({id:e,fields:t},{signal:r})=>v.get(`/concepts/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),ip=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/concepts/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),sp=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/concepts/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),op=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/concepts/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),np=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/concepts/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),ap=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/concepts/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),lp=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/concepts/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),L=({locale:e})=>["_id","_url",`_description_large.${e}.value`,`name.${e}.value`].toString(),E=({locale:e})=>["_id","_url","course_code",`name.${e}.value`,`summary.${e}.value`].toString(),N=({locale:e})=>["_id","_url","video"].toString(),k=({locale:e})=>["_id","_url","name_display",`biography.${e}`].toString(),T=({locale:e})=>["_id","_url","title",`type.${e}`,"publisher","published_in","year","abstract"].toString(),U=({locale:e})=>["_id","_url",`name.${e}.value`,"path"].toString(),cp=':host{--p: .627955 .257683 29.233885;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--pc: .125591 .051537 29.233885;--sc: .13133 .022774 188.768218;--ac: .125591 .051537 29.233885;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: .125591 .051537 29.233885;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: .656651 .113868 188.768218;--a: .627955 .257683 29.233885;--n: .247759 0 0;--nc: 1 0 0;--er: .627955 .257683 29.233885;--b1: 1 0 0;--b2: .92494 0 0;--b3: .873021 0 0;--bc: .247759 0 0;--rounded-box: .25rem;--rounded-btn: .125rem;--btn-text-case: none}:host,[data-theme]{background-color:var(--fallback-b1, oklch(var(--b1) / 1));color:var(--fallback-bc, oklch(var(--bc) / 1))}:host{-webkit-tap-highlight-color:transparent;line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}',pp=".btn-primary,.btn-primary.btn-outline:hover,.btn-secondary,.btn-secondary.btn-outline:hover{color:var(--fallback-nc, oklch(var(--nc) / 1))}",hp='*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root,[data-theme]{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color: oklch(0 0 0)){:root{color-scheme:light;--fallback-p: #491eff;--fallback-pc: #d4dbff;--fallback-s: #ff41c7;--fallback-sc: #fff9fc;--fallback-a: #00cfbd;--fallback-ac: #00100d;--fallback-n: #2b3440;--fallback-nc: #d7dde4;--fallback-b1: #ffffff;--fallback-b2: #e5e6e6;--fallback-b3: #e5e6e6;--fallback-bc: #1f2937;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000}@media (prefers-color-scheme: dark){:root{color-scheme:dark;--fallback-p: #7582ff;--fallback-pc: #050617;--fallback-s: #ff71cf;--fallback-sc: #190211;--fallback-a: #00c7b5;--fallback-ac: #000e0c;--fallback-n: #2a323c;--fallback-nc: #a6adbb;--fallback-b1: #1d232a;--fallback-b2: #191e24;--fallback-b3: #15191e;--fallback-bc: #a6adbb;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000}}}html{-webkit-tap-highlight-color:transparent}:root{--p: .627955 .257683 29.233885;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--pc: .125591 .051537 29.233885;--sc: .13133 .022774 188.768218;--ac: .125591 .051537 29.233885;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: .125591 .051537 29.233885;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: .656651 .113868 188.768218;--a: .627955 .257683 29.233885;--n: .247759 0 0;--nc: 1 0 0;--er: .627955 .257683 29.233885;--b1: 1 0 0;--b2: .92494 0 0;--b3: .873021 0 0;--bc: .247759 0 0;--rounded-box: .25rem;--rounded-btn: .125rem;--btn-text-case: none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.breadcrumbs{max-width:100%;overflow-x:auto;padding-top:.5rem;padding-bottom:.5rem}.breadcrumbs>ul,.breadcrumbs>ol{display:flex;align-items:center;white-space:nowrap;min-height:min-content}.breadcrumbs>ul>li,.breadcrumbs>ol>li{display:flex;align-items:center}.breadcrumbs>ul>li>a,.breadcrumbs>ol>li>a{display:flex;cursor:pointer;align-items:center}@media (hover:hover){.breadcrumbs>ul>li>a:hover,.breadcrumbs>ol>li>a:hover{text-decoration-line:underline}}.btn{display:inline-flex;height:3rem;min-height:3rem;flex-shrink:0;cursor:pointer;-webkit-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-radius:var(--rounded-btn, .5rem);border-color:transparent;border-color:oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity));padding-left:1rem;padding-right:1rem;text-align:center;font-size:.875rem;line-height:1em;gap:.5rem;font-weight:600;text-decoration-line:none;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);border-width:var(--border-btn, 1px);animation:button-pop var(--animation-btn, .25s) ease-out;transition-property:color,background-color,border-color,opacity,box-shadow,transform;--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-color:var(--fallback-bc,oklch(var(--bc)/1));background-color:oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity));--tw-bg-opacity: 1;--tw-border-opacity: 1}.btn-disabled,.btn[disabled],.btn:disabled{pointer-events:none}:where(.btn:is(input[type=checkbox])),:where(.btn:is(input[type=radio])){width:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn:is(input[type=checkbox]):after,.btn:is(input[type=radio]):after{--tw-content: attr(aria-label);content:var(--tw-content)}@media (hover: hover){.btn:hover{--tw-border-opacity: 1;border-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn:hover{background-color:color-mix(in oklab,oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%,black);border-color:color-mix(in oklab,oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity, 1)) 90%,black)}}@supports not (color: oklch(0 0 0)){.btn:hover{background-color:var(--btn-color, var(--fallback-b2));border-color:var(--btn-color, var(--fallback-b2))}}.btn.glass:hover{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn-outline:hover{--tw-border-opacity: 1;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));--tw-text-opacity: 1;color:var(--fallback-b1,oklch(var(--b1)/var(--tw-text-opacity)))}.btn-outline.btn-primary:hover{--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-primary:hover{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black)}}.btn-outline.btn-secondary:hover{--tw-text-opacity: 1;color:var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-secondary:hover{background-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,black)}}.btn-outline.btn-accent:hover{--tw-text-opacity: 1;color:var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-accent:hover{background-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,black)}}.btn-outline.btn-success:hover{--tw-text-opacity: 1;color:var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-success:hover{background-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,black)}}.btn-outline.btn-info:hover{--tw-text-opacity: 1;color:var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-info:hover{background-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,black)}}.btn-outline.btn-warning:hover{--tw-text-opacity: 1;color:var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-warning:hover{background-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,black)}}.btn-outline.btn-error:hover{--tw-text-opacity: 1;color:var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-error:hover{background-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,black)}}.btn-disabled:hover,.btn[disabled]:hover,.btn:disabled:hover{--tw-border-opacity: 0;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));--tw-bg-opacity: .2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-text-opacity: .2}@supports (color: color-mix(in oklab,black,black)){.btn:is(input[type=checkbox]:checked):hover,.btn:is(input[type=radio]:checked):hover{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black)}}}.footer{display:grid;width:100%;grid-auto-flow:row;place-items:start;column-gap:1rem;row-gap:2.5rem;font-size:.875rem;line-height:1.25rem}.footer>*{display:grid;place-items:start;gap:.5rem}@media (min-width: 48rem){.footer{grid-auto-flow:column}.footer-center{grid-auto-flow:row dense}}.join{display:inline-flex;align-items:stretch;border-radius:var(--rounded-btn, .5rem)}.join :where(.join-item){border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:0;border-start-start-radius:0}.join .join-item:not(:first-child):not(:last-child),.join *:not(:first-child):not(:last-child) .join-item{border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:0;border-start-start-radius:0}.join .join-item:first-child:not(:last-child),.join *:first-child:not(:last-child) .join-item{border-start-end-radius:0;border-end-end-radius:0}.join .dropdown .join-item:first-child:not(:last-child),.join *:first-child:not(:last-child) .dropdown .join-item{border-start-end-radius:inherit;border-end-end-radius:inherit}.join :where(.join-item:first-child:not(:last-child)),.join :where(*:first-child:not(:last-child) .join-item){border-end-start-radius:inherit;border-start-start-radius:inherit}.join .join-item:last-child:not(:first-child),.join *:last-child:not(:first-child) .join-item{border-end-start-radius:0;border-start-start-radius:0}.join :where(.join-item:last-child:not(:first-child)),.join :where(*:last-child:not(:first-child) .join-item){border-start-end-radius:inherit;border-end-end-radius:inherit}@supports not selector(:has(*)){:where(.join *){border-radius:inherit}}@supports selector(:has(*)){:where(.join *:has(.join-item)){border-radius:inherit}}.link{cursor:pointer;text-decoration-line:underline}.breadcrumbs>ul>li>a:focus,.breadcrumbs>ol>li>a:focus{outline:2px solid transparent;outline-offset:2px}.breadcrumbs>ul>li>a:focus-visible,.breadcrumbs>ol>li>a:focus-visible{outline:2px solid currentColor;outline-offset:2px}.breadcrumbs>ul>li+*:before,.breadcrumbs>ol>li+*:before{content:"";margin-left:.5rem;margin-right:.75rem;display:block;height:.375rem;width:.375rem;--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:.4;border-top:1px solid;border-right:1px solid;background-color:transparent}[dir=rtl] .breadcrumbs>ul>li+*:before,[dir=rtl] .breadcrumbs>ol>li+*:before{--tw-rotate: -135deg}.btn:active:hover,.btn:active:focus{animation:button-pop 0s ease-out;transform:scale(var(--btn-focus-scale, .97))}@supports not (color: oklch(0 0 0)){.btn{background-color:var(--btn-color, var(--fallback-b2));border-color:var(--btn-color, var(--fallback-b2))}.btn-primary{--btn-color: var(--fallback-p)}}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-primary.btn-active{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black)}.btn-outline.btn-secondary.btn-active{background-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,black)}.btn-outline.btn-accent.btn-active{background-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,black)}.btn-outline.btn-success.btn-active{background-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,black)}.btn-outline.btn-info.btn-active{background-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,black)}.btn-outline.btn-warning.btn-active{background-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,black)}.btn-outline.btn-error.btn-active{background-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,black)}}.btn:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px}.btn-primary{--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));outline-color:var(--fallback-p,oklch(var(--p)/1))}@supports (color: oklch(0 0 0)){.btn-primary{--btn-color: var(--p)}}.btn.glass{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-color:currentColor}.btn.glass.btn-active{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn-outline{border-color:currentColor;background-color:transparent;--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn-outline.btn-active{--tw-border-opacity: 1;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));--tw-text-opacity: 1;color:var(--fallback-b1,oklch(var(--b1)/var(--tw-text-opacity)))}.btn-outline.btn-primary{--tw-text-opacity: 1;color:var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)))}.btn-outline.btn-primary.btn-active{--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.btn-outline.btn-secondary{--tw-text-opacity: 1;color:var(--fallback-s,oklch(var(--s)/var(--tw-text-opacity)))}.btn-outline.btn-secondary.btn-active{--tw-text-opacity: 1;color:var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)))}.btn-outline.btn-accent{--tw-text-opacity: 1;color:var(--fallback-a,oklch(var(--a)/var(--tw-text-opacity)))}.btn-outline.btn-accent.btn-active{--tw-text-opacity: 1;color:var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)))}.btn-outline.btn-success{--tw-text-opacity: 1;color:var(--fallback-su,oklch(var(--su)/var(--tw-text-opacity)))}.btn-outline.btn-success.btn-active{--tw-text-opacity: 1;color:var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)))}.btn-outline.btn-info{--tw-text-opacity: 1;color:var(--fallback-in,oklch(var(--in)/var(--tw-text-opacity)))}.btn-outline.btn-info.btn-active{--tw-text-opacity: 1;color:var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)))}.btn-outline.btn-warning{--tw-text-opacity: 1;color:var(--fallback-wa,oklch(var(--wa)/var(--tw-text-opacity)))}.btn-outline.btn-warning.btn-active{--tw-text-opacity: 1;color:var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)))}.btn-outline.btn-error{--tw-text-opacity: 1;color:var(--fallback-er,oklch(var(--er)/var(--tw-text-opacity)))}.btn-outline.btn-error.btn-active{--tw-text-opacity: 1;color:var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)))}.btn.btn-disabled,.btn[disabled],.btn:disabled{--tw-border-opacity: 0;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));--tw-bg-opacity: .2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-text-opacity: .2}.btn:is(input[type=checkbox]:checked),.btn:is(input[type=radio]:checked){--tw-border-opacity: 1;border-color:var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.btn:is(input[type=checkbox]:checked):focus-visible,.btn:is(input[type=radio]:checked):focus-visible{outline-color:var(--fallback-p,oklch(var(--p)/1))}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .98))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}.join>:where(*:not(:first-child)){margin-top:0;margin-bottom:0;margin-inline-start:-1px}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset}50%{box-shadow:0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset}to{box-shadow:0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.btn-xs{height:1.5rem;min-height:1.5rem;padding-left:.5rem;padding-right:.5rem;font-size:.75rem}.btn-square:where(.btn-xs){height:1.5rem;width:1.5rem;padding:0}.btn-circle:where(.btn-xs){height:1.5rem;width:1.5rem;border-radius:9999px;padding:0}.join.join-vertical{flex-direction:column}.join.join-vertical .join-item:first-child:not(:last-child),.join.join-vertical *:first-child:not(:last-child) .join-item{border-end-start-radius:0;border-end-end-radius:0;border-start-start-radius:inherit;border-start-end-radius:inherit}.join.join-vertical .join-item:last-child:not(:first-child),.join.join-vertical *:last-child:not(:first-child) .join-item{border-start-start-radius:0;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:inherit}.join.join-horizontal{flex-direction:row}.join.join-horizontal .join-item:first-child:not(:last-child),.join.join-horizontal *:first-child:not(:last-child) .join-item{border-end-end-radius:0;border-start-end-radius:0;border-end-start-radius:inherit;border-start-start-radius:inherit}.join.join-horizontal .join-item:last-child:not(:first-child),.join.join-horizontal *:last-child:not(:first-child) .join-item{border-end-start-radius:0;border-start-start-radius:0;border-end-end-radius:inherit;border-start-end-radius:inherit}.join.join-vertical>:where(*:not(:first-child)){margin-left:0;margin-right:0;margin-top:-1px}.join.join-horizontal>:where(*:not(:first-child)){margin-top:0;margin-bottom:0;margin-inline-start:-1px}.static{position:static}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.inline{display:inline}.flex{display:flex}.flex-col{flex-direction:column}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-6{gap:1.5rem}.self-start{align-self:flex-start}.py-0{padding-top:0;padding-bottom:0}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-300{--tw-text-opacity: 1;color:rgb(193 193 193 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(112 112 112 / var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}';var dp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,gp=(e,t,r,s)=>{for(var i=s>1?void 0:s?up(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&dp(t,r,i),i};const oi=class oi extends gt{constructor(){super(...arguments),this.locale="en"}};oi.styles=[be(cp),be(hp),be(pp)];let b=oi;gp([l({type:String})],b.prototype,"locale",2);var fp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,$s=(e,t,r,s)=>{for(var i=s>1?void 0:s?bp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&fp(t,r,i),i};let Hr=class extends b{constructor(){super(...arguments),this.concept={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.concept._url} class="link font-medium self-start">
        ${O(this.concept,["name",this.locale,"value"])}
      </a>

      <p class="line-clamp-2 text-sm text-gray-600">
        ${O(this.concept,["_description_large",this.locale,"value"])}
      </p>
    </div> `}};$s([l({type:Object})],Hr.prototype,"concept",2);Hr=$s([w("graph-widget-concept")],Hr);var wp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,vp=(e,t,r,s)=>{for(var i=s>1?void 0:s?mp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&wp(t,r,i),i};let Li=class extends b{render(){return a`<div class="text-red-500"><slot></slot></div>`}};Li=vp([w("graph-widget-error")],Li);var yp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,_p=(e,t,r,s)=>{for(var i=s>1?void 0:s?$p(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&yp(t,r,i),i};let zi=class extends b{render(){return a`<div>${u("Loading")}</div>`}};zi=_p([y(),w("graph-widget-loading")],zi);var Pp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,Op=(e,t,r,s)=>{for(var i=s>1?void 0:s?xp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Pp(t,r,i),i};let Hi=class extends b{render(){return a`<div class="text-gray-300">${u`No results`}</div>`}};Hi=Op([y(),w("graph-widget-no-results")],Hi);var Sp=Object.defineProperty,Cp=Object.getOwnPropertyDescriptor,kp=(e,t,r,s)=>{for(var i=s>1?void 0:s?Cp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Sp(t,r,i),i};let Mi=class extends b{render(){return a`
      <section class="flex flex-col gap-6">
        <slot name="header"></slot>
        <slot class="flex flex-col gap-2"></slot>
        <slot name="footer"></slot>
      </section>
    `}};Mi=kp([w("graph-widget-section")],Mi);var jp=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,_s=(e,t,r,s)=>{for(var i=s>1?void 0:s?Ap(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&jp(t,r,i),i};let Mr=class extends b{constructor(){super(...arguments),this.href=""}render(){return a`<a
      href=${this.href}
      class="btn btn-outline btn-xs btn-primary hover:text-white"
    >
      ${u("View on Graph Search")}
    </a>`}};_s([l({type:String})],Mr.prototype,"href",2);Mr=_s([y(),w("graph-widget-section-link")],Mr);var Ep=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,Ps=(e,t,r,s)=>{for(var i=s>1?void 0:s?Np(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Ep(t,r,i),i};let Fr=class extends b{constructor(){super(...arguments),this.description=""}render(){return a`<span class="text-sm text-gray-600">${this.description}</span>
      <h1 class="text-xl font-medium"><slot class="line-clamp-2"></slot></h1>`}};Ps([l({type:String})],Fr.prototype,"description",2);Fr=Ps([w("graph-widget-section-title")],Fr);var Dp=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,De=(e,t,r,s)=>{for(var i=s>1?void 0:s?Tp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Dp(t,r,i),i};let vt=class extends b{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptConcepts=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([lt({id:e,fields:L({locale:t})},{signal:i}),ip({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Concepts related to this concept")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};De([l({type:String})],vt.prototype,"concept-id",2);De([l({type:String})],vt.prototype,"limit",2);De([l({type:String})],vt.prototype,"offset",2);vt=De([y(),w("graph-widget-concept-concepts")],vt);var Up=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,xs=(e,t,r,s)=>{for(var i=s>1?void 0:s?Rp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Up(t,r,i),i};let Ir=class extends b{constructor(){super(...arguments),this.course={}}render(){const e=[this.course.course_code,O(this.course,["name",this.locale,"value"])].filter(Boolean).join(": ");return a`<div class="flex flex-col gap-1">
      <a href=${this.course._url} class="link font-medium self-start"
        >${e}</a
      >
      <p class="line-clamp-2 text-sm text-gray-600">
        ${O(this.course,["summary",this.locale,"value"])}
      </p>
    </div> `}};xs([l({type:Object})],Ir.prototype,"course",2);Ir=xs([w("graph-widget-course")],Ir);var Lp=Object.defineProperty,zp=Object.getOwnPropertyDescriptor,Te=(e,t,r,s)=>{for(var i=s>1?void 0:s?zp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Lp(t,r,i),i};let yt=class extends b{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptCourses=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([lt({id:e,fields:L({locale:t})},{signal:i}),sp({id:e,fields:E({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Courses related to this concept")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Te([l({type:String})],yt.prototype,"concept-id",2);Te([l({type:String})],yt.prototype,"limit",2);Te([l({type:String})],yt.prototype,"offset",2);yt=Te([y(),w("graph-widget-concept-courses")],yt);var Hp=Object.defineProperty,Mp=Object.getOwnPropertyDescriptor,Os=(e,t,r,s)=>{for(var i=s>1?void 0:s?Mp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Hp(t,r,i),i};let Br=class extends b{constructor(){super(...arguments),this.lecture={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.lecture._url} class="link font-medium self-start">
        ${this.lecture.video.title}
      </a>

      <p class="line-clamp-2 text-sm text-gray-600">
        ${this.lecture.video.subtitle}
      </p>
    </div> `}};Os([l({type:Object})],Br.prototype,"lecture",2);Br=Os([w("graph-widget-lecture")],Br);var Fp=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,Ue=(e,t,r,s)=>{for(var i=s>1?void 0:s?Ip(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Fp(t,r,i),i};let $t=class extends b{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptLectures=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([lt({id:e,fields:L({locale:t})},{signal:i}),op({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Lectures related to this concept")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Ue([l({type:String})],$t.prototype,"concept-id",2);Ue([l({type:String})],$t.prototype,"limit",2);Ue([l({type:String})],$t.prototype,"offset",2);$t=Ue([y(),w("graph-widget-concept-lectures")],$t);var Bp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,Ss=(e,t,r,s)=>{for(var i=s>1?void 0:s?qp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Bp(t,r,i),i};let qr=class extends b{constructor(){super(...arguments),this.person={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.person._url} class="link font-medium self-start">
        ${this.person.name_display}
      </a>

      <p class="line-clamp-2 text-sm text-gray-600">
        ${O(this.person,["biography",this.locale])}
      </p>
    </div>`}};Ss([l({type:Object})],qr.prototype,"person",2);qr=Ss([w("graph-widget-person")],qr);var Vp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,Re=(e,t,r,s)=>{for(var i=s>1?void 0:s?Jp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Vp(t,r,i),i};let _t=class extends b{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptPersons=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([lt({id:e,fields:L({locale:t})},{signal:i}),np({id:e,fields:k({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("People related to this concept")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Re([l({type:String})],_t.prototype,"concept-id",2);Re([l({type:String})],_t.prototype,"limit",2);Re([l({type:String})],_t.prototype,"offset",2);_t=Re([y(),w("graph-widget-concept-persons")],_t);var Gp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,Cs=(e,t,r,s)=>{for(var i=s>1?void 0:s?Kp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Gp(t,r,i),i};let Vr=class extends b{constructor(){super(...arguments),this.publication={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.publication._url} class="link font-medium self-start">
        ${this.publication.title}
      </a>
      ${this.publication.abstract&&a`<p class="line-clamp-2 text-sm text-gray-600">
        ${this.publication.abstract}
      </p>`}
      ${this.publication.publisher&&a` <i class="line-clamp-1">${this.publication.publisher}</i> `}
      ${this.publication.year}
    </div> `}};Cs([l({type:Object})],Vr.prototype,"publication",2);Vr=Cs([w("graph-widget-publication")],Vr);var Wp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,Le=(e,t,r,s)=>{for(var i=s>1?void 0:s?Xp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Wp(t,r,i),i};let Pt=class extends b{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptPublications=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([lt({id:e,fields:L({locale:t})},{signal:i}),ap({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptPublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${"Publications related to this concept"}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Le([l({type:String})],Pt.prototype,"concept-id",2);Le([l({type:String})],Pt.prototype,"limit",2);Le([l({type:String})],Pt.prototype,"offset",2);Pt=Le([y(),w("graph-widget-concept-publications")],Pt);var Yp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,ks=(e,t,r,s)=>{for(var i=s>1?void 0:s?Qp(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Yp(t,r,i),i};let Jr=class extends b{constructor(){super(...arguments),this.unit={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.unit._url} class="link font-medium self-start">
        ${O(this.unit,["name",this.locale,"value"])}
      </a>

      <nav class="breadcrumbs py-0 text-xs">
        <ul>
          ${this.unit.path.map((e,t,r)=>a`<li key=${e._id}>
              ${r.length>t+1?a`<a href=${e._url}>${e.initials}</a>`:a`<span class="text-gray-600">${e.initials}</span>`}
            </li>`)}
        </ul>
      </nav>
    </div>`}};ks([l({type:Object})],Jr.prototype,"unit",2);Jr=ks([w("graph-widget-unit")],Jr);var Zp=Object.defineProperty,th=Object.getOwnPropertyDescriptor,ze=(e,t,r,s)=>{for(var i=s>1?void 0:s?th(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Zp(t,r,i),i};let xt=class extends b{constructor(){super(...arguments),this["concept-id"]="",this.limit="3",this.offset="0",this._getConceptUnits=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([lt({id:e,fields:L({locale:t})},{signal:i}),lp({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["concept-id"],this.locale,this.limit,this.offset]})}render(){return this._getConceptUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Units related to this concept")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};ze([l({type:String})],xt.prototype,"concept-id",2);ze([l({type:String})],xt.prototype,"limit",2);ze([l({type:String})],xt.prototype,"offset",2);xt=ze([y(),w("graph-widget-concept-units")],xt);const G=({id:e,fields:t},{signal:r})=>v.get(`/courses/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),eh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/courses/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),rh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/courses/${e}/core-lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),ih=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/courses/${e}/core-persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),sh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/courses/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),oh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/courses/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),nh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/courses/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),ah=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/courses/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),lh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/courses/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data);var ch=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,He=(e,t,r,s)=>{for(var i=s>1?void 0:s?ph(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&ch(t,r,i),i};let Ot=class extends b{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCourseConcepts=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:E({locale:t})},{signal:i}),eh({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCourseConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Concepts related to this course")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};He([l({type:String})],Ot.prototype,"course-id",2);He([l({type:String})],Ot.prototype,"limit",2);He([l({type:String})],Ot.prototype,"offset",2);Ot=He([y(),w("graph-widget-course-concepts")],Ot);var hh=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,Me=(e,t,r,s)=>{for(var i=s>1?void 0:s?dh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&hh(t,r,i),i};let St=class extends b{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCourseLectures=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:E({locale:t})},{signal:i}),rh({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCourseLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Lectures in this course")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Me([l({type:String})],St.prototype,"course-id",2);Me([l({type:String})],St.prototype,"limit",2);Me([l({type:String})],St.prototype,"offset",2);St=Me([y(),w("graph-widget-course-core-lectures")],St);var uh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,Fe=(e,t,r,s)=>{for(var i=s>1?void 0:s?gh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&uh(t,r,i),i};let Ct=class extends b{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCoursePersons=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:E({locale:t})},{signal:i}),ih({id:e,fields:k({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCoursePersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("People teaching this course")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Fe([l({type:String})],Ct.prototype,"course-id",2);Fe([l({type:String})],Ct.prototype,"limit",2);Fe([l({type:String})],Ct.prototype,"offset",2);Ct=Fe([y(),w("graph-widget-course-core-persons")],Ct);var fh=Object.defineProperty,bh=Object.getOwnPropertyDescriptor,Ie=(e,t,r,s)=>{for(var i=s>1?void 0:s?bh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&fh(t,r,i),i};let kt=class extends b{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCourseCourses=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:E({locale:t})},{signal:i}),sh({id:e,fields:E({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCourseCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Courses related to this course")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Ie([l({type:String})],kt.prototype,"course-id",2);Ie([l({type:String})],kt.prototype,"limit",2);Ie([l({type:String})],kt.prototype,"offset",2);kt=Ie([y(),w("graph-widget-course-courses")],kt);var wh=Object.defineProperty,mh=Object.getOwnPropertyDescriptor,Be=(e,t,r,s)=>{for(var i=s>1?void 0:s?mh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&wh(t,r,i),i};let jt=class extends b{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCourseLectures=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:E({locale:t})},{signal:i}),oh({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCourseLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Lectures related to this course")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Be([l({type:String})],jt.prototype,"course-id",2);Be([l({type:String})],jt.prototype,"limit",2);Be([l({type:String})],jt.prototype,"offset",2);jt=Be([y(),w("graph-widget-course-lectures")],jt);var vh=Object.defineProperty,yh=Object.getOwnPropertyDescriptor,qe=(e,t,r,s)=>{for(var i=s>1?void 0:s?yh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&vh(t,r,i),i};let At=class extends b{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCoursePersons=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:E({locale:t})},{signal:i}),nh({id:e,fields:k({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCoursePersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("People related to this course")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};qe([l({type:String})],At.prototype,"course-id",2);qe([l({type:String})],At.prototype,"limit",2);qe([l({type:String})],At.prototype,"offset",2);At=qe([y(),w("graph-widget-course-persons")],At);var $h=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Ve=(e,t,r,s)=>{for(var i=s>1?void 0:s?_h(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&$h(t,r,i),i};let Et=class extends b{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCoursePublications=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:E({locale:t})},{signal:i}),ah({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCoursePublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Publications related to this course")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Ve([l({type:String})],Et.prototype,"course-id",2);Ve([l({type:String})],Et.prototype,"limit",2);Ve([l({type:String})],Et.prototype,"offset",2);Et=Ve([y(),w("graph-widget-course-publications")],Et);var Ph=Object.defineProperty,xh=Object.getOwnPropertyDescriptor,Je=(e,t,r,s)=>{for(var i=s>1?void 0:s?xh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Ph(t,r,i),i};let Nt=class extends b{constructor(){super(...arguments),this["course-id"]="",this.limit="3",this.offset="0",this._getCourseUnits=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([G({id:e,fields:E({locale:t})},{signal:i}),lh({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["course-id"],this.locale,this.limit,this.offset]})}render(){return this._getCourseUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Units related to this course")}
            >
              ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Je([l({type:String})],Nt.prototype,"course-id",2);Je([l({type:String})],Nt.prototype,"limit",2);Je([l({type:String})],Nt.prototype,"offset",2);Nt=Je([y(),w("graph-widget-course-units")],Nt);const K=({id:e,fields:t},{signal:r})=>v.get(`/lectures/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),Oh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/lectures/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Sh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/lectures/${e}/core-courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Ch=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/lectures/${e}/core-persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),kh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/lectures/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),jh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/lectures/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Ah=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/lectures/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Eh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/lectures/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Nh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/lectures/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data);var Dh=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,Ge=(e,t,r,s)=>{for(var i=s>1?void 0:s?Th(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Dh(t,r,i),i};let Dt=class extends b{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLectureConcepts=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([K({id:e,fields:N({locale:t})},{signal:i}),Oh({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLectureConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Concepts related to this lecture")}
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
        </graph-widget-section>`})}};Ge([l({type:String})],Dt.prototype,"lecture-id",2);Ge([l({type:String})],Dt.prototype,"limit",2);Ge([l({type:String})],Dt.prototype,"offset",2);Dt=Ge([y(),w("graph-widget-lecture-concepts")],Dt);var Uh=Object.defineProperty,Rh=Object.getOwnPropertyDescriptor,Ke=(e,t,r,s)=>{for(var i=s>1?void 0:s?Rh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Uh(t,r,i),i};let Tt=class extends b{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLectureCourses=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([K({id:e,fields:N({locale:t})},{signal:i}),Sh({id:e,fields:E({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLectureCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Courses of this lecture")}
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
        </graph-widget-section>`})}};Ke([l({type:String})],Tt.prototype,"lecture-id",2);Ke([l({type:String})],Tt.prototype,"limit",2);Ke([l({type:String})],Tt.prototype,"offset",2);Tt=Ke([y(),w("graph-widget-lecture-core-courses")],Tt);var Lh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,We=(e,t,r,s)=>{for(var i=s>1?void 0:s?zh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Lh(t,r,i),i};let Ut=class extends b{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLecturePersons=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([K({id:e,fields:N({locale:t})},{signal:i}),Ch({id:e,fields:k({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLecturePersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("People teaching this lecture")}
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
        </graph-widget-section>`})}};We([l({type:String})],Ut.prototype,"lecture-id",2);We([l({type:String})],Ut.prototype,"limit",2);We([l({type:String})],Ut.prototype,"offset",2);Ut=We([y(),w("graph-widget-lecture-core-persons")],Ut);var Hh=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,Xe=(e,t,r,s)=>{for(var i=s>1?void 0:s?Mh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Hh(t,r,i),i};let Rt=class extends b{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLectureCourses=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([K({id:e,fields:N({locale:t})},{signal:i}),kh({id:e,fields:E({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLectureCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Courses related to this lecture")}
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
        </graph-widget-section>`})}};Xe([l({type:String})],Rt.prototype,"lecture-id",2);Xe([l({type:String})],Rt.prototype,"limit",2);Xe([l({type:String})],Rt.prototype,"offset",2);Rt=Xe([y(),w("graph-widget-lecture-courses")],Rt);var Fh=Object.defineProperty,Ih=Object.getOwnPropertyDescriptor,Ye=(e,t,r,s)=>{for(var i=s>1?void 0:s?Ih(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Fh(t,r,i),i};let Lt=class extends b{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLectureLectures=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([K({id:e,fields:N({locale:t})},{signal:i}),jh({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLectureLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Lectures related to this lecture")}
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
        </graph-widget-section>`})}};Ye([l({type:String})],Lt.prototype,"lecture-id",2);Ye([l({type:String})],Lt.prototype,"limit",2);Ye([l({type:String})],Lt.prototype,"offset",2);Lt=Ye([y(),w("graph-widget-lecture-lectures")],Lt);var Bh=Object.defineProperty,qh=Object.getOwnPropertyDescriptor,Qe=(e,t,r,s)=>{for(var i=s>1?void 0:s?qh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Bh(t,r,i),i};let zt=class extends b{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLecturePersons=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([K({id:e,fields:N({locale:t})},{signal:i}),Ah({id:e,fields:k({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLecturePersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("People related to this lecture")}
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
        </graph-widget-section>`})}};Qe([l({type:String})],zt.prototype,"lecture-id",2);Qe([l({type:String})],zt.prototype,"limit",2);Qe([l({type:String})],zt.prototype,"offset",2);zt=Qe([y(),w("graph-widget-lecture-persons")],zt);var Vh=Object.defineProperty,Jh=Object.getOwnPropertyDescriptor,Ze=(e,t,r,s)=>{for(var i=s>1?void 0:s?Jh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Vh(t,r,i),i};let Ht=class extends b{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLecturePublications=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([K({id:e,fields:N({locale:t})},{signal:i}),Eh({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLecturePublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
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
        </graph-widget-section>`})}};Ze([l({type:String})],Ht.prototype,"lecture-id",2);Ze([l({type:String})],Ht.prototype,"limit",2);Ze([l({type:String})],Ht.prototype,"offset",2);Ht=Ze([y(),w("graph-widget-lecture-publications")],Ht);var Gh=Object.defineProperty,Kh=Object.getOwnPropertyDescriptor,tr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Kh(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Gh(t,r,i),i};let Mt=class extends b{constructor(){super(...arguments),this["lecture-id"]="",this.limit="3",this.offset="0",this._getLectureUnits=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([K({id:e,fields:N({locale:t})},{signal:i}),Nh({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["lecture-id"],this.locale,this.limit,this.offset]})}render(){return this._getLectureUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Units related to this lecture")}
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
        </graph-widget-section>`})}};tr([l({type:String})],Mt.prototype,"lecture-id",2);tr([l({type:String})],Mt.prototype,"limit",2);tr([l({type:String})],Mt.prototype,"offset",2);Mt=tr([y(),w("graph-widget-lecture-units")],Mt);const M=({id:e,fields:t},{signal:r})=>v.get(`/persons/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),Wh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/persons/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Xh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/persons/${e}/core-courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Yh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/persons/${e}/core-lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Qh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/persons/${e}/core-publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Zh=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/persons/${e}/core-units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),td=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/persons/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),ed=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/persons/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),rd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/persons/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),id=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/persons/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),sd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/persons/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data);var od=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,er=(e,t,r,s)=>{for(var i=s>1?void 0:s?nd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&od(t,r,i),i};let Ft=class extends b{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonConcepts=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([M({id:e,fields:k({locale:t})},{signal:i}),Wh({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Concepts related to this person")}
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
        </graph-widget-section>`})}};er([l({type:String})],Ft.prototype,"person-id",2);er([l({type:String})],Ft.prototype,"limit",2);er([l({type:String})],Ft.prototype,"offset",2);Ft=er([y(),w("graph-widget-person-concepts")],Ft);var ad=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,rr=(e,t,r,s)=>{for(var i=s>1?void 0:s?ld(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&ad(t,r,i),i};let It=class extends b{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonCourses=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([M({id:e,fields:k({locale:t})},{signal:i}),Xh({id:e,fields:E({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Courses taught by this person")}
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
        </graph-widget-section>`})}};rr([l({type:String})],It.prototype,"person-id",2);rr([l({type:String})],It.prototype,"limit",2);rr([l({type:String})],It.prototype,"offset",2);It=rr([y(),w("graph-widget-person-core-courses")],It);var cd=Object.defineProperty,pd=Object.getOwnPropertyDescriptor,ir=(e,t,r,s)=>{for(var i=s>1?void 0:s?pd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&cd(t,r,i),i};let Bt=class extends b{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonLectures=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([M({id:e,fields:k({locale:t})},{signal:i}),Yh({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Lectures taught by this person")}
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
        </graph-widget-section>`})}};ir([l({type:String})],Bt.prototype,"person-id",2);ir([l({type:String})],Bt.prototype,"limit",2);ir([l({type:String})],Bt.prototype,"offset",2);Bt=ir([y(),w("graph-widget-person-core-lectures")],Bt);var hd=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,sr=(e,t,r,s)=>{for(var i=s>1?void 0:s?dd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&hd(t,r,i),i};let qt=class extends b{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonPublications=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([M({id:e,fields:k({locale:t})},{signal:i}),Qh({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonPublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Publications by this person")}
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
        </graph-widget-section>`})}};sr([l({type:String})],qt.prototype,"person-id",2);sr([l({type:String})],qt.prototype,"limit",2);sr([l({type:String})],qt.prototype,"offset",2);qt=sr([y(),w("graph-widget-person-core-publications")],qt);var ud=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,or=(e,t,r,s)=>{for(var i=s>1?void 0:s?gd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&ud(t,r,i),i};let Vt=class extends b{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonUnits=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([M({id:e,fields:k({locale:t})},{signal:i}),Zh({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Units for this person")}
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
        </graph-widget-section>`})}};or([l({type:String})],Vt.prototype,"person-id",2);or([l({type:String})],Vt.prototype,"limit",2);or([l({type:String})],Vt.prototype,"offset",2);Vt=or([y(),w("graph-widget-person-core-units")],Vt);var fd=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,nr=(e,t,r,s)=>{for(var i=s>1?void 0:s?bd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&fd(t,r,i),i};let Jt=class extends b{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonCourses=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([M({id:e,fields:k({locale:t})},{signal:i}),td({id:e,fields:E({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Courses related to this person")}
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
        </graph-widget-section>`})}};nr([l({type:String})],Jt.prototype,"person-id",2);nr([l({type:String})],Jt.prototype,"limit",2);nr([l({type:String})],Jt.prototype,"offset",2);Jt=nr([y(),w("graph-widget-person-courses")],Jt);var wd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,ar=(e,t,r,s)=>{for(var i=s>1?void 0:s?md(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&wd(t,r,i),i};let Gt=class extends b{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonLectures=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([M({id:e,fields:k({locale:t})},{signal:i}),ed({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Lectures related to this person")}
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
        </graph-widget-section>`})}};ar([l({type:String})],Gt.prototype,"person-id",2);ar([l({type:String})],Gt.prototype,"limit",2);ar([l({type:String})],Gt.prototype,"offset",2);Gt=ar([y(),w("graph-widget-person-lectures")],Gt);var vd=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,lr=(e,t,r,s)=>{for(var i=s>1?void 0:s?yd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&vd(t,r,i),i};let Kt=class extends b{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonPersons=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([M({id:e,fields:k({locale:t})},{signal:i}),rd({id:e,fields:k({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("People related to this person")}
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
        </graph-widget-section>`})}};lr([l({type:String})],Kt.prototype,"person-id",2);lr([l({type:String})],Kt.prototype,"limit",2);lr([l({type:String})],Kt.prototype,"offset",2);Kt=lr([y(),w("graph-widget-person-persons")],Kt);var $d=Object.defineProperty,_d=Object.getOwnPropertyDescriptor,cr=(e,t,r,s)=>{for(var i=s>1?void 0:s?_d(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&$d(t,r,i),i};let Wt=class extends b{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonPublications=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([M({id:e,fields:k({locale:t})},{signal:i}),id({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonPublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Publications related to this person")}
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
        </graph-widget-section>`})}};cr([l({type:String})],Wt.prototype,"person-id",2);cr([l({type:String})],Wt.prototype,"limit",2);cr([l({type:String})],Wt.prototype,"offset",2);Wt=cr([y(),w("graph-widget-person-publications")],Wt);var Pd=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,pr=(e,t,r,s)=>{for(var i=s>1?void 0:s?xd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Pd(t,r,i),i};let Xt=class extends b{constructor(){super(...arguments),this["person-id"]="",this.limit="3",this.offset="0",this._getPersonUnits=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([M({id:e,fields:k({locale:t})},{signal:i}),sd({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["person-id"],this.locale,this.limit,this.offset]})}render(){return this._getPersonUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${u(a`<graph-widget-section-title
              slot="header"
              description=${u("Units related to this person")}
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
        </graph-widget-section>`})}};pr([l({type:String})],Xt.prototype,"person-id",2);pr([l({type:String})],Xt.prototype,"limit",2);pr([l({type:String})],Xt.prototype,"offset",2);Xt=pr([y(),w("graph-widget-person-units")],Xt);const Q=({id:e,fields:t},{signal:r})=>v.get(`/publications/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),Od=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/publications/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Sd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/publications/${e}/core-persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Cd=async({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/publications/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),kd=async({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/publications/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),jd=async({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/publications/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Ad=async({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/publications/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Ed=async({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/publications/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data);var Nd=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,hr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Dd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Nd(t,r,i),i};let Yt=class extends b{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationConcepts=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:T({locale:t})},{signal:i}),Od({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Concepts related to this publication")}
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
        </graph-widget-section>`})}};hr([l({type:String})],Yt.prototype,"publication-id",2);hr([l({type:String})],Yt.prototype,"limit",2);hr([l({type:String})],Yt.prototype,"offset",2);Yt=hr([y(),w("graph-widget-publication-concepts")],Yt);var Td=Object.defineProperty,Ud=Object.getOwnPropertyDescriptor,dr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Ud(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Td(t,r,i),i};let Qt=class extends b{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationPersons=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:T({locale:t})},{signal:i}),Sd({id:e,fields:k({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Authors of this publication")}
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
        </graph-widget-section>`})}};dr([l({type:String})],Qt.prototype,"publication-id",2);dr([l({type:String})],Qt.prototype,"limit",2);dr([l({type:String})],Qt.prototype,"offset",2);Qt=dr([y(),w("graph-widget-publication-core-persons")],Qt);var Rd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,ur=(e,t,r,s)=>{for(var i=s>1?void 0:s?Ld(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Rd(t,r,i),i};let Zt=class extends b{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationCourses=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:T({locale:t})},{signal:i}),Cd({id:e,fields:E({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Courses related to this publication")}
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
        </graph-widget-section>`})}};ur([l({type:String})],Zt.prototype,"publication-id",2);ur([l({type:String})],Zt.prototype,"limit",2);ur([l({type:String})],Zt.prototype,"offset",2);Zt=ur([y(),w("graph-widget-publication-courses")],Zt);var zd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,gr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Hd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&zd(t,r,i),i};let te=class extends b{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationLectures=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:T({locale:t})},{signal:i}),kd({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Lectures related to this publication")}
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
        </graph-widget-section>`})}};gr([l({type:String})],te.prototype,"publication-id",2);gr([l({type:String})],te.prototype,"limit",2);gr([l({type:String})],te.prototype,"offset",2);te=gr([y(),w("graph-widget-publication-lectures")],te);var Md=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,fr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Fd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Md(t,r,i),i};let ee=class extends b{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationPersons=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:T({locale:t})},{signal:i}),jd({id:e,fields:k({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Persons related to this publication")}
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
        </graph-widget-section>`})}};fr([l({type:String})],ee.prototype,"publication-id",2);fr([l({type:String})],ee.prototype,"limit",2);fr([l({type:String})],ee.prototype,"offset",2);ee=fr([y(),w("graph-widget-publication-persons")],ee);var Id=Object.defineProperty,Bd=Object.getOwnPropertyDescriptor,br=(e,t,r,s)=>{for(var i=s>1?void 0:s?Bd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Id(t,r,i),i};let re=class extends b{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationPublications=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:T({locale:t})},{signal:i}),Ad({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationPublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Publications related to this publication")}
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
        </graph-widget-section>`})}};br([l({type:String})],re.prototype,"publication-id",2);br([l({type:String})],re.prototype,"limit",2);br([l({type:String})],re.prototype,"offset",2);re=br([y(),w("graph-widget-publication-publications")],re);var qd=Object.defineProperty,Vd=Object.getOwnPropertyDescriptor,wr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Vd(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&qd(t,r,i),i};let ie=class extends b{constructor(){super(...arguments),this["publication-id"]="",this.limit="3",this.offset="0",this._getPublicationUnits=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Q({id:e,fields:T({locale:t})},{signal:i}),Ed({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["publication-id"],this.locale,this.limit,this.offset]})}render(){return this._getPublicationUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Units related to this publication")}
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
        </graph-widget-section>`})}};wr([l({type:String})],ie.prototype,"publication-id",2);wr([l({type:String})],ie.prototype,"limit",2);wr([l({type:String})],ie.prototype,"offset",2);ie=wr([y(),w("graph-widget-publication-units")],ie);const Z=({id:e,fields:t},{signal:r})=>v.get(`/units/${e}`,{params:{fields:t},signal:r}).then(s=>s.data.item),Jd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/units/${e}/concepts`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Gd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/units/${e}/core-persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Kd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/units/${e}/courses`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Wd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/units/${e}/lectures`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Xd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/units/${e}/persons`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Yd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/units/${e}/publications`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data),Qd=({id:e,fields:t,limit:r,offset:s},{signal:i})=>v.get(`/units/${e}/units`,{params:{fields:t,limit:r,offset:s},signal:i}).then(o=>o.data);var Zd=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,mr=(e,t,r,s)=>{for(var i=s>1?void 0:s?tu(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&Zd(t,r,i),i};let se=class extends b{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitConcepts=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Z({id:e,fields:U({locale:t})},{signal:i}),Jd({id:e,fields:L({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitConcepts.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Concepts related to this unit")}
          >
            ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};mr([l({type:String})],se.prototype,"unit-id",2);mr([l({type:String})],se.prototype,"limit",2);mr([l({type:String})],se.prototype,"offset",2);se=mr([y(),w("graph-widget-unit-concepts")],se);var eu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,vr=(e,t,r,s)=>{for(var i=s>1?void 0:s?ru(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&eu(t,r,i),i};let oe=class extends b{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitPersons=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Z({id:e,fields:U({locale:t})},{signal:i}),Gd({id:e,fields:k({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("People in this unit")}
          >
            ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};vr([l({type:String})],oe.prototype,"unit-id",2);vr([l({type:String})],oe.prototype,"limit",2);vr([l({type:String})],oe.prototype,"offset",2);oe=vr([y(),w("graph-widget-unit-core-persons")],oe);var iu=Object.defineProperty,su=Object.getOwnPropertyDescriptor,yr=(e,t,r,s)=>{for(var i=s>1?void 0:s?su(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&iu(t,r,i),i};let ne=class extends b{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitCourses=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Z({id:e,fields:U({locale:t})},{signal:i}),Kd({id:e,fields:E({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitCourses.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Courses related to this unit")}
          >
            ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};yr([l({type:String})],ne.prototype,"unit-id",2);yr([l({type:String})],ne.prototype,"limit",2);yr([l({type:String})],ne.prototype,"offset",2);ne=yr([y(),w("graph-widget-unit-courses")],ne);var ou=Object.defineProperty,nu=Object.getOwnPropertyDescriptor,$r=(e,t,r,s)=>{for(var i=s>1?void 0:s?nu(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&ou(t,r,i),i};let ae=class extends b{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitLectures=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Z({id:e,fields:U({locale:t})},{signal:i}),Wd({id:e,fields:N({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitLectures.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Lectures related to this unit")}
          >
            ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};$r([l({type:String})],ae.prototype,"unit-id",2);$r([l({type:String})],ae.prototype,"limit",2);$r([l({type:String})],ae.prototype,"offset",2);ae=$r([y(),w("graph-widget-unit-lectures")],ae);var au=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,_r=(e,t,r,s)=>{for(var i=s>1?void 0:s?lu(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&au(t,r,i),i};let le=class extends b{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitPersons=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Z({id:e,fields:U({locale:t})},{signal:i}),Xd({id:e,fields:k({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitPersons.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Persons related to this unit")}
          >
            ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};_r([l({type:String})],le.prototype,"unit-id",2);_r([l({type:String})],le.prototype,"limit",2);_r([l({type:String})],le.prototype,"offset",2);le=_r([y(),w("graph-widget-unit-persons")],le);var cu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,Pr=(e,t,r,s)=>{for(var i=s>1?void 0:s?pu(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&cu(t,r,i),i};let ce=class extends b{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitPublications=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Z({id:e,fields:U({locale:t})},{signal:i}),Yd({id:e,fields:T({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitPublications.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Publications related to this unit")}
          >
            ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};Pr([l({type:String})],ce.prototype,"unit-id",2);Pr([l({type:String})],ce.prototype,"limit",2);Pr([l({type:String})],ce.prototype,"offset",2);ce=Pr([y(),w("graph-widget-unit-publications")],ce);var hu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,xr=(e,t,r,s)=>{for(var i=s>1?void 0:s?du(t,r):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(s?n(t,r,i):n(i))||i);return s&&i&&hu(t,r,i),i};let pe=class extends b{constructor(){super(...arguments),this["unit-id"]="",this.limit="3",this.offset="0",this._getUnitUnits=new _(this,{task:async([e,t,r,s],{signal:i})=>Promise.all([Z({id:e,fields:U({locale:t})},{signal:i}),Qd({id:e,fields:U({locale:t}),limit:Number(r),offset:Number(s)},{signal:i})]),args:()=>[this["unit-id"],this.locale,this.limit,this.offset]})}render(){return this._getUnitUnits.render({pending:()=>a`<graph-widget-loading></graph-widget-loading>`,error:e=>a`<graph-widget-error>${e}</graph-widget-error>`,complete:([e,t])=>a`<graph-widget-section>
          ${a`<graph-widget-section-title
            slot="header"
            description=${u("Units related to this unit")}
          >
            ${O(e,["name",this.locale,"value"])}
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
        </graph-widget-section>`})}};xr([l({type:String})],pe.prototype,"unit-id",2);xr([l({type:String})],pe.prototype,"limit",2);xr([l({type:String})],pe.prototype,"offset",2);pe=xr([y(),w("graph-widget-unit-units")],pe);
