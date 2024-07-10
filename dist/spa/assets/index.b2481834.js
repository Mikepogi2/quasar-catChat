const R_=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Wc={},k_="/",ps=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${k_}${s}`,s in Wc)return;Wc[s]=!0;const i=s.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":R_,i||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),i)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function gl(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const we={},ys=[],et=()=>{},P_=()=>!1,ao=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_l=t=>t.startsWith("onUpdate:"),Te=Object.assign,ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},A_=Object.prototype.hasOwnProperty,ce=(t,e)=>A_.call(t,e),K=Array.isArray,bs=t=>ji(t)==="[object Map]",vh=t=>ji(t)==="[object Set]",N_=t=>ji(t)==="[object RegExp]",ee=t=>typeof t=="function",Re=t=>typeof t=="string",En=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",yh=t=>(Ee(t)||ee(t))&&ee(t.then)&&ee(t.catch),bh=Object.prototype.toString,ji=t=>bh.call(t),x_=t=>ji(t).slice(8,-1),wh=t=>ji(t)==="[object Object]",vl=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,li=gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},O_=/-(\w)/g,St=lo(t=>t.replace(O_,(e,n)=>n?n.toUpperCase():"")),L_=/\B([A-Z])/g,Zn=lo(t=>t.replace(L_,"-$1").toLowerCase()),co=lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),jo=lo(t=>t?`on${co(t)}`:""),vn=(t,e)=>!Object.is(t,e),ci=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Eh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},D_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},M_=t=>{const e=Re(t)?Number(t):NaN;return isNaN(e)?t:e};let Vc;const Ch=()=>Vc||(Vc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function yl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Re(s)?B_(s):yl(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Re(t)||Ee(t))return t}const F_=/;(?![^(]*\))/g,U_=/:([^]+)/,$_=/\/\*[^]*?\*\//g;function B_(t){const e={};return t.replace($_,"").split(F_).forEach(n=>{if(n){const s=n.split(U_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bl(t){let e="";if(Re(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=bl(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const H_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",j_=gl(H_);function Ih(t){return!!t||t===""}const Sh=t=>!!(t&&t.__v_isRef===!0),W_=t=>Re(t)?t:t==null?"":K(t)||Ee(t)&&(t.toString===bh||!ee(t.toString))?Sh(t)?W_(t.value):JSON.stringify(t,Th,2):String(t),Th=(t,e)=>Sh(e)?Th(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Wo(s,r)+" =>"]=i,n),{})}:vh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wo(n))}:En(e)?Wo(e):Ee(e)&&!K(e)&&!wh(e)?String(e):e,Wo=(t,e="")=>{var n;return En(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class Rh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xe,!e&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Xe;try{return Xe=this,e()}finally{Xe=n}}}on(){Xe=this}off(){Xe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function kh(t){return new Rh(t)}function V_(t,e=Xe){e&&e.active&&e.effects.push(t)}function Ph(){return Xe}function q_(t){Xe&&Xe.cleanups.push(t)}let Mn;class wl{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,V_(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Cn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(z_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),In()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=dn,n=Mn;try{return dn=!0,Mn=this,this._runnings++,qc(this),this.fn()}finally{zc(this),this._runnings--,Mn=n,dn=e}}stop(){this.active&&(qc(this),zc(this),this.onStop&&this.onStop(),this.active=!1)}}function z_(t){return t.value}function qc(t){t._trackId++,t._depsLength=0}function zc(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ah(t.deps[e],t);t.deps.length=t._depsLength}}function Ah(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let dn=!0,Ea=0;const Nh=[];function Cn(){Nh.push(dn),dn=!1}function In(){const t=Nh.pop();dn=t===void 0?!0:t}function El(){Ea++}function Cl(){for(Ea--;!Ea&&Ca.length;)Ca.shift()()}function xh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Ah(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ca=[];function Oh(t,e,n){El();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i!=null?i:i=t.get(s)===s._trackId)&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i!=null?i:i=t.get(s)===s._trackId)&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Ca.push(s.scheduler)))}Cl()}const Lh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Rr=new WeakMap,Fn=Symbol(""),Ia=Symbol("");function Qe(t,e,n){if(dn&&Mn){let s=Rr.get(t);s||Rr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Lh(()=>s.delete(n))),xh(Mn,i)}}function Ft(t,e,n,s,i,r){const o=Rr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!En(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?vl(n)&&a.push(o.get("length")):(a.push(o.get(Fn)),bs(t)&&a.push(o.get(Ia)));break;case"delete":K(t)||(a.push(o.get(Fn)),bs(t)&&a.push(o.get(Ia)));break;case"set":bs(t)&&a.push(o.get(Fn));break}El();for(const l of a)l&&Oh(l,4);Cl()}function K_(t,e){const n=Rr.get(t);return n&&n.get(e)}const G_=gl("__proto__,__v_isRef,__isVue"),Dh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(En)),Kc=Y_();function Y_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=le(this);for(let r=0,o=this.length;r<o;r++)Qe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(le)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Cn(),El();const s=le(this)[e].apply(this,n);return Cl(),In(),s}}),t}function Q_(t){En(t)||(t=String(t));const e=le(this);return Qe(e,"has",t),e.hasOwnProperty(t)}class Mh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?cm:Bh:r?$h:Uh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=K(e);if(!i){if(o&&ce(Kc,n))return Reflect.get(Kc,n,s);if(n==="hasOwnProperty")return Q_}const a=Reflect.get(e,n,s);return(En(n)?Dh.has(n):G_(n))||(i||Qe(e,"get",n),r)?a:Ae(a)?o&&vl(n)?a:a.value:Ee(a)?i?jh(a):es(a):a}}class Fh extends Mh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=wi(r);if(!kr(s)&&!wi(s)&&(r=le(r),s=le(s)),!K(e)&&Ae(r)&&!Ae(s))return l?!1:(r.value=s,!0)}const o=K(e)&&vl(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,s,i);return e===le(i)&&(o?vn(s,r)&&Ft(e,"set",n,s):Ft(e,"add",n,s)),a}deleteProperty(e,n){const s=ce(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Ft(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!En(n)||!Dh.has(n))&&Qe(e,"has",n),s}ownKeys(e){return Qe(e,"iterate",K(e)?"length":Fn),Reflect.ownKeys(e)}}class J_ extends Mh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const X_=new Fh,Z_=new J_,em=new Fh(!0);const Il=t=>t,uo=t=>Reflect.getPrototypeOf(t);function rr(t,e,n=!1,s=!1){t=t.__v_raw;const i=le(t),r=le(e);n||(vn(e,r)&&Qe(i,"get",e),Qe(i,"get",r));const{has:o}=uo(i),a=s?Il:n?Rl:Ei;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function or(t,e=!1){const n=this.__v_raw,s=le(n),i=le(t);return e||(vn(t,i)&&Qe(s,"has",t),Qe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ar(t,e=!1){return t=t.__v_raw,!e&&Qe(le(t),"iterate",Fn),Reflect.get(t,"size",t)}function Gc(t){t=le(t);const e=le(this);return uo(e).has.call(e,t)||(e.add(t),Ft(e,"add",t,t)),this}function Yc(t,e){e=le(e);const n=le(this),{has:s,get:i}=uo(n);let r=s.call(n,t);r||(t=le(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?vn(e,o)&&Ft(n,"set",t,e):Ft(n,"add",t,e),this}function Qc(t){const e=le(this),{has:n,get:s}=uo(e);let i=n.call(e,t);i||(t=le(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ft(e,"delete",t,void 0),r}function Jc(){const t=le(this),e=t.size!==0,n=t.clear();return e&&Ft(t,"clear",void 0,void 0),n}function lr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=le(o),l=e?Il:t?Rl:Ei;return!t&&Qe(a,"iterate",Fn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function cr(t,e,n){return function(...s){const i=this.__v_raw,r=le(i),o=bs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Il:e?Rl:Ei;return!e&&Qe(r,"iterate",l?Ia:Fn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function qt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tm(){const t={get(r){return rr(this,r)},get size(){return ar(this)},has:or,add:Gc,set:Yc,delete:Qc,clear:Jc,forEach:lr(!1,!1)},e={get(r){return rr(this,r,!1,!0)},get size(){return ar(this)},has:or,add:Gc,set:Yc,delete:Qc,clear:Jc,forEach:lr(!1,!0)},n={get(r){return rr(this,r,!0)},get size(){return ar(this,!0)},has(r){return or.call(this,r,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:lr(!0,!1)},s={get(r){return rr(this,r,!0,!0)},get size(){return ar(this,!0)},has(r){return or.call(this,r,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=cr(r,!1,!1),n[r]=cr(r,!0,!1),e[r]=cr(r,!1,!0),s[r]=cr(r,!0,!0)}),[t,n,e,s]}const[nm,sm,im,rm]=tm();function Sl(t,e){const n=e?t?rm:im:t?sm:nm;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const om={get:Sl(!1,!1)},am={get:Sl(!1,!0)},lm={get:Sl(!0,!1)};const Uh=new WeakMap,$h=new WeakMap,Bh=new WeakMap,cm=new WeakMap;function um(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dm(t){return t.__v_skip||!Object.isExtensible(t)?0:um(x_(t))}function es(t){return wi(t)?t:Tl(t,!1,X_,om,Uh)}function Hh(t){return Tl(t,!1,em,am,$h)}function jh(t){return Tl(t,!0,Z_,lm,Bh)}function Tl(t,e,n,s,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=dm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Un(t){return wi(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function wi(t){return!!(t&&t.__v_isReadonly)}function kr(t){return!!(t&&t.__v_isShallow)}function Wh(t){return t?!!t.__v_raw:!1}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function ts(t){return Object.isExtensible(t)&&Eh(t,"__v_skip",!0),t}const Ei=t=>Ee(t)?es(t):t,Rl=t=>Ee(t)?jh(t):t;class Vh{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new wl(()=>e(this._value),()=>mr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=le(this);return(!e._cacheable||e.effect.dirty)&&vn(e._value,e._value=e.effect.run())&&mr(e,4),qh(e),e.effect._dirtyLevel>=2&&mr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function hm(t,e,n=!1){let s,i;const r=ee(t);return r?(s=t,i=et):(s=t.get,i=t.set),new Vh(s,i,r||!i,n)}function qh(t){var e;dn&&Mn&&(t=le(t),xh(Mn,(e=t.dep)!=null?e:t.dep=Lh(()=>t.dep=void 0,t instanceof Vh?t:void 0)))}function mr(t,e=4,n,s){t=le(t);const i=t.dep;i&&Oh(i,e)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function Hn(t){return zh(t,!1)}function fm(t){return zh(t,!0)}function zh(t,e){return Ae(t)?t:new pm(t,e)}class pm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Ei(e)}get value(){return qh(this),this._value}set value(e){const n=this.__v_isShallow||kr(e)||wi(e);e=n?e:le(e),vn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Ei(e),mr(this,4))}}function $n(t){return Ae(t)?t.value:t}const gm={get:(t,e,n)=>$n(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Kh(t){return Un(t)?t:new Proxy(t,gm)}function _m(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=vm(t,n);return e}class mm{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return K_(le(this._object),this._key)}}function vm(t,e,n){const s=t[e];return Ae(s)?s:new mm(t,e,n)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hn(t,e,n,s){try{return s?t(...s):t()}catch(i){ho(i,e,n)}}function rt(t,e,n,s){if(ee(t)){const i=hn(t,e,n,s);return i&&yh(i)&&i.catch(r=>{ho(r,e,n)}),i}if(K(t)){const i=[];for(let r=0;r<t.length;r++)i.push(rt(t[r],e,n,s));return i}}function ho(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Cn(),hn(l,null,10,[t,o,a]),In();return}}ym(t,n,i,s)}function ym(t,e,n,s=!0){console.error(t)}let Ci=!1,Sa=!1;const Be=[];let bt=0;const ws=[];let Xt=null,Ln=0;const Gh=Promise.resolve();let kl=null;function Pl(t){const e=kl||Gh;return t?e.then(this?t.bind(this):t):e}function bm(t){let e=bt+1,n=Be.length;for(;e<n;){const s=e+n>>>1,i=Be[s],r=Ii(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Al(t){(!Be.length||!Be.includes(t,Ci&&t.allowRecurse?bt+1:bt))&&(t.id==null?Be.push(t):Be.splice(bm(t.id),0,t),Yh())}function Yh(){!Ci&&!Sa&&(Sa=!0,kl=Gh.then(Jh))}function wm(t){const e=Be.indexOf(t);e>bt&&Be.splice(e,1)}function Em(t){K(t)?ws.push(...t):(!Xt||!Xt.includes(t,t.allowRecurse?Ln+1:Ln))&&ws.push(t),Yh()}function Xc(t,e,n=Ci?bt+1:0){for(;n<Be.length;n++){const s=Be[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Be.splice(n,1),n--,s()}}}function Qh(t){if(ws.length){const e=[...new Set(ws)].sort((n,s)=>Ii(n)-Ii(s));if(ws.length=0,Xt){Xt.push(...e);return}for(Xt=e,Ln=0;Ln<Xt.length;Ln++){const n=Xt[Ln];n.active!==!1&&n()}Xt=null,Ln=0}}const Ii=t=>t.id==null?1/0:t.id,Cm=(t,e)=>{const n=Ii(t)-Ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Jh(t){Sa=!1,Ci=!0,Be.sort(Cm);const e=et;try{for(bt=0;bt<Be.length;bt++){const n=Be[bt];n&&n.active!==!1&&hn(n,null,14)}}finally{bt=0,Be.length=0,Qh(),Ci=!1,kl=null,(Be.length||ws.length)&&Jh()}}function Im(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||we;h&&(i=n.map(p=>Re(p)?p.trim():p)),d&&(i=n.map(D_))}let a,l=s[a=jo(e)]||s[a=jo(St(e))];!l&&r&&(l=s[a=jo(Zn(e))]),l&&rt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rt(c,t,6,i)}}function Xh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ee(t)){const l=c=>{const u=Xh(c,e,!0);u&&(a=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ee(t)&&s.set(t,null),null):(K(r)?r.forEach(l=>o[l]=null):Te(o,r),Ee(t)&&s.set(t,o),o)}function fo(t,e){return!t||!ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,Zn(e))||ce(t,e))}let We=null,Zh=null;function Pr(t){const e=We;return We=t,Zh=t&&t.type.__scopeId||null,e}function Sm(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&uu(-1);const r=Pr(e);let o;try{o=t(...i)}finally{Pr(r),s._d&&uu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Vo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:p,ctx:_,inheritAttrs:v}=t,I=Pr(t);let L,w;try{if(n.shapeFlag&4){const k=i||s,O=k;L=yt(c.call(O,k,u,d,p,h,_)),w=a}else{const k=e;L=yt(k.length>1?k(d,{attrs:a,slots:o,emit:l}):k(d,null)),w=e.props?a:Tm(a)}}catch(k){hi.length=0,ho(k,t,1),L=Ge(Ze)}let E=L;if(w&&v!==!1){const k=Object.keys(w),{shapeFlag:O}=E;k.length&&O&7&&(r&&k.some(_l)&&(w=Rm(w,r)),E=Bt(E,w,!1,!0))}return n.dirs&&(E=Bt(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),L=E,Pr(I),L}const Tm=t=>{let e;for(const n in t)(n==="class"||n==="style"||ao(n))&&((e||(e={}))[n]=t[n]);return e},Rm=(t,e)=>{const n={};for(const s in t)(!_l(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function km(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Zc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!fo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Zc(s,o,c):!0:!!o;return!1}function Zc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!fo(n,r))return!0}return!1}function Pm({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ef="components";function Am(t,e){return xm(ef,t,!0,e)||t}const Nm=Symbol.for("v-ndc");function xm(t,e,n=!0,s=!1){const i=We||De;if(i){const r=i.type;if(t===ef){const a=Oa(r,!1);if(a&&(a===e||a===St(e)||a===co(St(e))))return r}const o=eu(i[t]||r[t],e)||eu(i.appContext[t],e);return!o&&s?r:o}}function eu(t,e){return t&&(t[e]||t[St(e)]||t[co(St(e))])}const Ta=t=>t.__isSuspense;function Om(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):Em(t)}function po(t,e,n=De,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Cn();const a=Wi(n),l=rt(e,n,t,o);return a(),In(),l});return s?i.unshift(r):i.push(r),r}}const Wt=t=>(e,n=De)=>{(!yo||t==="sp")&&po(t,(...s)=>e(...s),n)},Lm=Wt("bm"),go=Wt("m"),Dm=Wt("bu"),Nl=Wt("u"),_o=Wt("bum"),tf=Wt("um"),Mm=Wt("sp"),Fm=Wt("rtg"),Um=Wt("rtc");function $m(t,e=De){po("ec",t,e)}function nf(t,e){if(We===null)return t;const n=bo(We),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=we]=e[i];r&&(ee(r)&&(r={mounted:r,updated:r}),r.deep&&sn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function kn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Cn(),rt(l,n,8,[t.el,a,t,e]),In())}}function JR(t,e,n,s){let i;const r=n&&n[s];if(K(t)||Re(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}/*! #__NO_SIDE_EFFECTS__ */function xl(t,e){return ee(t)?(()=>Te({name:t.name},e,{setup:t}))():t}const ui=t=>!!t.type.__asyncLoader,Ra=t=>t?kf(t)?bo(t):Ra(t.parent):null,di=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ra(t.parent),$root:t=>Ra(t.root),$emit:t=>t.emit,$options:t=>Ol(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Al(t.update)}),$nextTick:t=>t.n||(t.n=Pl.bind(t.proxy)),$watch:t=>ov.bind(t)}),qo=(t,e)=>t!==we&&!t.__isScriptSetup&&ce(t,e),Bm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(qo(s,e))return o[e]=1,s[e];if(i!==we&&ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==we&&ce(n,e))return o[e]=4,n[e];ka&&(o[e]=0)}}const u=di[e];let d,h;if(u)return e==="$attrs"&&Qe(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==we&&ce(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ce(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return qo(i,e)?(i[e]=n,!0):s!==we&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==we&&ce(t,o)||qo(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(di,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tu(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ka=!0;function Hm(t){const e=Ol(t),n=t.proxy,s=t.ctx;ka=!1,e.beforeCreate&&nu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:I,beforeDestroy:L,beforeUnmount:w,destroyed:E,unmounted:k,render:O,renderTracked:x,renderTriggered:W,errorCaptured:H,serverPrefetch:P,expose:V,inheritAttrs:G,components:F,directives:ne,filters:U}=e;if(c&&jm(c,s,null),o)for(const ge in o){const de=o[ge];ee(de)&&(s[ge]=de.bind(n))}if(i){const ge=i.call(n,n);Ee(ge)&&(t.data=es(ge))}if(ka=!0,r)for(const ge in r){const de=r[ge],kt=ee(de)?de.bind(n,n):ee(de.get)?de.get.bind(n,n):et,Vt=!ee(de)&&ee(de.set)?de.set.bind(n):et,mt=X({get:kt,set:Vt});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Ke=>mt.value=Ke})}if(a)for(const ge in a)sf(a[ge],s,n,ge);if(l){const ge=ee(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(de=>{vr(de,ge[de])})}u&&nu(u,t,"c");function te(ge,de){K(de)?de.forEach(kt=>ge(kt.bind(n))):de&&ge(de.bind(n))}if(te(Lm,d),te(go,h),te(Dm,p),te(Nl,_),te(lv,v),te(cv,I),te($m,H),te(Um,x),te(Fm,W),te(_o,w),te(tf,k),te(Mm,P),K(V))if(V.length){const ge=t.exposed||(t.exposed={});V.forEach(de=>{Object.defineProperty(ge,de,{get:()=>n[de],set:kt=>n[de]=kt})})}else t.exposed||(t.exposed={});O&&t.render===et&&(t.render=O),G!=null&&(t.inheritAttrs=G),F&&(t.components=F),ne&&(t.directives=ne)}function jm(t,e,n=et){K(t)&&(t=Pa(t));for(const s in t){const i=t[s];let r;Ee(i)?"default"in i?r=ot(i.from||s,i.default,!0):r=ot(i.from||s):r=ot(i),Ae(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function nu(t,e,n){rt(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sf(t,e,n,s){const i=s.includes(".")?mf(n,s):()=>n[s];if(Re(t)){const r=e[t];ee(r)&&Cs(i,r)}else if(ee(t))Cs(i,t.bind(n));else if(Ee(t))if(K(t))t.forEach(r=>sf(r,e,n,s));else{const r=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(r)&&Cs(i,r,t)}}function Ol(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Ar(l,c,o,!0)),Ar(l,e,o)),Ee(e)&&r.set(e,l),l}function Ar(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ar(t,r,n,!0),i&&i.forEach(o=>Ar(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Wm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wm={data:su,props:iu,emits:iu,methods:si,computed:si,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:si,directives:si,watch:qm,provide:su,inject:Vm};function su(t,e){return e?t?function(){return Te(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function Vm(t,e){return si(Pa(t),Pa(e))}function Pa(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function je(t,e){return t?[...new Set([].concat(t,e))]:e}function si(t,e){return t?Te(Object.create(null),t,e):e}function iu(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Te(Object.create(null),tu(t),tu(e!=null?e:{})):e}function qm(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=je(t[s],e[s]);return n}function rf(){return{app:null,config:{isNativeTag:P_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zm=0;function Km(t,e){return function(s,i=null){ee(s)||(s=Te({},s)),i!=null&&!Ee(i)&&(i=null);const r=rf(),o=new WeakSet;let a=!1;const l=r.app={_uid:zm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Rv,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=Ge(s,i);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,bo(h.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Es;Es=l;try{return c()}finally{Es=u}}};return l}}let Es=null;function vr(t,e){if(De){let n=De.provides;const s=De.parent&&De.parent.provides;s===n&&(n=De.provides=Object.create(s)),n[t]=e}}function ot(t,e,n=!1){const s=De||We;if(s||Es){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Es._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(s&&s.proxy):e}}function Gm(){return!!(De||We||Es)}const of={},af=()=>Object.create(of),lf=t=>Object.getPrototypeOf(t)===of;function Ym(t,e,n,s=!1){const i={},r=af();t.propsDefaults=Object.create(null),cf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Hh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Qm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=le(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(fo(t.emitsOptions,h))continue;const p=e[h];if(l)if(ce(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const _=St(h);i[_]=Aa(l,a,_,p,t,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{cf(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ce(e,d)&&((u=Zn(d))===d||!ce(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Aa(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ce(e,d)&&!0)&&(delete r[d],c=!0)}c&&Ft(t.attrs,"set","")}function cf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(li(l))continue;const c=e[l];let u;i&&ce(i,u=St(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:fo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=le(n),c=a||we;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Aa(i,l,d,c[d],t,!ce(c,d))}}return o}function Aa(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Wi(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Zn(n))&&(s=!0))}return s}function uf(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ee(t)){const u=d=>{l=!0;const[h,p]=uf(d,e,!0);Te(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ee(t)&&s.set(t,ys),ys;if(K(r))for(let u=0;u<r.length;u++){const d=St(r[u]);ru(d)&&(o[d]=we)}else if(r)for(const u in r){const d=St(u);if(ru(d)){const h=r[u],p=o[d]=K(h)||ee(h)?{type:h}:Te({},h);if(p){const _=lu(Boolean,p.type),v=lu(String,p.type);p[0]=_>-1,p[1]=v<0||_<v,(_>-1||ce(p,"default"))&&a.push(d)}}}const c=[o,a];return Ee(t)&&s.set(t,c),c}function ru(t){return t[0]!=="$"&&!li(t)}function ou(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function au(t,e){return ou(t)===ou(e)}function lu(t,e){return K(e)?e.findIndex(n=>au(n,t)):ee(e)&&au(e,t)?0:-1}const df=t=>t[0]==="_"||t==="$stable",Ll=t=>K(t)?t.map(yt):[yt(t)],Jm=(t,e,n)=>{if(e._n)return e;const s=Sm((...i)=>Ll(e(...i)),n);return s._c=!1,s},hf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(df(i))continue;const r=t[i];if(ee(r))e[i]=Jm(i,r,s);else if(r!=null){const o=Ll(r);e[i]=()=>o}}},ff=(t,e)=>{const n=Ll(e);t.slots.default=()=>n},Xm=(t,e)=>{const n=t.slots=af();if(t.vnode.shapeFlag&32){const s=e._;s?(Te(n,e),Eh(n,"_",s,!0)):hf(e,n)}else e&&ff(t,e)},Zm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Te(i,e),!n&&a===1&&delete i._):(r=!e.$stable,hf(e,i)),o=e}else e&&(ff(t,e),o={default:1});if(r)for(const a in i)!df(a)&&o[a]==null&&delete i[a]};function Na(t,e,n,s,i=!1){if(K(t)){t.forEach((h,p)=>Na(h,e&&(K(e)?e[p]:e),n,s,i));return}if(ui(s)&&!i)return;const r=s.shapeFlag&4?bo(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,ce(d,c)&&(d[c]=null)):Ae(c)&&(c.value=null)),ee(l))hn(l,a,12,[o,u]);else{const h=Re(l),p=Ae(l);if(h||p){const _=()=>{if(t.f){const v=h?ce(d,l)?d[l]:u[l]:l.value;i?K(v)&&ml(v,r):K(v)?v.includes(r)||v.push(r):h?(u[l]=[r],ce(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,ce(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,xe(_,n)):_()}}}const xe=Om;function ev(t){return tv(t)}function tv(t,e){const n=Ch();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=et,insertStaticContent:_}=t,v=(f,g,m,C=null,y=null,A=null,D=void 0,R=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!rn(f,g)&&(C=b(f),Ke(f,y,A,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:S,ref:B,shapeFlag:z}=g;switch(S){case vo:I(f,g,m,C);break;case Ze:L(f,g,m,C);break;case Yo:f==null&&w(g,m,C,D);break;case ut:F(f,g,m,C,y,A,D,R,N);break;default:z&1?O(f,g,m,C,y,A,D,R,N):z&6?ne(f,g,m,C,y,A,D,R,N):(z&64||z&128)&&S.process(f,g,m,C,y,A,D,R,N,j)}B!=null&&y&&Na(B,f&&f.ref,A,g||f,!g)},I=(f,g,m,C)=>{if(f==null)s(g.el=a(g.children),m,C);else{const y=g.el=f.el;g.children!==f.children&&c(y,g.children)}},L=(f,g,m,C)=>{f==null?s(g.el=l(g.children||""),m,C):g.el=f.el},w=(f,g,m,C)=>{[f.el,f.anchor]=_(f.children,g,m,C,f.el,f.anchor)},E=({el:f,anchor:g},m,C)=>{let y;for(;f&&f!==g;)y=h(f),s(f,m,C),f=y;s(g,m,C)},k=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=h(f),i(f),f=m;i(g)},O=(f,g,m,C,y,A,D,R,N)=>{g.type==="svg"?D="svg":g.type==="math"&&(D="mathml"),f==null?x(g,m,C,y,A,D,R,N):P(f,g,y,A,D,R,N)},x=(f,g,m,C,y,A,D,R)=>{let N,S;const{props:B,shapeFlag:z,transition:q,dirs:Z}=f;if(N=f.el=o(f.type,A,B&&B.is,B),z&8?u(N,f.children):z&16&&H(f.children,N,null,C,y,zo(f,A),D,R),Z&&kn(f,null,C,"created"),W(N,f,f.scopeId,D,C),B){for(const be in B)be!=="value"&&!li(be)&&r(N,be,null,B[be],A,f.children,C,y,Ue);"value"in B&&r(N,"value",null,B.value,A),(S=B.onVnodeBeforeMount)&&st(S,C,f)}Z&&kn(f,null,C,"beforeMount");const oe=nv(y,q);oe&&q.beforeEnter(N),s(N,g,m),((S=B&&B.onVnodeMounted)||oe||Z)&&xe(()=>{S&&st(S,C,f),oe&&q.enter(N),Z&&kn(f,null,C,"mounted")},y)},W=(f,g,m,C,y)=>{if(m&&p(f,m),C)for(let A=0;A<C.length;A++)p(f,C[A]);if(y){let A=y.subTree;if(g===A){const D=y.vnode;W(f,D,D.scopeId,D.slotScopeIds,y.parent)}}},H=(f,g,m,C,y,A,D,R,N=0)=>{for(let S=N;S<f.length;S++){const B=f[S]=R?en(f[S]):yt(f[S]);v(null,B,g,m,C,y,A,D,R)}},P=(f,g,m,C,y,A,D)=>{const R=g.el=f.el;let{patchFlag:N,dynamicChildren:S,dirs:B}=g;N|=f.patchFlag&16;const z=f.props||we,q=g.props||we;let Z;if(m&&Pn(m,!1),(Z=q.onVnodeBeforeUpdate)&&st(Z,m,g,f),B&&kn(g,f,m,"beforeUpdate"),m&&Pn(m,!0),S?V(f.dynamicChildren,S,R,m,C,zo(g,y),A):D||de(f,g,R,null,m,C,zo(g,y),A,!1),N>0){if(N&16)G(R,g,z,q,m,C,y);else if(N&2&&z.class!==q.class&&r(R,"class",null,q.class,y),N&4&&r(R,"style",z.style,q.style,y),N&8){const oe=g.dynamicProps;for(let be=0;be<oe.length;be++){const fe=oe[be],Ne=z[fe],lt=q[fe];(lt!==Ne||fe==="value")&&r(R,fe,Ne,lt,y,f.children,m,C,Ue)}}N&1&&f.children!==g.children&&u(R,g.children)}else!D&&S==null&&G(R,g,z,q,m,C,y);((Z=q.onVnodeUpdated)||B)&&xe(()=>{Z&&st(Z,m,g,f),B&&kn(g,f,m,"updated")},C)},V=(f,g,m,C,y,A,D)=>{for(let R=0;R<g.length;R++){const N=f[R],S=g[R],B=N.el&&(N.type===ut||!rn(N,S)||N.shapeFlag&70)?d(N.el):m;v(N,S,B,null,C,y,A,D,!0)}},G=(f,g,m,C,y,A,D)=>{if(m!==C){if(m!==we)for(const R in m)!li(R)&&!(R in C)&&r(f,R,m[R],null,D,g.children,y,A,Ue);for(const R in C){if(li(R))continue;const N=C[R],S=m[R];N!==S&&R!=="value"&&r(f,R,S,N,D,g.children,y,A,Ue)}"value"in C&&r(f,"value",m.value,C.value,D)}},F=(f,g,m,C,y,A,D,R,N)=>{const S=g.el=f?f.el:a(""),B=g.anchor=f?f.anchor:a("");let{patchFlag:z,dynamicChildren:q,slotScopeIds:Z}=g;Z&&(R=R?R.concat(Z):Z),f==null?(s(S,m,C),s(B,m,C),H(g.children||[],m,B,y,A,D,R,N)):z>0&&z&64&&q&&f.dynamicChildren?(V(f.dynamicChildren,q,m,y,A,D,R),(g.key!=null||y&&g===y.subTree)&&pf(f,g,!0)):de(f,g,m,B,y,A,D,R,N)},ne=(f,g,m,C,y,A,D,R,N)=>{g.slotScopeIds=R,f==null?g.shapeFlag&512?y.ctx.activate(g,m,C,D,N):U(g,m,C,y,A,D,N):se(f,g,N)},U=(f,g,m,C,y,A,D)=>{const R=f.component=wv(f,C,y);if(mo(f)&&(R.ctx.renderer=j),Ev(R),R.asyncDep){if(y&&y.registerDep(R,te,D),!f.el){const N=R.subTree=Ge(Ze);L(null,N,g,m)}}else te(R,f,g,m,y,A,D)},se=(f,g,m)=>{const C=g.component=f.component;if(km(f,g,m))if(C.asyncDep&&!C.asyncResolved){ge(C,g,m);return}else C.next=g,wm(C.update),C.effect.dirty=!0,C.update();else g.el=f.el,C.vnode=g},te=(f,g,m,C,y,A,D)=>{const R=()=>{if(f.isMounted){let{next:B,bu:z,u:q,parent:Z,vnode:oe}=f;{const as=gf(f);if(as){B&&(B.el=oe.el,ge(f,B,D)),as.asyncDep.then(()=>{f.isUnmounted||R()});return}}let be=B,fe;Pn(f,!1),B?(B.el=oe.el,ge(f,B,D)):B=oe,z&&ci(z),(fe=B.props&&B.props.onVnodeBeforeUpdate)&&st(fe,Z,B,oe),Pn(f,!0);const Ne=Vo(f),lt=f.subTree;f.subTree=Ne,v(lt,Ne,d(lt.el),b(lt),f,y,A),B.el=Ne.el,be===null&&Pm(f,Ne.el),q&&xe(q,y),(fe=B.props&&B.props.onVnodeUpdated)&&xe(()=>st(fe,Z,B,oe),y)}else{let B;const{el:z,props:q}=g,{bm:Z,m:oe,parent:be}=f,fe=ui(g);if(Pn(f,!1),Z&&ci(Z),!fe&&(B=q&&q.onVnodeBeforeMount)&&st(B,be,g),Pn(f,!0),z&&Ce){const Ne=()=>{f.subTree=Vo(f),Ce(z,f.subTree,f,y,null)};fe?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Ne()):Ne()}else{const Ne=f.subTree=Vo(f);v(null,Ne,m,C,f,y,A),g.el=Ne.el}if(oe&&xe(oe,y),!fe&&(B=q&&q.onVnodeMounted)){const Ne=g;xe(()=>st(B,be,Ne),y)}(g.shapeFlag&256||be&&ui(be.vnode)&&be.vnode.shapeFlag&256)&&f.a&&xe(f.a,y),f.isMounted=!0,g=m=C=null}},N=f.effect=new wl(R,et,()=>Al(S),f.scope),S=f.update=()=>{N.dirty&&N.run()};S.id=f.uid,Pn(f,!0),S()},ge=(f,g,m)=>{g.component=f;const C=f.vnode.props;f.vnode=g,f.next=null,Qm(f,g.props,C,m),Zm(f,g.children,m),Cn(),Xc(f),In()},de=(f,g,m,C,y,A,D,R,N=!1)=>{const S=f&&f.children,B=f?f.shapeFlag:0,z=g.children,{patchFlag:q,shapeFlag:Z}=g;if(q>0){if(q&128){Vt(S,z,m,C,y,A,D,R,N);return}else if(q&256){kt(S,z,m,C,y,A,D,R,N);return}}Z&8?(B&16&&Ue(S,y,A),z!==S&&u(m,z)):B&16?Z&16?Vt(S,z,m,C,y,A,D,R,N):Ue(S,y,A,!0):(B&8&&u(m,""),Z&16&&H(z,m,C,y,A,D,R,N))},kt=(f,g,m,C,y,A,D,R,N)=>{f=f||ys,g=g||ys;const S=f.length,B=g.length,z=Math.min(S,B);let q;for(q=0;q<z;q++){const Z=g[q]=N?en(g[q]):yt(g[q]);v(f[q],Z,m,null,y,A,D,R,N)}S>B?Ue(f,y,A,!0,!1,z):H(g,m,C,y,A,D,R,N,z)},Vt=(f,g,m,C,y,A,D,R,N)=>{let S=0;const B=g.length;let z=f.length-1,q=B-1;for(;S<=z&&S<=q;){const Z=f[S],oe=g[S]=N?en(g[S]):yt(g[S]);if(rn(Z,oe))v(Z,oe,m,null,y,A,D,R,N);else break;S++}for(;S<=z&&S<=q;){const Z=f[z],oe=g[q]=N?en(g[q]):yt(g[q]);if(rn(Z,oe))v(Z,oe,m,null,y,A,D,R,N);else break;z--,q--}if(S>z){if(S<=q){const Z=q+1,oe=Z<B?g[Z].el:C;for(;S<=q;)v(null,g[S]=N?en(g[S]):yt(g[S]),m,oe,y,A,D,R,N),S++}}else if(S>q)for(;S<=z;)Ke(f[S],y,A,!0),S++;else{const Z=S,oe=S,be=new Map;for(S=oe;S<=q;S++){const Je=g[S]=N?en(g[S]):yt(g[S]);Je.key!=null&&be.set(Je.key,S)}let fe,Ne=0;const lt=q-oe+1;let as=!1,Bc=0;const Ys=new Array(lt);for(S=0;S<lt;S++)Ys[S]=0;for(S=Z;S<=z;S++){const Je=f[S];if(Ne>=lt){Ke(Je,y,A,!0);continue}let vt;if(Je.key!=null)vt=be.get(Je.key);else for(fe=oe;fe<=q;fe++)if(Ys[fe-oe]===0&&rn(Je,g[fe])){vt=fe;break}vt===void 0?Ke(Je,y,A,!0):(Ys[vt-oe]=S+1,vt>=Bc?Bc=vt:as=!0,v(Je,g[vt],m,null,y,A,D,R,N),Ne++)}const Hc=as?sv(Ys):ys;for(fe=Hc.length-1,S=lt-1;S>=0;S--){const Je=oe+S,vt=g[Je],jc=Je+1<B?g[Je+1].el:C;Ys[S]===0?v(null,vt,m,jc,y,A,D,R,N):as&&(fe<0||S!==Hc[fe]?mt(vt,m,jc,2):fe--)}}},mt=(f,g,m,C,y=null)=>{const{el:A,type:D,transition:R,children:N,shapeFlag:S}=f;if(S&6){mt(f.component.subTree,g,m,C);return}if(S&128){f.suspense.move(g,m,C);return}if(S&64){D.move(f,g,m,j);return}if(D===ut){s(A,g,m);for(let z=0;z<N.length;z++)mt(N[z],g,m,C);s(f.anchor,g,m);return}if(D===Yo){E(f,g,m);return}if(C!==2&&S&1&&R)if(C===0)R.beforeEnter(A),s(A,g,m),xe(()=>R.enter(A),y);else{const{leave:z,delayLeave:q,afterLeave:Z}=R,oe=()=>s(A,g,m),be=()=>{z(A,()=>{oe(),Z&&Z()})};q?q(A,oe,be):be()}else s(A,g,m)},Ke=(f,g,m,C=!1,y=!1)=>{const{type:A,props:D,ref:R,children:N,dynamicChildren:S,shapeFlag:B,patchFlag:z,dirs:q,memoIndex:Z}=f;if(z===-2&&(y=!1),R!=null&&Na(R,null,m,f,!0),Z!=null&&(g.renderCache[Z]=void 0),B&256){g.ctx.deactivate(f);return}const oe=B&1&&q,be=!ui(f);let fe;if(be&&(fe=D&&D.onVnodeBeforeUnmount)&&st(fe,g,f),B&6)ir(f.component,m,C);else{if(B&128){f.suspense.unmount(m,C);return}oe&&kn(f,null,g,"beforeUnmount"),B&64?f.type.remove(f,g,m,j,C):S&&(A!==ut||z>0&&z&64)?Ue(S,g,m,!1,!0):(A===ut&&z&384||!y&&B&16)&&Ue(N,g,m),C&&rs(f)}(be&&(fe=D&&D.onVnodeUnmounted)||oe)&&xe(()=>{fe&&st(fe,g,f),oe&&kn(f,null,g,"unmounted")},m)},rs=f=>{const{type:g,el:m,anchor:C,transition:y}=f;if(g===ut){os(m,C);return}if(g===Yo){k(f);return}const A=()=>{i(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:D,delayLeave:R}=y,N=()=>D(m,A);R?R(f.el,A,N):N()}else A()},os=(f,g)=>{let m;for(;f!==g;)m=h(f),i(f),f=m;i(g)},ir=(f,g,m)=>{const{bum:C,scope:y,update:A,subTree:D,um:R,m:N,a:S}=f;Nr(N),Nr(S),C&&ci(C),y.stop(),A&&(A.active=!1,Ke(D,f,g,m)),R&&xe(R,g),xe(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ue=(f,g,m,C=!1,y=!1,A=0)=>{for(let D=A;D<f.length;D++)Ke(f[D],g,m,C,y)},b=f=>f.shapeFlag&6?b(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el);let $=!1;const M=(f,g,m)=>{f==null?g._vnode&&Ke(g._vnode,null,null,!0):v(g._vnode||null,f,g,null,null,null,m),$||($=!0,Xc(),Qh(),$=!1),g._vnode=f},j={p:v,um:Ke,m:mt,r:rs,mt:U,mc:H,pc:de,pbc:V,n:b,o:t};let he,Ce;return e&&([he,Ce]=e(j)),{render:M,hydrate:he,createApp:Km(M,he)}}function zo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function pf(t,e,n=!1){const s=t.children,i=e.children;if(K(s)&&K(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=en(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&pf(o,a)),a.type===vo&&(a.el=o.el)}}function sv(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function gf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gf(e)}function Nr(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const iv=Symbol.for("v-scx"),rv=()=>ot(iv),ur={};function Cs(t,e,n){return _f(t,e,n)}function _f(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=we){if(e&&r){const x=e;e=(...W)=>{x(...W),O()}}const l=De,c=x=>s===!0?x:sn(x,s===!1?1:void 0);let u,d=!1,h=!1;if(Ae(t)?(u=()=>t.value,d=kr(t)):Un(t)?(u=()=>c(t),d=!0):K(t)?(h=!0,d=t.some(x=>Un(x)||kr(x)),u=()=>t.map(x=>{if(Ae(x))return x.value;if(Un(x))return c(x);if(ee(x))return hn(x,l,2)})):ee(t)?e?u=()=>hn(t,l,2):u=()=>(p&&p(),rt(t,l,3,[_])):u=et,e&&s){const x=u;u=()=>sn(x())}let p,_=x=>{p=E.onStop=()=>{hn(x,l,4),p=E.onStop=void 0}},v;if(yo)if(_=et,e?n&&rt(e,l,3,[u(),h?[]:void 0,_]):u(),i==="sync"){const x=rv();v=x.__watcherHandles||(x.__watcherHandles=[])}else return et;let I=h?new Array(t.length).fill(ur):ur;const L=()=>{if(!(!E.active||!E.dirty))if(e){const x=E.run();(s||d||(h?x.some((W,H)=>vn(W,I[H])):vn(x,I)))&&(p&&p(),rt(e,l,3,[x,I===ur?void 0:h&&I[0]===ur?[]:I,_]),I=x)}else E.run()};L.allowRecurse=!!e;let w;i==="sync"?w=L:i==="post"?w=()=>xe(L,l&&l.suspense):(L.pre=!0,l&&(L.id=l.uid),w=()=>Al(L));const E=new wl(u,et,w),k=Ph(),O=()=>{E.stop(),k&&ml(k.effects,E)};return e?n?L():I=E.run():i==="post"?xe(E.run.bind(E),l&&l.suspense):E.run(),v&&v.push(O),O}function ov(t,e,n){const s=this.proxy,i=Re(t)?t.includes(".")?mf(s,t):()=>s[t]:t.bind(s,s);let r;ee(e)?r=e:(r=e.handler,n=e);const o=Wi(this),a=_f(i,r.bind(s),n);return o(),a}function mf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function sn(t,e=1/0,n){if(e<=0||!Ee(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ae(t))sn(t.value,e,n);else if(K(t))for(let s=0;s<t.length;s++)sn(t[s],e,n);else if(vh(t)||bs(t))t.forEach(s=>{sn(s,e,n)});else if(wh(t)){for(const s in t)sn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&sn(t[s],e,n)}return t}const mo=t=>t.type.__isKeepAlive,av={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Hs(),s=n.ctx;if(!s.renderer)return()=>{const w=e.default&&e.default();return w&&w.length===1?w[0]:w};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=s,h=d("div");s.activate=(w,E,k,O,x)=>{const W=w.component;c(w,E,k,0,a),l(W.vnode,w,E,k,W,a,O,w.slotScopeIds,x),xe(()=>{W.isDeactivated=!1,W.a&&ci(W.a);const H=w.props&&w.props.onVnodeMounted;H&&st(H,W.parent,w)},a)},s.deactivate=w=>{const E=w.component;Nr(E.m),Nr(E.a),c(w,h,null,1,a),xe(()=>{E.da&&ci(E.da);const k=w.props&&w.props.onVnodeUnmounted;k&&st(k,E.parent,w),E.isDeactivated=!0},a)};function p(w){Ko(w),u(w,n,a,!0)}function _(w){i.forEach((E,k)=>{const O=Oa(E.type);O&&(!w||!w(O))&&v(k)})}function v(w){const E=i.get(w);!o||!rn(E,o)?p(E):o&&Ko(o),i.delete(w),r.delete(w)}Cs(()=>[t.include,t.exclude],([w,E])=>{w&&_(k=>ii(w,k)),E&&_(k=>!ii(E,k))},{flush:"post",deep:!0});let I=null;const L=()=>{I!=null&&(Ta(n.subTree.type)?xe(()=>{i.set(I,dr(n.subTree))},n.subTree.suspense):i.set(I,dr(n.subTree)))};return go(L),Nl(L),_o(()=>{i.forEach(w=>{const{subTree:E,suspense:k}=n,O=dr(E);if(w.type===O.type&&w.key===O.key){Ko(O);const x=O.component.da;x&&xe(x,k);return}p(w)})}),()=>{if(I=null,!e.default)return null;const w=e.default(),E=w[0];if(w.length>1)return o=null,w;if(!xr(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let k=dr(E);const O=k.type,x=Oa(ui(k)?k.type.__asyncResolved||{}:O),{include:W,exclude:H,max:P}=t;if(W&&(!x||!ii(W,x))||H&&x&&ii(H,x))return o=k,E;const V=k.key==null?O:k.key,G=i.get(V);return k.el&&(k=Bt(k),E.shapeFlag&128&&(E.ssContent=k)),I=V,G?(k.el=G.el,k.component=G.component,k.transition&&jn(k,k.transition),k.shapeFlag|=512,r.delete(V),r.add(V)):(r.add(V),P&&r.size>parseInt(P,10)&&v(r.values().next().value)),k.shapeFlag|=256,o=k,Ta(E.type)?E:k}}},XR=av;function ii(t,e){return K(t)?t.some(n=>ii(n,e)):Re(t)?t.split(",").includes(e):N_(t)?t.test(e):!1}function lv(t,e){vf(t,"a",e)}function cv(t,e){vf(t,"da",e)}function vf(t,e,n=De){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(po(e,s,n),n){let i=n.parent;for(;i&&i.parent;)mo(i.parent.vnode)&&uv(s,e,n,i),i=i.parent}}function uv(t,e,n,s){const i=po(e,t,s,!0);tf(()=>{ml(s[e],i)},n)}function Ko(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function dr(t){return t.shapeFlag&128?t.ssContent:t}const Zt=Symbol("_leaveCb"),hr=Symbol("_enterCb");function yf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return go(()=>{t.isMounted=!0}),_o(()=>{t.isUnmounting=!0}),t}const tt=[Function,Array],bf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tt,onEnter:tt,onAfterEnter:tt,onEnterCancelled:tt,onBeforeLeave:tt,onLeave:tt,onAfterLeave:tt,onLeaveCancelled:tt,onBeforeAppear:tt,onAppear:tt,onAfterAppear:tt,onAppearCancelled:tt},wf=t=>{const e=t.subTree;return e.component?wf(e.component):e},dv={name:"BaseTransition",props:bf,setup(t,{slots:e}){const n=Hs(),s=yf();return()=>{const i=e.default&&Dl(e.default(),!0);if(!i||!i.length)return;let r=i[0];if(i.length>1){for(const h of i)if(h.type!==Ze){r=h;break}}const o=le(t),{mode:a}=o;if(s.isLeaving)return Go(r);const l=cu(r);if(!l)return Go(r);let c=Si(l,o,s,n,h=>c=h);jn(l,c);const u=n.subTree,d=u&&cu(u);if(d&&d.type!==Ze&&!rn(l,d)&&wf(n).type!==Ze){const h=Si(d,o,s,n);if(jn(d,h),a==="out-in"&&l.type!==Ze)return s.isLeaving=!0,h.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Go(r);a==="in-out"&&l.type!==Ze&&(h.delayLeave=(p,_,v)=>{const I=Ef(s,d);I[String(d.key)]=d,p[Zt]=()=>{_(),p[Zt]=void 0,delete c.delayedLeave},c.delayedLeave=v})}return r}}},hv=dv;function Ef(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Si(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:I,onAppear:L,onAfterAppear:w,onAppearCancelled:E}=e,k=String(t.key),O=Ef(n,t),x=(P,V)=>{P&&rt(P,s,9,V)},W=(P,V)=>{const G=V[1];x(P,V),K(P)?P.every(F=>F.length<=1)&&G():P.length<=1&&G()},H={mode:o,persisted:a,beforeEnter(P){let V=l;if(!n.isMounted)if(r)V=I||l;else return;P[Zt]&&P[Zt](!0);const G=O[k];G&&rn(t,G)&&G.el[Zt]&&G.el[Zt](),x(V,[P])},enter(P){let V=c,G=u,F=d;if(!n.isMounted)if(r)V=L||c,G=w||u,F=E||d;else return;let ne=!1;const U=P[hr]=se=>{ne||(ne=!0,se?x(F,[P]):x(G,[P]),H.delayedLeave&&H.delayedLeave(),P[hr]=void 0)};V?W(V,[P,U]):U()},leave(P,V){const G=String(t.key);if(P[hr]&&P[hr](!0),n.isUnmounting)return V();x(h,[P]);let F=!1;const ne=P[Zt]=U=>{F||(F=!0,V(),U?x(v,[P]):x(_,[P]),P[Zt]=void 0,O[G]===t&&delete O[G])};O[G]=t,p?W(p,[P,ne]):ne()},clone(P){const V=Si(P,e,n,s,i);return i&&i(V),V}};return H}function Go(t){if(mo(t))return t=Bt(t),t.children=null,t}function cu(t){if(!mo(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ee(n.default))return n.default()}}function jn(t,e){t.shapeFlag&6&&t.component?jn(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dl(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ut?(o.patchFlag&128&&i++,s=s.concat(Dl(o.children,e,a))):(e||o.type!==Ze)&&s.push(a!=null?Bt(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const fv=t=>t.__isTeleport,ut=Symbol.for("v-fgt"),vo=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),Yo=Symbol.for("v-stc"),hi=[];let ht=null;function Cf(t=!1){hi.push(ht=t?null:[])}function pv(){hi.pop(),ht=hi[hi.length-1]||null}let Ti=1;function uu(t){Ti+=t}function If(t){return t.dynamicChildren=Ti>0?ht||ys:null,pv(),Ti>0&&ht&&ht.push(t),t}function ZR(t,e,n,s,i,r){return If(Rf(t,e,n,s,i,r,!0))}function Sf(t,e,n,s,i){return If(Ge(t,e,n,s,i,!0))}function xr(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const Tf=({key:t})=>t!=null?t:null,yr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Ae(t)||ee(t)?{i:We,r:t,k:e,f:!!n}:t:null);function Rf(t,e=null,n=null,s=0,i=null,r=t===ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tf(e),ref:e&&yr(e),scopeId:Zh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return a?(Ml(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),Ti>0&&!o&&ht&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ht.push(l),l}const Ge=gv;function gv(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Nm)&&(t=Ze),xr(t)){const a=Bt(t,e,!0);return n&&Ml(a,n),Ti>0&&!r&&ht&&(a.shapeFlag&6?ht[ht.indexOf(t)]=a:ht.push(a)),a.patchFlag=-2,a}if(Tv(t)&&(t=t.__vccOpts),e){e=_v(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=bl(a)),Ee(l)&&(Wh(l)&&!K(l)&&(l=Te({},l)),e.style=yl(l))}const o=Re(t)?1:Ta(t)?128:fv(t)?64:Ee(t)?4:ee(t)?2:0;return Rf(t,e,n,s,i,o,r,!0)}function _v(t){return t?Wh(t)||lf(t)?Te({},t):t:null}function Bt(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?vv(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Tf(c),ref:e&&e.ref?n&&r?K(r)?r.concat(yr(e)):[r,yr(e)]:yr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ut?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bt(t.ssContent),ssFallback:t.ssFallback&&Bt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&jn(u,l.clone(u)),u}function mv(t=" ",e=0){return Ge(vo,null,t,e)}function ek(t="",e=!1){return e?(Cf(),Sf(Ze,null,t)):Ge(Ze,null,t)}function yt(t){return t==null||typeof t=="boolean"?Ge(Ze):K(t)?Ge(ut,null,t.slice()):typeof t=="object"?en(t):Ge(vo,null,String(t))}function en(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bt(t)}function Ml(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ml(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!lf(e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[mv(e)]):n=8);t.children=e,t.shapeFlag|=n}function vv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=bl([e.class,s.class]));else if(i==="style")e.style=yl([e.style,s.style]);else if(ao(i)){const r=e[i],o=s[i];o&&r!==o&&!(K(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function st(t,e,n,s=null){rt(t,e,7,[n,s])}const yv=rf();let bv=0;function wv(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||yv,r={uid:bv++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uf(s,i),emitsOptions:Xh(s,i),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Im.bind(null,r),t.ce&&t.ce(r),r}let De=null;const Hs=()=>De||We;let Or,xa;{const t=Ch(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Or=e("__VUE_INSTANCE_SETTERS__",n=>De=n),xa=e("__VUE_SSR_SETTERS__",n=>yo=n)}const Wi=t=>{const e=De;return Or(t),t.scope.on(),()=>{t.scope.off(),Or(e)}},du=()=>{De&&De.scope.off(),Or(null)};function kf(t){return t.vnode.shapeFlag&4}let yo=!1;function Ev(t,e=!1){e&&xa(e);const{props:n,children:s}=t.vnode,i=kf(t);Ym(t,n,i,e),Xm(t,s);const r=i?Cv(t,e):void 0;return e&&xa(!1),r}function Cv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Bm);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Sv(t):null,r=Wi(t);Cn();const o=hn(s,t,0,[t.props,i]);if(In(),r(),yh(o)){if(o.then(du,du),e)return o.then(a=>{hu(t,a,e)}).catch(a=>{ho(a,t,0)});t.asyncDep=o}else hu(t,o,e)}else Pf(t,e)}function hu(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Kh(e)),Pf(t,n)}let fu;function Pf(t,e,n){const s=t.type;if(!t.render){if(!e&&fu&&!s.render){const i=s.template||Ol(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Te(Te({isCustomElement:r,delimiters:a},o),l);s.render=fu(i,c)}}t.render=s.render||et}{const i=Wi(t);Cn();try{Hm(t)}finally{In(),i()}}}const Iv={get(t,e){return Qe(t,"get",""),t[e]}};function Sv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Iv),slots:t.slots,emit:t.emit,expose:e}}function bo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Kh(ts(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in di)return di[n](t)},has(e,n){return n in e||n in di}})):t.proxy}function Oa(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function Tv(t){return ee(t)&&"__vccOpts"in t}const X=(t,e)=>hm(t,e,yo);function J(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!K(e)?xr(e)?Ge(t,null,[e]):Ge(t,e):Ge(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&xr(n)&&(n=[n]),Ge(t,e,n))}const Rv="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kv="http://www.w3.org/2000/svg",Pv="http://www.w3.org/1998/Math/MathML",xt=typeof document!="undefined"?document:null,pu=xt&&xt.createElement("template"),Av={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?xt.createElementNS(kv,t):e==="mathml"?xt.createElementNS(Pv,t):n?xt.createElement(t,{is:n}):xt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{pu.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=pu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zt="transition",Qs="animation",As=Symbol("_vtc"),Fl=(t,{slots:e})=>J(hv,Nf(t),e);Fl.displayName="Transition";const Af={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Nv=Fl.props=Te({},bf,Af),An=(t,e=[])=>{K(t)?t.forEach(n=>n(...e)):t&&t(...e)},gu=t=>t?K(t)?t.some(e=>e.length>1):t.length>1:!1;function Nf(t){const e={};for(const F in t)F in Af||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=xv(i),v=_&&_[0],I=_&&_[1],{onBeforeEnter:L,onEnter:w,onEnterCancelled:E,onLeave:k,onLeaveCancelled:O,onBeforeAppear:x=L,onAppear:W=w,onAppearCancelled:H=E}=e,P=(F,ne,U)=>{Qt(F,ne?u:a),Qt(F,ne?c:o),U&&U()},V=(F,ne)=>{F._isLeaving=!1,Qt(F,d),Qt(F,p),Qt(F,h),ne&&ne()},G=F=>(ne,U)=>{const se=F?W:w,te=()=>P(ne,F,U);An(se,[ne,te]),_u(()=>{Qt(ne,F?l:r),At(ne,F?u:a),gu(se)||mu(ne,s,v,te)})};return Te(e,{onBeforeEnter(F){An(L,[F]),At(F,r),At(F,o)},onBeforeAppear(F){An(x,[F]),At(F,l),At(F,c)},onEnter:G(!1),onAppear:G(!0),onLeave(F,ne){F._isLeaving=!0;const U=()=>V(F,ne);At(F,d),At(F,h),Of(),_u(()=>{!F._isLeaving||(Qt(F,d),At(F,p),gu(k)||mu(F,s,I,U))}),An(k,[F,U])},onEnterCancelled(F){P(F,!1),An(E,[F])},onAppearCancelled(F){P(F,!0),An(H,[F])},onLeaveCancelled(F){V(F),An(O,[F])}})}function xv(t){if(t==null)return null;if(Ee(t))return[Qo(t.enter),Qo(t.leave)];{const e=Qo(t);return[e,e]}}function Qo(t){return M_(t)}function At(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[As]||(t[As]=new Set)).add(e)}function Qt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[As];n&&(n.delete(e),n.size||(t[As]=void 0))}function _u(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ov=0;function mu(t,e,n,s){const i=t._endId=++Ov,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=xf(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function xf(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${zt}Delay`),r=s(`${zt}Duration`),o=vu(i,r),a=s(`${Qs}Delay`),l=s(`${Qs}Duration`),c=vu(a,l);let u=null,d=0,h=0;e===zt?o>0&&(u=zt,d=o,h=r.length):e===Qs?c>0&&(u=Qs,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?zt:Qs:null,h=u?u===zt?r.length:l.length:0);const p=u===zt&&/\b(transform|all)(,|$)/.test(s(`${zt}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:p}}function vu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>yu(n)+yu(t[s])))}function yu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Of(){return document.body.offsetHeight}function Lv(t,e,n){const s=t[As];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bu=Symbol("_vod"),Dv=Symbol("_vsh"),Mv=Symbol(""),Fv=/(^|;)\s*display\s*:/;function Uv(t,e,n){const s=t.style,i=Re(n);let r=!1;if(n&&!i){if(e)if(Re(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&br(s,a,"")}else for(const o in e)n[o]==null&&br(s,o,"");for(const o in n)o==="display"&&(r=!0),br(s,o,n[o])}else if(i){if(e!==n){const o=s[Mv];o&&(n+=";"+o),s.cssText=n,r=Fv.test(n)}}else e&&t.removeAttribute("style");bu in t&&(t[bu]=r?s.display:"",t[Dv]&&(s.display="none"))}const wu=/\s*!important$/;function br(t,e,n){if(K(n))n.forEach(s=>br(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=$v(t,e);wu.test(n)?t.setProperty(Zn(s),n.replace(wu,""),"important"):t[s]=n}}const Eu=["Webkit","Moz","ms"],Jo={};function $v(t,e){const n=Jo[e];if(n)return n;let s=St(e);if(s!=="filter"&&s in t)return Jo[e]=s;s=co(s);for(let i=0;i<Eu.length;i++){const r=Eu[i]+s;if(r in t)return Jo[e]=r}return e}const Cu="http://www.w3.org/1999/xlink";function Iu(t,e,n,s,i,r=j_(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cu,e.slice(6,e.length)):t.setAttributeNS(Cu,e,n):n==null||r&&!Ih(n)?t.removeAttribute(e):t.setAttribute(e,r?"":En(n)?String(n):n)}function Bv(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ih(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Hv(t,e,n,s){t.addEventListener(e,n,s)}function jv(t,e,n,s){t.removeEventListener(e,n,s)}const Su=Symbol("_vei");function Wv(t,e,n,s,i=null){const r=t[Su]||(t[Su]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Vv(e);if(s){const c=r[e]=Kv(s,i);Hv(t,a,c,l)}else o&&(jv(t,a,o,l),r[e]=void 0)}}const Tu=/(?:Once|Passive|Capture)$/;function Vv(t){let e;if(Tu.test(t)){e={};let s;for(;s=t.match(Tu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zn(t.slice(2)),e]}let Xo=0;const qv=Promise.resolve(),zv=()=>Xo||(qv.then(()=>Xo=0),Xo=Date.now());function Kv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;rt(Gv(s,n.value),e,5,[s])};return n.value=t,n.attached=zv(),n}function Gv(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ru=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Yv=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?Lv(t,s,c):e==="style"?Uv(t,n,s):ao(e)?_l(e)||Wv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qv(t,e,s,c))?(Bv(t,e,s,r,o,a,l),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Iu(t,e,s,c,o,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Iu(t,e,s,c))};function Qv(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ru(e)&&ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ru(e)&&Re(n)?!1:e in t}const Lf=new WeakMap,Df=new WeakMap,Lr=Symbol("_moveCb"),ku=Symbol("_enterCb"),Mf={name:"TransitionGroup",props:Te({},Nv,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Hs(),s=yf();let i,r;return Nl(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!ny(i[0].el,n.vnode.el,o))return;i.forEach(Zv),i.forEach(ey);const a=i.filter(ty);Of(),a.forEach(l=>{const c=l.el,u=c.style;At(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[Lr]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c[Lr]=null,Qt(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=le(t),a=Nf(o);let l=o.tag||ut;if(i=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(i.push(u),jn(u,Si(u,a,s,n)),Lf.set(u,u.el.getBoundingClientRect()))}r=e.default?Dl(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&jn(u,Si(u,a,s,n))}return Ge(l,null,r)}}},Jv=t=>delete t.mode;Mf.props;const Xv=Mf;function Zv(t){const e=t.el;e[Lr]&&e[Lr](),e[ku]&&e[ku]()}function ey(t){Df.set(t,t.el.getBoundingClientRect())}function ty(t){const e=Lf.get(t),n=Df.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function ny(t,e,n){const s=t.cloneNode(),i=t[As];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=xf(s);return r.removeChild(s),o}const sy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tk=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=Zn(i.key);if(e.some(o=>o===r||sy[o]===r))return t(i)})},iy=Te({patchProp:Yv},Av);let Pu;function ry(){return Pu||(Pu=ev(iy))}const Ff=(...t)=>{const e=ry().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=ay(s);if(!i)return;const r=e._component;!ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,oy(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function oy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ay(t){return Re(t)?document.querySelector(t):t}function Ul(t,e,n,s){return Object.defineProperty(t,e,{get:n,set:s,enumerable:!0}),t}const Wn=Hn(!1);let La;function ly(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:e[0]||""}}function cy(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const Uf="ontouchstart"in window||window.navigator.maxTouchPoints>0;function uy(t){const e=t.toLowerCase(),n=cy(e),s=ly(e,n),i={};s.browser&&(i[s.browser]=!0,i.version=s.version,i.versionNumber=parseInt(s.version,10)),s.platform&&(i[s.platform]=!0);const r=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];if(r===!0||e.indexOf("mobile")!==-1?i.mobile=!0:i.desktop=!0,i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),i.edga||i.edgios||i.edg?(i.edge=!0,s.browser="edge"):i.crios?(i.chrome=!0,s.browser="chrome"):i.fxios&&(i.firefox=!0,s.browser="firefox"),(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i.vivaldi&&(s.browser="vivaldi",i.vivaldi=!0),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&r!==!0)&&(i.webkit=!0),i.opr&&(s.browser="opera",i.opera=!0),i.safari&&(i.blackberry||i.bb?(s.browser="blackberry",i.blackberry=!0):i.playbook?(s.browser="playbook",i.playbook=!0):i.android?(s.browser="android",i.android=!0):i.kindle?(s.browser="kindle",i.kindle=!0):i.silk&&(s.browser="silk",i.silk=!0)),i.name=s.browser,i.platform=s.platform,e.indexOf("electron")!==-1)i.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)i.bex=!0;else{if(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),Wn.value===!0&&(La={is:{...i}}),Uf===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)){delete i.mac,delete i.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(i,{mobile:!0,ios:!0,platform:o,[o]:!0})}i.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete i.desktop,i.mobile=!0)}return i}const Au=navigator.userAgent||navigator.vendor||window.opera,dy={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Et={userAgent:Au,is:uy(Au),has:{touch:Uf},within:{iframe:window.self!==window.top}},Da={install(t){const{$q:e}=t;Wn.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,Et),Wn.value=!1}),e.platform=es(this)):e.platform=this}};{let t;Ul(Et.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(Da,Et),Wn.value===!0&&(Object.assign(Da,La,dy),La=null)}function Vi(t){return ts(xl(t))}function hy(t){return ts(t)}const wo=(t,e)=>{const n=es(t);for(const s in t)Ul(e,s,()=>n[s],i=>{n[s]=i});return e},Vn={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Vn,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function Ri(){}function nk(t){return t.button===0}function fy(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function $f(t){t.stopPropagation()}function Ma(t){t.cancelable!==!1&&t.preventDefault()}function ls(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function sk(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?s=>{s.__dragPrevented=!0,s.addEventListener("dragstart",Ma,Vn.notPassiveCapture)}:s=>{delete s.__dragPrevented,s.removeEventListener("dragstart",Ma,Vn.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function py(t,e,n){const s=`__q_${e}_evt`;t[s]=t[s]!==void 0?t[s].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],Vn[i[3]])})}function gy(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(s=>{s[0].removeEventListener(s[1],t[s[2]],Vn[s[3]])}),t[n]=void 0)}function _y(t,e=250,n){let s=null;function i(){const r=arguments,o=()=>{s=null,n!==!0&&t.apply(this,r)};s!==null?clearTimeout(s):n===!0&&t.apply(this,r),s=setTimeout(o,e)}return i.cancel=()=>{s!==null&&clearTimeout(s)},i}const Zo=["sm","md","lg","xl"],{passive:Nu}=Vn;var my=wo({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Ri,setDebounce:Ri,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,s=n||window,i=document.scrollingElement||document.documentElement,r=n===void 0||Et.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=d=>{const[h,p]=r();if(p!==this.height&&(this.height=p),h!==this.width)this.width=h;else if(d!==!0)return;let _=this.sizes;this.gt.xs=h>=_.sm,this.gt.sm=h>=_.md,this.gt.md=h>=_.lg,this.gt.lg=h>=_.xl,this.lt.sm=h<_.sm,this.lt.md=h<_.md,this.lt.lg=h<_.lg,this.lt.xl=h<_.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,_=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",_!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${_}`)),this.name=_)};let a,l={},c=16;this.setSizes=d=>{Zo.forEach(h=>{d[h]!==void 0&&(l[h]=d[h])})},this.setDebounce=d=>{c=d};const u=()=>{const d=getComputedStyle(document.body);d.getPropertyValue("--q-size-sm")&&Zo.forEach(h=>{this.sizes[h]=parseInt(d.getPropertyValue(`--q-size-${h}`),10)}),this.setSizes=h=>{Zo.forEach(p=>{h[p]&&(this.sizes[p]=h[p])}),this.__update(!0)},this.setDebounce=h=>{a!==void 0&&s.removeEventListener("resize",a,Nu),a=h>0?_y(this.__update,h):this.__update,s.addEventListener("resize",a,Nu)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Wn.value===!0?e.push(u):u()}});const $e=wo({isActive:!1,mode:!1},{__media:void 0,set(t){$e.mode=t,t==="auto"?($e.__media===void 0&&($e.__media=window.matchMedia("(prefers-color-scheme: dark)"),$e.__updateMedia=()=>{$e.set("auto")},$e.__media.addListener($e.__updateMedia)),t=$e.__media.matches):$e.__media!==void 0&&($e.__media.removeListener($e.__updateMedia),$e.__media=void 0),$e.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){$e.set($e.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function vy(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let Bf=!1;function yy(t){Bf=t.isComposing===!0}function by(t){return Bf===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function Fa(t,e){return by(t)===!0?!1:[].concat(e).includes(t.keyCode)}function Hf(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function wy({is:t,has:e,within:n},s){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const r=Hf(t);r!==void 0&&i.push("platform-"+r)}if(t.nativeMobile===!0){const r=t.nativeMobileWrapper;i.push(r),i.push("native-mobile"),t.ios===!0&&(s[r]===void 0||s[r].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function Ey(){const{is:t}=Et,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const i=Hf(t);i!==void 0&&n.add(`platform-${i}`)}}Et.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),Et.within.iframe===!0&&n.add("within-iframe");const s=Array.from(n).join(" ");e!==s&&(document.body.className=s)}function Cy(t){for(const e in t)vy(e,t[e])}var Iy={install(t){if(this.__installed!==!0){if(Wn.value===!0)Ey();else{const{$q:e}=t;e.config.brand!==void 0&&Cy(e.config.brand);const n=wy(Et,e.config);document.body.classList.add.apply(document.body.classList,n)}Et.is.ios===!0&&document.body.addEventListener("touchstart",Ri),window.addEventListener("keydown",yy,!0)}}};const jf=()=>!0;function Sy(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function Ty(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function Ry(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return jf;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(Sy).map(Ty)),()=>e.includes(window.location.hash)}var ky={__history:[],add:Ri,remove:Ri,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=Et.is;if(e!==!0&&n!==!0)return;const s=t.config[e===!0?"cordova":"capacitor"];if(s!==void 0&&s.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=jf),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=Ry(Object.assign({backButtonExit:!0},s)),r=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",r,!1)}):window.Capacitor.Plugins.App.addListener("backButton",r)}},xu={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Ou(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const tn=wo({__qLang:{}},{getLocale:Ou,set(t=xu,e){const n={...t,rtl:t.rtl===!0,getLocale:Ou};{if(n.set=tn.set,tn.__langConfig===void 0||tn.__langConfig.noHtmlAttrs!==!0){const s=document.documentElement;s.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),s.setAttribute("lang",n.isoName)}Object.assign(tn.__qLang,n)}},install({$q:t,lang:e,ssrContext:n}){t.lang=tn.__qLang,tn.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(s){return Reflect.ownKeys(s).filter(i=>i!=="set"&&i!=="getLocale")}}),this.set(e||xu))}});var Py={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const Dr=wo({iconMapFn:null,__qIconSet:{}},{set(t,e){const n={...t};n.set=Dr.set,Object.assign(Dr.__qIconSet,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__qIconSet,Ul(t,"iconMapFn",()=>this.iconMapFn,s=>{this.iconMapFn=s}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(s){return Reflect.ownKeys(s).filter(i=>i!=="set")}}),this.set(e||Py))}}),Ay="_q_",ik="_q_l_",rk="_q_pc_",ok="_q_fo_",ak="_q_tabs_";function lk(){}const Mr={};let Wf=!1;function Ny(){Wf=!0}function ea(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,s;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(s=n;s--!==0;)if(ea(t[s],e[s])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let r=t.entries();for(s=r.next();s.done!==!0;){if(e.has(s.value[0])!==!0)return!1;s=r.next()}for(r=t.entries(),s=r.next();s.done!==!0;){if(ea(s.value[1],e.get(s.value[0]))!==!0)return!1;s=r.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const r=t.entries();for(s=r.next();s.done!==!0;){if(e.has(s.value[0])!==!0)return!1;s=r.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(s=n;s--!==0;)if(t[s]!==e[s])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t).filter(r=>t[r]!==void 0);if(n=i.length,n!==Object.keys(e).filter(r=>e[r]!==void 0).length)return!1;for(s=n;s--!==0;){const r=i[s];if(ea(t[r],e[r])!==!0)return!1}return!0}return t!==t&&e!==e}function ki(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}const Lu=[Da,Iy,$e,my,ky,tn,Dr];function xy(t,e){const n=Ff(t);n.config.globalProperties=e.config.globalProperties;const{reload:s,...i}=e._context;return Object.assign(n._context,i),n}function Du(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function Oy(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(Ay,n.$q),Du(n,Lu),e.components!==void 0&&Object.values(e.components).forEach(s=>{ki(s)===!0&&s.name!==void 0&&t.component(s.name,s)}),e.directives!==void 0&&Object.values(e.directives).forEach(s=>{ki(s)===!0&&s.name!==void 0&&t.directive(s.name,s)}),e.plugins!==void 0&&Du(n,Object.values(e.plugins).filter(s=>typeof s.install=="function"&&Lu.includes(s)===!1)),Wn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(s=>{s()}),n.$q.onSSRHydrated=()=>{}})}var Ly=function(t,e={}){const n={version:"2.16.4"};Wf===!1?(e.config!==void 0&&Object.assign(Mr,e.config),n.config={...Mr},Ny()):n.config=e.config||{},Oy(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},Dy={name:"Quasar",version:"2.16.4",install:Ly,lang:tn,iconSet:Dr},My=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Vf;const Eo=t=>Vf=t,qf=Symbol();function Ua(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var fi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fi||(fi={}));function Fy(){const t=kh(!0),e=t.run(()=>Hn({}));let n=[],s=[];const i=ts({install(r){Eo(i),i._a=r,r.provide(qf,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!My?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const zf=()=>{};function Mu(t,e,n,s=zf){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Ph()&&q_(i),i}function cs(t,...e){t.slice().forEach(n=>{n(...e)})}const Uy=t=>t();function $a(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Ua(i)&&Ua(s)&&t.hasOwnProperty(n)&&!Ae(s)&&!Un(s)?t[n]=$a(i,s):t[n]=s}return t}const $y=Symbol();function By(t){return!Ua(t)||!t.hasOwnProperty($y)}const{assign:Jt}=Object;function Hy(t){return!!(Ae(t)&&t.effect)}function jy(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=_m(n.state.value[t]);return Jt(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=ts(X(()=>{Eo(n);const p=n._s.get(t);return o[h].call(p,p)})),d),{}))}return l=Kf(t,c,e,n,s,!0),l}function Kf(t,e,n={},s,i,r){let o;const a=Jt({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],p;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),Hn({});let v;function I(H){let P;c=u=!1,typeof H=="function"?(H(s.state.value[t]),P={type:fi.patchFunction,storeId:t,events:p}):($a(s.state.value[t],H),P={type:fi.patchObject,payload:H,storeId:t,events:p});const V=v=Symbol();Pl().then(()=>{v===V&&(c=!0)}),u=!0,cs(d,P,s.state.value[t])}const L=r?function(){const{state:P}=n,V=P?P():{};this.$patch(G=>{Jt(G,V)})}:zf;function w(){o.stop(),d=[],h=[],s._s.delete(t)}function E(H,P){return function(){Eo(s);const V=Array.from(arguments),G=[],F=[];function ne(te){G.push(te)}function U(te){F.push(te)}cs(h,{args:V,name:H,store:O,after:ne,onError:U});let se;try{se=P.apply(this&&this.$id===t?this:O,V)}catch(te){throw cs(F,te),te}return se instanceof Promise?se.then(te=>(cs(G,te),te)).catch(te=>(cs(F,te),Promise.reject(te))):(cs(G,se),se)}}const k={_p:s,$id:t,$onAction:Mu.bind(null,h),$patch:I,$reset:L,$subscribe(H,P={}){const V=Mu(d,H,P.detached,()=>G()),G=o.run(()=>Cs(()=>s.state.value[t],F=>{(P.flush==="sync"?u:c)&&H({storeId:t,type:fi.direct,events:p},F)},Jt({},l,P)));return V},$dispose:w},O=es(k);s._s.set(t,O);const W=(s._a&&s._a.runWithContext||Uy)(()=>s._e.run(()=>(o=kh()).run(e)));for(const H in W){const P=W[H];if(Ae(P)&&!Hy(P)||Un(P))r||(_&&By(P)&&(Ae(P)?P.value=_[H]:$a(P,_[H])),s.state.value[t][H]=P);else if(typeof P=="function"){const V=E(H,P);W[H]=V,a.actions[H]=P}}return Jt(O,W),Jt(le(O),W),Object.defineProperty(O,"$state",{get:()=>s.state.value[t],set:H=>{I(P=>{Jt(P,H)})}}),s._p.forEach(H=>{Jt(O,o.run(()=>H({store:O,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(O.$state,_),c=!0,u=!0,O}function Wy(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Gm();return a=a||(c?ot(qf,null):null),a&&Eo(a),a=Vf,a._s.has(s)||(r?Kf(s,e,i,a):jy(s,i,a)),a._s.get(s)}return o.$id=s,o}/**
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
 */const Gf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw js(e)},js=function(t){return new Error("Firebase Database ("+Gf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Yf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),s.push(n[u],n[d],n[h],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new qy;const h=r<<2|a>>4;if(s.push(h),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const _=c<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qf=function(t){const e=Yf(t);return $l.encodeByteArray(e,!0)},Fr=function(t){return Qf(t).replace(/\./g,"")},Ur=function(t){try{return $l.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zy(t){return Jf(void 0,t)}function Jf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ky(n)||(t[n]=Jf(t[n],e[n]));return t}function Ky(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Gy(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Yy=()=>Gy().__FIREBASE_DEFAULTS__,Qy=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jy=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ur(t[1]);return e&&JSON.parse(e)},Bl=()=>{try{return Yy()||Qy()||Jy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xf=t=>{var e,n;return(n=(e=Bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xy=t=>{const e=Xf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Zf=()=>{var t;return(t=Bl())===null||t===void 0?void 0:t.config},ep=t=>{var e;return(e=Bl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class qi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Zy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fr(JSON.stringify(n)),Fr(JSON.stringify(o)),a].join(".")}/**
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
 */function He(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hl(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function eb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tb(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function np(){return Gf.NODE_ADMIN===!0}function nb(){try{return typeof indexedDB=="object"}catch{return!1}}function sb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const ib="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ib,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?rb(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,a,s)}}function rb(t,e){return t.replace(ob,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ob=/\{\$([^}]+)}/g;/**
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
 */function Pi(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
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
 */const sp=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Pi(Ur(r[0])||""),n=Pi(Ur(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ab=function(t){const e=sp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lb=function(t){const e=sp(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ns(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ba(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Fu(r)&&Fu(o)){if(!Br(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Fu(t){return t!==null&&typeof t=="object"}/**
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
 */function Ws(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class cb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ub(t,e){const n=new db(t,e);return n.subscribe.bind(n)}class db{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ta),i.error===void 0&&(i.error=ta),i.complete===void 0&&(i.complete=ta);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ta(){}function Co(t,e){return`${t} failed: ${e} argument `}/**
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
 */const fb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Io=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nn="[DEFAULT]";/**
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
 */class pb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new qi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_b(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gb(t){return t===Nn?void 0:t}function _b(t){return t.instantiationMode==="EAGER"}/**
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
 */class mb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const vb={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},yb=_e.INFO,bb={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},wb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=bb[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jl{constructor(e){this.name=e,this._logLevel=yb,this._logHandler=wb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const Eb=(t,e)=>e.some(n=>t instanceof n);let Uu,$u;function Cb(){return Uu||(Uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ib(){return $u||($u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ip=new WeakMap,Ha=new WeakMap,rp=new WeakMap,na=new WeakMap,Wl=new WeakMap;function Sb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(fn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ip.set(n,t)}).catch(()=>{}),Wl.set(e,t),e}function Tb(t){if(Ha.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ha.set(t,e)}let ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ha.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rb(t){ja=t(ja)}function kb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(sa(this),e,...n);return rp.set(s,e.sort?e.sort():[e]),fn(s)}:Ib().includes(t)?function(...e){return t.apply(sa(this),e),fn(ip.get(this))}:function(...e){return fn(t.apply(sa(this),e))}}function Pb(t){return typeof t=="function"?kb(t):(t instanceof IDBTransaction&&Tb(t),Eb(t,Cb())?new Proxy(t,ja):t)}function fn(t){if(t instanceof IDBRequest)return Sb(t);if(na.has(t))return na.get(t);const e=Pb(t);return e!==t&&(na.set(t,e),Wl.set(e,t)),e}const sa=t=>Wl.get(t);function Ab(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=fn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(fn(o.result),l.oldVersion,l.newVersion,fn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Nb=["get","getKey","getAll","getAllKeys","count"],xb=["put","add","delete","clear"],ia=new Map;function Bu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ia.get(e))return ia.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=xb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Nb.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ia.set(e,r),r}Rb(t=>({...t,get:(e,n,s)=>Bu(e,n)||t.get(e,n,s),has:(e,n)=>!!Bu(e,n)||t.has(e,n)}));/**
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
 */class Ob{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Lb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wa="@firebase/app",Hu="0.10.5";/**
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
 */const zn=new jl("@firebase/app"),Db="@firebase/app-compat",Mb="@firebase/analytics-compat",Fb="@firebase/analytics",Ub="@firebase/app-check-compat",$b="@firebase/app-check",Bb="@firebase/auth",Hb="@firebase/auth-compat",jb="@firebase/database",Wb="@firebase/database-compat",Vb="@firebase/functions",qb="@firebase/functions-compat",zb="@firebase/installations",Kb="@firebase/installations-compat",Gb="@firebase/messaging",Yb="@firebase/messaging-compat",Qb="@firebase/performance",Jb="@firebase/performance-compat",Xb="@firebase/remote-config",Zb="@firebase/remote-config-compat",ew="@firebase/storage",tw="@firebase/storage-compat",nw="@firebase/firestore",sw="@firebase/vertexai-preview",iw="@firebase/firestore-compat",rw="firebase",ow="10.12.2";/**
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
 */const Va="[DEFAULT]",aw={[Wa]:"fire-core",[Db]:"fire-core-compat",[Fb]:"fire-analytics",[Mb]:"fire-analytics-compat",[$b]:"fire-app-check",[Ub]:"fire-app-check-compat",[Bb]:"fire-auth",[Hb]:"fire-auth-compat",[jb]:"fire-rtdb",[Wb]:"fire-rtdb-compat",[Vb]:"fire-fn",[qb]:"fire-fn-compat",[zb]:"fire-iid",[Kb]:"fire-iid-compat",[Gb]:"fire-fcm",[Yb]:"fire-fcm-compat",[Qb]:"fire-perf",[Jb]:"fire-perf-compat",[Xb]:"fire-rc",[Zb]:"fire-rc-compat",[ew]:"fire-gcs",[tw]:"fire-gcs-compat",[nw]:"fire-fst",[iw]:"fire-fst-compat",[sw]:"fire-vertex","fire-js":"fire-js",[rw]:"fire-js-all"};/**
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
 */const Hr=new Map,lw=new Map,qa=new Map;function ju(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xs(t){const e=t.name;if(qa.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,t);for(const n of Hr.values())ju(n,t);for(const n of lw.values())ju(n,t);return!0}function Vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wt(t){return t.settings!==void 0}/**
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
 */const cw={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},pn=new zi("app","Firebase",cw);/**
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
 */class uw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=ow;function op(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Va,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(n||(n=Zf()),!n)throw pn.create("no-options");const r=Hr.get(i);if(r){if(Br(n,r.options)&&Br(s,r.config))return r;throw pn.create("duplicate-app",{appName:i})}const o=new mb(i);for(const l of qa.values())o.addComponent(l);const a=new uw(n,s,o);return Hr.set(i,a),a}function ap(t=Va){const e=Hr.get(t);if(!e&&t===Va&&Zf())return op();if(!e)throw pn.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let i=(s=aw[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(a.join(" "));return}xs(new qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const dw="firebase-heartbeat-database",hw=1,Ai="firebase-heartbeat-store";let ra=null;function lp(){return ra||(ra=Ab(dw,hw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ai)}catch(n){console.warn(n)}}}}).catch(t=>{throw pn.create("idb-open",{originalErrorMessage:t.message})})),ra}async function fw(t){try{const n=(await lp()).transaction(Ai),s=await n.objectStore(Ai).get(cp(t));return await n.done,s}catch(e){if(e instanceof Sn)zn.warn(e.message);else{const n=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Wu(t,e){try{const s=(await lp()).transaction(Ai,"readwrite");await s.objectStore(Ai).put(e,cp(t)),await s.done}catch(n){if(n instanceof Sn)zn.warn(n.message);else{const s=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(s.message)}}}function cp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const pw=1024,gw=30*24*60*60*1e3;class _w{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vu(),{heartbeatsToSend:s,unsentEntries:i}=mw(this._heartbeatsCache.heartbeats),r=Fr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vu(){return new Date().toISOString().substring(0,10)}function mw(t,e=pw){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nb()?sb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qu(t){return Fr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yw(t){xs(new qn("platform-logger",e=>new Ob(e),"PRIVATE")),xs(new qn("heartbeat",e=>new _w(e),"PRIVATE")),gn(Wa,Hu,t),gn(Wa,Hu,"esm2017"),gn("fire-js","")}yw("");var bw="firebase",ww="10.12.2";/**
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
 */gn(bw,ww,"app");const zu="@firebase/database",Ku="1.0.5";/**
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
 */let up="";function Ew(t){up=t}/**
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
 */class Cw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Pi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Iw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const dp=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Cw(e)}}catch{}return new Iw},Dn=dp("localStorage"),za=dp("sessionStorage");/**
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
 */const Is=new jl("@firebase/database"),Sw=function(){let t=1;return function(){return t++}}(),hp=function(t){const e=fb(t),n=new cb;n.update(e);const s=n.digest();return $l.encodeByteArray(s)},Ki=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ki.apply(null,s):typeof s=="object"?e+=Pe(s):e+=s,e+=" "}return e};let Bn=null,Gu=!0;const Tw=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Is.logLevel=_e.VERBOSE,Bn=Is.log.bind(Is),e&&za.set("logging_enabled",!0)):typeof t=="function"?Bn=t:(Bn=null,za.remove("logging_enabled"))},Me=function(...t){if(Gu===!0&&(Gu=!1,Bn===null&&za.get("logging_enabled")===!0&&Tw(!0)),Bn){const e=Ki.apply(null,t);Bn(e)}},Gi=function(t){return function(...e){Me(t,...e)}},Ka=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ki(...t);Is.error(e)},Ht=function(...t){const e=`FIREBASE FATAL ERROR: ${Ki(...t)}`;throw Is.error(e),new Error(e)},qe=function(...t){const e="FIREBASE WARNING: "+Ki(...t);Is.warn(e)},Rw=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ql=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Os="[MIN_NAME]",Kn="[MAX_NAME]",ns=function(t,e){if(t===e)return 0;if(t===Os||e===Kn)return-1;if(e===Os||t===Kn)return 1;{const n=Yu(t),s=Yu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Pw=function(t,e){return t===e?0:t<e?-1:1},Js=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},zl=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Pe(e[s]),n+=":",n+=zl(t[e[s]]);return n+="}",n},fp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pp=function(t){T(!ql(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Aw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Nw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Ow=new RegExp("^-?(0*)\\d{1,10}$"),Lw=-2147483648,Dw=2147483647,Yu=function(t){if(Ow.test(t)){const e=Number(t);if(e>=Lw&&e<=Dw)return e}return null},qs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Mw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Fw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Uw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qe(e)}}class Ss{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ss.OWNER="owner";/**
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
 */const Kl="5",gp="v",_p="s",mp="r",vp="f",yp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bp="ls",wp="p",Ga="ac",Ep="websocket",Cp="long_polling";/**
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
 */class Ip{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $w(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Sp(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Ep)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$w(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Bw{constructor(){this.counters_={}}incrementCounter(e,n=1){Tt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zy(this.counters_)}}/**
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
 */const oa={},aa={};function Gl(t){const e=t.toString();return oa[e]||(oa[e]=new Bw),oa[e]}function Hw(t,e){const n=t.toString();return aa[n]||(aa[n]=e()),aa[n]}/**
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
 */class jw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&qs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Qu="start",Ww="close",Vw="pLPCommand",qw="pRTLPCB",Tp="id",Rp="pw",kp="ser",zw="cb",Kw="seg",Gw="ts",Yw="d",Qw="dframe",Pp=1870,Ap=30,Jw=Pp-Ap,Xw=25e3,Zw=3e4;class ms{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gi(e),this.stats_=Gl(n),this.urlFn=l=>(this.appCheckToken&&(l[Ga]=this.appCheckToken),Sp(n,Cp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Zw)),kw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qu)this.id=a,this.password=l;else if(o===Ww)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Qu]="t",s[kp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[zw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gp]=Kl,this.transportSessionId&&(s[_p]=this.transportSessionId),this.lastSessionId&&(s[bp]=this.lastSessionId),this.applicationId&&(s[wp]=this.applicationId),this.appCheckToken&&(s[Ga]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&yp.test(location.hostname)&&(s[mp]=vp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ms.forceAllow_=!0}static forceDisallow(){ms.forceDisallow_=!0}static isAvailable(){return ms.forceAllow_?!0:!ms.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Aw()&&!Nw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qf(n),i=fp(s,Jw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Qw]="t",s[Tp]=e,s[Rp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Yl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Sw(),window[Vw+this.uniqueCallbackIdentifier]=e,window[qw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Yl.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Me("frame writing exception"),a.stack&&Me(a.stack),Me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tp]=this.myID,e[Rp]=this.myPW,e[kp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ap+s.length<=Pp;){const o=this.pendingSegs.shift();s=s+"&"+Kw+i+"="+o.seg+"&"+Gw+i+"="+o.ts+"&"+Yw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Xw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const eE=16384,tE=45e3;let jr=null;typeof MozWebSocket!="undefined"?jr=MozWebSocket:typeof WebSocket!="undefined"&&(jr=WebSocket);class dt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gi(this.connId),this.stats_=Gl(n),this.connURL=dt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[gp]=Kl,typeof location!="undefined"&&location.hostname&&yp.test(location.hostname)&&(o[mp]=vp),n&&(o[_p]=n),s&&(o[bp]=s),i&&(o[Ga]=i),r&&(o[wp]=r),Sp(e,Ep,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dn.set("previous_websocket_failure",!0);try{let s;np(),this.mySock=new jr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&jr!==null&&!dt.forceDisallow_}static previouslyFailed(){return Dn.isInMemoryStorage||Dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Pi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=fp(n,eE);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
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
 */class Ni{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ms,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let s=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[dt];else{const i=this.transports_=[];for(const r of Ni.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ni.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ni.globalTransportInitialized_=!1;/**
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
 */const nE=6e4,sE=5e3,iE=10*1024,rE=100*1024,la="t",Ju="d",oE="s",Xu="r",aE="e",Zu="o",ed="a",td="n",nd="p",lE="h";class cE{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gi("c:"+this.id+":"),this.transportManager_=new Ni(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(la in e){const n=e[la];n===ed?this.upgradeIfSecondaryHealthy_():n===Xu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Js("t",e),s=Js("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ed,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:td,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Js("t",e),s=Js("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Js(la,e);if(Ju in e){const s=e[Ju];if(n===lE){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===td){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oE?this.onConnectionShutdown_(s):n===Xu?this.onReset_(s):n===aE?Ka("Server Error: "+s):n===Zu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ka("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kl!==s&&qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Np{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class xp{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Wr extends xp{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Hl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const sd=32,id=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new me("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new me(t.pieces_,e)}function Ql(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Op(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new me(e,0)}function Ie(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new me(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function Ve(t,e){const n=ie(t),s=ie(e);if(n===null)return e;if(n===s)return Ve(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dE(t,e){const n=xi(t,0),s=xi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=ns(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Jl(t,e){if(yn(t)!==yn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function it(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(yn(t)>yn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class hE{constructor(e,n){this.errorPrefix_=n,this.parts_=xi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Io(this.parts_[s]);Lp(this)}}function fE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Io(e),Lp(t)}function pE(t){const e=t.parts_.pop();t.byteLength_-=Io(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lp(t){if(t.byteLength_>id)throw new Error(t.errorPrefix_+"has a key path longer than "+id+" bytes ("+t.byteLength_+").");if(t.parts_.length>sd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sd+") or object contains a cycle "+xn(t))}function xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Xl extends xp{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Xl}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xs=1e3,gE=60*5*1e3,rd=30*1e3,_E=1.3,mE=3e4,vE="server_kill",od=3;class Ut extends Np{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ut.nextPersistentConnectionId_++,this.log_=Gi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xs,this.maxReconnectDelay_=gE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!np())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Pe(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new qi,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ut.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tt(e,"w")){const s=Ns(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ab(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ka("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mE&&(this.reconnectDelay_=Xs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_E)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ut.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new cE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{qe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(vE)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&qe(d),l())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ba(this.interruptReasons_)&&(this.reconnectDelay_=Xs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>zl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new me(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=od&&(this.reconnectDelay_=rd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=od&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+up.replace(/\./g,"-")]=1,Hl()?e["framework.cordova"]=1:tp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wr.getInstance().currentlyOnline();return Ba(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0;Ut.nextConnectionId_=0;/**
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
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
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
 */class So{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new re(Os,e),i=new re(Os,n);return this.compare(s,i)!==0}minPost(){return re.MIN}}/**
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
 */let fr;class Dp extends So{static get __EMPTY_NODE(){return fr}static set __EMPTY_NODE(e){fr=e}compare(e,n){return ns(e.name,n.name)}isDefinedOn(e){throw js("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(Kn,fr)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,fr)}toString(){return".key"}}const Ts=new Dp;/**
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
 */class pr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Le.RED,this.left=i!=null?i:Ye.EMPTY_NODE,this.right=r!=null?r:Ye.EMPTY_NODE}copy(e,n,s,i,r){return new Le(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class yE{copy(e,n,s,i,r){return this}insert(e,n,s){return new Le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,n=Ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pr(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new yE;/**
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
 */function bE(t,e){return ns(t.name,e.name)}function Zl(t,e){return ns(t,e)}/**
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
 */let Ya;function wE(t){Ya=t}const Mp=function(t){return typeof t=="number"?"number:"+pp(t):"string:"+t},Fp=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tt(e,".sv"),"Priority must be a string or number.")}else T(t===Ya||t.isEmpty(),"priority of unexpected type.");T(t===Ya||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ad;class Oe{constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fp(this.priorityNode_)}static set __childrenNodeConstructor(e){ad=e}static get __childrenNodeConstructor(){return ad}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:ie(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||yn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pp(this.value_):e+=this.value_,this.lazyHash_=hp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Oe.VALUE_TYPE_ORDER.indexOf(n),r=Oe.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Up,$p;function EE(t){Up=t}function CE(t){$p=t}class IE extends So{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ns(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Kn,new Oe("[PRIORITY-POST]",$p))}makePost(e,n){const s=Up(e);return new re(n,new Oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Se=new IE;/**
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
 */const SE=Math.log(2);class TE{constructor(e){const n=r=>parseInt(Math.log(r)/SE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Le(h,d.node,Le.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=i(l,p),v=i(p+1,c);return d=t[p],h=n?n(d):d,new Le(h,d.node,Le.BLACK,_,v)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,v){const I=d-_,L=d;d-=_;const w=i(I+1,L),E=t[I],k=n?n(E):E;p(new Le(k,E.node,v,null,w))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),I=Math.pow(2,l.count-(_+1));v?h(I,Le.BLACK):(h(I,Le.BLACK),h(I,Le.RED))}return u},o=new TE(t.length),a=r(o);return new Ye(s||e,a)};/**
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
 */let ca;const us={};class Ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(us&&Se,"ChildrenNode.ts has not been loaded"),ca=ca||new Ot({".priority":us},{".priority":Se}),ca}get(e){const n=Ns(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ye?n:null}hasIndex(e){return Tt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Ts,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(re.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Vr(s,e.getCompare()):a=us;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ot(u,c)}addToIndexes(e,n){const s=$r(this.indexes_,(i,r)=>{const o=Ns(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===us)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(re.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Vr(a,o.getCompare())}else return us;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new re(e.name,a))),l.insert(e,e.node)}});return new Ot(s,this.indexSet_)}removeFromIndexes(e,n){const s=$r(this.indexes_,i=>{if(i===us)return i;{const r=n.get(e.name);return r?i.remove(new re(e.name,r)):i}});return new Ot(s,this.indexSet_)}}/**
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
 */let Zs;class Y{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Fp(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zs||(Zs=new Y(new Ye(Zl),null,Ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zs}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zs:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new re(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Zs:this.priorityNode_;return new Y(i,o,r)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{T(ie(e)!==".priority"||yn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),s++,r&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mp(this.getPriority().val())+":"),this.forEachChild(Se,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":hp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new re(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yi?-1:0}withIndex(e){if(e===Ts||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ts||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Se),i=n.getIterator(Se);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ts?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RE extends Y{constructor(){super(new Ye(Zl),Y.EMPTY_NODE,Ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Yi=new RE;Object.defineProperties(re,{MIN:{value:new re(Os,Y.EMPTY_NODE)},MAX:{value:new re(Kn,Yi)}});Dp.__EMPTY_NODE=Y.EMPTY_NODE;Oe.__childrenNodeConstructor=Y;wE(Yi);CE(Yi);/**
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
 */const kE=!0;function ke(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,ke(e))}if(!(t instanceof Array)&&kE){const n=[];let s=!1;if(Fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ke(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new re(o,l)))}}),n.length===0)return Y.EMPTY_NODE;const r=Vr(n,bE,o=>o.name,Zl);if(s){const o=Vr(n,Se.getCompare());return new Y(r,ke(e),new Ot({".priority":o},{".priority":Se}))}else return new Y(r,ke(e),Ot.Default)}else{let n=Y.EMPTY_NODE;return Fe(t,(s,i)=>{if(Tt(t,s)&&s.substring(0,1)!=="."){const r=ke(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ke(e))}}EE(ke);/**
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
 */class PE extends So{constructor(e){super(),this.indexPath_=e,T(!ae(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ns(e.name,n.name):r}makePost(e,n){const s=ke(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,s);return new re(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Yi);return new re(Kn,e)}toString(){return xi(this.indexPath_,0).join("/")}}/**
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
 */class AE extends So{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ns(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const s=ke(e);return new re(n,s)}toString(){return".value"}}const NE=new AE;/**
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
 */function Bp(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Oi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Li(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ec{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Oi(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,s)):o.trackChildChange(Li(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,r)=>{n.hasChild(i)||s.trackChildChange(Oi(i,r))}),n.isLeafNode()||n.forEachChild(Se,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Li(i,r,o))}else s.trackChildChange(Ls(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Di{constructor(e){this.indexedFilter_=new ec(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Di.getStartPost_(e),this.endPost_=Di.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new re(n,s))||(s=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const r=this;return n.forEachChild(Se,(o,a)=>{r.matches(new re(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class OE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Di(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new re(n,s))||(s=Y.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new re(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Li(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Oi(n,d));const v=a.updateImmediateChild(n,Y.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ls(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Oi(c.name,c.node)),r.trackChildChange(Ls(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
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
 */class tc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Os}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new tc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function LE(t){return t.loadsAllData()?new ec(t.getIndex()):t.hasLimit()?new OE(t):new Di(t)}function ld(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===NE?n="$value":t.index_===Ts?n="$key":(T(t.index_ instanceof PE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
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
 */class qr extends Np{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Gi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=qr.getListenId_(e,s),a={};this.listens_[o]=a;const l=ld(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Ns(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=qr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ld(e._queryParams),s=e._path.toString(),i=new qi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ws(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Pi(a.responseText)}catch{qe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&qe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class DE{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function zr(){return{value:null,children:new Map}}function Hp(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ie(e);t.children.has(s)||t.children.set(s,zr());const i=t.children.get(s);e=ye(e),Hp(i,e,n)}}function Qa(t,e,n){t.value!==null?n(e,t.value):ME(t,(s,i)=>{const r=new me(e.toString()+"/"+s);Qa(i,r,n)})}function ME(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class FE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const ud=10*1e3,UE=30*1e3,$E=5*60*1e3;class BE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FE(e);const s=ud+(UE-ud)*Math.random();pi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&Tt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*$E))}}/**
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
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function nc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ic(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Kr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ft.ACK_USER_WRITE,this.source=nc()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new Kr(ue(),n,this.revert)}}else return T(ie(this.path)===e,"operationForChild called for unrelated child."),new Kr(ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class Mi{constructor(e,n){this.source=e,this.path=n,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new Mi(this.source,ue()):new Mi(this.source,ye(this.path))}}/**
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
 */class Gn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ft.OVERWRITE}operationForChild(e){return ae(this.path)?new Gn(this.source,ue(),this.snap.getImmediateChild(e)):new Gn(this.source,ye(this.path),this.snap)}}/**
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
 */class Ds{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ft.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new Gn(this.source,ue(),n.value):new Ds(this.source,ue(),n)}else return T(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ds(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class bn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class HE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xE(o.childName,o.snapshotNode))}),ei(t,i,"child_removed",e,s,n),ei(t,i,"child_added",e,s,n),ei(t,i,"child_moved",r,s,n),ei(t,i,"child_changed",e,s,n),ei(t,i,"value",e,s,n),i}function ei(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>VE(t,a,l)),o.forEach(a=>{const l=WE(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function WE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VE(t,e,n){if(e.childName==null||n.childName==null)throw js("Should only compare child_ events.");const s=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function To(t,e){return{eventCache:t,serverCache:e}}function gi(t,e,n,s){return To(new bn(e,n,s),t.serverCache)}function jp(t,e,n,s){return To(t.eventCache,new bn(e,n,s))}function Gr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ua;const qE=()=>(ua||(ua=new Ye(Pw)),ua);class ve{constructor(e,n=qE()){this.value=e,this.children=n}static fromObject(e){let n=new ve(null);return Fe(e,(s,i)=>{n=n.set(new me(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(ae(e))return null;{const s=ie(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:Ie(new me(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new ve(null)}}set(e,n){if(ae(e))return new ve(n,this.children);{const s=ie(e),r=(this.children.get(s)||new ve(null)).set(ye(e),n),o=this.children.insert(s,r);return new ve(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ve(null):new ve(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(ae(e))return n;{const s=ie(e),r=(this.children.get(s)||new ve(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ve(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ie(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ae(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),Ie(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const i=ie(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),Ie(n,i),s):new ve(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new ve(null))}}function _i(t,e,n){if(ae(e))return new pt(new ve(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ve(i,e);return r=r.updateChild(o,n),new pt(t.writeTree_.set(i,r))}else{const i=new ve(n),r=t.writeTree_.setTree(e,i);return new pt(r)}}}function Ja(t,e,n){let s=t;return Fe(n,(i,r)=>{s=_i(s,Ie(e,i),r)}),s}function dd(t,e){if(ae(e))return pt.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new pt(n)}}function Xa(t,e){return ss(t,e)!=null}function ss(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ve(n.path,e)):null}function hd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(s,i)=>{e.push(new re(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new re(s,i.value))}),e}function _n(t,e){if(ae(e))return t;{const n=ss(t,e);return n!=null?new pt(new ve(n)):new pt(t.writeTree_.subtree(e))}}function Za(t){return t.writeTree_.isEmpty()}function Ms(t,e){return Wp(ue(),t.writeTree_,e)}function Wp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Wp(Ie(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ie(t,".priority"),s)),n}}/**
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
 */function Ro(t,e){return Kp(e,t)}function zE(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=_i(t.visibleWrites,e,n)),t.lastWriteId=s}function KE(t,e,n,s){T(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Ja(t.visibleWrites,e,n),t.lastWriteId=s}function GE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function YE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&QE(a,s.path)?i=!1:it(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return JE(t),!0;if(s.snap)t.visibleWrites=dd(t.visibleWrites,s.path);else{const a=s.children;Fe(a,l=>{t.visibleWrites=dd(t.visibleWrites,Ie(s.path,l))})}return!0}else return!1}function QE(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(Ie(t.path,n),e))return!0;return!1}function JE(t){t.visibleWrites=Vp(t.allWrites,XE,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function XE(t){return t.visible}function Vp(t,e,n){let s=pt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)it(n,o)?(a=Ve(n,o),s=_i(s,a,r.snap)):it(o,n)&&(a=Ve(o,n),s=_i(s,ue(),r.snap.getChild(a)));else if(r.children){if(it(n,o))a=Ve(n,o),s=Ja(s,a,r.children);else if(it(o,n))if(a=Ve(o,n),ae(a))s=Ja(s,ue(),r.children);else{const l=Ns(r.children,ie(a));if(l){const c=l.getChild(ye(a));s=_i(s,ue(),c)}}}else throw js("WriteRecord should have .snap or .children")}}return s}function qp(t,e,n,s,i){if(!s&&!i){const r=ss(t.visibleWrites,e);if(r!=null)return r;{const o=_n(t.visibleWrites,e);if(Za(o))return n;if(n==null&&!Xa(o,ue()))return null;{const a=n||Y.EMPTY_NODE;return Ms(o,a)}}}else{const r=_n(t.visibleWrites,e);if(!i&&Za(r))return n;if(!i&&n==null&&!Xa(r,ue()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(it(c.path,e)||it(e,c.path))},a=Vp(t.allWrites,o,e),l=n||Y.EMPTY_NODE;return Ms(a,l)}}}function ZE(t,e,n){let s=Y.EMPTY_NODE;const i=ss(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=_n(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const l=Ms(_n(r,new me(o)),a);s=s.updateImmediateChild(o,l)}),hd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=_n(t.visibleWrites,e);return hd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function eC(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ie(e,n);if(Xa(t.visibleWrites,r))return null;{const o=_n(t.visibleWrites,r);return Za(o)?i.getChild(n):Ms(o,i.getChild(n))}}function tC(t,e,n,s){const i=Ie(e,n),r=ss(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=_n(t.visibleWrites,i);return Ms(o,s.getNode().getImmediateChild(n))}else return null}function nC(t,e){return ss(t.visibleWrites,e)}function sC(t,e,n,s,i,r,o){let a;const l=_n(t.visibleWrites,e),c=ss(l,ue());if(c!=null)a=c;else if(n!=null)a=Ms(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=h.getNext();for(;p&&u.length<i;)d(p,s)!==0&&u.push(p),p=h.getNext();return u}else return[]}function iC(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function Yr(t,e,n,s){return qp(t.writeTree,t.treePath,e,n,s)}function rc(t,e){return ZE(t.writeTree,t.treePath,e)}function fd(t,e,n,s){return eC(t.writeTree,t.treePath,e,n,s)}function Qr(t,e){return nC(t.writeTree,Ie(t.treePath,e))}function rC(t,e,n,s,i,r){return sC(t.writeTree,t.treePath,e,n,s,i,r)}function oc(t,e,n){return tC(t.writeTree,t.treePath,e,n)}function zp(t,e){return Kp(Ie(t.treePath,e),t.writeTree)}function Kp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class oC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Li(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Oi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ls(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Li(s,e.snapshotNode,i.oldSnap));else throw js("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class aC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Gp=new aC;class ac{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new bn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yn(this.viewCache_),r=rC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function lC(t){return{filter:t}}function cC(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function uC(t,e,n,s,i){const r=new oC;let o,a;if(n.type===ft.OVERWRITE){const c=n;c.source.fromUser?o=el(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=Jr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ft.MERGE){const c=n;c.source.fromUser?o=hC(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=tl(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ft.ACK_USER_WRITE){const c=n;c.revert?o=gC(t,e,c.path,s,i,r):o=fC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ft.LISTEN_COMPLETE)o=pC(t,e,n.path,s,r);else throw js("Unknown operation type: "+n.type);const l=r.getChanges();return dC(e,o,l),{viewCache:o,changes:l}}function dC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Gr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Bp(Gr(e)))}}function Yp(t,e,n,s,i,r){const o=e.eventCache;if(Qr(s,n)!=null)return e;{let a,l;if(ae(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Yn(e),u=c instanceof Y?c:Y.EMPTY_NODE,d=rc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Yr(s,Yn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ie(n);if(c===".priority"){T(yn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=fd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ye(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=fd(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=oc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return gi(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function Jr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=ie(n);if(!l.isCompleteForPath(n)&&yn(n)>1)return e;const _=ye(n),I=l.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=u.updatePriority(l.getNode(),I):c=u.updateChild(l.getNode(),p,I,_,Gp,null)}const d=jp(e,c,l.isFullyInitialized()||ae(n),u.filtersNodes()),h=new ac(i,d,r);return Yp(t,d,n,i,h,a)}function el(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ac(i,e,r);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=gi(e,c,!0,t.filter.filtersNodes());else{const d=ie(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=gi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ye(n),p=a.getNode().getImmediateChild(d);let _;if(ae(h))_=s;else{const v=u.getCompleteChild(d);v!=null?Ql(h)===".priority"&&v.getChild(Op(h)).isEmpty()?_=v:_=v.updateChild(h,s):_=Y.EMPTY_NODE}if(p.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=gi(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pd(t,e){return t.eventCache.isCompleteForChild(e)}function hC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ie(n,l);pd(e,ie(u))&&(a=el(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ie(n,l);pd(e,ie(u))||(a=el(t,a,u,c,i,r,o))}),a}function gd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function tl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ae(n)?c=s:c=new ve(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),_=gd(t,p,h);l=Jr(t,l,new me(d),_,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!p){const _=e.serverCache.getNode().getImmediateChild(d),v=gd(t,_,h);l=Jr(t,l,new me(d),v,i,r,o,a)}}),l}function fC(t,e,n,s,i,r,o){if(Qr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ae(n)){let c=new ve(null);return l.getNode().forEachChild(Ts,(u,d)=>{c=c.set(new me(u),d)}),tl(t,e,n,c,i,r,a,o)}else return e}else{let c=new ve(null);return s.foreach((u,d)=>{const h=Ie(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),tl(t,e,n,c,i,r,a,o)}}function pC(t,e,n,s,i){const r=e.serverCache,o=jp(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return Yp(t,o,n,s,Gp,i)}function gC(t,e,n,s,i,r){let o;if(Qr(s,n)!=null)return e;{const a=new ac(s,e,i),l=e.eventCache.getNode();let c;if(ae(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Yr(s,Yn(e));else{const d=e.serverCache.getNode();T(d instanceof Y,"serverChildren would be complete if leaf node"),u=rc(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ie(n);let d=oc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Y.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yr(s,Yn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Qr(s,ue())!=null,gi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class _C{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ec(s.getIndex()),r=LE(s);this.processor_=lC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),u=new bn(l,o.isFullyInitialized(),i.filtersNodes()),d=new bn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=To(d,u),this.eventGenerator_=new HE(this.query_)}get query(){return this.query_}}function mC(t){return t.viewCache_.serverCache.getNode()}function vC(t){return Gr(t.viewCache_)}function yC(t,e){const n=Yn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function _d(t){return t.eventRegistrations_.length===0}function bC(t,e){t.eventRegistrations_.push(e)}function md(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function vd(t,e,n,s){e.type===ft.MERGE&&e.source.queryId!==null&&(T(Yn(t.viewCache_),"We should always have a full cache before handling merges"),T(Gr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=uC(t.processor_,i,e,n,s);return cC(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Qp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function wC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(r,o)=>{s.push(Ls(r,o))}),n.isFullyInitialized()&&s.push(Bp(n.getNode())),Qp(t,s,n.getNode(),e)}function Qp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return jE(t.eventGenerator_,e,n,i)}/**
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
 */let Xr;class Jp{constructor(){this.views=new Map}}function EC(t){T(!Xr,"__referenceConstructor has already been defined"),Xr=t}function CC(){return T(Xr,"Reference.ts has not been loaded"),Xr}function IC(t){return t.views.size===0}function lc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),vd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(vd(o,e,n,s));return r}}function Xp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Yr(n,i?s:null),l=!1;a?l=!0:s instanceof Y?(a=rc(n,s),l=!1):(a=Y.EMPTY_NODE,l=!1);const c=To(new bn(a,l,!1),new bn(s,i,!1));return new _C(e,c)}return o}function SC(t,e,n,s,i,r){const o=Xp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),bC(o,n),wC(o,n)}function TC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=wn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(md(c,n,s)),_d(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(md(l,n,s)),_d(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!wn(t)&&r.push(new(CC())(e._repo,e._path)),{removed:r,events:o}}function Zp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mn(t,e){let n=null;for(const s of t.views.values())n=n||yC(s,e);return n}function eg(t,e){if(e._queryParams.loadsAllData())return ko(t);{const s=e._queryIdentifier;return t.views.get(s)}}function tg(t,e){return eg(t,e)!=null}function wn(t){return ko(t)!=null}function ko(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Zr;function RC(t){T(!Zr,"__referenceConstructor has already been defined"),Zr=t}function kC(){return T(Zr,"Reference.ts has not been loaded"),Zr}let PC=1;class yd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=iC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ng(t,e,n,s,i){return zE(t.pendingWriteTree_,e,n,s,i),i?zs(t,new Gn(nc(),e,n)):[]}function AC(t,e,n,s){KE(t.pendingWriteTree_,e,n,s);const i=ve.fromObject(n);return zs(t,new Ds(nc(),e,i))}function un(t,e,n=!1){const s=GE(t.pendingWriteTree_,e);if(YE(t.pendingWriteTree_,e)){let r=new ve(null);return s.snap!=null?r=r.set(ue(),!0):Fe(s.children,o=>{r=r.set(new me(o),!0)}),zs(t,new Kr(s.path,r,n))}else return[]}function Qi(t,e,n){return zs(t,new Gn(sc(),e,n))}function NC(t,e,n){const s=ve.fromObject(n);return zs(t,new Ds(sc(),e,s))}function xC(t,e){return zs(t,new Mi(sc(),e))}function OC(t,e,n){const s=uc(t,n);if(s){const i=dc(s),r=i.path,o=i.queryId,a=Ve(r,e),l=new Mi(ic(o),a);return hc(t,r,l)}else return[]}function eo(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||tg(o,e))){const l=TC(o,e,n,s);IC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,p)=>wn(p));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=MC(h);for(let _=0;_<p.length;++_){const v=p[_],I=v.query,L=og(t,v);t.listenProvider_.startListening(mi(I),Fi(t,I),L.hashFn,L.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(mi(e),null):c.forEach(h=>{const p=t.queryToTagMap.get(Po(h));t.listenProvider_.stopListening(mi(h),p)}))}FC(t,c)}return a}function sg(t,e,n,s){const i=uc(t,s);if(i!=null){const r=dc(i),o=r.path,a=r.queryId,l=Ve(o,e),c=new Gn(ic(a),l,n);return hc(t,o,c)}else return[]}function LC(t,e,n,s){const i=uc(t,s);if(i){const r=dc(i),o=r.path,a=r.queryId,l=Ve(o,e),c=ve.fromObject(n),u=new Ds(ic(a),l,c);return hc(t,o,u)}else return[]}function nl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const _=Ve(h,i);r=r||mn(p,_),o=o||wn(p)});let a=t.syncPointTree_.get(i);a?(o=o||wn(a),r=r||mn(a,ue())):(a=new Jp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=Y.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,_)=>{const v=mn(_,ue());v&&(r=r.updateImmediateChild(p,v))}));const c=tg(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Po(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=UC();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const u=Ro(t.pendingWriteTree_,i);let d=SC(a,e,n,u,r,l);if(!c&&!o&&!s){const h=eg(a,e);d=d.concat($C(t,e,h))}return d}function cc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ve(o,e),c=mn(a,l);if(c)return c});return qp(i,e,r,n,!0)}function DC(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ve(c,n);s=s||mn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||mn(i,ue()):(i=new Jp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new bn(s,!0,!1):null,a=Ro(t.pendingWriteTree_,e._path),l=Xp(i,e,a,r?o.getNode():Y.EMPTY_NODE,r);return vC(l)}function zs(t,e){return ig(e,t.syncPointTree_,null,Ro(t.pendingWriteTree_,ue()))}function ig(t,e,n,s){if(ae(t.path))return rg(t,e,n,s);{const i=e.get(ue());n==null&&i!=null&&(n=mn(i,ue()));let r=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=zp(s,o);r=r.concat(ig(a,l,c,u))}return i&&(r=r.concat(lc(i,t,s,n))),r}}function rg(t,e,n,s){const i=e.get(ue());n==null&&i!=null&&(n=mn(i,ue()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=zp(s,o),u=t.operationForChild(o);u&&(r=r.concat(rg(u,a,l,c)))}),i&&(r=r.concat(lc(i,t,s,n))),r}function og(t,e){const n=e.query,s=Fi(t,n);return{hashFn:()=>(mC(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?OC(t,n._path,s):xC(t,n._path);{const r=xw(i,n);return eo(t,n,null,r)}}}}function Fi(t,e){const n=Po(e);return t.queryToTagMap.get(n)}function Po(t){return t._path.toString()+"$"+t._queryIdentifier}function uc(t,e){return t.tagToQueryMap.get(e)}function dc(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new me(t.substr(0,e))}}function hc(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Ro(t.pendingWriteTree_,e);return lc(s,n,i,null)}function MC(t){return t.fold((e,n,s)=>{if(n&&wn(n))return[ko(n)];{let i=[];return n&&(i=Zp(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function mi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kC())(t._repo,t._path):t}function FC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Po(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function UC(){return PC++}function $C(t,e,n){const s=e._path,i=Fi(t,e),r=og(t,n),o=t.listenProvider_.startListening(mi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ae(c)&&u&&wn(u))return[ko(u).query];{let h=[];return u&&(h=h.concat(Zp(u).map(p=>p.query))),Fe(d,(p,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(mi(u),Fi(t,u))}}return o}/**
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
 */class fc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fc(n)}node(){return this.node_}}class pc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new pc(this.syncTree_,n)}node(){return cc(this.syncTree_,this.path_)}}const BC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bd=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return HC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jC(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},HC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},jC=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ag=function(t,e,n,s){return gc(e,new pc(n,t),s)},lg=function(t,e,n){return gc(t,new fc(e),n)};function gc(t,e,n){const s=t.getPriority().val(),i=bd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=bd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Oe(a,ke(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Oe(i))),o.forEachChild(Se,(a,l)=>{const c=gc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class _c{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function mc(t,e){let n=e instanceof me?e:new me(e),s=t,i=ie(n);for(;i!==null;){const r=Ns(s.node.children,i)||{children:{},childCount:0};s=new _c(i,s,r),n=ye(n),i=ie(n)}return s}function Ks(t){return t.node.value}function cg(t,e){t.node.value=e,sl(t)}function ug(t){return t.node.childCount>0}function WC(t){return Ks(t)===void 0&&!ug(t)}function Ao(t,e){Fe(t.node.children,(n,s)=>{e(new _c(n,t,s))})}function dg(t,e,n,s){n&&!s&&e(t),Ao(t,i=>{dg(i,e,!0,s)}),n&&s&&e(t)}function VC(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ji(t){return new me(t.parent===null?t.name:Ji(t.parent)+"/"+t.name)}function sl(t){t.parent!==null&&qC(t.parent,t.name,t)}function qC(t,e,n){const s=WC(n),i=Tt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,sl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,sl(t))}/**
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
 */const zC=/[\[\].#$\/\u0000-\u001F\u007F]/,KC=/[\[\].#$\u0000-\u001F\u007F]/,da=10*1024*1024,vc=function(t){return typeof t=="string"&&t.length!==0&&!zC.test(t)},hg=function(t){return typeof t=="string"&&t.length!==0&&!KC.test(t)},GC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hg(t)},YC=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ql(t)||t&&typeof t=="object"&&Tt(t,".sv")},fg=function(t,e,n,s){s&&e===void 0||No(Co(t,"value"),e,n)},No=function(t,e,n){const s=n instanceof me?new hE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xn(s));if(typeof e=="function")throw new Error(t+"contains a function "+xn(s)+" with contents = "+e.toString());if(ql(e))throw new Error(t+"contains "+e.toString()+" "+xn(s));if(typeof e=="string"&&e.length>da/3&&Io(e)>da)throw new Error(t+"contains a string greater than "+da+" utf8 bytes "+xn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!vc(o)))throw new Error(t+" contains an invalid key ("+o+") "+xn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fE(s,o),No(t,a,s),pE(s)}),i&&r)throw new Error(t+' contains ".value" child '+xn(s)+" in addition to actual children.")}},QC=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=xi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!vc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(dE);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&it(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},JC=function(t,e,n,s){if(s&&e===void 0)return;const i=Co(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Fe(e,(o,a)=>{const l=new me(o);if(No(i,a,Ie(n,l)),Ql(l)===".priority"&&!YC(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),QC(i,r)},pg=function(t,e,n,s){if(!(s&&n===void 0)&&!hg(n))throw new Error(Co(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pg(t,e,n,s)},gg=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ZC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!GC(n))throw new Error(Co(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class eI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Jl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function _g(t,e,n){xo(t,n),mg(t,s=>Jl(s,e))}function at(t,e,n){xo(t,n),mg(t,s=>it(s,e)||it(e,s))}function mg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(tI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Bn&&Me("event: "+n.toString()),qs(s)}}}/**
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
 */const nI="repo_interrupt",sI=25;class iI{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zr(),this.transactionQueueTree_=new _c,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rI(t,e,n){if(t.stats_=Gl(t.repoInfo_),t.forceRestClient_||Mw())t.server_=new qr(t.repoInfo_,(s,i,r,o)=>{wd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ed(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ut(t.repoInfo_,e,(s,i,r,o)=>{wd(t,s,i,r,o)},s=>{Ed(t,s)},s=>{oI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Hw(t.repoInfo_,()=>new BE(t.stats_,t.server_)),t.infoData_=new DE,t.infoSyncTree_=new yd({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Qi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yc(t,"connected",!1),t.serverSyncTree_=new yd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);at(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function vg(t){const n=t.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oo(t){return BC({timestamp:vg(t)})}function wd(t,e,n,s,i){t.dataUpdateCount++;const r=new me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=$r(n,c=>ke(c));o=LC(t.serverSyncTree_,r,l,i)}else{const l=ke(n);o=sg(t.serverSyncTree_,r,l,i)}else if(s){const l=$r(n,c=>ke(c));o=NC(t.serverSyncTree_,r,l)}else{const l=ke(n);o=Qi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Fs(t,r)),at(t.eventQueue_,a,o)}function Ed(t,e){yc(t,"connected",e),e===!1&&uI(t)}function oI(t,e){Fe(e,(n,s)=>{yc(t,n,s)})}function yc(t,e,n){const s=new me("/.info/"+e),i=ke(n);t.infoData_.updateSnapshot(s,i);const r=Qi(t.infoSyncTree_,s,i);at(t.eventQueue_,s,r)}function bc(t){return t.nextWriteId_++}function aI(t,e,n){const s=DC(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ke(i).withIndex(e._queryParams.getIndex());nl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Qi(t.serverSyncTree_,e._path,r);else{const a=Fi(t.serverSyncTree_,e);o=sg(t.serverSyncTree_,e._path,r,a)}return at(t.eventQueue_,e._path,o),eo(t.serverSyncTree_,e,n,null,!0),r},i=>(Xi(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function lI(t,e,n,s,i){Xi(t,"set",{path:e.toString(),value:n,priority:s});const r=Oo(t),o=ke(n,s),a=cc(t.serverSyncTree_,e),l=lg(o,a,r),c=bc(t),u=ng(t.serverSyncTree_,e,l,c,!0);xo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const _=h==="ok";_||qe("set at "+e+" failed: "+h);const v=un(t.serverSyncTree_,c,!_);at(t.eventQueue_,e,v),rl(t,i,h,p)});const d=Ec(t,e);Fs(t,d),at(t.eventQueue_,d,[])}function cI(t,e,n,s){Xi(t,"update",{path:e.toString(),value:n});let i=!0;const r=Oo(t),o={};if(Fe(n,(a,l)=>{i=!1,o[a]=ag(Ie(e,a),ke(l),t.serverSyncTree_,r)}),i)Me("update() called with empty data.  Don't do anything."),rl(t,s,"ok",void 0);else{const a=bc(t),l=AC(t.serverSyncTree_,e,o,a);xo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||qe("update at "+e+" failed: "+c);const h=un(t.serverSyncTree_,a,!d),p=h.length>0?Fs(t,e):e;at(t.eventQueue_,p,h),rl(t,s,c,u)}),Fe(n,c=>{const u=Ec(t,Ie(e,c));Fs(t,u)}),at(t.eventQueue_,e,[])}}function uI(t){Xi(t,"onDisconnectEvents");const e=Oo(t),n=zr();Qa(t.onDisconnect_,ue(),(i,r)=>{const o=ag(i,r,t.serverSyncTree_,e);Hp(n,i,o)});let s=[];Qa(n,ue(),(i,r)=>{s=s.concat(Qi(t.serverSyncTree_,i,r));const o=Ec(t,i);Fs(t,o)}),t.onDisconnect_=zr(),at(t.eventQueue_,ue(),s)}function dI(t,e,n){let s;ie(e._path)===".info"?s=nl(t.infoSyncTree_,e,n):s=nl(t.serverSyncTree_,e,n),_g(t.eventQueue_,e._path,s)}function il(t,e,n){let s;ie(e._path)===".info"?s=eo(t.infoSyncTree_,e,n):s=eo(t.serverSyncTree_,e,n),_g(t.eventQueue_,e._path,s)}function hI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nI)}function Xi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function rl(t,e,n,s){e&&qs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function yg(t,e,n){return cc(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function wc(t,e=t.transactionQueueTree_){if(e||Lo(t,e),Ks(e)){const n=wg(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&fI(t,Ji(e),n)}else ug(e)&&Ao(e,n=>{wc(t,n)})}function fI(t,e,n){const s=n.map(c=>c.currentWriteId),i=yg(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ve(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Xi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(un(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Lo(t,mc(t.transactionQueueTree_,e)),wc(t,t.transactionQueueTree_),at(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)qs(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{qe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Fs(t,e)}},o)}function Fs(t,e){const n=bg(t,e),s=Ji(n),i=wg(t,n);return pI(t,i,s),s}function pI(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ve(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(un(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=sI)u=!0,d="maxretry",i=i.concat(un(t.serverSyncTree_,l.currentWriteId,!0));else{const h=yg(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){No("transaction failed: Data returned ",p,l.path);let _=ke(p);typeof p=="object"&&p!=null&&Tt(p,".priority")||(_=_.updatePriority(h.getPriority()));const I=l.currentWriteId,L=Oo(t),w=lg(_,h,L);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=w,l.currentWriteId=bc(t),o.splice(o.indexOf(I),1),i=i.concat(ng(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),i=i.concat(un(t.serverSyncTree_,I,!0))}else u=!0,d="nodata",i=i.concat(un(t.serverSyncTree_,l.currentWriteId,!0))}at(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Lo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)qs(s[a]);wc(t,t.transactionQueueTree_)}function bg(t,e){let n,s=t.transactionQueueTree_;for(n=ie(e);n!==null&&Ks(s)===void 0;)s=mc(s,n),e=ye(e),n=ie(e);return s}function wg(t,e){const n=[];return Eg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Eg(t,e,n){const s=Ks(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ao(e,i=>{Eg(t,i,n)})}function Lo(t,e){const n=Ks(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,cg(e,n.length>0?n:void 0)}Ao(e,s=>{Lo(t,s)})}function Ec(t,e){const n=Ji(bg(t,e)),s=mc(t.transactionQueueTree_,e);return VC(s,i=>{ha(t,i)}),ha(t,s),dg(s,i=>{ha(t,i)}),n}function ha(t,e){const n=Ks(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?cg(e,void 0):n.length=r+1,at(t.eventQueue_,Ji(e),i);for(let o=0;o<s.length;o++)qs(s[o])}}/**
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
 */function gI(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _I(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cd=function(t,e){const n=mI(t),s=n.namespace;n.domain==="firebase.com"&&Ht(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Rw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ip(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new me(n.pathString)}},mI=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=gI(t.substring(u,d)));const h=_I(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Id="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",vI=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Id.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Id.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Cg{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class Ig{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Cc{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ic{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ae(this._path)?null:Ql(this._path)}get ref(){return new Rt(this._repo,this._path)}get _queryIdentifier(){const e=cd(this._queryParams),n=zl(e);return n==="{}"?"default":n}get _queryObject(){return cd(this._queryParams)}isEqual(e){if(e=ze(e),!(e instanceof Ic))return!1;const n=this._repo===e._repo,s=Jl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uE(this._path)}}class Rt extends Ic{constructor(e,n){super(e,n,new tc,!1)}get parent(){const e=Op(this._path);return e===null?null:new Rt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Us{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),s=Qn(this.ref,e);return new Us(this._node.getChild(n),s,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Us(i,Qn(this.ref,s),Se)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Kt(t,e){return t=ze(t),t._checkNotDeleted("ref"),e!==void 0?Qn(t._root,e):t._root}function Qn(t,e){return t=ze(t),ie(t._path)===null?XC("child","path",e,!1):pg("child","path",e,!1),new Rt(t._repo,Ie(t._path,e))}function Sd(t,e){t=ze(t),gg("push",t._path),fg("push",e,t._path,!0);const n=vg(t._repo),s=vI(n),i=Qn(t,s),r=Qn(t,s);let o;return e!=null?o=Sg(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Sg(t,e){t=ze(t),gg("set",t._path),fg("set",e,t._path,!1);const n=new qi;return lI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Td(t,e){JC("update",e,t._path,!1);const n=new qi;return cI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function yI(t){t=ze(t);const e=new Cc(()=>{}),n=new Zi(e);return aI(t._repo,t,n).then(s=>new Us(s,new Rt(t._repo,t._path),t._queryParams.getIndex()))}class Zi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Cg("value",this,new Us(e.snapshotNode,new Rt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ig(this,e,n):null}matches(e){return e instanceof Zi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Do{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ig(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const s=Qn(new Rt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Cg(e.type,this,new Us(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Do?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Sc(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,d)=>{il(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Cc(n,r||void 0),a=e==="value"?new Zi(o):new Do(e,o);return dI(t._repo,t,a),()=>il(t._repo,t,a)}function bI(t,e,n,s){return Sc(t,"value",e,n,s)}function wI(t,e,n,s){return Sc(t,"child_added",e,n,s)}function EI(t,e,n,s){return Sc(t,"child_changed",e,n,s)}function CI(t,e,n){let s=null;const i=n?new Cc(n):null;e==="value"?s=new Zi(i):e&&(s=new Do(e,i)),il(t._repo,t,s)}EC(Rt);RC(Rt);/**
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
 */const II="FIREBASE_DATABASE_EMULATOR_HOST",ol={};let SI=!1;function TI(t,e,n,s){t.repoInfo_=new Ip(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function RI(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cd(r,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[II]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Cd(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ss(Ss.OWNER):new Uw(t.name,t.options,e);ZC("Invalid Firebase Database URL",o),ae(o.path)||Ht("Database URL must point to the root of a Firebase Database (not including a child path).");const d=PI(a,t,u,new Fw(t.name,n));return new AI(d,t)}function kI(t,e){const n=ol[e];(!n||n[t.key]!==t)&&Ht(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hI(t),delete n[t.key]}function PI(t,e,n,s){let i=ol[e.name];i||(i={},ol[e.name]=i);let r=i[t.toURLString()];return r&&Ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new iI(t,SI,n,s),i[t.toURLString()]=r,r}class AI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rt(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ht("Cannot call "+e+" on a deleted database.")}}function NI(t=ap(),e){const n=Vl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Xy("database");s&&xI(n,...s)}return n}function xI(t,e,n,s={}){t=ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ht("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ss(Ss.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Zy(s.mockUserToken,t.app.options.projectId);r=new Ss(o)}TI(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function OI(t){Ew(Vs),xs(new qn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return RI(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),gn(zu,Ku,t),gn(zu,Ku,"esm2017")}Ut.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ut.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};OI();function Tc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Tg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LI=Tg,Rg=new zi("auth","Firebase",Tg());/**
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
 */const to=new jl("@firebase/auth");function DI(t,...e){to.logLevel<=_e.WARN&&to.warn(`Auth (${Vs}): ${t}`,...e)}function wr(t,...e){to.logLevel<=_e.ERROR&&to.error(`Auth (${Vs}): ${t}`,...e)}/**
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
 */function gt(t,...e){throw Rc(t,...e)}function Ct(t,...e){return Rc(t,...e)}function kg(t,e,n){const s=Object.assign(Object.assign({},LI()),{[e]:n});return new zi("auth","Firebase",s).create(e,{appName:t.name})}function $t(t){return kg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Rg.create(t,...e)}function Q(t,e,...n){if(!t)throw Rc(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wr(e),new Error(e)}function jt(t,e){t||Lt(e)}/**
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
 */function al(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MI(){return Rd()==="http:"||Rd()==="https:"}function Rd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function FI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MI()||eb()||"connection"in navigator)?navigator.onLine:!0}function UI(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class er{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Hl()||tp()}get(){return FI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kc(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Pg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const BI=new er(3e4,6e4);function Tn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,s,i={}){return Ag(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ws(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Pg.fetch()(Ng(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ag(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},$I),e);try{const i=new jI(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw gr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw gr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw kg(t,u,c);gt(t,u)}}catch(i){if(i instanceof Sn)throw i;gt(t,"network-request-failed",{message:String(i)})}}async function tr(t,e,n,s,i={}){const r=await Rn(t,e,n,s,i);return"mfaPendingCredential"in r&&gt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ng(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?kc(t.config,i):`${t.config.apiScheme}://${i}`}function HI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ct(this.auth,"network-request-failed")),BI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ct(t,e,s);return i.customData._tokenResponse=n,i}function kd(t){return t!==void 0&&t.enterprise!==void 0}class WI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return HI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function VI(t,e){return Rn(t,"GET","/v2/recaptchaConfig",Tn(t,e))}/**
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
 */async function qI(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function xg(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zI(t,e=!1){const n=ze(t),s=await n.getIdToken(e),i=Pc(s);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:vi(fa(i.auth_time)),issuedAtTime:vi(fa(i.iat)),expirationTime:vi(fa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fa(t){return Number(t)*1e3}function Pc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return wr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ur(n);return i?JSON.parse(i):(wr("Failed to decode base64 JWT payload"),null)}catch(i){return wr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pd(t){const e=Pc(t);return Q(e,"internal-error"),Q(typeof e.exp!="undefined","internal-error"),Q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&KI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function KI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ll{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function no(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ui(t,xg(n,{idToken:s}));Q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Og(r.providerUserInfo):[],a=QI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ll(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function YI(t){const e=ze(t);await no(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QI(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Og(t){return t.map(e=>{var{providerId:n}=e,s=Tc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function JI(t,e){const n=await Ag(t,{},async()=>{const s=Ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Ng(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XI(t,e){return Rn(t,"POST","/v2/accounts:revokeToken",Tn(t,e))}/**
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
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken!="undefined","internal-error"),Q(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Pd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Pd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await JI(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Rs;return s&&(Q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
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
 */function Gt(t,e){Q(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Dt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Tc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ll(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zI(this,e)}reload(){return YI(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await no(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await Ui(this,qI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,L=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:k,isAnonymous:O,providerData:x,stsTokenManager:W}=n;Q(E&&W,e,"internal-error");const H=Rs.fromJSON(this.name,W);Q(typeof E=="string",e,"internal-error"),Gt(d,e.name),Gt(h,e.name),Q(typeof k=="boolean",e,"internal-error"),Q(typeof O=="boolean",e,"internal-error"),Gt(p,e.name),Gt(_,e.name),Gt(v,e.name),Gt(I,e.name),Gt(L,e.name),Gt(w,e.name);const P=new Dt({uid:E,auth:e,email:h,emailVerified:k,displayName:d,isAnonymous:O,photoURL:_,phoneNumber:p,tenantId:v,stsTokenManager:H,createdAt:L,lastLoginAt:w});return x&&Array.isArray(x)&&(P.providerData=x.map(V=>Object.assign({},V))),I&&(P._redirectEventId=I),P}static async _fromIdTokenResponse(e,n,s=!1){const i=new Rs;i.updateFromServerResponse(n);const r=new Dt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await no(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Og(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Rs;a.updateFromIdToken(s);const l=new Dt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ll(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Ad=new Map;function Mt(t){jt(t instanceof Function,"Expected a class definition");let e=Ad.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ad.set(t,e),e)}/**
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
 */class Lg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lg.type="NONE";const Nd=Lg;/**
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
 */function Er(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Er(this.userKey,i.apiKey,r),this.fullPersistenceKey=Er("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ks(Mt(Nd),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Mt(Nd);const o=Er(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Dt._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ks(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ks(r,e,s))}}/**
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
 */function xd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($g(e))return"Blackberry";if(Bg(e))return"Webos";if(Ac(e))return"Safari";if((e.includes("chrome/")||Mg(e))&&!e.includes("edge/"))return"Chrome";if(Ug(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Dg(t=He()){return/firefox\//i.test(t)}function Ac(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mg(t=He()){return/crios\//i.test(t)}function Fg(t=He()){return/iemobile/i.test(t)}function Ug(t=He()){return/android/i.test(t)}function $g(t=He()){return/blackberry/i.test(t)}function Bg(t=He()){return/webos/i.test(t)}function Mo(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZI(t=He()){var e;return Mo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eS(){return tb()&&document.documentMode===10}function Hg(t=He()){return Mo(t)||Ug(t)||Bg(t)||$g(t)||/windows phone/i.test(t)||Fg(t)}function tS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=xd(He());break;case"Worker":n=`${xd(He())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class nS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function sS(t,e={}){return Rn(t,"GET","/v2/passwordPolicy",Tn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const iS=6;class rS{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class oS{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Od(this),this.idTokenSubscription=new Od(this),this.beforeStateQueue=new nS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xg(this,{idToken:e}),s=await Dt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await no(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject($t(this));const n=e?ze(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sS(this),n=new rS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await XI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function is(t){return ze(t)}class Od{constructor(e){this.auth=e,this.observer=null,this.addObserver=ub(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aS(t){Fo=t}function Wg(t){return Fo.loadJS(t)}function lS(){return Fo.recaptchaEnterpriseScript}function cS(){return Fo.gapiScript}function uS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dS="recaptcha-enterprise",hS="NO_RECAPTCHA";class fS{constructor(e){this.type=dS,this.auth=is(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{VI(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new WI(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;kd(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(hS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&kd(window.grecaptcha))i(a,r,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=lS();l.length!==0&&(l+=a),Wg(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ld(t,e,n,s=!1){const i=new fS(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function cl(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ld(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ld(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
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
 */function pS(t,e){const n=Vl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Br(r,e!=null?e:{}))return i;gt(i,"already-initialized")}return n.initialize({options:e})}function gS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function _S(t,e,n){const s=is(t);Q(s._canInitEmulator,s,"emulator-config-failed"),Q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Vg(e),{host:o,port:a}=mS(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vS()}function Vg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mS(t){const e=Vg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Dd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Dd(o)}}}function Dd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Nc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}async function yS(t,e){return Rn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bS(t,e){return tr(t,"POST","/v1/accounts:signInWithPassword",Tn(t,e))}/**
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
 */async function wS(t,e){return tr(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,e))}async function ES(t,e){return tr(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,e))}/**
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
 */class $i extends Nc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $i(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new $i(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cl(e,n,"signInWithPassword",bS);case"emailLink":return wS(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cl(e,s,"signUpPassword",yS);case"emailLink":return ES(e,{idToken:n,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ps(t,e){return tr(t,"POST","/v1/accounts:signInWithIdp",Tn(t,e))}/**
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
 */const CS="http://localhost";class Jn extends Nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Tc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Jn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ps(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:CS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ws(n)}return e}}/**
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
 */function IS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SS(t){const e=ri(oi(t)).link,n=e?ri(oi(e)).deep_link_id:null,s=ri(oi(t)).deep_link_id;return(s?ri(oi(s)).link:null)||s||n||e||t}class xc{constructor(e){var n,s,i,r,o,a;const l=ri(oi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=IS((i=l.mode)!==null&&i!==void 0?i:null);Q(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=SS(e);try{return new xc(n)}catch{return null}}}/**
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
 */class Gs{constructor(){this.providerId=Gs.PROVIDER_ID}static credential(e,n){return $i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=xc.parseLink(n);return Q(s,"argument-error"),$i._fromEmailAndCode(e,s.code,s.tenantId)}}Gs.PROVIDER_ID="password";Gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nr extends qg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class on extends nr{constructor(){super("facebook.com")}static credential(e){return Jn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
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
 */class an extends nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return an.credential(n,s)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
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
 */class ln extends nr{constructor(){super("github.com")}static credential(e){return Jn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
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
 */class cn extends nr{constructor(){super("twitter.com")}static credential(e,n){return Jn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return cn.credential(n,s)}catch{return null}}}cn.TWITTER_SIGN_IN_METHOD="twitter.com";cn.PROVIDER_ID="twitter.com";/**
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
 */async function TS(t,e){return tr(t,"POST","/v1/accounts:signUp",Tn(t,e))}/**
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
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Dt._fromIdTokenResponse(e,s,i),o=Md(s);return new Xn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Md(s);return new Xn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Md(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class so extends Sn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,so.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new so(e,n,s,i)}}function zg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?so._fromErrorAndOperation(t,r,e,s):r})}async function RS(t,e,n=!1){const s=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",s)}/**
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
 */async function kS(t,e,n=!1){const{auth:s}=t;if(wt(s.app))return Promise.reject($t(s));const i="reauthenticate";try{const r=await Ui(t,zg(s,i,e,t),n);Q(r.idToken,s,"internal-error");const o=Pc(r.idToken);Q(o,s,"internal-error");const{sub:a}=o;return Q(t.uid===a,s,"user-mismatch"),Xn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&gt(s,"user-mismatch"),r}}/**
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
 */async function Kg(t,e,n=!1){if(wt(t.app))return Promise.reject($t(t));const s="signIn",i=await zg(t,s,e),r=await Xn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function PS(t,e){return Kg(is(t),e)}/**
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
 */async function Gg(t){const e=is(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AS(t,e,n){if(wt(t.app))return Promise.reject($t(t));const s=is(t),o=await cl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Gg(t),l}),a=await Xn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function NS(t,e,n){return wt(t.app)?Promise.reject($t(t)):PS(ze(t),Gs.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Gg(t),s})}function xS(t,e,n,s){return ze(t).onIdTokenChanged(e,n,s)}function OS(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function LS(t,e,n,s){return ze(t).onAuthStateChanged(e,n,s)}const io="__sak";/**
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
 */class Yg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(io,"1"),this.storage.removeItem(io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function DS(){const t=He();return Ac(t)||Mo(t)}const MS=1e3,FS=10;class Qg extends Yg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DS()&&tS(),this.fallbackToPolling=Hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);eS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qg.type="LOCAL";const US=Qg;/**
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
 */class Jg extends Yg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jg.type="SESSION";const Xg=Jg;/**
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
 */function $S(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Uo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await $S(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uo.receivers=[];/**
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
 */function Oc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Oc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function It(){return window}function HS(t){It().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Zg(){return typeof It().WorkerGlobalScope!="undefined"&&typeof It().importScripts=="function"}async function jS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VS(){return Zg()?self:null}/**
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
 */const e_="firebaseLocalStorageDb",qS=1,ro="firebaseLocalStorage",t_="fbase_key";class sr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $o(t,e){return t.transaction([ro],e?"readwrite":"readonly").objectStore(ro)}function zS(){const t=indexedDB.deleteDatabase(e_);return new sr(t).toPromise()}function ul(){const t=indexedDB.open(e_,qS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ro,{keyPath:t_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ro)?e(s):(s.close(),await zS(),e(await ul()))})})}async function Fd(t,e,n){const s=$o(t,!0).put({[t_]:e,value:n});return new sr(s).toPromise()}async function KS(t,e){const n=$o(t,!1).get(e),s=await new sr(n).toPromise();return s===void 0?null:s.value}function Ud(t,e){const n=$o(t,!0).delete(e);return new sr(n).toPromise()}const GS=800,YS=3;class n_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>YS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uo._getInstance(VS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jS(),!this.activeServiceWorker)return;this.sender=new BS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ul();return await Fd(e,io,"1"),await Ud(e,io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>KS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ud(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=$o(i,!1).getAll();return new sr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}n_.type="LOCAL";const QS=n_;new er(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function JS(t,e){return e?Mt(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lc extends Nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XS(t){return Kg(t.auth,new Lc(t),t.bypassAuthState)}function ZS(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),kS(n,new Lc(t),t.bypassAuthState)}async function eT(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),RS(n,new Lc(t),t.bypassAuthState)}/**
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
 */class s_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XS;case"linkViaPopup":case"linkViaRedirect":return eT;case"reauthViaPopup":case"reauthViaRedirect":return ZS;default:gt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tT=new er(2e3,1e4);class vs extends s_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tT.get())};e()}}vs.currentPopupAction=null;/**
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
 */const nT="pendingRedirect",Cr=new Map;class sT extends s_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Cr.get(this.auth._key());if(!e){try{const s=await iT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Cr.set(this.auth._key(),e)}return this.bypassAuthState||Cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iT(t,e){const n=aT(e),s=oT(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function rT(t,e){Cr.set(t._key(),e)}function oT(t){return Mt(t._redirectPersistence)}function aT(t){return Er(nT,t.config.apiKey,t.name)}async function lT(t,e,n=!1){if(wt(t.app))return Promise.reject($t(t));const s=is(t),i=JS(s,e),o=await new sT(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const cT=10*60*1e3;class uT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!i_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cT&&this.cachedEventUids.clear(),this.cachedEventUids.has($d(e))}saveEventToCache(e){this.cachedEventUids.add($d(e)),this.lastProcessedEventTime=Date.now()}}function $d(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function i_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return i_(t);default:return!1}}/**
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
 */async function hT(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
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
 */const fT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pT=/^https?/;async function gT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hT(t);for(const n of e)try{if(_T(n))return}catch{}gt(t,"unauthorized-domain")}function _T(t){const e=al(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!pT.test(n))return!1;if(fT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const mT=new er(3e4,6e4);function Bd(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vT(t){return new Promise((e,n)=>{var s,i,r;function o(){Bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bd(),n(Ct(t,"network-request-failed"))},timeout:mT.get()})}if(!((i=(s=It().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=It().gapi)===null||r===void 0)&&r.load)o();else{const a=uS("iframefcb");return It()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},Wg(`${cS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ir=null,e})}let Ir=null;function yT(t){return Ir=Ir||vT(t),Ir}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const bT=new er(5e3,15e3),wT="__/auth/iframe",ET="emulator/auth/iframe",CT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ST(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kc(e,ET):`https://${t.config.authDomain}/${wT}`,s={apiKey:e.apiKey,appName:t.name,v:Vs},i=IT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ws(s).slice(1)}`}async function TT(t){const e=await yT(t),n=It().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:ST(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=It().setTimeout(()=>{r(o)},bT.get());function l(){It().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const RT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kT=500,PT=600,AT="_blank",NT="http://localhost";class Hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xT(t,e,n,s=kT,i=PT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},RT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=He().toLowerCase();n&&(a=Mg(c)?AT:n),Dg(c)&&(e=e||NT,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,_])=>`${h}${p}=${_},`,"");if(ZI(c)&&a!=="_self")return OT(e||"",a),new Hd(null);const d=window.open(e||"",a,u);Q(d,t,"popup-blocked");try{d.focus()}catch{}return new Hd(d)}function OT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const LT="__/auth/handler",DT="emulator/auth/handler",MT=encodeURIComponent("fac");async function jd(t,e,n,s,i,r){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vs,eventId:i};if(e instanceof qg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ba(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof nr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${MT}=${encodeURIComponent(l)}`:"";return`${FT(t)}?${Ws(a).slice(1)}${c}`}function FT({config:t}){return t.emulator?kc(t,DT):`https://${t.authDomain}/${LT}`}/**
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
 */const pa="webStorageSupport";class UT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xg,this._completeRedirectFn=lT,this._overrideRedirectResult=rT}async _openPopup(e,n,s,i){var r;jt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await jd(e,n,s,al(),i);return xT(e,o,Oc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await jd(e,n,s,al(),i);return HS(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(jt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await TT(e),s=new uT(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pa,{type:pa},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[pa];o!==void 0&&n(!!o),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hg()||Ac()||Mo()}}const $T=UT;var Wd="@firebase/auth",Vd="1.7.4";/**
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
 */class BT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jT(t){xs(new qn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},c=new oS(s,i,r,l);return gS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),xs(new qn("auth-internal",e=>{const n=is(e.getProvider("auth").getImmediate());return(s=>new BT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Wd,Vd,HT(t)),gn(Wd,Vd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const WT=5*60,VT=ep("authIdTokenMaxAge")||WT;let qd=null;const qT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>VT)return;const i=n==null?void 0:n.token;qd!==i&&(qd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zT(t=ap()){const e=Vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pS(t,{popupRedirectResolver:$T,persistence:[QS,US,Xg]}),s=ep("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=qT(r.toString());OS(n,o,()=>o(n.currentUser)),xS(n,a=>o(a))}}const i=Xf("auth");return i&&_S(n,`http://${i}`),n}function KT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aS({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ct("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",KT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jT("Browser");const GT={apiKey:"AIzaSyCPs6XlLEMP6CphqpmSmeasmQ8PNs8U2PM",authDomain:"catchat-3478f.firebaseapp.com",projectId:"catchat-3478f",storageBucket:"catchat-3478f.appspot.com",messagingSenderId:"628241540773",appId:"1:628241540773:web:6c98856e7716cb4d380f4c",databaseURL:"https://catchat-3478f-default-rtdb.asia-southeast1.firebasedatabase.app"},r_=op(GT),Nt=NI(r_),On=zT(r_);var YT=Object.freeze(Object.defineProperty({__proto__:null,auth:On,db:Nt},Symbol.toStringTag,{value:"Module"}));let _r,ga;const QT=Wy("counter",{state:()=>({messages:[],text:"",tab:"login",userName:"",email:"",password:"",userDetails:{},users:{},other:"",otherDetails:""}),getters:{Gcontacts:t=>{const e={};return Object.keys(t.users).forEach(n=>{n!==t.userDetails.userId&&(e[n]=t.users[n])}),e}},actions:{setUserDetails(t){this.userDetails=t},getUsers(){const t=Kt(Nt,"users/");wI(t,e=>{const n=e.val();this.users={...this.users,[e.key]:n},console.log(this.users)}),EI(t,e=>{const n=e.val();this.users={...this.users,[e.key]:n},console.log(this.users)})},sendMessage(t){if(this.text!==""){let e={text:this.text,from:"me",timestamp:Date.now()},n=t.params.otherUserId;if(!n){console.error("No otherUserId provided in route params");return}console.log(e,n);const s=Kt(Nt,`chats/${this.userDetails.userId}/${n}`);Sd(s,e),e.from="them";const i=Kt(Nt,`chats/${n}/${this.userDetails.userId}`);Sd(i,e),this.text=""}},async getMessages(t){var s;const e=this.userDetails.userId,n=t.params.otherUserId;this.other=((s=this.users[n])==null?void 0:s.name)||"",_r=Kt(Nt,`chats/${e}/${n}`),ga=bI(_r,i=>{if(i.exists()){const r=i.val();this.messages=r?Object.values(r).sort((o,a)=>o.timestamp-a.timestamp):[]}else console.log("No data available"),this.messages=[]},i=>{console.error("Error getting messages:",i)})},stopGetMessages(){_r&&ga&&CI(_r,"value",ga),this.messages=[]},submitForm(t){this.tab==="login"?this.loginUser(t):this.registerUser(t)},async registerUser(t){try{const e=await AS(On,this.email,this.password),n=On.currentUser.uid;await Sg(Kt(Nt,"users/"+n),{name:this.userName,email:this.email,online:!0}),console.log(e),t({message:"Successful Registration!",color:"secondary",textColor:"white",position:"top"})}catch(e){console.error(e.message)}},async loginUser(t){try{const e=await NS(On,this.email,this.password);console.log(e),t({message:"Successful Login!",color:"secondary",textColor:"white",position:"top"})}catch(e){e.code==="auth/invalid-credential"&&(t({message:"Invalid Credentials",color:"negative",textColor:"white",position:"top"}),console.error(e.message))}},async signOutUser(){await On.signOut()},handleAuthChange(t){LS(On,async e=>{if(e){const n=On.currentUser.uid;try{const s=await yI(Qn(Kt(Nt),`users/${n}`));if(s.exists()){const i=s.val();console.log(i),this.setUserDetails({name:i.name,email:i.email,userId:n}),await Td(Kt(Nt,"users/"+n),{online:!0}),this.getUsers(),t.push("/")}else console.log("No data available")}catch(s){console.error(s)}}else{if(this.userDetails.userId){const n=this.userDetails.userId;await Td(Kt(Nt,"users/"+n),{online:!1})}this.setUserDetails({}),t.replace("/auth")}})}}});/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const gs=typeof document!="undefined";function JT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function _a(t,e){const n={};for(const s in e){const i=e[s];n[s]=_t(i)?i.map(t):t(i)}return n}const yi=()=>{},_t=Array.isArray,o_=/#/g,XT=/&/g,ZT=/\//g,e0=/=/g,t0=/\?/g,a_=/\+/g,n0=/%5B/g,s0=/%5D/g,l_=/%5E/g,i0=/%60/g,c_=/%7B/g,r0=/%7C/g,u_=/%7D/g,o0=/%20/g;function Dc(t){return encodeURI(""+t).replace(r0,"|").replace(n0,"[").replace(s0,"]")}function a0(t){return Dc(t).replace(c_,"{").replace(u_,"}").replace(l_,"^")}function dl(t){return Dc(t).replace(a_,"%2B").replace(o0,"+").replace(o_,"%23").replace(XT,"%26").replace(i0,"`").replace(c_,"{").replace(u_,"}").replace(l_,"^")}function l0(t){return dl(t).replace(e0,"%3D")}function c0(t){return Dc(t).replace(o_,"%23").replace(t0,"%3F")}function u0(t){return t==null?"":c0(t).replace(ZT,"%2F")}function Bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const d0=/\/$/,h0=t=>t.replace(d0,"");function ma(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=_0(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Bi(o)}}function f0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function p0(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&$s(e.matched[s],n.matched[i])&&d_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $s(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function d_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!g0(t[n],e[n]))return!1;return!0}function g0(t,e){return _t(t)?Kd(t,e):_t(e)?Kd(e,t):t===e}function Kd(t,e){return _t(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function _0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Hi;(function(t){t.pop="pop",t.push="push"})(Hi||(Hi={}));var bi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bi||(bi={}));function m0(t){if(!t)if(gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),h0(t)}const v0=/^[^#]+#/;function y0(t,e){return t.replace(v0,"#")+e}function b0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Bo=()=>({left:window.scrollX,top:window.scrollY});function w0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=b0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Gd(t,e){return(history.state?history.state.position-e:-1)+t}const hl=new Map;function E0(t,e){hl.set(t,e)}function C0(t){const e=hl.get(t);return hl.delete(t),e}let I0=()=>location.protocol+"//"+location.host;function h_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),zd(l,"")}return zd(n,t)+s+i}function S0(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const p=h_(t,location),_=n.value,v=e.value;let I=0;if(h){if(n.value=p,e.value=h,o&&o===_){o=null;return}I=v?h.position-v.position:0}else s(p);i.forEach(L=>{L(n.value,_,{delta:I,type:Hi.pop,direction:I?I>0?bi.forward:bi.back:bi.unknown})})};function l(){o=n.value}function c(h){i.push(h);const p=()=>{const _=i.indexOf(h);_>-1&&i.splice(_,1)};return r.push(p),p}function u(){const{history:h}=window;!h.state||h.replaceState(pe({},h.state,{scroll:Bo()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Yd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Bo():null}}function T0(t){const{history:e,location:n}=window,s={value:h_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:I0()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=pe({},e.state,Yd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:Bo()});r(u.current,u,!0);const d=pe({},Yd(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function R0(t){t=m0(t);const e=T0(t),n=S0(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:y0.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function k0(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),R0(t)}function P0(t){return typeof t=="string"||t&&typeof t=="object"}function f_(t){return typeof t=="string"||typeof t=="symbol"}const p_=Symbol("");var Qd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qd||(Qd={}));function Bs(t,e){return pe(new Error,{type:t,[p_]:!0},e)}function Pt(t,e){return t instanceof Error&&p_ in t&&(e==null||!!(t.type&e))}const Jd="[^/]+?",A0={sensitive:!1,strict:!1,start:!0,end:!0},N0=/[.+*?^${}()[\]/\\]/g;function x0(t,e){const n=pe({},A0,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let p=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(N0,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:v,optional:I,regexp:L}=h;r.push({name:_,repeatable:v,optional:I});const w=L||Jd;if(w!==Jd){p+=10;try{new RegExp(`(${w})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${_}" (${w}): `+k.message)}}let E=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(E=I&&c.length<2?`(?:/${E})`:"/"+E),I&&(E+="?"),i+=E,p+=20,I&&(p+=-8),v&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=r[h-1];d[_.name]=p&&_.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:I}=p,L=_ in c?c[_]:"";if(_t(L)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const w=_t(L)?L.join("/"):L;if(!w)if(I)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=w}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function O0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function g_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=O0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Xd(s))return 1;if(Xd(i))return-1}return i.length-s.length}function Xd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const L0={type:0,value:""},D0=/[a-zA-Z0-9_]/;function M0(t){if(!t)return[[]];if(t==="/")return[[L0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:D0.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function F0(t,e,n){const s=x0(M0(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function U0(t,e){const n=[],s=new Map;e=th({strict:!1,end:!0,sensitive:!1},e);function i(d){return s.get(d)}function r(d,h,p){const _=!p,v=$0(d);v.aliasOf=p&&p.record;const I=th(e,d),L=[v];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of k)L.push(pe({},v,{components:p?p.record.components:v.components,path:O,aliasOf:p?p.record:v}))}let w,E;for(const k of L){const{path:O}=k;if(h&&O[0]!=="/"){const x=h.record.path,W=x[x.length-1]==="/"?"":"/";k.path=h.record.path+(O&&W+O)}if(w=F0(k,h,I),p?p.alias.push(w):(E=E||w,E!==w&&E.alias.push(w),_&&d.name&&!eh(w)&&o(d.name)),__(w)&&l(w),v.children){const x=v.children;for(let W=0;W<x.length;W++)r(x[W],w,p&&p.children[W])}p=p||w}return E?()=>{o(E)}:yi}function o(d){if(f_(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const h=j0(d,n);n.splice(h,0,d),d.record.name&&!eh(d)&&s.set(d.record.name,d)}function c(d,h){let p,_={},v,I;if("name"in d&&d.name){if(p=s.get(d.name),!p)throw Bs(1,{location:d});I=p.record.name,_=pe(Zd(h.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&Zd(d.params,p.keys.map(E=>E.name))),v=p.stringify(_)}else if(d.path!=null)v=d.path,p=n.find(E=>E.re.test(v)),p&&(_=p.parse(v),I=p.record.name);else{if(p=h.name?s.get(h.name):n.find(E=>E.re.test(h.path)),!p)throw Bs(1,{location:d,currentLocation:h});I=p.record.name,_=pe({},h.params,d.params),v=p.stringify(_)}const L=[];let w=p;for(;w;)L.unshift(w.record),w=w.parent;return{name:I,path:v,params:_,matched:L,meta:H0(L)}}t.forEach(d=>r(d));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Zd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function $0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:B0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function B0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function eh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function H0(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function th(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function j0(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;g_(t,e[r])<0?s=r:n=r+1}const i=W0(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function W0(t){let e=t;for(;e=e.parent;)if(__(e)&&g_(t,e)===0)return e}function __({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function V0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(a_," "),o=r.indexOf("="),a=Bi(o<0?r:r.slice(0,o)),l=o<0?null:Bi(r.slice(o+1));if(a in e){let c=e[a];_t(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function nh(t){let e="";for(let n in t){const s=t[n];if(n=l0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(_t(s)?s.map(r=>r&&dl(r)):[s&&dl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function q0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=_t(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const z0=Symbol(""),sh=Symbol(""),Ho=Symbol(""),Mc=Symbol(""),fl=Symbol("");function ti(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function nn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Bs(4,{from:n,to:e})):h instanceof Error?l(h):P0(h)?l(Bs(2,{from:e,to:h})):(o&&s.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function va(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(K0(l)){const u=(l.__vccOpts||l)[e];u&&r.push(nn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const d=JT(u)?u.default:u;o.components[a]=d;const p=(d.__vccOpts||d)[e];return p&&nn(p,n,s,o,a,i)()}))}}return r}function K0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ih(t){const e=ot(Ho),n=ot(Mc),s=X(()=>{const l=$n(t.to);return e.resolve(l)}),i=X(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex($s.bind(null,u));if(h>-1)return h;const p=rh(l[c-2]);return c>1&&rh(u)===p&&d[d.length-1].path!==p?d.findIndex($s.bind(null,l[c-2])):h}),r=X(()=>i.value>-1&&J0(n.params,s.value.params)),o=X(()=>i.value>-1&&i.value===n.matched.length-1&&d_(n.params,s.value.params));function a(l={}){return Q0(l)?e[$n(t.replace)?"replace":"push"]($n(t.to)).catch(yi):Promise.resolve()}return{route:s,href:X(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const G0=xl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ih,setup(t,{slots:e}){const n=es(ih(t)),{options:s}=ot(Ho),i=X(()=>({[oh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[oh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:J("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Y0=G0;function Q0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function J0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!_t(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function rh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oh=(t,e,n)=>t!=null?t:e!=null?e:n,X0=xl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ot(fl),i=X(()=>t.route||s.value),r=ot(sh,0),o=X(()=>{let c=$n(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=X(()=>i.value.matched[o.value]);vr(sh,X(()=>o.value+1)),vr(z0,a),vr(fl,i);const l=Hn();return Cs(()=>[l.value,a.value,t.name],([c,u,d],[h,p,_])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!$s(u,p)||!h)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return ah(n.default,{Component:h,route:c});const p=d.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,I=J(h,pe({},_,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return ah(n.default,{Component:I,route:c})||I}}});function ah(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Z0=X0;function eR(t){const e=U0(t.routes,t),n=t.parseQuery||V0,s=t.stringifyQuery||nh,i=t.history,r=ti(),o=ti(),a=ti(),l=fm(Yt);let c=Yt;gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_a.bind(null,b=>""+b),d=_a.bind(null,u0),h=_a.bind(null,Bi);function p(b,$){let M,j;return f_(b)?(M=e.getRecordMatcher(b),j=$):j=b,e.addRoute(j,M)}function _(b){const $=e.getRecordMatcher(b);$&&e.removeRoute($)}function v(){return e.getRoutes().map(b=>b.record)}function I(b){return!!e.getRecordMatcher(b)}function L(b,$){if($=pe({},$||l.value),typeof b=="string"){const g=ma(n,b,$.path),m=e.resolve({path:g.path},$),C=i.createHref(g.fullPath);return pe(g,m,{params:h(m.params),hash:Bi(g.hash),redirectedFrom:void 0,href:C})}let M;if(b.path!=null)M=pe({},b,{path:ma(n,b.path,$.path).path});else{const g=pe({},b.params);for(const m in g)g[m]==null&&delete g[m];M=pe({},b,{params:d(g)}),$.params=d($.params)}const j=e.resolve(M,$),he=b.hash||"";j.params=u(h(j.params));const Ce=f0(s,pe({},b,{hash:a0(he),path:j.path})),f=i.createHref(Ce);return pe({fullPath:Ce,hash:he,query:s===nh?q0(b.query):b.query||{}},j,{redirectedFrom:void 0,href:f})}function w(b){return typeof b=="string"?ma(n,b,l.value.path):pe({},b)}function E(b,$){if(c!==b)return Bs(8,{from:$,to:b})}function k(b){return W(b)}function O(b){return k(pe(w(b),{replace:!0}))}function x(b){const $=b.matched[b.matched.length-1];if($&&$.redirect){const{redirect:M}=$;let j=typeof M=="function"?M(b):M;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=w(j):{path:j},j.params={}),pe({query:b.query,hash:b.hash,params:j.path!=null?{}:b.params},j)}}function W(b,$){const M=c=L(b),j=l.value,he=b.state,Ce=b.force,f=b.replace===!0,g=x(M);if(g)return W(pe(w(g),{state:typeof g=="object"?pe({},he,g.state):he,force:Ce,replace:f}),$||M);const m=M;m.redirectedFrom=$;let C;return!Ce&&p0(s,j,M)&&(C=Bs(16,{to:m,from:j}),mt(j,j,!0,!1)),(C?Promise.resolve(C):V(m,j)).catch(y=>Pt(y)?Pt(y,2)?y:Vt(y):de(y,m,j)).then(y=>{if(y){if(Pt(y,2))return W(pe({replace:f},w(y.to),{state:typeof y.to=="object"?pe({},he,y.to.state):he,force:Ce}),$||m)}else y=F(m,j,!0,f,he);return G(m,j,y),y})}function H(b,$){const M=E(b,$);return M?Promise.reject(M):Promise.resolve()}function P(b){const $=os.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(b):b()}function V(b,$){let M;const[j,he,Ce]=tR(b,$);M=va(j.reverse(),"beforeRouteLeave",b,$);for(const g of j)g.leaveGuards.forEach(m=>{M.push(nn(m,b,$))});const f=H.bind(null,b,$);return M.push(f),Ue(M).then(()=>{M=[];for(const g of r.list())M.push(nn(g,b,$));return M.push(f),Ue(M)}).then(()=>{M=va(he,"beforeRouteUpdate",b,$);for(const g of he)g.updateGuards.forEach(m=>{M.push(nn(m,b,$))});return M.push(f),Ue(M)}).then(()=>{M=[];for(const g of Ce)if(g.beforeEnter)if(_t(g.beforeEnter))for(const m of g.beforeEnter)M.push(nn(m,b,$));else M.push(nn(g.beforeEnter,b,$));return M.push(f),Ue(M)}).then(()=>(b.matched.forEach(g=>g.enterCallbacks={}),M=va(Ce,"beforeRouteEnter",b,$,P),M.push(f),Ue(M))).then(()=>{M=[];for(const g of o.list())M.push(nn(g,b,$));return M.push(f),Ue(M)}).catch(g=>Pt(g,8)?g:Promise.reject(g))}function G(b,$,M){a.list().forEach(j=>P(()=>j(b,$,M)))}function F(b,$,M,j,he){const Ce=E(b,$);if(Ce)return Ce;const f=$===Yt,g=gs?history.state:{};M&&(j||f?i.replace(b.fullPath,pe({scroll:f&&g&&g.scroll},he)):i.push(b.fullPath,he)),l.value=b,mt(b,$,M,f),Vt()}let ne;function U(){ne||(ne=i.listen((b,$,M)=>{if(!ir.listening)return;const j=L(b),he=x(j);if(he){W(pe(he,{replace:!0}),j).catch(yi);return}c=j;const Ce=l.value;gs&&E0(Gd(Ce.fullPath,M.delta),Bo()),V(j,Ce).catch(f=>Pt(f,12)?f:Pt(f,2)?(W(f.to,j).then(g=>{Pt(g,20)&&!M.delta&&M.type===Hi.pop&&i.go(-1,!1)}).catch(yi),Promise.reject()):(M.delta&&i.go(-M.delta,!1),de(f,j,Ce))).then(f=>{f=f||F(j,Ce,!1),f&&(M.delta&&!Pt(f,8)?i.go(-M.delta,!1):M.type===Hi.pop&&Pt(f,20)&&i.go(-1,!1)),G(j,Ce,f)}).catch(yi)}))}let se=ti(),te=ti(),ge;function de(b,$,M){Vt(b);const j=te.list();return j.length?j.forEach(he=>he(b,$,M)):console.error(b),Promise.reject(b)}function kt(){return ge&&l.value!==Yt?Promise.resolve():new Promise((b,$)=>{se.add([b,$])})}function Vt(b){return ge||(ge=!b,U(),se.list().forEach(([$,M])=>b?M(b):$()),se.reset()),b}function mt(b,$,M,j){const{scrollBehavior:he}=t;if(!gs||!he)return Promise.resolve();const Ce=!M&&C0(Gd(b.fullPath,0))||(j||!M)&&history.state&&history.state.scroll||null;return Pl().then(()=>he(b,$,Ce)).then(f=>f&&w0(f)).catch(f=>de(f,b,$))}const Ke=b=>i.go(b);let rs;const os=new Set,ir={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:v,resolve:L,options:t,push:k,replace:O,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:kt,install(b){const $=this;b.component("RouterLink",Y0),b.component("RouterView",Z0),b.config.globalProperties.$router=$,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>$n(l)}),gs&&!rs&&l.value===Yt&&(rs=!0,k(i.location).catch(he=>{}));const M={};for(const he in Yt)Object.defineProperty(M,he,{get:()=>l.value[he],enumerable:!0});b.provide(Ho,$),b.provide(Mc,Hh(M)),b.provide(fl,l);const j=b.unmount;os.add(b),b.unmount=function(){os.delete(b),os.size<1&&(c=Yt,ne&&ne(),ne=null,l.value=Yt,rs=!1,ge=!1),j()}}};function Ue(b){return b.reduce(($,M)=>$.then(()=>P(M)),Promise.resolve())}return ir}function tR(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>$s(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>$s(c,l))||i.push(l))}return[n,s,i]}function nR(){return ot(Ho)}function ck(t){return ot(Mc)}const sR=Object.assign({name:"App"},{__name:"App",setup(t){const e=nR(),n=QT();return go(()=>{n.handleAuthChange(e)}),(s,i)=>{const r=Am("router-view");return Cf(),Sf(r)}}});var ya=()=>Fy();const iR=[{path:"/",component:()=>ps(()=>import("./MainLayout.b298b8b6.js"),["assets/MainLayout.b298b8b6.js","assets/QToolbar.8900b291.js","assets/QResizeObserver.0325d6da.js"]),children:[{path:"",component:()=>ps(()=>import("./UserPage.28857b77.js"),["assets/UserPage.28857b77.js","assets/QPage.f3acaee1.js"])},{name:"chat",path:"/chat/:otherUserId",component:()=>ps(()=>import("./ChatPage.9f52f47f.js"),["assets/ChatPage.9f52f47f.js","assets/ChatPage.8c2fd626.css","assets/QPage.f3acaee1.js","assets/QInput.349dc140.js","assets/QToolbar.8900b291.js","assets/QResizeObserver.0325d6da.js"])},{name:"authentication",path:"/auth",component:()=>ps(()=>import("./AuthPage.daf3d582.js"),["assets/AuthPage.daf3d582.js","assets/QInput.349dc140.js","assets/QPage.f3acaee1.js","assets/QResizeObserver.0325d6da.js"])}]},{path:"/:catchAll(.*)*",component:()=>ps(()=>import("./ErrorNotFound.72e6f151.js"),[])}];var ba=function(){return eR({scrollBehavior:()=>({left:0,top:0}),routes:iR,history:k0("/")})};async function rR(t,e){const n=t(sR);n.use(Dy,e);const s=typeof ya=="function"?await ya({}):ya;n.use(s);const i=ts(typeof ba=="function"?await ba({store:s}):ba);return s.use(({store:r})=>{r.router=i}),{app:n,store:s,router:i}}const pl={xs:18,sm:24,md:32,lg:38,xl:46},Fc={size:String};function Uc(t,e=pl){return X(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}function oR(t,e){return t!==void 0&&t()||e}function uk(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function ai(t,e){return t!==void 0?e.concat(t()):e}function aR(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function dk(t,e,n,s,i,r){e.key=s+i;const o=J(t,e,n);return i===!0?nf(o,r()):o}const lh="0 0 24 24",ch=t=>t,wa=t=>`ionicons ${t}`,m_={"mdi-":t=>`mdi ${t}`,"icon-":ch,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":wa,"ion-ios":wa,"ion-logo":wa,"iconfont ":ch,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},v_={o_:"-outlined",r_:"-round",s_:"-sharp"},y_={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},lR=new RegExp("^("+Object.keys(m_).join("|")+")"),cR=new RegExp("^("+Object.keys(v_).join("|")+")"),uh=new RegExp("^("+Object.keys(y_).join("|")+")"),uR=/^[Mm]\s?[-+]?\.?\d/,dR=/^img:/,hR=/^svguse:/,fR=/^ion-/,pR=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var oo=Vi({name:"QIcon",props:{...Fc,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Hs(),s=Uc(t),i=X(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),r=X(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(uR.test(a)===!0){const[u,d=lh]=a.split("|");return{svg:!0,viewBox:d,nodes:u.split("&&").map(h=>{const[p,_,v]=h.split("@@");return J("path",{style:_,d:p,transform:v})})}}if(dR.test(a)===!0)return{img:!0,src:a.substring(4)};if(hR.test(a)===!0){const[u,d=lh]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:d}}let l=" ";const c=a.match(lR);if(c!==null)o=m_[c[1]](a);else if(pR.test(a)===!0)o=a;else if(fR.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(uh.test(a)===!0){o="notranslate material-symbols";const u=a.match(uh);u!==null&&(a=a.substring(6),o+=y_[u[1]]),l=a}else{o="notranslate material-icons";const u=a.match(cR);u!==null&&(a=a.substring(2),o+=v_[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:i.value,style:s.value,"aria-hidden":"true",role:"presentation"};return r.value.none===!0?J(t.tag,o,oR(e.default)):r.value.img===!0?J(t.tag,o,ai(e.default,[J("img",{src:r.value.src})])):r.value.svg===!0?J(t.tag,o,ai(e.default,[J("svg",{viewBox:r.value.viewBox||"0 0 24 24"},r.value.nodes)])):r.value.svguse===!0?J(t.tag,o,ai(e.default,[J("svg",{viewBox:r.value.viewBox},[J("use",{"xlink:href":r.value.src})])])):(r.value.cls!==void 0&&(o.class+=" "+r.value.cls),J(t.tag,o,ai(e.default,[r.value.content])))}}}),gR=Vi({name:"QAvatar",props:{...Fc,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=Uc(t),s=X(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=X(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const r=t.icon!==void 0?[J(oo,{name:t.icon})]:void 0;return J("div",{class:s.value,style:n.value},[J("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},aR(e.default,r))])}}});const _R={size:{type:[String,Number],default:"1em"},color:String};function mR(t){return{cSize:X(()=>t.size in pl?`${pl[t.size]}px`:t.size),classes:X(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var b_=Vi({name:"QSpinner",props:{..._R,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=mR(t);return()=>J("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[J("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function vR(t,e){const n=t.style;for(const s in e)n[s]=e[s]}function hk(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=$n(t);if(e)return e.$el||e}function yR(t,e=250){let n=!1,s;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),s=t.apply(this,arguments)),s}}function dh(t,e,n,s){n.modifiers.stop===!0&&$f(t);const i=n.modifiers.color;let r=n.modifiers.center;r=r===!0||s===!0;const o=document.createElement("span"),a=document.createElement("span"),l=fy(t),{left:c,top:u,width:d,height:h}=e.getBoundingClientRect(),p=Math.sqrt(d*d+h*h),_=p/2,v=`${(d-p)/2}px`,I=r?v:`${l.left-c-_}px`,L=`${(h-p)/2}px`,w=r?L:`${l.top-u-_}px`;a.className="q-ripple__inner",vR(a,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${I},${w},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const E=()=>{o.remove(),clearTimeout(k)};n.abort.push(E);let k=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${v},${L},0) scale3d(1,1,1)`,a.style.opacity=.2,k=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,k=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(E),1)},275)},250)},50)}function hh(t,{modifiers:e,value:n,arg:s}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||s,keyCodes:[].concat(i.keyCodes||13)}}var bR=hy({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const s={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){s.enabled===!0&&i.qSkipRipple!==!0&&i.type===(s.modifiers.early===!0?"pointerdown":"click")&&dh(i,t,s,i.qKeyEvent===!0)},keystart:yR(i=>{s.enabled===!0&&i.qSkipRipple!==!0&&Fa(i,s.modifiers.keyCodes)===!0&&i.type===`key${s.modifiers.early===!0?"down":"up"}`&&dh(i,t,s,!0)},300)};hh(s,e),t.__qripple=s,py(s,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&hh(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),gy(e,"main"),delete t._qripple)}});const w_={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},wR=Object.keys(w_),ER={align:{type:String,validator:t=>wR.includes(t)}};function CR(t){return X(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${w_[e]}`})}function E_(t,e){typeof e.type=="symbol"?Array.isArray(e.children)===!0&&e.children.forEach(n=>{E_(t,n)}):t.add(e)}function fk(t){const e=new Set;return t.forEach(n=>{E_(e,n)}),Array.from(e)}function IR(t){return t.appContext.config.globalProperties.$router!==void 0}function pk(t){return t.isUnmounted===!0||t.isDeactivated===!0}function fh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function ph(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function SR(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(Array.isArray(i)===!1||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function gh(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function TR(t,e){return Array.isArray(t)===!0?gh(t,e):Array.isArray(e)===!0?gh(e,t):t===e}function RR(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(TR(t[n],e[n])===!1)return!1;return!0}const C_={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},gk={...C_,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function kR({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Hs(),{props:s,proxy:i,emit:r}=n,o=IR(n),a=X(()=>s.disable!==!0&&s.href!==void 0),l=X(e===!0?()=>o===!0&&s.disable!==!0&&a.value!==!0&&s.to!==void 0&&s.to!==null&&s.to!=="":()=>o===!0&&a.value!==!0&&s.to!==void 0&&s.to!==null&&s.to!==""),c=X(()=>l.value===!0?w(s.to):null),u=X(()=>c.value!==null),d=X(()=>a.value===!0||u.value===!0),h=X(()=>s.type==="a"||d.value===!0?"a":s.tag||t||"div"),p=X(()=>a.value===!0?{href:s.href,target:s.target}:u.value===!0?{href:c.value.href,target:s.target}:{}),_=X(()=>{if(u.value===!1)return-1;const{matched:O}=c.value,{length:x}=O,W=O[x-1];if(W===void 0)return-1;const H=i.$route.matched;if(H.length===0)return-1;const P=H.findIndex(ph.bind(null,W));if(P!==-1)return P;const V=fh(O[x-2]);return x>1&&fh(W)===V&&H[H.length-1].path!==V?H.findIndex(ph.bind(null,O[x-2])):P}),v=X(()=>u.value===!0&&_.value!==-1&&SR(i.$route.params,c.value.params)),I=X(()=>v.value===!0&&_.value===i.$route.matched.length-1&&RR(i.$route.params,c.value.params)),L=X(()=>u.value===!0?I.value===!0?` ${s.exactActiveClass} ${s.activeClass}`:s.exact===!0?"":v.value===!0?` ${s.activeClass}`:"":"");function w(O){try{return i.$router.resolve(O)}catch{}return null}function E(O,{returnRouterError:x,to:W=s.to,replace:H=s.replace}={}){if(s.disable===!0)return O.preventDefault(),Promise.resolve(!1);if(O.metaKey||O.altKey||O.ctrlKey||O.shiftKey||O.button!==void 0&&O.button!==0||s.target==="_blank")return Promise.resolve(!1);O.preventDefault();const P=i.$router[H===!0?"replace":"push"](W);return x===!0?P:P.then(()=>{}).catch(()=>{})}function k(O){if(u.value===!0){const x=W=>E(O,W);r("click",O,x),O.defaultPrevented!==!0&&x()}else r("click",O)}return{hasRouterLink:u,hasHrefLink:a,hasLink:d,linkTag:h,resolvedLink:c,linkIsActive:v,linkIsExactActive:I,linkClass:L,linkAttrs:p,getLink:w,navigateToRouterLink:E,navigateOnClick:k}}const _h={none:0,xs:4,sm:8,md:16,lg:24,xl:32},PR={xs:8,sm:10,md:14,lg:20,xl:24},AR=["button","submit","reset"],NR=/[^\s]\/[^\s]/,xR=["flat","outline","push","unelevated"];function OR(t,e){return t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e}const LR={...Fc,...C_,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...xR.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ER.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},DR={...LR,round:Boolean};function MR(t){const e=Uc(t,PR),n=CR(t),{hasRouterLink:s,hasLink:i,linkTag:r,linkAttrs:o,navigateOnClick:a}=kR({fallbackTag:"button"}),l=X(()=>{const I=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},I,{padding:t.padding.split(/\s+/).map(L=>L in _h?_h[L]+"px":L).join(" "),minWidth:"0",minHeight:"0"}):I}),c=X(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=X(()=>t.disable!==!0&&t.loading!==!0),d=X(()=>u.value===!0?t.tabindex||0:-1),h=X(()=>OR(t,"standard")),p=X(()=>{const I={tabindex:d.value};return i.value===!0?Object.assign(I,o.value):AR.includes(t.type)===!0&&(I.type=t.type),r.value==="a"?(t.disable===!0?I["aria-disabled"]="true":I.href===void 0&&(I.role="button"),s.value!==!0&&NR.test(t.type)===!0&&(I.type=t.type)):t.disable===!0&&(I.disabled="",I["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(I,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),I}),_=X(()=>{let I;t.color!==void 0?t.flat===!0||t.outline===!0?I=`text-${t.textColor||t.color}`:I=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(I=`text-${t.textColor}`);const L=t.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${h.value} q-btn--${L}`+(I!==void 0?" "+I:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),v=X(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:_,style:l,innerClasses:v,attributes:p,hasLink:i,linkTag:r,navigateOnClick:a,isActionable:u}}const{passiveCapture:nt}=Vn;let ds=null,hs=null,fs=null;var FR=Vi({name:"QBtn",props:{...DR,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:s}=Hs(),{classes:i,style:r,innerClasses:o,attributes:a,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:d}=MR(t),h=Hn(null),p=Hn(null);let _=null,v,I=null;const L=X(()=>t.label!==void 0&&t.label!==null&&t.label!==""),w=X(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),E=X(()=>({center:t.round})),k=X(()=>{const U=Math.max(0,Math.min(100,t.percentage));return U>0?{transition:"transform 0.6s",transform:`translateX(${U-100}%)`}:{}}),O=X(()=>{if(t.loading===!0)return{onMousedown:ne,onTouchstart:ne,onClick:ne,onKeydown:ne,onKeyup:ne};if(d.value===!0){const U={onClick:W,onKeydown:H,onMousedown:V};if(s.$q.platform.has.touch===!0){const se=t.onTouchstart!==void 0?"":"Passive";U[`onTouchstart${se}`]=P}return U}return{onClick:ls}}),x=X(()=>({ref:h,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:r.value,...a.value,...O.value}));function W(U){if(h.value!==null){if(U!==void 0){if(U.defaultPrevented===!0)return;const se=document.activeElement;if(t.type==="submit"&&se!==document.body&&h.value.contains(se)===!1&&se.contains(h.value)===!1){h.value.focus();const te=()=>{document.removeEventListener("keydown",ls,!0),document.removeEventListener("keyup",te,nt),h.value!==null&&h.value.removeEventListener("blur",te,nt)};document.addEventListener("keydown",ls,!0),document.addEventListener("keyup",te,nt),h.value.addEventListener("blur",te,nt)}}u(U)}}function H(U){h.value!==null&&(n("keydown",U),Fa(U,[13,32])===!0&&hs!==h.value&&(hs!==null&&F(),U.defaultPrevented!==!0&&(h.value.focus(),hs=h.value,h.value.classList.add("q-btn--active"),document.addEventListener("keyup",G,!0),h.value.addEventListener("blur",G,nt)),ls(U)))}function P(U){h.value!==null&&(n("touchstart",U),U.defaultPrevented!==!0&&(ds!==h.value&&(ds!==null&&F(),ds=h.value,_=U.target,_.addEventListener("touchcancel",G,nt),_.addEventListener("touchend",G,nt)),v=!0,I!==null&&clearTimeout(I),I=setTimeout(()=>{I=null,v=!1},200)))}function V(U){h.value!==null&&(U.qSkipRipple=v===!0,n("mousedown",U),U.defaultPrevented!==!0&&fs!==h.value&&(fs!==null&&F(),fs=h.value,h.value.classList.add("q-btn--active"),document.addEventListener("mouseup",G,nt)))}function G(U){if(h.value!==null&&!(U!==void 0&&U.type==="blur"&&document.activeElement===h.value)){if(U!==void 0&&U.type==="keyup"){if(hs===h.value&&Fa(U,[13,32])===!0){const se=new MouseEvent("click",U);se.qKeyEvent=!0,U.defaultPrevented===!0&&Ma(se),U.cancelBubble===!0&&$f(se),h.value.dispatchEvent(se),ls(U),U.qKeyEvent=!0}n("keyup",U)}F()}}function F(U){const se=p.value;U!==!0&&(ds===h.value||fs===h.value)&&se!==null&&se!==document.activeElement&&(se.setAttribute("tabindex",-1),se.focus()),ds===h.value&&(_!==null&&(_.removeEventListener("touchcancel",G,nt),_.removeEventListener("touchend",G,nt)),ds=_=null),fs===h.value&&(document.removeEventListener("mouseup",G,nt),fs=null),hs===h.value&&(document.removeEventListener("keyup",G,!0),h.value!==null&&h.value.removeEventListener("blur",G,nt),hs=null),h.value!==null&&h.value.classList.remove("q-btn--active")}function ne(U){ls(U),U.qSkipRipple=!0}return _o(()=>{F(!0)}),Object.assign(s,{click:U=>{d.value===!0&&W(U)}}),()=>{let U=[];t.icon!==void 0&&U.push(J(oo,{name:t.icon,left:t.stack!==!0&&L.value===!0,role:"img","aria-hidden":"true"})),L.value===!0&&U.push(J("span",{class:"block"},[t.label])),U=ai(e.default,U),t.iconRight!==void 0&&t.round===!1&&U.push(J(oo,{name:t.iconRight,right:t.stack!==!0&&L.value===!0,role:"img","aria-hidden":"true"}));const se=[J("span",{class:"q-focus-helper",ref:p})];return t.loading===!0&&t.percentage!==void 0&&se.push(J("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[J("span",{class:"q-btn__progress-indicator fit block",style:k.value})])),se.push(J("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},U)),t.loading!==null&&se.push(J(Fl,{name:"q-transition--fade"},()=>t.loading===!0?[J("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[J(b_)])]:null)),nf(J(c.value,x.value,se),[[bR,w.value,void 0,E.value]])}}});let UR=1,$R=document.body;function BR(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${UR++}`:t,Mr.globalNodes!==void 0){const s=Mr.globalNodes.class;s!==void 0&&(n.className=s)}return $R.appendChild(n),n}let HR=0;const Sr={},Tr={},ct={},I_={},jR=/^\s*$/,S_=[],WR=[void 0,null,!0,!1,""],$c=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],VR=["top-left","top-right","bottom-left","bottom-right"],_s={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function T_(t,e,n){if(!t)return ni("parameter required");let s;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,Sr),ki(t)===!1&&(i.type&&Object.assign(i,_s[i.type]),t={message:t}),Object.assign(i,_s[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=b_),i.spinner=ts(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:mh(i.message)||mh(i.caption)},i.position){if($c.includes(i.position)===!1)return ni("wrong position",t)}else i.position="bottom";if(WR.includes(i.timeout)===!0)i.timeout=5e3;else{const l=Number(i.timeout);if(isNaN(l)||l<0)return ni("wrong timeout",t);i.timeout=Number.isFinite(l)?l:0}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const r=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(Sr.actions)===!0?Sr.actions:[]).concat(_s[t.type]!==void 0&&Array.isArray(_s[t.type].actions)===!0?_s[t.type].actions:[]),{closeBtn:o}=i;if(o&&r.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=r.map(({handler:l,noDismiss:c,...u})=>({flat:!0,...u,onClick:typeof l=="function"?()=>{l(),c!==!0&&a()}:()=>{a()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(l=>`${l.label}*${l.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const l=ct[i.position].value.indexOf(n.notif);ct[i.position].value[l]=i}else{const l=Tr[i.meta.group];if(l===void 0){if(i.meta.uid=HR++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)ct[i.position].value.splice(Math.floor(ct[i.position].value.length/2),0,i);else{const c=i.position.indexOf("top")!==-1?"unshift":"push";ct[i.position].value[c](i)}i.group!==void 0&&(Tr[i.meta.group]=i)}else{if(l.meta.timer&&(clearTimeout(l.meta.timer),l.meta.timer=void 0),i.badgePosition!==void 0){if(VR.includes(i.badgePosition)===!1)return ni("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")!==-1?"right":"left"}`;i.meta.uid=l.meta.uid,i.meta.badge=l.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const c=ct[i.position].value.indexOf(l);ct[i.position].value[c]=Tr[i.meta.group]=i}}const a=()=>{qR(i),s=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,a()},i.timeout+1e3)),i.group!==void 0)return l=>{l!==void 0?ni("trying to update a grouped one which is forbidden",t):a()};if(s={dismiss:a,config:t,notif:i},n!==void 0){Object.assign(n,s);return}return l=>{if(s!==void 0)if(l===void 0)s.dismiss();else{const c=Object.assign({},s.config,l,{group:!1,position:i.position});T_(c,e,s)}}}function qR(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=ct[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete Tr[t.meta.group];const n=S_[""+t.meta.uid];if(n){const{width:s,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=s,n.style.height=i}ct[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function mh(t){return t!=null&&jR.test(t)!==!0}function ni(t,e){return console.error(`Notify: ${t}`,e),!1}function zR(){return Vi({name:"QNotifications",devtools:{hide:!0},setup(){return()=>J("div",{class:"q-notifications"},$c.map(t=>J(Xv,{key:t,class:I_[t],tag:"div",name:`q-notification--${t}`},()=>ct[t].value.map(e=>{const n=e.meta,s=[];if(n.hasMedia===!0&&(e.spinner!==!1?s.push(J(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?s.push(J(oo,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&s.push(J(gR,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>J("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let r;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];r=e.caption?[J("div",a),J("div",{class:"q-notification__caption"},[e.caption])]:a}s.push(J("div",o,r))}const i=[J("div",{class:n.contentClass},s)];return e.progress===!0&&i.push(J("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(J("div",{class:n.actionsClass},e.actions.map(r=>J(FR,r)))),n.badge>1&&i.push(J("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),J("div",{ref:r=>{S_[""+n.uid]=r},key:n.uid,class:n.class,...n.attrs},[J("div",{class:n.wrapperClass},i)])}))))}})}var KR={setDefaults(t){ki(t)===!0&&Object.assign(Sr,t)},registerType(t,e){ki(e)===!0&&(_s[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>T_(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){$c.forEach(s=>{ct[s]=Hn([]);const i=["left","center","right"].includes(s)===!0?"center":s.indexOf("top")!==-1?"top":"bottom",r=s.indexOf("left")!==-1?"start":s.indexOf("right")!==-1?"end":"center",o=["left","right"].includes(s)?`items-${s==="left"?"start":"end"} justify-center`:s==="center"?"flex-center":`items-${r}`;I_[s]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=BR("q-notify");xy(zR(),e).mount(n)}}},GR={config:{},plugins:{Notify:KR}};const YR="/";async function QR({app:t,router:e,store:n},s){let i=!1;const r=l=>{try{return e.resolve(l).href}catch{}return Object(l)===l?null:l},o=l=>{if(i=!0,typeof l=="string"&&/^https?:\/\//.test(l)){window.location.href=l;return}const c=r(l);c!==null&&(window.location.href=c,window.location.reload())},a=window.location.href.replace(window.location.origin,"");for(let l=0;i===!1&&l<s.length;l++)try{await s[l]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:YR})}catch(c){if(c&&c.url){o(c.url);return}console.error("[Quasar] boot error:",c);return}i!==!0&&(t.use(e),t.mount("#q-app"))}rR(Ff,GR).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",s=>s.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",s=>s.map(i=>i.default)];return Promise[e]([ps(()=>Promise.resolve().then(function(){return YT}),void 0)]).then(s=>{const i=n(s).filter(r=>typeof r=="function");QR(t,i)})});export{Ul as $,Am as A,Cf as B,Sf as C,Sm as D,Ge as E,$n as F,ek as G,mv as H,W_ as I,Rf as J,Pl as K,gk as L,kR as M,Fa as N,ls as O,ZR as P,FR as Q,JR as R,ut as S,nf as T,gR as U,bR as V,fk as W,tk as X,Dm as Y,ok as Z,_y as _,X as a,cv as a0,lv as a1,Ma as a2,oo as a3,b_ as a4,Fl as a5,by as a6,Et as a7,$f as a8,ak as a9,ea as aa,pk as ab,Da as ac,hy as ad,nk as ae,py as af,sk as ag,fy as ah,gy as ai,XR as aj,dk as ak,Ay as al,oR as b,Vi as c,uk as d,lk as e,rk as f,Hs as g,J as h,ot as i,vR as j,hk as k,ik as l,go as m,Ri as n,_o as o,vr as p,Vn as q,Hn as r,Wn as s,es as t,tf as u,ai as v,Cs as w,ck as x,nR as y,QT as z};
