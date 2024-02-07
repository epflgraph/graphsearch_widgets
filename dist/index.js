(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=globalThis,vt=ke.ShadowRoot&&(ke.ShadyCSS===void 0||ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ls=Symbol(),At=new WeakMap;let ti=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==ls)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(vt&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=At.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&At.set(r,e))}return e}toString(){return this.cssText}};const st=t=>new ti(typeof t=="string"?t:t+"",void 0,ls),ri=(t,e)=>{if(vt)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=ke.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},Nt=vt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return st(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:si,defineProperty:ii,getOwnPropertyDescriptor:oi,getOwnPropertyNames:ni,getOwnPropertySymbols:ai,getPrototypeOf:li}=Object,G=globalThis,Dt=G.trustedTypes,ci=Dt?Dt.emptyScript:"",Je=G.reactiveElementPolyfillSupport,ge=(t,e)=>t,Ae={toAttribute(t,e){switch(e){case Boolean:t=t?ci:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Re=(t,e)=>!si(t,e),Tt={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:Re};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),G.litPropertyMetadata??(G.litPropertyMetadata=new WeakMap);class se extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Tt){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&ii(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:o}=oi(this.prototype,e)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const c=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Tt}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;const e=li(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){const r=this.properties,i=[...ni(r),...ai(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(Nt(s))}else e!==void 0&&r.push(Nt(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ri(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var o;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:Ae).toAttribute(r,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,r){var o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:Ae;this._$Em=s,this[s]=c.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Re)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}se.elementStyles=[],se.shadowRootOptions={mode:"open"},se[ge("elementProperties")]=new Map,se[ge("finalized")]=new Map,Je==null||Je({ReactiveElement:se}),(G.reactiveElementVersions??(G.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=globalThis,Ne=fe.trustedTypes,Ut=Ne?Ne.createPolicy("lit-html",{createHTML:t=>t}):void 0,cs="$lit$",J=`lit$${(Math.random()+"").slice(9)}$`,hs="?"+J,hi=`<${hs}>`,Z=document,me=()=>Z.createComment(""),we=t=>t===null||typeof t!="object"&&typeof t!="function",ps=Array.isArray,pi=t=>ps(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ge=`[ 	
\f\r]`,pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,Lt=/>/g,X=RegExp(`>|${Ge}(?:([^\\s"'>=/]+)(${Ge}*=${Ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mt=/'/g,zt=/"/g,ds=/^(?:script|style|textarea|title)$/i,di=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),a=di(1),ee=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Ht=new WeakMap,Q=Z.createTreeWalker(Z,129);function us(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(e):e}const ui=(t,e)=>{const r=t.length-1,i=[];let s,o=e===2?"<svg>":"",n=pe;for(let c=0;c<r;c++){const p=t[c];let u,d,h=-1,P=0;for(;P<p.length&&(n.lastIndex=P,d=n.exec(p),d!==null);)P=n.lastIndex,n===pe?d[1]==="!--"?n=Rt:d[1]!==void 0?n=Lt:d[2]!==void 0?(ds.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=X):d[3]!==void 0&&(n=X):n===X?d[0]===">"?(n=s??pe,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,u=d[1],n=d[3]===void 0?X:d[3]==='"'?zt:Mt):n===zt||n===Mt?n=X:n===Rt||n===Lt?n=pe:(n=X,s=void 0);const O=n===X&&t[c+1].startsWith("/>")?" ":"";o+=n===pe?p+hi:h>=0?(i.push(u),p.slice(0,h)+cs+p.slice(h)+J+O):p+J+(h===-2?c:O)}return[us(t,o+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};class ve{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let o=0,n=0;const c=e.length-1,p=this.parts,[u,d]=ui(e,r);if(this.el=ve.createElement(u,i),Q.currentNode=this.el.content,r===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=Q.nextNode())!==null&&p.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(cs)){const P=d[n++],O=s.getAttribute(h).split(J),b=/([.?@])?(.*)/.exec(P);p.push({type:1,index:o,name:b[2],strings:O,ctor:b[1]==="."?fi:b[1]==="?"?bi:b[1]==="@"?mi:Le}),s.removeAttribute(h)}else h.startsWith(J)&&(p.push({type:6,index:o}),s.removeAttribute(h));if(ds.test(s.tagName)){const h=s.textContent.split(J),P=h.length-1;if(P>0){s.textContent=Ne?Ne.emptyScript:"";for(let O=0;O<P;O++)s.append(h[O],me()),Q.nextNode(),p.push({type:2,index:++o});s.append(h[P],me())}}}else if(s.nodeType===8)if(s.data===hs)p.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(J,h+1))!==-1;)p.push({type:7,index:o}),h+=J.length-1}o++}}static createElement(e,r){const i=Z.createElement("template");return i.innerHTML=e,i}}function ie(t,e,r=t,i){var n,c;if(e===ee)return e;let s=i!==void 0?(n=r._$Co)==null?void 0:n[i]:r._$Cl;const o=we(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),o===void 0?s=void 0:(s=new o(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=ie(t,s._$AS(t,e.values),s,i)),e}class gi{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Z).importNode(r,!0);Q.currentNode=s;let o=Q.nextNode(),n=0,c=0,p=i[0];for(;p!==void 0;){if(n===p.index){let u;p.type===2?u=new _e(o,o.nextSibling,this,e):p.type===1?u=new p.ctor(o,p.name,p.strings,this,e):p.type===6&&(u=new wi(o,this,e)),this._$AV.push(u),p=i[++c]}n!==(p==null?void 0:p.index)&&(o=Q.nextNode(),n++)}return Q.currentNode=Z,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class _e{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ie(this,e,r),we(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==ee&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):pi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==S&&we(this._$AH)?this._$AA.nextSibling.data=e:this.T(Z.createTextNode(e)),this._$AH=e}$(e){var o;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ve.createElement(us(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(r);else{const n=new gi(s,this),c=n.u(this.options);n.p(r),this.T(c),this._$AH=n}}_$AC(e){let r=Ht.get(e.strings);return r===void 0&&Ht.set(e.strings,r=new ve(e)),r}k(e){ps(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const o of e)s===r.length?r.push(i=new _e(this.S(me()),this.S(me()),this,this.options)):i=r[s],i._$AI(o),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Le{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,o){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(e,r=this,i,s){const o=this.strings;let n=!1;if(o===void 0)e=ie(this,e,r,0),n=!we(e)||e!==this._$AH&&e!==ee,n&&(this._$AH=e);else{const c=e;let p,u;for(e=o[0],p=0;p<o.length-1;p++)u=ie(this,c[i+p],r,p),u===ee&&(u=this._$AH[p]),n||(n=!we(u)||u!==this._$AH[p]),u===S?e=S:e!==S&&(e+=(u??"")+o[p+1]),this._$AH[p]=u}n&&!s&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class fi extends Le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class bi extends Le{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class mi extends Le{constructor(e,r,i,s,o){super(e,r,i,s,o),this.type=5}_$AI(e,r=this){if((e=ie(this,e,r,0)??S)===ee)return;const i=this._$AH,s=e===S&&i!==S||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==S&&(i===S||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class wi{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const We=fe.litHtmlPolyfillSupport;We==null||We(ve,_e),(fe.litHtmlVersions??(fe.litHtmlVersions=[])).push("3.1.2");const vi=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const o=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new _e(e.insertBefore(me(),o),o,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class be extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ee}}var as;be._$litElement$=!0,be.finalized=!0,(as=globalThis.litElementHydrateSupport)==null||as.call(globalThis,{LitElement:be});const Ke=globalThis.litElementPolyfillSupport;Ke==null||Ke({LitElement:be});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:Re},_i=(t=$i,e,r)=>{const{kind:i,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(r.name,t),i==="accessor"){const{name:n}=r;return{set(c){const p=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,p,t)},init(c){return c!==void 0&&this.P(n,void 0,t),c}}}if(i==="setter"){const{name:n}=r;return function(c){const p=this[n];e.call(this,c),this.requestUpdate(n,p,t)}}throw Error("Unsupported decorator location: "+i)};function L(t){return(e,r)=>typeof r=="object"?_i(t,e,r):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=t=>typeof t!="string"&&"strTag"in t,gs=(t,e,r)=>{let i=t[0];for(let s=1;s<t.length;s++)i+=e[r?r[s-1]:s-1],i+=t[s];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs=t=>yi(t)?gs(t.strings,t.values):t;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pi{constructor(e){this.__litLocalizeEventHandler=r=>{r.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(it,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(it,this.__litLocalizeEventHandler)}}const xi=t=>t.addController(new Pi(t)),Oi=xi;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=()=>(t,e)=>(t.addInitializer(Oi),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class bs{constructor(){this.settled=!1,this.promise=new Promise((e,r)=>{this._resolve=e,this._reject=r})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const I=[];for(let t=0;t<256;t++)I[t]=(t>>4&15).toString(16)+(t&15).toString(16);function Ci(t){let e=0,r=8997,i=0,s=33826,o=0,n=40164,c=0,p=52210;for(let u=0;u<t.length;u++)r^=t.charCodeAt(u),e=r*435,i=s*435,o=n*435,c=p*435,o+=r<<8,c+=s<<8,i+=e>>>16,r=e&65535,o+=i>>>16,s=i&65535,p=c+(o>>>16)&65535,n=o&65535;return I[p>>8]+I[p&255]+I[n>>8]+I[n&255]+I[s>>8]+I[s&255]+I[r>>8]+I[r&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki="",Si="h",ji="s";function Ei(t,e){return(e?Si:ji)+Ci(typeof t=="string"?t:t.join(ki))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=new WeakMap,Ft=new Map;function Ai(t,e,r){if(t){const i=(r==null?void 0:r.id)??Ni(e),s=t[i];if(s){if(typeof s=="string")return s;if("strTag"in s)return gs(s.strings,e.values,s.values);{let o=It.get(s);return o===void 0&&(o=s.values,It.set(s,o)),{...s,values:o.map(n=>e.values[n])}}}}return fs(e)}function Ni(t){const e=typeof t=="string"?t:t.strings;let r=Ft.get(e);return r===void 0&&(r=Ei(e,typeof t!="string"&&!("strTag"in t)),Ft.set(e,r)),r}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xe(t){window.dispatchEvent(new CustomEvent(it,{detail:t}))}let De="",Ye,ms,Te,ot,ws,Y=new bs;Y.resolve();let Oe=0;const Di=t=>(Ri((e,r)=>Ai(ws,e,r)),De=ms=t.sourceLocale,Te=new Set(t.targetLocales),Te.add(t.sourceLocale),ot=t.loadLocale,{getLocale:Ti,setLocale:Ui}),Ti=()=>De,Ui=t=>{if(t===(Ye??De))return Y.promise;if(!Te||!ot)throw new Error("Internal error");if(!Te.has(t))throw new Error("Invalid locale code");Oe++;const e=Oe;return Ye=t,Y.settled&&(Y=new bs),Xe({status:"loading",loadingLocale:t}),(t===ms?Promise.resolve({templates:void 0}):ot(t)).then(i=>{Oe===e&&(De=t,Ye=void 0,ws=i.templates,Xe({status:"ready",readyLocale:t}),Y.resolve())},i=>{Oe===e&&(Xe({status:"error",errorLocale:t,errorMessage:i.toString()}),Y.reject(i))}),Y.promise};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=fs,Bt=!1;function Ri(t){if(Bt)throw new Error("lit-localize can only be configured once");v=t,Bt=!0}const Li="en",Mi=["fr"],zi={s068d6bab653df3a8:"Cours liés à ce cours",s0fad582b084215ff:"Cours liés à cette personne",s0fbf3e9bae76deee:"Publications de cette personne",s1048858d43d0c613:"Publications liées à ce séances de cours",s16118cff69acb446:"Concepts liés à cette publication",s20109d2b1bfac486:"Publications liées à ce concept",s24759741963210ad:"Personnes enseignant ce cours",s253ee1c4f5a28d8a:"Unités liées à ce cours",s2b547637972ab9a5:"Unités liées à cette personne",s3208be8c42085956:"Séances de cours liés à cette personne",s339a3dd2c274e489:"Concepts liés à ce cours",s366580b6046f9302:"Unités pour cette personne",s3c5f6d58326047f8:"Cours dans ce cours",s3c94b4b50aeb24ea:"Personnes liées à ce concept",s42e7ba1ad1ec0e2f:"Cours liés à ce séances de cours",s48235c1a572a545c:"Séances de cours de ce cours",s53780ae638f5239f:"Personnes dans cette unité",s5b7f7568a5943a25:"Unités liées à ce séances de cours",s623072d9928c99f6:"Concepts liés à ce séances de cours",s63527cc45871a7d7:"Personnes liées à cette personne",s63e5efe1dec52874:"Cours liés à cette unit",s65bcc568e8994b91:"Séances de cours liés à cette unit",s6dafdea229b9ae60:"Concepts liés à ce concept",s73c94f7a2ec6f78f:"Cours enseignés par cette personne",s747d8fed1dc4ce02:"Cours liés à ce concept",s854def0fc10dc63d:"Séances de cours liés à ce concept",s857c3d074f7c1eb9:"Personnes liées à cette unit",s8ab8fc646be2722c:"Personnes enseignant ce cours",s8c8e75a20da4b7cc:"Unités liées à ce concept",s991d216e6efc157c:"Aucun résultat",sa064e50191f87220:"Personnes liées à ce cours",sa28c29fdee25927f:"Personnes liées à cette publication",sa887d31d9ef6d95a:"Unités liées à cette publication",sab52d939b67ccef7:"Séances de cours liés à cette publication",sad1ea2935dfe48fe:"Séances de cours liés à ce séances de cours",sc31b4d0b76d05bfb:"Voir sur Graph Search",sc379e319883b45e9:"Concepts liés à cette personne",sc43299da00e0bb34:"Publications liées à ce cours",sd479a23ab8674766:"Auteurs de cette publication",se169b535c0e29f60:"Cours liés à cette publication",se2feeb3a54d834e3:"Publications liées à cette personne",se94e1759cd26996c:"Publications liées à cette publication",sf120f87b92348742:"Concepts liés à cette unité",sf5d9daa5a0457340:"Séances de cours enseignés par cette personne",sf60d8c3b8e8a440b:"Séances de cours liés à ce cours",sf961f3ead12411e8:"Publications liées à cette unit",sf980f00f440846ee:"Unités liées à cette unit",sfcf904cdf6aba637:"Personnes liées à ce séances de cours"},Hi=Object.freeze(Object.defineProperty({__proto__:null,templates:zi},Symbol.toStringTag,{value:"Module"})),Ii=new Map([["fr",Hi]]),{getLocale:Ku,setLocale:Fi}=Di({sourceLocale:Li,targetLocales:Mi,loadLocale:async t=>Ii.get(t)}),Bi=".btn-primary,.btn-primary.btn-outline:hover,.btn-secondary,.btn-secondary.btn-outline:hover{color:var(--fallback-nc, oklch(var(--nc) / 1))}",qi='*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root,[data-theme]{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color: oklch(0 0 0)){:root{color-scheme:light;--fallback-p: #491eff;--fallback-pc: #d4dbff;--fallback-s: #ff41c7;--fallback-sc: #fff9fc;--fallback-a: #00cfbd;--fallback-ac: #00100d;--fallback-n: #2b3440;--fallback-nc: #d7dde4;--fallback-b1: #ffffff;--fallback-b2: #e5e6e6;--fallback-b3: #e5e6e6;--fallback-bc: #1f2937;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000}@media (prefers-color-scheme: dark){:root{color-scheme:dark;--fallback-p: #7582ff;--fallback-pc: #050617;--fallback-s: #ff71cf;--fallback-sc: #190211;--fallback-a: #00c7b5;--fallback-ac: #000e0c;--fallback-n: #2a323c;--fallback-nc: #a6adbb;--fallback-b1: #1d232a;--fallback-b2: #191e24;--fallback-b3: #15191e;--fallback-bc: #a6adbb;--fallback-in: #00b3f0;--fallback-inc: #000000;--fallback-su: #00ca92;--fallback-suc: #000000;--fallback-wa: #ffc22d;--fallback-wac: #000000;--fallback-er: #ff6f70;--fallback-erc: #000000}}}html{-webkit-tap-highlight-color:transparent}:host{--p: .627955 .257683 29.233885;--in: .7206 .191 231.6;--su: 64.8% .15 160;--wa: .8471 .199 83.87;--pc: .125591 .051537 29.233885;--sc: .13133 .022774 188.768218;--ac: .125591 .051537 29.233885;--inc: 0 0 0;--suc: 0 0 0;--wac: 0 0 0;--erc: .125591 .051537 29.233885;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: .656651 .113868 188.768218;--a: .627955 .257683 29.233885;--n: .247759 0 0;--nc: 1 0 0;--er: .627955 .257683 29.233885;--b1: 1 0 0;--b2: .92494 0 0;--b3: .873021 0 0;--bc: .247759 0 0;--rounded-box: .25rem;--rounded-btn: .125rem;--btn-text-case: none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.breadcrumbs{max-width:100%;overflow-x:auto;padding-top:.5rem;padding-bottom:.5rem}.breadcrumbs>ul,.breadcrumbs>ol{display:flex;align-items:center;white-space:nowrap;min-height:min-content}.breadcrumbs>ul>li,.breadcrumbs>ol>li{display:flex;align-items:center}.breadcrumbs>ul>li>a,.breadcrumbs>ol>li>a{display:flex;cursor:pointer;align-items:center}@media (hover:hover){.breadcrumbs>ul>li>a:hover,.breadcrumbs>ol>li>a:hover{text-decoration-line:underline}.table tr.hover:hover,.table tr.hover:nth-child(2n):hover{--tw-bg-opacity: 1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}.table-zebra tr.hover:hover,.table-zebra tr.hover:nth-child(2n):hover{--tw-bg-opacity: 1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))}}.btn{display:inline-flex;height:3rem;min-height:3rem;flex-shrink:0;cursor:pointer;-webkit-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-radius:var(--rounded-btn, .5rem);border-color:transparent;border-color:oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity));padding-left:1rem;padding-right:1rem;text-align:center;font-size:.875rem;line-height:1em;gap:.5rem;font-weight:600;text-decoration-line:none;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);border-width:var(--border-btn, 1px);animation:button-pop var(--animation-btn, .25s) ease-out;transition-property:color,background-color,border-color,opacity,box-shadow,transform;--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-color:var(--fallback-bc,oklch(var(--bc)/1));background-color:oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity));--tw-bg-opacity: 1;--tw-border-opacity: 1}.btn-disabled,.btn[disabled],.btn:disabled{pointer-events:none}:where(.btn:is(input[type=checkbox])),:where(.btn:is(input[type=radio])){width:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn:is(input[type=checkbox]):after,.btn:is(input[type=radio]):after{--tw-content: attr(aria-label);content:var(--tw-content)}@media (hover: hover){.btn:hover{--tw-border-opacity: 1;border-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn:hover{background-color:color-mix(in oklab,oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%,black);border-color:color-mix(in oklab,oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity, 1)) 90%,black)}}@supports not (color: oklch(0 0 0)){.btn:hover{background-color:var(--btn-color, var(--fallback-b2));border-color:var(--btn-color, var(--fallback-b2))}}.btn.glass:hover{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn-outline:hover{--tw-border-opacity: 1;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));--tw-text-opacity: 1;color:var(--fallback-b1,oklch(var(--b1)/var(--tw-text-opacity)))}.btn-outline.btn-primary:hover{--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-primary:hover{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black)}}.btn-outline.btn-secondary:hover{--tw-text-opacity: 1;color:var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-secondary:hover{background-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,black)}}.btn-outline.btn-accent:hover{--tw-text-opacity: 1;color:var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-accent:hover{background-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,black)}}.btn-outline.btn-success:hover{--tw-text-opacity: 1;color:var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-success:hover{background-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,black)}}.btn-outline.btn-info:hover{--tw-text-opacity: 1;color:var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-info:hover{background-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,black)}}.btn-outline.btn-warning:hover{--tw-text-opacity: 1;color:var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-warning:hover{background-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,black)}}.btn-outline.btn-error:hover{--tw-text-opacity: 1;color:var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)))}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-error:hover{background-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,black)}}.btn-disabled:hover,.btn[disabled]:hover,.btn:disabled:hover{--tw-border-opacity: 0;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));--tw-bg-opacity: .2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-text-opacity: .2}@supports (color: color-mix(in oklab,black,black)){.btn:is(input[type=checkbox]:checked):hover,.btn:is(input[type=radio]:checked):hover{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black)}}}.footer{display:grid;width:100%;grid-auto-flow:row;place-items:start;column-gap:1rem;row-gap:2.5rem;font-size:.875rem;line-height:1.25rem}.footer>*{display:grid;place-items:start;gap:.5rem}@media (min-width: 48rem){.footer{grid-auto-flow:column}.footer-center{grid-auto-flow:row dense}}.join{display:inline-flex;align-items:stretch;border-radius:var(--rounded-btn, .5rem)}.join :where(.join-item){border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:0;border-start-start-radius:0}.join .join-item:not(:first-child):not(:last-child),.join *:not(:first-child):not(:last-child) .join-item{border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:0;border-start-start-radius:0}.join .join-item:first-child:not(:last-child),.join *:first-child:not(:last-child) .join-item{border-start-end-radius:0;border-end-end-radius:0}.join .dropdown .join-item:first-child:not(:last-child),.join *:first-child:not(:last-child) .dropdown .join-item{border-start-end-radius:inherit;border-end-end-radius:inherit}.join :where(.join-item:first-child:not(:last-child)),.join :where(*:first-child:not(:last-child) .join-item){border-end-start-radius:inherit;border-start-start-radius:inherit}.join .join-item:last-child:not(:first-child),.join *:last-child:not(:first-child) .join-item{border-end-start-radius:0;border-start-start-radius:0}.join :where(.join-item:last-child:not(:first-child)),.join :where(*:last-child:not(:first-child) .join-item){border-start-end-radius:inherit;border-end-end-radius:inherit}@supports not selector(:has(*)){:where(.join *){border-radius:inherit}}@supports selector(:has(*)){:where(.join *:has(.join-item)){border-radius:inherit}}.link{cursor:pointer;text-decoration-line:underline}.breadcrumbs>ul>li>a:focus,.breadcrumbs>ol>li>a:focus{outline:2px solid transparent;outline-offset:2px}.breadcrumbs>ul>li>a:focus-visible,.breadcrumbs>ol>li>a:focus-visible{outline:2px solid currentColor;outline-offset:2px}.breadcrumbs>ul>li+*:before,.breadcrumbs>ol>li+*:before{content:"";margin-left:.5rem;margin-right:.75rem;display:block;height:.375rem;width:.375rem;--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:.4;border-top:1px solid;border-right:1px solid;background-color:transparent}[dir=rtl] .breadcrumbs>ul>li+*:before,[dir=rtl] .breadcrumbs>ol>li+*:before{--tw-rotate: -135deg}.btn:active:hover,.btn:active:focus{animation:button-pop 0s ease-out;transform:scale(var(--btn-focus-scale, .97))}@supports not (color: oklch(0 0 0)){.btn{background-color:var(--btn-color, var(--fallback-b2));border-color:var(--btn-color, var(--fallback-b2))}.btn-primary{--btn-color: var(--fallback-p)}}@supports (color: color-mix(in oklab,black,black)){.btn-outline.btn-primary.btn-active{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,black)}.btn-outline.btn-secondary.btn-active{background-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,black)}.btn-outline.btn-accent.btn-active{background-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,black)}.btn-outline.btn-success.btn-active{background-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,black)}.btn-outline.btn-info.btn-active{background-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,black)}.btn-outline.btn-warning.btn-active{background-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,black)}.btn-outline.btn-error.btn-active{background-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,black);border-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,black)}}.btn:focus-visible{outline-style:solid;outline-width:2px;outline-offset:2px}.btn-primary{--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));outline-color:var(--fallback-p,oklch(var(--p)/1))}@supports (color: oklch(0 0 0)){.btn-primary{--btn-color: var(--p)}}.btn.glass{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-color:currentColor}.btn.glass.btn-active{--glass-opacity: 25%;--glass-border-opacity: 15%}.btn-outline{border-color:currentColor;background-color:transparent;--tw-text-opacity: 1;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn-outline.btn-active{--tw-border-opacity: 1;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));--tw-text-opacity: 1;color:var(--fallback-b1,oklch(var(--b1)/var(--tw-text-opacity)))}.btn-outline.btn-primary{--tw-text-opacity: 1;color:var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)))}.btn-outline.btn-primary.btn-active{--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.btn-outline.btn-secondary{--tw-text-opacity: 1;color:var(--fallback-s,oklch(var(--s)/var(--tw-text-opacity)))}.btn-outline.btn-secondary.btn-active{--tw-text-opacity: 1;color:var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)))}.btn-outline.btn-accent{--tw-text-opacity: 1;color:var(--fallback-a,oklch(var(--a)/var(--tw-text-opacity)))}.btn-outline.btn-accent.btn-active{--tw-text-opacity: 1;color:var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)))}.btn-outline.btn-success{--tw-text-opacity: 1;color:var(--fallback-su,oklch(var(--su)/var(--tw-text-opacity)))}.btn-outline.btn-success.btn-active{--tw-text-opacity: 1;color:var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)))}.btn-outline.btn-info{--tw-text-opacity: 1;color:var(--fallback-in,oklch(var(--in)/var(--tw-text-opacity)))}.btn-outline.btn-info.btn-active{--tw-text-opacity: 1;color:var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)))}.btn-outline.btn-warning{--tw-text-opacity: 1;color:var(--fallback-wa,oklch(var(--wa)/var(--tw-text-opacity)))}.btn-outline.btn-warning.btn-active{--tw-text-opacity: 1;color:var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)))}.btn-outline.btn-error{--tw-text-opacity: 1;color:var(--fallback-er,oklch(var(--er)/var(--tw-text-opacity)))}.btn-outline.btn-error.btn-active{--tw-text-opacity: 1;color:var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)))}.btn.btn-disabled,.btn[disabled],.btn:disabled{--tw-border-opacity: 0;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));--tw-bg-opacity: .2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));--tw-text-opacity: .2}.btn:is(input[type=checkbox]:checked),.btn:is(input[type=radio]:checked){--tw-border-opacity: 1;border-color:var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)));--tw-bg-opacity: 1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));--tw-text-opacity: 1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.btn:is(input[type=checkbox]:checked):focus-visible,.btn:is(input[type=radio]:checked):focus-visible{outline-color:var(--fallback-p,oklch(var(--p)/1))}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .98))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}.join>:where(*:not(:first-child)){margin-top:0;margin-bottom:0;margin-inline-start:-1px}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset}50%{box-shadow:0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset}to{box-shadow:0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}.skeleton{border-radius:var(--rounded-box, 1rem);--tw-bg-opacity: 1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));will-change:background-position;animation:skeleton 1.8s ease-in-out infinite;background-image:linear-gradient(105deg,transparent 0%,transparent 40%,var(--fallback-b1,oklch(var(--b1)/1)) 50%,transparent 60%,transparent 100%);background-size:200% auto;background-repeat:no-repeat;background-position-x:-50%}@media (prefers-reduced-motion){.skeleton{animation-duration:15s}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.btn-xs{height:1.5rem;min-height:1.5rem;padding-left:.5rem;padding-right:.5rem;font-size:.75rem}.btn-square:where(.btn-xs){height:1.5rem;width:1.5rem;padding:0}.btn-circle:where(.btn-xs){height:1.5rem;width:1.5rem;border-radius:9999px;padding:0}.join.join-vertical{flex-direction:column}.join.join-vertical .join-item:first-child:not(:last-child),.join.join-vertical *:first-child:not(:last-child) .join-item{border-end-start-radius:0;border-end-end-radius:0;border-start-start-radius:inherit;border-start-end-radius:inherit}.join.join-vertical .join-item:last-child:not(:first-child),.join.join-vertical *:last-child:not(:first-child) .join-item{border-start-start-radius:0;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:inherit}.join.join-horizontal{flex-direction:row}.join.join-horizontal .join-item:first-child:not(:last-child),.join.join-horizontal *:first-child:not(:last-child) .join-item{border-end-end-radius:0;border-start-end-radius:0;border-end-start-radius:inherit;border-start-start-radius:inherit}.join.join-horizontal .join-item:last-child:not(:first-child),.join.join-horizontal *:last-child:not(:first-child) .join-item{border-end-start-radius:0;border-start-start-radius:0;border-end-end-radius:inherit;border-start-end-radius:inherit}.join.join-vertical>:where(*:not(:first-child)){margin-left:0;margin-right:0;margin-top:-1px}.join.join-horizontal>:where(*:not(:first-child)){margin-top:0;margin-bottom:0;margin-inline-start:-1px}.static{position:static}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.inline{display:inline}.flex{display:flex}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.w-2\\/6{width:33.333333%}.w-3\\/6{width:50%}.w-5\\/6{width:83.333333%}.w-full{width:100%}.flex-col{flex-direction:column}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-6{gap:1.5rem}.self-start{align-self:flex-start}.rounded{border-radius:.25rem}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-error{--tw-text-opacity: 1;color:var(--fallback-er,oklch(var(--er)/var(--tw-text-opacity)))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.opacity-50{opacity:.5}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}';var Vi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,ye=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ji(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Vi(e,r,s),s};let g=class extends be{constructor(){super(...arguments),this.locale="en",this.id="",this.limit="3",this.offset="0"}};g.styles=[st(qi),st(Bi)];ye([L({type:String,hasChanged(t,e){const r=t!==e;return r&&Fi(t),r}})],g.prototype,"locale",2);ye([L({type:String})],g.prototype,"id",2);ye([L({type:String})],g.prototype,"limit",2);ye([L({type:String})],g.prototype,"offset",2);g=ye([w()],g);var Gi=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Ki=(t,e,r,i)=>{for(var s=i>1?void 0:i?Wi(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Gi(e,r,s),s};let qt=class extends g{render(){return a`<div class="bg-white rounded px-4 py-6"><slot></slot></div>`}};qt=Ki([f("graph-widget-container")],qt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=Symbol();class _{get taskComplete(){return this.t||(this.status===1?this.t=new Promise((e,r)=>{this.i=e,this.o=r}):this.status===3?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(e,r,i){var o;this.u=0,this.status=0,(this.p=e).addController(this);const s=typeof r=="object"?r:{task:r,args:i};this._=s.task,this.v=s.args,this.j=s.argsEqual??Yi,this.m=s.onComplete,this.g=s.onError,this.autoRun=s.autoRun??!0,"initialValue"in s&&(this.l=s.initialValue,this.status=2,this.k=(o=this.A)==null?void 0:o.call(this))}hostUpdate(){this.autoRun===!0&&this.O()}hostUpdated(){this.autoRun==="afterUpdate"&&this.O()}A(){if(this.v===void 0)return;const e=this.v();if(!Array.isArray(e))throw Error("The args function must return an array");return e}async O(){const e=this.A(),r=this.k;this.k=e,e===r||e===void 0||r!==void 0&&this.j(r,e)||await this.run(e)}async run(e){var n,c,p,u,d;let r,i;e??(e=this.A()),this.k=e,this.status===1?(n=this.T)==null||n.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this.p.requestUpdate()):this.p.requestUpdate();const s=++this.u;this.T=new AbortController;let o=!1;try{r=await this._(e,{signal:this.T.signal})}catch(h){o=!0,i=h}if(this.u===s){if(r===Xi)this.status=0;else{if(o===!1){try{(c=this.m)==null||c.call(this,r)}catch{}this.status=2,(p=this.i)==null||p.call(this,r)}else{try{(u=this.g)==null||u.call(this,i)}catch{}this.status=3,(d=this.o)==null||d.call(this,i)}this.l=r,this.h=i}this.p.requestUpdate()}}abort(e){var r;this.status===1&&((r=this.T)==null||r.abort(e))}get value(){return this.l}get error(){return this.h}render(e){var r,i,s,o;switch(this.status){case 0:return(r=e.initial)==null?void 0:r.call(e);case 1:return(i=e.pending)==null?void 0:i.call(e);case 2:return(s=e.complete)==null?void 0:s.call(e,this.value);case 3:return(o=e.error)==null?void 0:o.call(e,this.error);default:throw Error("Unexpected status: "+this.status)}}}const Yi=(t,e)=>t===e||t.length===e.length&&t.every((r,i)=>!Re(r,e[i]));var Ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qi(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zi=Array.isArray,$t=Zi,eo=typeof Ce=="object"&&Ce&&Ce.Object===Object&&Ce,to=eo,ro=to,so=typeof self=="object"&&self&&self.Object===Object&&self,io=ro||so||Function("return this")(),_t=io,oo=_t,no=oo.Symbol,yt=no,Vt=yt,vs=Object.prototype,ao=vs.hasOwnProperty,lo=vs.toString,de=Vt?Vt.toStringTag:void 0;function co(t){var e=ao.call(t,de),r=t[de];try{t[de]=void 0;var i=!0}catch{}var s=lo.call(t);return i&&(e?t[de]=r:delete t[de]),s}var ho=co,po=Object.prototype,uo=po.toString;function go(t){return uo.call(t)}var fo=go,Jt=yt,bo=ho,mo=fo,wo="[object Null]",vo="[object Undefined]",Gt=Jt?Jt.toStringTag:void 0;function $o(t){return t==null?t===void 0?vo:wo:Gt&&Gt in Object(t)?bo(t):mo(t)}var $s=$o;function _o(t){return t!=null&&typeof t=="object"}var yo=_o,Po=$s,xo=yo,Oo="[object Symbol]";function Co(t){return typeof t=="symbol"||xo(t)&&Po(t)==Oo}var Pt=Co,ko=$t,So=Pt,jo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Eo=/^\w*$/;function Ao(t,e){if(ko(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||So(t)?!0:Eo.test(t)||!jo.test(t)||e!=null&&t in Object(e)}var No=Ao;function Do(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var _s=Do,To=$s,Uo=_s,Ro="[object AsyncFunction]",Lo="[object Function]",Mo="[object GeneratorFunction]",zo="[object Proxy]";function Ho(t){if(!Uo(t))return!1;var e=To(t);return e==Lo||e==Mo||e==Ro||e==zo}var Io=Ho,Fo=_t,Bo=Fo["__core-js_shared__"],qo=Bo,Qe=qo,Wt=function(){var t=/[^.]+$/.exec(Qe&&Qe.keys&&Qe.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Vo(t){return!!Wt&&Wt in t}var Jo=Vo,Go=Function.prototype,Wo=Go.toString;function Ko(t){if(t!=null){try{return Wo.call(t)}catch{}try{return t+""}catch{}}return""}var Xo=Ko,Yo=Io,Qo=Jo,Zo=_s,en=Xo,tn=/[\\^$.*+?()[\]{}|]/g,rn=/^\[object .+?Constructor\]$/,sn=Function.prototype,on=Object.prototype,nn=sn.toString,an=on.hasOwnProperty,ln=RegExp("^"+nn.call(an).replace(tn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function cn(t){if(!Zo(t)||Qo(t))return!1;var e=Yo(t)?ln:rn;return e.test(en(t))}var hn=cn;function pn(t,e){return t==null?void 0:t[e]}var dn=pn,un=hn,gn=dn;function fn(t,e){var r=gn(t,e);return un(r)?r:void 0}var ys=fn,bn=ys,mn=bn(Object,"create"),Me=mn,Kt=Me;function wn(){this.__data__=Kt?Kt(null):{},this.size=0}var vn=wn;function $n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var _n=$n,yn=Me,Pn="__lodash_hash_undefined__",xn=Object.prototype,On=xn.hasOwnProperty;function Cn(t){var e=this.__data__;if(yn){var r=e[t];return r===Pn?void 0:r}return On.call(e,t)?e[t]:void 0}var kn=Cn,Sn=Me,jn=Object.prototype,En=jn.hasOwnProperty;function An(t){var e=this.__data__;return Sn?e[t]!==void 0:En.call(e,t)}var Nn=An,Dn=Me,Tn="__lodash_hash_undefined__";function Un(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Dn&&e===void 0?Tn:e,this}var Rn=Un,Ln=vn,Mn=_n,zn=kn,Hn=Nn,In=Rn;function ne(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}ne.prototype.clear=Ln;ne.prototype.delete=Mn;ne.prototype.get=zn;ne.prototype.has=Hn;ne.prototype.set=In;var Fn=ne;function Bn(){this.__data__=[],this.size=0}var qn=Bn;function Vn(t,e){return t===e||t!==t&&e!==e}var Jn=Vn,Gn=Jn;function Wn(t,e){for(var r=t.length;r--;)if(Gn(t[r][0],e))return r;return-1}var ze=Wn,Kn=ze,Xn=Array.prototype,Yn=Xn.splice;function Qn(t){var e=this.__data__,r=Kn(e,t);if(r<0)return!1;var i=e.length-1;return r==i?e.pop():Yn.call(e,r,1),--this.size,!0}var Zn=Qn,ea=ze;function ta(t){var e=this.__data__,r=ea(e,t);return r<0?void 0:e[r][1]}var ra=ta,sa=ze;function ia(t){return sa(this.__data__,t)>-1}var oa=ia,na=ze;function aa(t,e){var r=this.__data__,i=na(r,t);return i<0?(++this.size,r.push([t,e])):r[i][1]=e,this}var la=aa,ca=qn,ha=Zn,pa=ra,da=oa,ua=la;function ae(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}ae.prototype.clear=ca;ae.prototype.delete=ha;ae.prototype.get=pa;ae.prototype.has=da;ae.prototype.set=ua;var ga=ae,fa=ys,ba=_t,ma=fa(ba,"Map"),wa=ma,Xt=Fn,va=ga,$a=wa;function _a(){this.size=0,this.__data__={hash:new Xt,map:new($a||va),string:new Xt}}var ya=_a;function Pa(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var xa=Pa,Oa=xa;function Ca(t,e){var r=t.__data__;return Oa(e)?r[typeof e=="string"?"string":"hash"]:r.map}var He=Ca,ka=He;function Sa(t){var e=ka(this,t).delete(t);return this.size-=e?1:0,e}var ja=Sa,Ea=He;function Aa(t){return Ea(this,t).get(t)}var Na=Aa,Da=He;function Ta(t){return Da(this,t).has(t)}var Ua=Ta,Ra=He;function La(t,e){var r=Ra(this,t),i=r.size;return r.set(t,e),this.size+=r.size==i?0:1,this}var Ma=La,za=ya,Ha=ja,Ia=Na,Fa=Ua,Ba=Ma;function le(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}le.prototype.clear=za;le.prototype.delete=Ha;le.prototype.get=Ia;le.prototype.has=Fa;le.prototype.set=Ba;var qa=le,Ps=qa,Va="Expected a function";function xt(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Va);var r=function(){var i=arguments,s=e?e.apply(this,i):i[0],o=r.cache;if(o.has(s))return o.get(s);var n=t.apply(this,i);return r.cache=o.set(s,n)||o,n};return r.cache=new(xt.Cache||Ps),r}xt.Cache=Ps;var Ja=xt,Ga=Ja,Wa=500;function Ka(t){var e=Ga(t,function(i){return r.size===Wa&&r.clear(),i}),r=e.cache;return e}var Xa=Ka,Ya=Xa,Qa=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Za=/\\(\\)?/g,el=Ya(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Qa,function(r,i,s,o){e.push(s?o.replace(Za,"$1"):i||r)}),e}),tl=el;function rl(t,e){for(var r=-1,i=t==null?0:t.length,s=Array(i);++r<i;)s[r]=e(t[r],r,t);return s}var sl=rl,Yt=yt,il=sl,ol=$t,nl=Pt,al=1/0,Qt=Yt?Yt.prototype:void 0,Zt=Qt?Qt.toString:void 0;function xs(t){if(typeof t=="string")return t;if(ol(t))return il(t,xs)+"";if(nl(t))return Zt?Zt.call(t):"";var e=t+"";return e=="0"&&1/t==-al?"-0":e}var ll=xs,cl=ll;function hl(t){return t==null?"":cl(t)}var pl=hl,dl=$t,ul=No,gl=tl,fl=pl;function bl(t,e){return dl(t)?t:ul(t,e)?[t]:gl(fl(t))}var ml=bl,wl=Pt,vl=1/0;function $l(t){if(typeof t=="string"||wl(t))return t;var e=t+"";return e=="0"&&1/t==-vl?"-0":e}var _l=$l,yl=ml,Pl=_l;function xl(t,e){e=yl(e,t);for(var r=0,i=e.length;t!=null&&r<i;)t=t[Pl(e[r++])];return r&&r==i?t:void 0}var Ol=xl,Cl=Ol;function kl(t,e,r){var i=t==null?void 0:Cl(t,e);return i===void 0?r:i}var Sl=kl;const x=Qi(Sl);function Os(t,e){return function(){return t.apply(e,arguments)}}const{toString:jl}=Object.prototype,{getPrototypeOf:Ot}=Object,Ie=(t=>e=>{const r=jl.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),z=t=>(t=t.toLowerCase(),e=>Ie(e)===t),Fe=t=>e=>typeof e===t,{isArray:ce}=Array,$e=Fe("undefined");function El(t){return t!==null&&!$e(t)&&t.constructor!==null&&!$e(t.constructor)&&U(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Cs=z("ArrayBuffer");function Al(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Cs(t.buffer),e}const Nl=Fe("string"),U=Fe("function"),ks=Fe("number"),Be=t=>t!==null&&typeof t=="object",Dl=t=>t===!0||t===!1,Se=t=>{if(Ie(t)!=="object")return!1;const e=Ot(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Tl=z("Date"),Ul=z("File"),Rl=z("Blob"),Ll=z("FileList"),Ml=t=>Be(t)&&U(t.pipe),zl=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||U(t.append)&&((e=Ie(t))==="formdata"||e==="object"&&U(t.toString)&&t.toString()==="[object FormData]"))},Hl=z("URLSearchParams"),Il=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Pe(t,e,{allOwnKeys:r=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),ce(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{const o=r?Object.getOwnPropertyNames(t):Object.keys(t),n=o.length;let c;for(i=0;i<n;i++)c=o[i],e.call(null,t[c],c,t)}}function Ss(t,e){e=e.toLowerCase();const r=Object.keys(t);let i=r.length,s;for(;i-- >0;)if(s=r[i],e===s.toLowerCase())return s;return null}const js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Es=t=>!$e(t)&&t!==js;function nt(){const{caseless:t}=Es(this)&&this||{},e={},r=(i,s)=>{const o=t&&Ss(e,s)||s;Se(e[o])&&Se(i)?e[o]=nt(e[o],i):Se(i)?e[o]=nt({},i):ce(i)?e[o]=i.slice():e[o]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Pe(arguments[i],r);return e}const Fl=(t,e,r,{allOwnKeys:i}={})=>(Pe(e,(s,o)=>{r&&U(s)?t[o]=Os(s,r):t[o]=s},{allOwnKeys:i}),t),Bl=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ql=(t,e,r,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},Vl=(t,e,r,i)=>{let s,o,n;const c={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)n=s[o],(!i||i(n,t,e))&&!c[n]&&(e[n]=t[n],c[n]=!0);t=r!==!1&&Ot(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},Jl=(t,e,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;const i=t.indexOf(e,r);return i!==-1&&i===r},Gl=t=>{if(!t)return null;if(ce(t))return t;let e=t.length;if(!ks(e))return null;const r=new Array(e);for(;e-- >0;)r[e]=t[e];return r},Wl=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ot(Uint8Array)),Kl=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=i.next())&&!s.done;){const o=s.value;e.call(t,o[0],o[1])}},Xl=(t,e)=>{let r;const i=[];for(;(r=t.exec(e))!==null;)i.push(r);return i},Yl=z("HTMLFormElement"),Ql=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,i,s){return i.toUpperCase()+s}),er=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),Zl=z("RegExp"),As=(t,e)=>{const r=Object.getOwnPropertyDescriptors(t),i={};Pe(r,(s,o)=>{let n;(n=e(s,o,t))!==!1&&(i[o]=n||s)}),Object.defineProperties(t,i)},ec=t=>{As(t,(e,r)=>{if(U(t)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const i=t[r];if(U(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},tc=(t,e)=>{const r={},i=s=>{s.forEach(o=>{r[o]=!0})};return ce(t)?i(t):i(String(t).split(e)),r},rc=()=>{},sc=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ze="abcdefghijklmnopqrstuvwxyz",tr="0123456789",Ns={DIGIT:tr,ALPHA:Ze,ALPHA_DIGIT:Ze+Ze.toUpperCase()+tr},ic=(t=16,e=Ns.ALPHA_DIGIT)=>{let r="";const{length:i}=e;for(;t--;)r+=e[Math.random()*i|0];return r};function oc(t){return!!(t&&U(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const nc=t=>{const e=new Array(10),r=(i,s)=>{if(Be(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[s]=i;const o=ce(i)?[]:{};return Pe(i,(n,c)=>{const p=r(n,s+1);!$e(p)&&(o[c]=p)}),e[s]=void 0,o}}return i};return r(t,0)},ac=z("AsyncFunction"),lc=t=>t&&(Be(t)||U(t))&&U(t.then)&&U(t.catch),l={isArray:ce,isArrayBuffer:Cs,isBuffer:El,isFormData:zl,isArrayBufferView:Al,isString:Nl,isNumber:ks,isBoolean:Dl,isObject:Be,isPlainObject:Se,isUndefined:$e,isDate:Tl,isFile:Ul,isBlob:Rl,isRegExp:Zl,isFunction:U,isStream:Ml,isURLSearchParams:Hl,isTypedArray:Wl,isFileList:Ll,forEach:Pe,merge:nt,extend:Fl,trim:Il,stripBOM:Bl,inherits:ql,toFlatObject:Vl,kindOf:Ie,kindOfTest:z,endsWith:Jl,toArray:Gl,forEachEntry:Kl,matchAll:Xl,isHTMLForm:Yl,hasOwnProperty:er,hasOwnProp:er,reduceDescriptors:As,freezeMethods:ec,toObjectSet:tc,toCamelCase:Ql,noop:rc,toFiniteNumber:sc,findKey:Ss,global:js,isContextDefined:Es,ALPHABET:Ns,generateString:ic,isSpecCompliantForm:oc,toJSONObject:nc,isAsyncFn:ac,isThenable:lc};function y(t,e,r,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),i&&(this.request=i),s&&(this.response=s)}l.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ds=y.prototype,Ts={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ts[t]={value:t}});Object.defineProperties(y,Ts);Object.defineProperty(Ds,"isAxiosError",{value:!0});y.from=(t,e,r,i,s,o)=>{const n=Object.create(Ds);return l.toFlatObject(t,n,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),y.call(n,t.message,e,r,i,s),n.cause=t,n.name=t.name,o&&Object.assign(n,o),n};const cc=null;function at(t){return l.isPlainObject(t)||l.isArray(t)}function Us(t){return l.endsWith(t,"[]")?t.slice(0,-2):t}function rr(t,e,r){return t?t.concat(e).map(function(s,o){return s=Us(s),!r&&o?"["+s+"]":s}).join(r?".":""):e}function hc(t){return l.isArray(t)&&!t.some(at)}const pc=l.toFlatObject(l,{},null,function(e){return/^is[A-Z]/.test(e)});function qe(t,e,r){if(!l.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,r=l.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function($,j){return!l.isUndefined(j[$])});const i=r.metaTokens,s=r.visitor||d,o=r.dots,n=r.indexes,p=(r.Blob||typeof Blob<"u"&&Blob)&&l.isSpecCompliantForm(e);if(!l.isFunction(s))throw new TypeError("visitor must be a function");function u(b){if(b===null)return"";if(l.isDate(b))return b.toISOString();if(!p&&l.isBlob(b))throw new y("Blob is not supported. Use a Buffer instead.");return l.isArrayBuffer(b)||l.isTypedArray(b)?p&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function d(b,$,j){let N=b;if(b&&!j&&typeof b=="object"){if(l.endsWith($,"{}"))$=i?$:$.slice(0,-2),b=JSON.stringify(b);else if(l.isArray(b)&&hc(b)||(l.isFileList(b)||l.endsWith($,"[]"))&&(N=l.toArray(b)))return $=Us($),N.forEach(function(q,ei){!(l.isUndefined(q)||q===null)&&e.append(n===!0?rr([$],ei,o):n===null?$:$+"[]",u(q))}),!1}return at(b)?!0:(e.append(rr(j,$,o),u(b)),!1)}const h=[],P=Object.assign(pc,{defaultVisitor:d,convertValue:u,isVisitable:at});function O(b,$){if(!l.isUndefined(b)){if(h.indexOf(b)!==-1)throw Error("Circular reference detected in "+$.join("."));h.push(b),l.forEach(b,function(N,B){(!(l.isUndefined(N)||N===null)&&s.call(e,N,l.isString(B)?B.trim():B,$,P))===!0&&O(N,$?$.concat(B):[B])}),h.pop()}}if(!l.isObject(t))throw new TypeError("data must be an object");return O(t),e}function sr(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Ct(t,e){this._pairs=[],t&&qe(t,this,e)}const Rs=Ct.prototype;Rs.append=function(e,r){this._pairs.push([e,r])};Rs.toString=function(e){const r=e?function(i){return e.call(this,i,sr)}:sr;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function dc(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ls(t,e,r){if(!e)return t;const i=r&&r.encode||dc,s=r&&r.serialize;let o;if(s?o=s(e,r):o=l.isURLSearchParams(e)?e.toString():new Ct(e,r).toString(i),o){const n=t.indexOf("#");n!==-1&&(t=t.slice(0,n)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class uc{constructor(){this.handlers=[]}use(e,r,i){return this.handlers.push({fulfilled:e,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){l.forEach(this.handlers,function(i){i!==null&&e(i)})}}const ir=uc,Ms={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gc=typeof URLSearchParams<"u"?URLSearchParams:Ct,fc=typeof FormData<"u"?FormData:null,bc=typeof Blob<"u"?Blob:null,mc={isBrowser:!0,classes:{URLSearchParams:gc,FormData:fc,Blob:bc},protocols:["http","https","file","blob","url","data"]},zs=typeof window<"u"&&typeof document<"u",wc=(t=>zs&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),vc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",$c=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:zs,hasStandardBrowserEnv:wc,hasStandardBrowserWebWorkerEnv:vc},Symbol.toStringTag,{value:"Module"})),M={...$c,...mc};function _c(t,e){return qe(t,new M.classes.URLSearchParams,Object.assign({visitor:function(r,i,s,o){return M.isNode&&l.isBuffer(r)?(this.append(i,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function yc(t){return l.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Pc(t){const e={},r=Object.keys(t);let i;const s=r.length;let o;for(i=0;i<s;i++)o=r[i],e[o]=t[o];return e}function Hs(t){function e(r,i,s,o){let n=r[o++];if(n==="__proto__")return!0;const c=Number.isFinite(+n),p=o>=r.length;return n=!n&&l.isArray(s)?s.length:n,p?(l.hasOwnProp(s,n)?s[n]=[s[n],i]:s[n]=i,!c):((!s[n]||!l.isObject(s[n]))&&(s[n]=[]),e(r,i,s[n],o)&&l.isArray(s[n])&&(s[n]=Pc(s[n])),!c)}if(l.isFormData(t)&&l.isFunction(t.entries)){const r={};return l.forEachEntry(t,(i,s)=>{e(yc(i),s,r,0)}),r}return null}function xc(t,e,r){if(l.isString(t))try{return(e||JSON.parse)(t),l.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(t)}const kt={transitional:Ms,adapter:["xhr","http"],transformRequest:[function(e,r){const i=r.getContentType()||"",s=i.indexOf("application/json")>-1,o=l.isObject(e);if(o&&l.isHTMLForm(e)&&(e=new FormData(e)),l.isFormData(e))return s?JSON.stringify(Hs(e)):e;if(l.isArrayBuffer(e)||l.isBuffer(e)||l.isStream(e)||l.isFile(e)||l.isBlob(e))return e;if(l.isArrayBufferView(e))return e.buffer;if(l.isURLSearchParams(e))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return _c(e,this.formSerializer).toString();if((c=l.isFileList(e))||i.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return qe(c?{"files[]":e}:e,p&&new p,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),xc(e)):e}],transformResponse:[function(e){const r=this.transitional||kt.transitional,i=r&&r.forcedJSONParsing,s=this.responseType==="json";if(e&&l.isString(e)&&(i&&!this.responseType||s)){const n=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(c){if(n)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:M.classes.FormData,Blob:M.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};l.forEach(["delete","get","head","post","put","patch"],t=>{kt.headers[t]={}});const St=kt,Oc=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Cc=t=>{const e={};let r,i,s;return t&&t.split(`
`).forEach(function(n){s=n.indexOf(":"),r=n.substring(0,s).trim().toLowerCase(),i=n.substring(s+1).trim(),!(!r||e[r]&&Oc[r])&&(r==="set-cookie"?e[r]?e[r].push(i):e[r]=[i]:e[r]=e[r]?e[r]+", "+i:i)}),e},or=Symbol("internals");function ue(t){return t&&String(t).trim().toLowerCase()}function je(t){return t===!1||t==null?t:l.isArray(t)?t.map(je):String(t)}function kc(t){const e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=r.exec(t);)e[i[1]]=i[2];return e}const Sc=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function et(t,e,r,i,s){if(l.isFunction(i))return i.call(this,e,r);if(s&&(e=r),!!l.isString(e)){if(l.isString(i))return e.indexOf(i)!==-1;if(l.isRegExp(i))return i.test(e)}}function jc(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,r,i)=>r.toUpperCase()+i)}function Ec(t,e){const r=l.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+r,{value:function(s,o,n){return this[i].call(this,e,s,o,n)},configurable:!0})})}class Ve{constructor(e){e&&this.set(e)}set(e,r,i){const s=this;function o(c,p,u){const d=ue(p);if(!d)throw new Error("header name must be a non-empty string");const h=l.findKey(s,d);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||p]=je(c))}const n=(c,p)=>l.forEach(c,(u,d)=>o(u,d,p));return l.isPlainObject(e)||e instanceof this.constructor?n(e,r):l.isString(e)&&(e=e.trim())&&!Sc(e)?n(Cc(e),r):e!=null&&o(r,e,i),this}get(e,r){if(e=ue(e),e){const i=l.findKey(this,e);if(i){const s=this[i];if(!r)return s;if(r===!0)return kc(s);if(l.isFunction(r))return r.call(this,s,i);if(l.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,r){if(e=ue(e),e){const i=l.findKey(this,e);return!!(i&&this[i]!==void 0&&(!r||et(this,this[i],i,r)))}return!1}delete(e,r){const i=this;let s=!1;function o(n){if(n=ue(n),n){const c=l.findKey(i,n);c&&(!r||et(i,i[c],c,r))&&(delete i[c],s=!0)}}return l.isArray(e)?e.forEach(o):o(e),s}clear(e){const r=Object.keys(this);let i=r.length,s=!1;for(;i--;){const o=r[i];(!e||et(this,this[o],o,e,!0))&&(delete this[o],s=!0)}return s}normalize(e){const r=this,i={};return l.forEach(this,(s,o)=>{const n=l.findKey(i,o);if(n){r[n]=je(s),delete r[o];return}const c=e?jc(o):String(o).trim();c!==o&&delete r[o],r[c]=je(s),i[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const r=Object.create(null);return l.forEach(this,(i,s)=>{i!=null&&i!==!1&&(r[s]=e&&l.isArray(i)?i.join(", "):i)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,r])=>e+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...r){const i=new this(e);return r.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[or]=this[or]={accessors:{}}).accessors,s=this.prototype;function o(n){const c=ue(n);i[c]||(Ec(s,n),i[c]=!0)}return l.isArray(e)?e.forEach(o):o(e),this}}Ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);l.reduceDescriptors(Ve.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[r]=i}}});l.freezeMethods(Ve);const F=Ve;function tt(t,e){const r=this||St,i=e||r,s=F.from(i.headers);let o=i.data;return l.forEach(t,function(c){o=c.call(r,o,s.normalize(),e?e.status:void 0)}),s.normalize(),o}function Is(t){return!!(t&&t.__CANCEL__)}function xe(t,e,r){y.call(this,t??"canceled",y.ERR_CANCELED,e,r),this.name="CanceledError"}l.inherits(xe,y,{__CANCEL__:!0});function Ac(t,e,r){const i=r.config.validateStatus;!r.status||!i||i(r.status)?t(r):e(new y("Request failed with status code "+r.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Nc=M.hasStandardBrowserEnv?{write(t,e,r,i,s,o){const n=[t+"="+encodeURIComponent(e)];l.isNumber(r)&&n.push("expires="+new Date(r).toGMTString()),l.isString(i)&&n.push("path="+i),l.isString(s)&&n.push("domain="+s),o===!0&&n.push("secure"),document.cookie=n.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Dc(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Tc(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Fs(t,e){return t&&!Dc(e)?Tc(t,e):e}const Uc=M.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let i;function s(o){let n=o;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return i=s(window.location.href),function(n){const c=l.isString(n)?s(n):n;return c.protocol===i.protocol&&c.host===i.host}}():function(){return function(){return!0}}();function Rc(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Lc(t,e){t=t||10;const r=new Array(t),i=new Array(t);let s=0,o=0,n;return e=e!==void 0?e:1e3,function(p){const u=Date.now(),d=i[o];n||(n=u),r[s]=p,i[s]=u;let h=o,P=0;for(;h!==s;)P+=r[h++],h=h%t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),u-n<e)return;const O=d&&u-d;return O?Math.round(P*1e3/O):void 0}}function nr(t,e){let r=0;const i=Lc(50,250);return s=>{const o=s.loaded,n=s.lengthComputable?s.total:void 0,c=o-r,p=i(c),u=o<=n;r=o;const d={loaded:o,total:n,progress:n?o/n:void 0,bytes:c,rate:p||void 0,estimated:p&&n&&u?(n-o)/p:void 0,event:s};d[e?"download":"upload"]=!0,t(d)}}const Mc=typeof XMLHttpRequest<"u",zc=Mc&&function(t){return new Promise(function(r,i){let s=t.data;const o=F.from(t.headers).normalize();let{responseType:n,withXSRFToken:c}=t,p;function u(){t.cancelToken&&t.cancelToken.unsubscribe(p),t.signal&&t.signal.removeEventListener("abort",p)}let d;if(l.isFormData(s)){if(M.hasStandardBrowserEnv||M.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((d=o.getContentType())!==!1){const[$,...j]=d?d.split(";").map(N=>N.trim()).filter(Boolean):[];o.setContentType([$||"multipart/form-data",...j].join("; "))}}let h=new XMLHttpRequest;if(t.auth){const $=t.auth.username||"",j=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa($+":"+j))}const P=Fs(t.baseURL,t.url);h.open(t.method.toUpperCase(),Ls(P,t.params,t.paramsSerializer),!0),h.timeout=t.timeout;function O(){if(!h)return;const $=F.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),N={data:!n||n==="text"||n==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:$,config:t,request:h};Ac(function(q){r(q),u()},function(q){i(q),u()},N),h=null}if("onloadend"in h?h.onloadend=O:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(O)},h.onabort=function(){h&&(i(new y("Request aborted",y.ECONNABORTED,t,h)),h=null)},h.onerror=function(){i(new y("Network Error",y.ERR_NETWORK,t,h)),h=null},h.ontimeout=function(){let j=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const N=t.transitional||Ms;t.timeoutErrorMessage&&(j=t.timeoutErrorMessage),i(new y(j,N.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,t,h)),h=null},M.hasStandardBrowserEnv&&(c&&l.isFunction(c)&&(c=c(t)),c||c!==!1&&Uc(P))){const $=t.xsrfHeaderName&&t.xsrfCookieName&&Nc.read(t.xsrfCookieName);$&&o.set(t.xsrfHeaderName,$)}s===void 0&&o.setContentType(null),"setRequestHeader"in h&&l.forEach(o.toJSON(),function(j,N){h.setRequestHeader(N,j)}),l.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),n&&n!=="json"&&(h.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&h.addEventListener("progress",nr(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",nr(t.onUploadProgress)),(t.cancelToken||t.signal)&&(p=$=>{h&&(i(!$||$.type?new xe(null,t,h):$),h.abort(),h=null)},t.cancelToken&&t.cancelToken.subscribe(p),t.signal&&(t.signal.aborted?p():t.signal.addEventListener("abort",p)));const b=Rc(P);if(b&&M.protocols.indexOf(b)===-1){i(new y("Unsupported protocol "+b+":",y.ERR_BAD_REQUEST,t));return}h.send(s||null)})},lt={http:cc,xhr:zc};l.forEach(lt,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ar=t=>`- ${t}`,Hc=t=>l.isFunction(t)||t===null||t===!1,Bs={getAdapter:t=>{t=l.isArray(t)?t:[t];const{length:e}=t;let r,i;const s={};for(let o=0;o<e;o++){r=t[o];let n;if(i=r,!Hc(r)&&(i=lt[(n=String(r)).toLowerCase()],i===void 0))throw new y(`Unknown adapter '${n}'`);if(i)break;s[n||"#"+o]=i}if(!i){const o=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let n=e?o.length>1?`since :
`+o.map(ar).join(`
`):" "+ar(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return i},adapters:lt};function rt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new xe(null,t)}function lr(t){return rt(t),t.headers=F.from(t.headers),t.data=tt.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Bs.getAdapter(t.adapter||St.adapter)(t).then(function(i){return rt(t),i.data=tt.call(t,t.transformResponse,i),i.headers=F.from(i.headers),i},function(i){return Is(i)||(rt(t),i&&i.response&&(i.response.data=tt.call(t,t.transformResponse,i.response),i.response.headers=F.from(i.response.headers))),Promise.reject(i)})}const cr=t=>t instanceof F?t.toJSON():t;function oe(t,e){e=e||{};const r={};function i(u,d,h){return l.isPlainObject(u)&&l.isPlainObject(d)?l.merge.call({caseless:h},u,d):l.isPlainObject(d)?l.merge({},d):l.isArray(d)?d.slice():d}function s(u,d,h){if(l.isUndefined(d)){if(!l.isUndefined(u))return i(void 0,u,h)}else return i(u,d,h)}function o(u,d){if(!l.isUndefined(d))return i(void 0,d)}function n(u,d){if(l.isUndefined(d)){if(!l.isUndefined(u))return i(void 0,u)}else return i(void 0,d)}function c(u,d,h){if(h in e)return i(u,d);if(h in t)return i(void 0,u)}const p={url:o,method:o,data:o,baseURL:n,transformRequest:n,transformResponse:n,paramsSerializer:n,timeout:n,timeoutMessage:n,withCredentials:n,withXSRFToken:n,adapter:n,responseType:n,xsrfCookieName:n,xsrfHeaderName:n,onUploadProgress:n,onDownloadProgress:n,decompress:n,maxContentLength:n,maxBodyLength:n,beforeRedirect:n,transport:n,httpAgent:n,httpsAgent:n,cancelToken:n,socketPath:n,responseEncoding:n,validateStatus:c,headers:(u,d)=>s(cr(u),cr(d),!0)};return l.forEach(Object.keys(Object.assign({},t,e)),function(d){const h=p[d]||s,P=h(t[d],e[d],d);l.isUndefined(P)&&h!==c||(r[d]=P)}),r}const qs="1.6.7",jt={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{jt[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const hr={};jt.transitional=function(e,r,i){function s(o,n){return"[Axios v"+qs+"] Transitional option '"+o+"'"+n+(i?". "+i:"")}return(o,n,c)=>{if(e===!1)throw new y(s(n," has been removed"+(r?" in "+r:"")),y.ERR_DEPRECATED);return r&&!hr[n]&&(hr[n]=!0,console.warn(s(n," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(o,n,c):!0}};function Ic(t,e,r){if(typeof t!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const o=i[s],n=e[o];if(n){const c=t[o],p=c===void 0||n(c,o,t);if(p!==!0)throw new y("option "+o+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const ct={assertOptions:Ic,validators:jt},V=ct.validators;class Ue{constructor(e){this.defaults=e,this.interceptors={request:new ir,response:new ir}}async request(e,r){try{return await this._request(e,r)}catch(i){if(i instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";i.stack?o&&!String(i.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+o):i.stack=o}throw i}}_request(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=oe(this.defaults,r);const{transitional:i,paramsSerializer:s,headers:o}=r;i!==void 0&&ct.assertOptions(i,{silentJSONParsing:V.transitional(V.boolean),forcedJSONParsing:V.transitional(V.boolean),clarifyTimeoutError:V.transitional(V.boolean)},!1),s!=null&&(l.isFunction(s)?r.paramsSerializer={serialize:s}:ct.assertOptions(s,{encode:V.function,serialize:V.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let n=o&&l.merge(o.common,o[r.method]);o&&l.forEach(["delete","get","head","post","put","patch","common"],b=>{delete o[b]}),r.headers=F.concat(n,o);const c=[];let p=!0;this.interceptors.request.forEach(function($){typeof $.runWhen=="function"&&$.runWhen(r)===!1||(p=p&&$.synchronous,c.unshift($.fulfilled,$.rejected))});const u=[];this.interceptors.response.forEach(function($){u.push($.fulfilled,$.rejected)});let d,h=0,P;if(!p){const b=[lr.bind(this),void 0];for(b.unshift.apply(b,c),b.push.apply(b,u),P=b.length,d=Promise.resolve(r);h<P;)d=d.then(b[h++],b[h++]);return d}P=c.length;let O=r;for(h=0;h<P;){const b=c[h++],$=c[h++];try{O=b(O)}catch(j){$.call(this,j);break}}try{d=lr.call(this,O)}catch(b){return Promise.reject(b)}for(h=0,P=u.length;h<P;)d=d.then(u[h++],u[h++]);return d}getUri(e){e=oe(this.defaults,e);const r=Fs(e.baseURL,e.url);return Ls(r,e.params,e.paramsSerializer)}}l.forEach(["delete","get","head","options"],function(e){Ue.prototype[e]=function(r,i){return this.request(oe(i||{},{method:e,url:r,data:(i||{}).data}))}});l.forEach(["post","put","patch"],function(e){function r(i){return function(o,n,c){return this.request(oe(c||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:n}))}}Ue.prototype[e]=r(),Ue.prototype[e+"Form"]=r(!0)});const Ee=Ue;class Et{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const i=this;this.promise.then(s=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](s);i._listeners=null}),this.promise.then=s=>{let o;const n=new Promise(c=>{i.subscribe(c),o=c}).then(s);return n.cancel=function(){i.unsubscribe(o)},n},e(function(o,n,c){i.reason||(i.reason=new xe(o,n,c),r(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}static source(){let e;return{token:new Et(function(s){e=s}),cancel:e}}}const Fc=Et;function Bc(t){return function(r){return t.apply(null,r)}}function qc(t){return l.isObject(t)&&t.isAxiosError===!0}const ht={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ht).forEach(([t,e])=>{ht[e]=t});const Vc=ht;function Vs(t){const e=new Ee(t),r=Os(Ee.prototype.request,e);return l.extend(r,Ee.prototype,e,{allOwnKeys:!0}),l.extend(r,e,null,{allOwnKeys:!0}),r.create=function(s){return Vs(oe(t,s))},r}const C=Vs(St);C.Axios=Ee;C.CanceledError=xe;C.CancelToken=Fc;C.isCancel=Is;C.VERSION=qs;C.toFormData=qe;C.AxiosError=y;C.Cancel=C.CanceledError;C.all=function(e){return Promise.all(e)};C.spread=Bc;C.isAxiosError=qc;C.mergeConfig=oe;C.AxiosHeaders=F;C.formToJSON=t=>Hs(l.isHTMLForm(t)?new FormData(t):t);C.getAdapter=Bs.getAdapter;C.HttpStatusCode=Vc;C.default=C;const Jc=C,Gc="https://graphsearch.epfl.ch/api",m=Jc.create({baseURL:Gc}),he=({id:t,fields:e},{signal:r})=>m.get(`/concepts/${t}`,{params:{fields:e},signal:r}).then(i=>i.data.item),Wc=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/concepts/${t}/concepts`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Kc=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/concepts/${t}/courses`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Xc=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/concepts/${t}/lectures`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Yc=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/concepts/${t}/persons`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Qc=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/concepts/${t}/publications`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Zc=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/concepts/${t}/units`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),R=({locale:t})=>["_id","_url",`_description_large.${t}.value`,`name.${t}.value`].toString(),E=({locale:t})=>["_id","_url","course_code",`name.${t}.value`,`summary.${t}.value`].toString(),A=({locale:t})=>["_id","_url","video"].toString(),k=({locale:t})=>["_id","_url","name_display",`biography.${t}`].toString(),D=({locale:t})=>["_id","_url","title",`type.${t}`,"publisher","published_in","year","abstract"].toString(),T=({locale:t})=>["_id","_url",`name.${t}.value`,"path"].toString();var eh=Object.defineProperty,th=Object.getOwnPropertyDescriptor,Js=(t,e,r,i)=>{for(var s=i>1?void 0:i?th(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&eh(e,r,s),s};let pt=class extends g{constructor(){super(...arguments),this.concept={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.concept._url} class="link font-medium self-start">
        ${x(this.concept,["name",this.locale,"value"])}
      </a>

      <p class="line-clamp-2 text-sm">
        ${x(this.concept,["_description_large",this.locale,"value"])}
      </p>
    </div> `}};Js([L({type:Object})],pt.prototype,"concept",2);pt=Js([f("graph-widget-concept")],pt);var rh=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,ih=(t,e,r,i)=>{for(var s=i>1?void 0:i?sh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&rh(e,r,s),s};let pr=class extends g{render(){return a`<div class="text-error text-xs font-medium">
      <slot></slot>
    </div>`}};pr=ih([f("graph-widget-error")],pr);var oh=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,ah=(t,e,r,i)=>{for(var s=i>1?void 0:i?nh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&oh(e,r,s),s};let dr=class extends g{render(){return a` <graph-widget-section>
      <div slot="header" class="flex flex-col gap-2">
        <div class="skeleton h-5 w-3/6"></div>
        <div class="skeleton h-2 w-2/6"></div>
      </div>
      <div class="flex flex-col gap-6">
        ${Array.from({length:Number(this.limit)}).map(()=>a`
              <div class="flex flex-col gap-2">
                <div class="skeleton h-4 w-5/6"></div>
                <div class="skeleton h-3 w-full"></div>
                <div class="skeleton h-3 w-full"></div>
              </div>
            `)}
      </div>
      <graph-widget-section-link slot="footer"></graph-widget-section-link>
    </graph-widget-section>`}};dr=ah([w(),f("graph-widget-loading")],dr);var lh=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,hh=(t,e,r,i)=>{for(var s=i>1?void 0:i?ch(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&lh(e,r,s),s};let ur=class extends g{render(){return a`<div class="text-xs font-medium">${v("No results")}</div>`}};ur=hh([w(),f("graph-widget-no-results")],ur);var ph=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,uh=(t,e,r,i)=>{for(var s=i>1?void 0:i?dh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&ph(e,r,s),s};let gr=class extends g{render(){return a`
      <section class="flex flex-col gap-6">
        <slot name="header"></slot>
        <slot class="flex flex-col gap-3"></slot>
        <slot name="footer"></slot>
      </section>
    `}};gr=uh([f("graph-widget-section")],gr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gh={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fh=t=>(...e)=>({_$litDirective$:t,values:e});class bh{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mh=fh(class extends bh{constructor(t){var e;if(super(t),t.type!==gh.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const n=!!e[o];n===this.st.has(o)||(s=this.nt)!=null&&s.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return ee}});var wh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,Gs=(t,e,r,i)=>{for(var s=i>1?void 0:i?vh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&wh(e,r,s),s};let dt=class extends g{constructor(){super(...arguments),this.href=""}render(){const t={btn:!0,"bg-white":!0,"btn-xs":!0,"hover:text-white":!0,"btn-outline":this.href,"btn-primary":this.href,"btn-disabled":!this.href};return a`<a href=${this.href} class=${mh(t)}>
      ${v("View on Graph Search")}
    </a>`}};Gs([L({type:String})],dt.prototype,"href",2);dt=Gs([w(),f("graph-widget-section-link")],dt);var $h=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Ws=(t,e,r,i)=>{for(var s=i>1?void 0:i?_h(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&$h(e,r,s),s};let ut=class extends g{constructor(){super(...arguments),this.description=""}render(){return a`<h1 class="text-xl font-medium">
        <slot class="line-clamp-2"></slot>
      </h1>
      <span class="text-xs opacity-50 font-medium">
        ${this.description}
      </span>`}};Ws([L({type:String})],ut.prototype,"description",2);ut=Ws([f("graph-widget-section-title")],ut);var yh=Object.defineProperty,Ph=Object.getOwnPropertyDescriptor,xh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ph(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&yh(e,r,s),s};let fr=class extends g{constructor(){super(...arguments),this._getConceptConcepts=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([he({id:t,fields:R({locale:e})},{signal:s}),Wc({id:t,fields:R({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getConceptConcepts.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Concepts related to this concept")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};fr=xh([w(),f("graph-widget-concept-concepts")],fr);var Oh=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,Ks=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ch(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Oh(e,r,s),s};let gt=class extends g{constructor(){super(...arguments),this.course={}}render(){const t=[this.course.course_code,x(this.course,["name",this.locale,"value"])].filter(Boolean).join(": ");return a`<div class="flex flex-col gap-1">
      <a href=${this.course._url} class="link font-medium self-start"
        >${t}</a
      >
      <p class="line-clamp-2 text-sm">
        ${x(this.course,["summary",this.locale,"value"])}
      </p>
    </div> `}};Ks([L({type:Object})],gt.prototype,"course",2);gt=Ks([f("graph-widget-course")],gt);var kh=Object.defineProperty,Sh=Object.getOwnPropertyDescriptor,jh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&kh(e,r,s),s};let br=class extends g{constructor(){super(...arguments),this._getConceptCourses=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([he({id:t,fields:R({locale:e})},{signal:s}),Kc({id:t,fields:E({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getConceptCourses.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Courses related to this concept")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};br=jh([w(),f("graph-widget-concept-courses")],br);var Eh=Object.defineProperty,Ah=Object.getOwnPropertyDescriptor,Xs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ah(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Eh(e,r,s),s};let ft=class extends g{constructor(){super(...arguments),this.lecture={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.lecture._url} class="link font-medium self-start">
        ${this.lecture.video.title}
      </a>

      <p class="line-clamp-2 text-sm">${this.lecture.video.subtitle}</p>
    </div> `}};Xs([L({type:Object})],ft.prototype,"lecture",2);ft=Xs([f("graph-widget-lecture")],ft);var Nh=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,Th=(t,e,r,i)=>{for(var s=i>1?void 0:i?Dh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Nh(e,r,s),s};let mr=class extends g{constructor(){super(...arguments),this._getConceptLectures=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([he({id:t,fields:R({locale:e})},{signal:s}),Xc({id:t,fields:A({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getConceptLectures.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Lectures related to this concept")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};mr=Th([w(),f("graph-widget-concept-lectures")],mr);var Uh=Object.defineProperty,Rh=Object.getOwnPropertyDescriptor,Ys=(t,e,r,i)=>{for(var s=i>1?void 0:i?Rh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Uh(e,r,s),s};let bt=class extends g{constructor(){super(...arguments),this.person={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.person._url} class="link font-medium self-start">
        ${this.person.name_display}
      </a>

      <p class="line-clamp-2 text-sm">
        ${x(this.person,["biography",this.locale])}
      </p>
    </div>`}};Ys([L({type:Object})],bt.prototype,"person",2);bt=Ys([f("graph-widget-person")],bt);var Lh=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,zh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Mh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Lh(e,r,s),s};let wr=class extends g{constructor(){super(...arguments),this._getConceptPersons=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([he({id:t,fields:R({locale:e})},{signal:s}),Yc({id:t,fields:k({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getConceptPersons.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("People related to this concept")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};wr=zh([w(),f("graph-widget-concept-persons")],wr);var Hh=Object.defineProperty,Ih=Object.getOwnPropertyDescriptor,Qs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ih(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Hh(e,r,s),s};let mt=class extends g{constructor(){super(...arguments),this.publication={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.publication._url} class="link font-medium self-start">
        ${this.publication.title}
      </a>
      <div>
        ${this.publication.abstract&&a`<p class="line-clamp-2 text-sm">${this.publication.abstract}</p>`}
        ${this.publication.publisher&&a`
          <i class="line-clamp-1 text-sm text-medium"
            >${this.publication.publisher}</i
          >
        `}
        <span class="text-sm text-medium">${this.publication.year}</span>
      </div>
    </div> `}};Qs([L({type:Object})],mt.prototype,"publication",2);mt=Qs([f("graph-widget-publication")],mt);var Fh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,qh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Fh(e,r,s),s};let vr=class extends g{constructor(){super(...arguments),this._getConceptPublications=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([he({id:t,fields:R({locale:e})},{signal:s}),Qc({id:t,fields:D({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getConceptPublications.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Publications related to this concept")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};vr=qh([w(),f("graph-widget-concept-publications")],vr);var Vh=Object.defineProperty,Jh=Object.getOwnPropertyDescriptor,Zs=(t,e,r,i)=>{for(var s=i>1?void 0:i?Jh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Vh(e,r,s),s};let wt=class extends g{constructor(){super(...arguments),this.unit={}}render(){return a`<div class="flex flex-col gap-1">
      <a href=${this.unit._url} class="link font-medium self-start">
        ${x(this.unit,["name",this.locale,"value"])}
      </a>

      <nav class="breadcrumbs py-0 text-xs">
        <ul>
          ${this.unit.path.map((t,e,r)=>a`<li key=${t._id}>
              ${r.length>e+1?a`<a href=${t._url}>${t.initials}</a>`:a`<span>${t.initials}</span>`}
            </li>`)}
        </ul>
      </nav>
    </div>`}};Zs([L({type:Object})],wt.prototype,"unit",2);wt=Zs([f("graph-widget-unit")],wt);var Gh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,Kh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Wh(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Gh(e,r,s),s};let $r=class extends g{constructor(){super(...arguments),this._getConceptUnits=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([he({id:t,fields:R({locale:e})},{signal:s}),Zc({id:t,fields:T({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getConceptUnits.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Units related to this concept")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};$r=Kh([w(),f("graph-widget-concept-units")],$r);const W=({id:t,fields:e},{signal:r})=>m.get(`/courses/${t}`,{params:{fields:e},signal:r}).then(i=>i.data.item),Xh=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/courses/${t}/concepts`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Yh=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/courses/${t}/core-lectures`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Qh=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/courses/${t}/core-persons`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Zh=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/courses/${t}/courses`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),ep=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/courses/${t}/lectures`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),tp=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/courses/${t}/persons`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),rp=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/courses/${t}/publications`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),sp=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/courses/${t}/units`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data);var ip=Object.defineProperty,op=Object.getOwnPropertyDescriptor,np=(t,e,r,i)=>{for(var s=i>1?void 0:i?op(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&ip(e,r,s),s};let _r=class extends g{constructor(){super(...arguments),this._getCourseConcepts=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([W({id:t,fields:E({locale:e})},{signal:s}),Xh({id:t,fields:R({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getCourseConcepts.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Concepts related to this course")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};_r=np([w(),f("graph-widget-course-concepts")],_r);var ap=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,cp=(t,e,r,i)=>{for(var s=i>1?void 0:i?lp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&ap(e,r,s),s};let yr=class extends g{constructor(){super(...arguments),this._getCourseLectures=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([W({id:t,fields:E({locale:e})},{signal:s}),Yh({id:t,fields:A({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getCourseLectures.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Lectures in this course")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};yr=cp([w(),f("graph-widget-course-core-lectures")],yr);var hp=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,dp=(t,e,r,i)=>{for(var s=i>1?void 0:i?pp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&hp(e,r,s),s};let Pr=class extends g{constructor(){super(...arguments),this._getCoursePersons=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([W({id:t,fields:E({locale:e})},{signal:s}),Qh({id:t,fields:k({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getCoursePersons.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("People teaching this course")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Pr=dp([w(),f("graph-widget-course-core-persons")],Pr);var up=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,fp=(t,e,r,i)=>{for(var s=i>1?void 0:i?gp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&up(e,r,s),s};let xr=class extends g{constructor(){super(...arguments),this._getCourseCourses=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([W({id:t,fields:E({locale:e})},{signal:s}),Zh({id:t,fields:E({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getCourseCourses.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Courses related to this course")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};xr=fp([w(),f("graph-widget-course-courses")],xr);var bp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,wp=(t,e,r,i)=>{for(var s=i>1?void 0:i?mp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&bp(e,r,s),s};let Or=class extends g{constructor(){super(...arguments),this._getCourseLectures=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([W({id:t,fields:E({locale:e})},{signal:s}),ep({id:t,fields:A({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getCourseLectures.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Lectures related to this course")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Or=wp([w(),f("graph-widget-course-lectures")],Or);var vp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,_p=(t,e,r,i)=>{for(var s=i>1?void 0:i?$p(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&vp(e,r,s),s};let Cr=class extends g{constructor(){super(...arguments),this._getCoursePersons=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([W({id:t,fields:E({locale:e})},{signal:s}),tp({id:t,fields:k({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getCoursePersons.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("People related to this course")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Cr=_p([w(),f("graph-widget-course-persons")],Cr);var yp=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,xp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&yp(e,r,s),s};let kr=class extends g{constructor(){super(...arguments),this._getCoursePublications=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([W({id:t,fields:E({locale:e})},{signal:s}),rp({id:t,fields:D({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getCoursePublications.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Publications related to this course")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};kr=xp([w(),f("graph-widget-course-publications")],kr);var Op=Object.defineProperty,Cp=Object.getOwnPropertyDescriptor,kp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Cp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Op(e,r,s),s};let Sr=class extends g{constructor(){super(...arguments),this._getCourseUnits=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([W({id:t,fields:E({locale:e})},{signal:s}),sp({id:t,fields:T({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getCourseUnits.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Units related to this course")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Sr=kp([w(),f("graph-widget-course-units")],Sr);const K=({id:t,fields:e},{signal:r})=>m.get(`/lectures/${t}`,{params:{fields:e},signal:r}).then(i=>i.data.item),Sp=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/lectures/${t}/concepts`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),jp=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/lectures/${t}/core-courses`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Ep=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/lectures/${t}/core-persons`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Ap=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/lectures/${t}/courses`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Np=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/lectures/${t}/lectures`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Dp=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/lectures/${t}/persons`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Tp=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/lectures/${t}/publications`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Up=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/lectures/${t}/units`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data);var Rp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Mp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Lp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Rp(e,r,s),s};let jr=class extends g{constructor(){super(...arguments),this._getLectureConcepts=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([K({id:t,fields:A({locale:e})},{signal:s}),Sp({id:t,fields:R({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getLectureConcepts.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Concepts related to this lecture")}
          >
            ${t.video.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};jr=Mp([w(),f("graph-widget-lecture-concepts")],jr);var zp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,Ip=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&zp(e,r,s),s};let Er=class extends g{constructor(){super(...arguments),this._getLectureCourses=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([K({id:t,fields:A({locale:e})},{signal:s}),jp({id:t,fields:E({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getLectureCourses.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Courses of this lecture")}
          >
            ${t.video.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Er=Ip([w(),f("graph-widget-lecture-core-courses")],Er);var Fp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,qp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Fp(e,r,s),s};let Ar=class extends g{constructor(){super(...arguments),this._getLecturePersons=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([K({id:t,fields:A({locale:e})},{signal:s}),Ep({id:t,fields:k({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getLecturePersons.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("People teaching this lecture")}
          >
            ${t.video.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Ar=qp([w(),f("graph-widget-lecture-core-persons")],Ar);var Vp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,Gp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Jp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Vp(e,r,s),s};let Nr=class extends g{constructor(){super(...arguments),this._getLectureCourses=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([K({id:t,fields:A({locale:e})},{signal:s}),Ap({id:t,fields:E({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getLectureCourses.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Courses related to this lecture")}
          >
            ${t.video.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Nr=Gp([w(),f("graph-widget-lecture-courses")],Nr);var Wp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,Xp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Kp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Wp(e,r,s),s};let Dr=class extends g{constructor(){super(...arguments),this._getLectureLectures=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([K({id:t,fields:A({locale:e})},{signal:s}),Np({id:t,fields:A({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getLectureLectures.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Lectures related to this lecture")}
          >
            ${t.video.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Dr=Xp([w(),f("graph-widget-lecture-lectures")],Dr);var Yp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,Zp=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qp(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Yp(e,r,s),s};let Tr=class extends g{constructor(){super(...arguments),this._getLecturePersons=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([K({id:t,fields:A({locale:e})},{signal:s}),Dp({id:t,fields:k({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getLecturePersons.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("People related to this lecture")}
          >
            ${t.video.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Tr=Zp([w(),f("graph-widget-lecture-persons")],Tr);var ed=Object.defineProperty,td=Object.getOwnPropertyDescriptor,rd=(t,e,r,i)=>{for(var s=i>1?void 0:i?td(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&ed(e,r,s),s};let Ur=class extends g{constructor(){super(...arguments),this._getLecturePublications=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([K({id:t,fields:A({locale:e})},{signal:s}),Tp({id:t,fields:D({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getLecturePublications.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Publications related to this lecture")}
          >
            ${t.video.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Ur=rd([w(),f("graph-widget-lecture-publications")],Ur);var sd=Object.defineProperty,id=Object.getOwnPropertyDescriptor,od=(t,e,r,i)=>{for(var s=i>1?void 0:i?id(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&sd(e,r,s),s};let Rr=class extends g{constructor(){super(...arguments),this._getLectureUnits=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([K({id:t,fields:A({locale:e})},{signal:s}),Up({id:t,fields:T({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getLectureUnits.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Units related to this lecture")}
          >
            ${t.video.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Rr=od([w(),f("graph-widget-lecture-units")],Rr);const H=({id:t,fields:e},{signal:r})=>m.get(`/persons/${t}`,{params:{fields:e},signal:r}).then(i=>i.data.item),nd=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/persons/${t}/concepts`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),ad=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/persons/${t}/core-courses`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),ld=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/persons/${t}/core-lectures`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),cd=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/persons/${t}/core-publications`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),hd=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/persons/${t}/core-units`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),pd=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/persons/${t}/courses`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),dd=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/persons/${t}/lectures`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),ud=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/persons/${t}/persons`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),gd=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/persons/${t}/publications`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),fd=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/persons/${t}/units`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data);var bd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,wd=(t,e,r,i)=>{for(var s=i>1?void 0:i?md(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&bd(e,r,s),s};let Lr=class extends g{constructor(){super(...arguments),this._getPersonConcepts=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([H({id:t,fields:k({locale:e})},{signal:s}),nd({id:t,fields:R({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPersonConcepts.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Concepts related to this person")}
          >
            ${t.name_display}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Lr=wd([w(),f("graph-widget-person-concepts")],Lr);var vd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,_d=(t,e,r,i)=>{for(var s=i>1?void 0:i?$d(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&vd(e,r,s),s};let Mr=class extends g{constructor(){super(...arguments),this._getPersonCourses=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([H({id:t,fields:k({locale:e})},{signal:s}),ad({id:t,fields:E({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPersonCourses.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Courses taught by this person")}
          >
            ${t.name_display}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Mr=_d([w(),f("graph-widget-person-core-courses")],Mr);var yd=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,xd=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pd(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&yd(e,r,s),s};let zr=class extends g{constructor(){super(...arguments),this._getPersonLectures=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([H({id:t,fields:k({locale:e})},{signal:s}),ld({id:t,fields:A({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPersonLectures.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Lectures taught by this person")}
          >
            ${t.name_display}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};zr=xd([w(),f("graph-widget-person-core-lectures")],zr);var Od=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,kd=(t,e,r,i)=>{for(var s=i>1?void 0:i?Cd(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Od(e,r,s),s};let Hr=class extends g{constructor(){super(...arguments),this._getPersonPublications=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([H({id:t,fields:k({locale:e})},{signal:s}),cd({id:t,fields:D({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPersonPublications.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Publications by this person")}
          >
            ${t.name_display}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Hr=kd([w(),f("graph-widget-person-core-publications")],Hr);var Sd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,Ed=(t,e,r,i)=>{for(var s=i>1?void 0:i?jd(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Sd(e,r,s),s};let Ir=class extends g{constructor(){super(...arguments),this._getPersonUnits=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([H({id:t,fields:k({locale:e})},{signal:s}),hd({id:t,fields:T({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPersonUnits.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Units for this person")}
          >
            ${t.name_display}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Ir=Ed([w(),f("graph-widget-person-core-units")],Ir);var Ad=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,Dd=(t,e,r,i)=>{for(var s=i>1?void 0:i?Nd(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Ad(e,r,s),s};let Fr=class extends g{constructor(){super(...arguments),this._getPersonCourses=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([H({id:t,fields:k({locale:e})},{signal:s}),pd({id:t,fields:E({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPersonCourses.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Courses related to this person")}
          >
            ${t.name_display}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Fr=Dd([w(),f("graph-widget-person-courses")],Fr);var Td=Object.defineProperty,Ud=Object.getOwnPropertyDescriptor,Rd=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ud(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Td(e,r,s),s};let Br=class extends g{constructor(){super(...arguments),this._getPersonLectures=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([H({id:t,fields:k({locale:e})},{signal:s}),dd({id:t,fields:A({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPersonLectures.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Lectures related to this person")}
          >
            ${t.name_display}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Br=Rd([w(),f("graph-widget-person-lectures")],Br);var Ld=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,zd=(t,e,r,i)=>{for(var s=i>1?void 0:i?Md(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Ld(e,r,s),s};let qr=class extends g{constructor(){super(...arguments),this._getPersonPersons=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([H({id:t,fields:k({locale:e})},{signal:s}),ud({id:t,fields:k({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPersonPersons.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("People related to this person")}
          >
            ${t.name_display}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};qr=zd([w(),f("graph-widget-person-persons")],qr);var Hd=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,Fd=(t,e,r,i)=>{for(var s=i>1?void 0:i?Id(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Hd(e,r,s),s};let Vr=class extends g{constructor(){super(...arguments),this._getPersonPublications=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([H({id:t,fields:k({locale:e})},{signal:s}),gd({id:t,fields:D({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPersonPublications.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Publications related to this person")}
          >
            ${t.name_display}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Vr=Fd([w(),f("graph-widget-person-publications")],Vr);var Bd=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,Vd=(t,e,r,i)=>{for(var s=i>1?void 0:i?qd(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Bd(e,r,s),s};let Jr=class extends g{constructor(){super(...arguments),this._getPersonUnits=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([H({id:t,fields:k({locale:e})},{signal:s}),fd({id:t,fields:T({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPersonUnits.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Units related to this person")}
          >
            ${t.name_display}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Jr=Vd([w(),f("graph-widget-person-units")],Jr);const te=({id:t,fields:e},{signal:r})=>m.get(`/publications/${t}`,{params:{fields:e},signal:r}).then(i=>i.data.item),Jd=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/publications/${t}/concepts`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Gd=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/publications/${t}/core-persons`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Wd=async({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/publications/${t}/courses`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Kd=async({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/publications/${t}/lectures`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Xd=async({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/publications/${t}/persons`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Yd=async({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/publications/${t}/publications`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Qd=async({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/publications/${t}/units`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data);var Zd=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,tu=(t,e,r,i)=>{for(var s=i>1?void 0:i?eu(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Zd(e,r,s),s};let Gr=class extends g{constructor(){super(...arguments),this._getPublicationConcepts=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([te({id:t,fields:D({locale:e})},{signal:s}),Jd({id:t,fields:R({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPublicationConcepts.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Concepts related to this publication")}
          >
            ${t.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Gr=tu([w(),f("graph-widget-publication-concepts")],Gr);var ru=Object.defineProperty,su=Object.getOwnPropertyDescriptor,iu=(t,e,r,i)=>{for(var s=i>1?void 0:i?su(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&ru(e,r,s),s};let Wr=class extends g{constructor(){super(...arguments),this._getPublicationPersons=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([te({id:t,fields:D({locale:e})},{signal:s}),Gd({id:t,fields:k({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPublicationPersons.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Authors of this publication")}
          >
            ${t.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Wr=iu([w(),f("graph-widget-publication-core-persons")],Wr);var ou=Object.defineProperty,nu=Object.getOwnPropertyDescriptor,au=(t,e,r,i)=>{for(var s=i>1?void 0:i?nu(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&ou(e,r,s),s};let Kr=class extends g{constructor(){super(...arguments),this._getPublicationCourses=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([te({id:t,fields:D({locale:e})},{signal:s}),Wd({id:t,fields:E({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPublicationCourses.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Courses related to this publication")}
          >
            ${t.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Kr=au([w(),f("graph-widget-publication-courses")],Kr);var lu=Object.defineProperty,cu=Object.getOwnPropertyDescriptor,hu=(t,e,r,i)=>{for(var s=i>1?void 0:i?cu(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&lu(e,r,s),s};let Xr=class extends g{constructor(){super(...arguments),this._getPublicationLectures=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([te({id:t,fields:D({locale:e})},{signal:s}),Kd({id:t,fields:A({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPublicationLectures.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Lectures related to this publication")}
          >
            ${t.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Xr=hu([w(),f("graph-widget-publication-lectures")],Xr);var pu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,uu=(t,e,r,i)=>{for(var s=i>1?void 0:i?du(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&pu(e,r,s),s};let Yr=class extends g{constructor(){super(...arguments),this._getPublicationPersons=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([te({id:t,fields:D({locale:e})},{signal:s}),Xd({id:t,fields:k({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPublicationPersons.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Persons related to this publication")}
          >
            ${t.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Yr=uu([w(),f("graph-widget-publication-persons")],Yr);var gu=Object.defineProperty,fu=Object.getOwnPropertyDescriptor,bu=(t,e,r,i)=>{for(var s=i>1?void 0:i?fu(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&gu(e,r,s),s};let Qr=class extends g{constructor(){super(...arguments),this._getPublicationPublications=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([te({id:t,fields:D({locale:e})},{signal:s}),Yd({id:t,fields:D({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPublicationPublications.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Publications related to this publication")}
          >
            ${t.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Qr=bu([w(),f("graph-widget-publication-publications")],Qr);var mu=Object.defineProperty,wu=Object.getOwnPropertyDescriptor,vu=(t,e,r,i)=>{for(var s=i>1?void 0:i?wu(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&mu(e,r,s),s};let Zr=class extends g{constructor(){super(...arguments),this._getPublicationUnits=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([te({id:t,fields:D({locale:e})},{signal:s}),Qd({id:t,fields:T({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getPublicationUnits.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Units related to this publication")}
          >
            ${t.title}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};Zr=vu([w(),f("graph-widget-publication-units")],Zr);const re=({id:t,fields:e},{signal:r})=>m.get(`/units/${t}`,{params:{fields:e},signal:r}).then(i=>i.data.item),$u=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/units/${t}/concepts`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),_u=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/units/${t}/core-persons`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),yu=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/units/${t}/courses`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Pu=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/units/${t}/lectures`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),xu=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/units/${t}/persons`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Ou=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/units/${t}/publications`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data),Cu=({id:t,fields:e,limit:r,offset:i},{signal:s})=>m.get(`/units/${t}/units`,{params:{fields:e,limit:r,offset:i},signal:s}).then(o=>o.data);var ku=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,ju=(t,e,r,i)=>{for(var s=i>1?void 0:i?Su(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&ku(e,r,s),s};let es=class extends g{constructor(){super(...arguments),this._getUnitConcepts=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([re({id:t,fields:T({locale:e})},{signal:s}),$u({id:t,fields:R({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getUnitConcepts.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Concepts related to this unit")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-concept
                    .concept=${r}
                    locale=${this.locale}
                  ></graph-widget-concept>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};es=ju([w(),f("graph-widget-unit-concepts")],es);var Eu=Object.defineProperty,Au=Object.getOwnPropertyDescriptor,Nu=(t,e,r,i)=>{for(var s=i>1?void 0:i?Au(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Eu(e,r,s),s};let ts=class extends g{constructor(){super(...arguments),this._getUnitPersons=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([re({id:t,fields:T({locale:e})},{signal:s}),_u({id:t,fields:k({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getUnitPersons.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("People in this unit")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};ts=Nu([w(),f("graph-widget-unit-core-persons")],ts);var Du=Object.defineProperty,Tu=Object.getOwnPropertyDescriptor,Uu=(t,e,r,i)=>{for(var s=i>1?void 0:i?Tu(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Du(e,r,s),s};let rs=class extends g{constructor(){super(...arguments),this._getUnitCourses=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([re({id:t,fields:T({locale:e})},{signal:s}),yu({id:t,fields:E({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getUnitCourses.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Courses related to this unit")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-course
                    .course=${r}
                    locale=${this.locale}
                  ></graph-widget-course>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};rs=Uu([w(),f("graph-widget-unit-courses")],rs);var Ru=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,Mu=(t,e,r,i)=>{for(var s=i>1?void 0:i?Lu(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Ru(e,r,s),s};let ss=class extends g{constructor(){super(...arguments),this._getUnitLectures=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([re({id:t,fields:T({locale:e})},{signal:s}),Pu({id:t,fields:A({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getUnitLectures.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Lectures related to this unit")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-lecture
                    .lecture=${r}
                    locale=${this.locale}
                  ></graph-widget-lecture>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};ss=Mu([w(),f("graph-widget-unit-lectures")],ss);var zu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,Iu=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hu(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&zu(e,r,s),s};let is=class extends g{constructor(){super(...arguments),this._getUnitPersons=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([re({id:t,fields:T({locale:e})},{signal:s}),xu({id:t,fields:k({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getUnitPersons.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Persons related to this unit")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-person
                    .person=${r}
                    locale=${this.locale}
                  ></graph-widget-person>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};is=Iu([w(),f("graph-widget-unit-persons")],is);var Fu=Object.defineProperty,Bu=Object.getOwnPropertyDescriptor,qu=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bu(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Fu(e,r,s),s};let os=class extends g{constructor(){super(...arguments),this._getUnitPublications=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([re({id:t,fields:T({locale:e})},{signal:s}),Ou({id:t,fields:D({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getUnitPublications.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Publications related to this unit")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-publication
                    .publication=${r}
                    locale=${this.locale}
                  ></graph-widget-publication>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};os=qu([w(),f("graph-widget-unit-publications")],os);var Vu=Object.defineProperty,Ju=Object.getOwnPropertyDescriptor,Gu=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ju(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(e,r,s):n(s))||s);return i&&s&&Vu(e,r,s),s};let ns=class extends g{constructor(){super(...arguments),this._getUnitUnits=new _(this,{task:async([t,e,r,i],{signal:s})=>Promise.all([re({id:t,fields:T({locale:e})},{signal:s}),Cu({id:t,fields:T({locale:e}),limit:Number(r),offset:Number(i)},{signal:s})]),args:()=>[this.id,this.locale,this.limit,this.offset]})}render(){return this._getUnitUnits.render({pending:()=>a`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,error:t=>a`<graph-widget-error>${t.message}</graph-widget-error>`,complete:([t,e])=>a`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${v("Units related to this unit")}
          >
            ${x(t,["name",this.locale,"value"])}
          </graph-widget-section-title>
          ${e.items.length?e.items.map(r=>a`<graph-widget-unit
                    .unit=${r}
                    locale=${this.locale}
                  ></graph-widget-unit>`):a`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${t._url}
          ></graph-widget-section-link>
        </graph-widget-section>`})}};ns=Gu([w(),f("graph-widget-unit-units")],ns);
