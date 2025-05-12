const Sl=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Sl();function _a(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tl=_a(Pl);function Lo(e){return!!e||e===""}function yt(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ae(r)?Rl(r):yt(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ae(e))return e;if(Z(e))return e}}const Il=/;(?![^(]*\))/g,Nl=/:(.+)/;function Rl(e){const t={};return e.split(Il).forEach(n=>{if(n){const r=n.split(Nl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function un(e){let t="";if(ae(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=un(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ce=e=>ae(e)?e:e==null?"":D(e)||Z(e)&&(e.toString===zo||!$(e.toString))?JSON.stringify(e,Do,2):String(e),Do=(e,t)=>t&&t.__v_isRef?Do(e,t.value):Lt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:$o(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!D(t)&&!Uo(t)?String(t):t,K={},Ft=[],Fe=()=>{},Ml=()=>!1,Fl=/^on[^a-z]/,Vn=e=>Fl.test(e),wa=e=>e.startsWith("onUpdate:"),me=Object.assign,xa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ll=Object.prototype.hasOwnProperty,z=(e,t)=>Ll.call(e,t),D=Array.isArray,Lt=e=>Xn(e)==="[object Map]",$o=e=>Xn(e)==="[object Set]",$=e=>typeof e=="function",ae=e=>typeof e=="string",Ea=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",jo=e=>Z(e)&&$(e.then)&&$(e.catch),zo=Object.prototype.toString,Xn=e=>zo.call(e),Dl=e=>Xn(e).slice(8,-1),Uo=e=>Xn(e)==="[object Object]",Aa=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},$l=/-(\w)/g,qe=Jn(e=>e.replace($l,(t,n)=>n?n.toUpperCase():"")),jl=/\B([A-Z])/g,Ht=Jn(e=>e.replace(jl,"-$1").toLowerCase()),Gn=Jn(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=Jn(e=>e?`on${Gn(e)}`:""),Mn=(e,t)=>!Object.is(e,t),wr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},zl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let di;const Ul=()=>di||(di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ue;class Bl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ue&&(this.parent=Ue,this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ue;try{return Ue=this,t()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Hl(e,t=Ue){t&&t.active&&t.effects.push(e)}const Ca=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Bo=e=>(e.w&ft)>0,Ho=e=>(e.n&ft)>0,ql=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ft},Wl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Bo(a)&&!Ho(a)?a.delete(e):t[n++]=a,a.w&=~ft,a.n&=~ft}t.length=n}},Wr=new WeakMap;let Zt=0,ft=1;const Yr=30;let Te;const _t=Symbol(""),Kr=Symbol("");class Oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hl(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=st;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,st=!0,ft=1<<++Zt,Zt<=Yr?ql(this):mi(this),this.fn()}finally{Zt<=Yr&&Wl(this),ft=1<<--Zt,Te=this.parent,st=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(mi(this),this.onStop&&this.onStop(),this.active=!1)}}function mi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let st=!0;const qo=[];function qt(){qo.push(st),st=!1}function Wt(){const e=qo.pop();st=e===void 0?!0:e}function xe(e,t,n){if(st&&Te){let r=Wr.get(e);r||Wr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ca()),Wo(a)}}function Wo(e,t){let n=!1;Zt<=Yr?Ho(e)||(e.n|=ft,n=!Bo(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Ve(e,t,n,r,a,i){const o=Wr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?Aa(n)&&s.push(o.get("length")):(s.push(o.get(_t)),Lt(e)&&s.push(o.get(Kr)));break;case"delete":D(e)||(s.push(o.get(_t)),Lt(e)&&s.push(o.get(Kr)));break;case"set":Lt(e)&&s.push(o.get(_t));break}if(s.length===1)s[0]&&Vr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Vr(Ca(l))}}function Vr(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&pi(r);for(const r of n)r.computed||pi(r)}function pi(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Yl=_a("__proto__,__v_isRef,__isVue"),Yo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ea)),Kl=ka(),Vl=ka(!1,!0),Xl=ka(!0),hi=Jl();function Jl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)xe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){qt();const r=q(this)[t].apply(this,n);return Wt(),r}}),e}function ka(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?mf:Go:t?Jo:Xo).get(r))return r;const o=D(r);if(!e&&o&&z(hi,a))return Reflect.get(hi,a,i);const s=Reflect.get(r,a,i);return(Ea(a)?Yo.has(a):Yl(a))||(e||xe(r,"get",a),t)?s:de(s)?o&&Aa(a)?s:s.value:Z(s)?e?Qo(s):Zn(s):s}}const Gl=Ko(),Ql=Ko(!0);function Ko(e=!1){return function(n,r,a,i){let o=n[r];if(cn(o)&&de(o)&&!de(a))return!1;if(!e&&!cn(a)&&(Xr(a)||(a=q(a),o=q(o)),!D(n)&&de(o)&&!de(a)))return o.value=a,!0;const s=D(n)&&Aa(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===q(i)&&(s?Mn(a,o)&&Ve(n,"set",r,a):Ve(n,"add",r,a)),l}}function Zl(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ve(e,"delete",t,void 0),r}function ef(e,t){const n=Reflect.has(e,t);return(!Ea(t)||!Yo.has(t))&&xe(e,"has",t),n}function tf(e){return xe(e,"iterate",D(e)?"length":_t),Reflect.ownKeys(e)}const Vo={get:Kl,set:Gl,deleteProperty:Zl,has:ef,ownKeys:tf},nf={get:Xl,set(e,t){return!0},deleteProperty(e,t){return!0}},rf=me({},Vo,{get:Vl,set:Ql}),Sa=e=>e,Qn=e=>Reflect.getPrototypeOf(e);function bn(e,t,n=!1,r=!1){e=e.__v_raw;const a=q(e),i=q(t);n||(t!==i&&xe(a,"get",t),xe(a,"get",i));const{has:o}=Qn(a),s=r?Sa:n?Na:Ia;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function yn(e,t=!1){const n=this.__v_raw,r=q(n),a=q(e);return t||(e!==a&&xe(r,"has",e),xe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function _n(e,t=!1){return e=e.__v_raw,!t&&xe(q(e),"iterate",_t),Reflect.get(e,"size",e)}function vi(e){e=q(e);const t=q(this);return Qn(t).has.call(t,e)||(t.add(e),Ve(t,"add",e,e)),this}function gi(e,t){t=q(t);const n=q(this),{has:r,get:a}=Qn(n);let i=r.call(n,e);i||(e=q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Mn(t,o)&&Ve(n,"set",e,t):Ve(n,"add",e,t),this}function bi(e){const t=q(this),{has:n,get:r}=Qn(t);let a=n.call(t,e);a||(e=q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ve(t,"delete",e,void 0),i}function yi(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Ve(e,"clear",void 0,void 0),n}function wn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=q(o),l=t?Sa:e?Na:Ia;return!e&&xe(s,"iterate",_t),o.forEach((u,c)=>r.call(a,l(u),l(c),i))}}function xn(e,t,n){return function(...r){const a=this.__v_raw,i=q(a),o=Lt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),c=n?Sa:t?Na:Ia;return!t&&xe(i,"iterate",l?Kr:_t),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:s?[c(p[0]),c(p[1])]:c(p),done:m}},[Symbol.iterator](){return this}}}}function nt(e){return function(...t){return e==="delete"?!1:this}}function af(){const e={get(i){return bn(this,i)},get size(){return _n(this)},has:yn,add:vi,set:gi,delete:bi,clear:yi,forEach:wn(!1,!1)},t={get(i){return bn(this,i,!1,!0)},get size(){return _n(this)},has:yn,add:vi,set:gi,delete:bi,clear:yi,forEach:wn(!1,!0)},n={get(i){return bn(this,i,!0)},get size(){return _n(this,!0)},has(i){return yn.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:wn(!0,!1)},r={get(i){return bn(this,i,!0,!0)},get size(){return _n(this,!0)},has(i){return yn.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:wn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),t[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[e,n,t,r]}const[of,sf,lf,ff]=af();function Pa(e,t){const n=t?e?ff:lf:e?sf:of;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const uf={get:Pa(!1,!1)},cf={get:Pa(!1,!0)},df={get:Pa(!0,!1)},Xo=new WeakMap,Jo=new WeakMap,Go=new WeakMap,mf=new WeakMap;function pf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hf(e){return e.__v_skip||!Object.isExtensible(e)?0:pf(Dl(e))}function Zn(e){return cn(e)?e:Ta(e,!1,Vo,uf,Xo)}function vf(e){return Ta(e,!1,rf,cf,Jo)}function Qo(e){return Ta(e,!0,nf,df,Go)}function Ta(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=hf(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Dt(e){return cn(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function cn(e){return!!(e&&e.__v_isReadonly)}function Xr(e){return!!(e&&e.__v_isShallow)}function Zo(e){return Dt(e)||cn(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function es(e){return Fn(e,"__v_skip",!0),e}const Ia=e=>Z(e)?Zn(e):e,Na=e=>Z(e)?Qo(e):e;function gf(e){st&&Te&&(e=q(e),Wo(e.dep||(e.dep=Ca())))}function bf(e,t){e=q(e),e.dep&&Vr(e.dep)}function de(e){return!!(e&&e.__v_isRef===!0)}function re(e){return de(e)?e.value:e}const yf={get:(e,t,n)=>re(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return de(a)&&!de(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ts(e){return Dt(e)?e:new Proxy(e,yf)}class _f{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Oa(t,()=>{this._dirty||(this._dirty=!0,bf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=q(this);return gf(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function wf(e,t,n=!1){let r,a;const i=$(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new _f(r,a,i||!a,n)}function lt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){er(i,t,n)}return a}function Le(e,t,n,r){if($(e)){const i=lt(e,t,n,r);return i&&jo(i)&&i.catch(o=>{er(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Le(e[i],t,n,r));return a}function er(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){lt(l,null,10,[e,o,s]);return}}xf(e,n,a,r)}function xf(e,t,n,r=!0){console.error(e)}let Ln=!1,Jr=!1;const we=[];let Ke=0;const nn=[];let en=null,It=0;const rn=[];let at=null,Nt=0;const ns=Promise.resolve();let Ra=null,Gr=null;function Ef(e){const t=Ra||ns;return e?t.then(this?e.bind(this):e):t}function Af(e){let t=Ke+1,n=we.length;for(;t<n;){const r=t+n>>>1;dn(we[r])<e?t=r+1:n=r}return t}function rs(e){(!we.length||!we.includes(e,Ln&&e.allowRecurse?Ke+1:Ke))&&e!==Gr&&(e.id==null?we.push(e):we.splice(Af(e.id),0,e),as())}function as(){!Ln&&!Jr&&(Jr=!0,Ra=ns.then(ss))}function Cf(e){const t=we.indexOf(e);t>Ke&&we.splice(t,1)}function is(e,t,n,r){D(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),as()}function Of(e){is(e,en,nn,It)}function kf(e){is(e,at,rn,Nt)}function tr(e,t=null){if(nn.length){for(Gr=t,en=[...new Set(nn)],nn.length=0,It=0;It<en.length;It++)en[It]();en=null,It=0,Gr=null,tr(e,t)}}function os(e){if(tr(),rn.length){const t=[...new Set(rn)];if(rn.length=0,at){at.push(...t);return}for(at=t,at.sort((n,r)=>dn(n)-dn(r)),Nt=0;Nt<at.length;Nt++)at[Nt]();at=null,Nt=0}}const dn=e=>e.id==null?1/0:e.id;function ss(e){Jr=!1,Ln=!0,tr(e),we.sort((n,r)=>dn(n)-dn(r));const t=Fe;try{for(Ke=0;Ke<we.length;Ke++){const n=we[Ke];n&&n.active!==!1&&lt(n,null,14)}}finally{Ke=0,we.length=0,os(),Ln=!1,Ra=null,(we.length||nn.length||rn.length)&&ss(e)}}function Sf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:m}=r[c]||K;m&&(a=n.map(w=>w.trim())),p&&(a=n.map(zl))}let s,l=r[s=_r(t)]||r[s=_r(qe(t))];!l&&i&&(l=r[s=_r(Ht(t))]),l&&Le(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Le(u,e,6,a)}}function ls(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!$(e)){const l=u=>{const c=ls(u,t,!0);c&&(s=!0,me(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(D(i)?i.forEach(l=>o[l]=null):me(o,i),r.set(e,o),o)}function nr(e,t){return!e||!Vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Ht(t))||z(e,t))}let Ne=null,rr=null;function Dn(e){const t=Ne;return Ne=e,rr=e&&e.type.__scopeId||null,t}function Pf(e){rr=e}function Tf(){rr=null}function If(e,t=Ne,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ti(-1);const i=Dn(t),o=e(...a);return Dn(i),r._d&&Ti(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function xr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:c,renderCache:p,data:m,setupState:w,ctx:F,inheritAttrs:L}=e;let P,y;const k=Dn(e);try{if(n.shapeFlag&4){const j=a||r;P=Be(c.call(j,j,p,i,w,m,F)),y=l}else{const j=t;P=Be(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=t.props?l:Nf(l)}}catch(j){an.length=0,er(j,e,1),P=Q(xt)}let R=P;if(y&&L!==!1){const j=Object.keys(y),{shapeFlag:C}=R;j.length&&C&7&&(o&&j.some(wa)&&(y=Rf(y,o)),R=jt(R,y))}return n.dirs&&(R=jt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),P=R,Dn(k),P}const Nf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vn(n))&&((t||(t={}))[n]=e[n]);return t},Rf=(e,t)=>{const n={};for(const r in e)(!wa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Mf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_i(r,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let p=0;p<c.length;p++){const m=c[p];if(o[m]!==r[m]&&!nr(u,m))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?_i(r,o,u):!0:!!o;return!1}function _i(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!nr(n,i))return!0}return!1}function Ff({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Lf=e=>e.__isSuspense;function Df(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):kf(e)}function $f(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function Er(e,t,n=!1){const r=le||Ne;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&$(t)?t.call(r.proxy):t}}const wi={};function Cn(e,t,n){return fs(e,t,n)}function fs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=le;let l,u=!1,c=!1;if(de(e)?(l=()=>e.value,u=Xr(e)):Dt(e)?(l=()=>e,r=!0):D(e)?(c=!0,u=e.some(y=>Dt(y)||Xr(y)),l=()=>e.map(y=>{if(de(y))return y.value;if(Dt(y))return gt(y);if($(y))return lt(y,s,2)})):$(e)?t?l=()=>lt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return p&&p(),Le(e,s,3,[m])}:l=Fe,t&&r){const y=l;l=()=>gt(y())}let p,m=y=>{p=P.onStop=()=>{lt(y,s,4)}};if(pn)return m=Fe,t?n&&Le(t,s,3,[l(),c?[]:void 0,m]):l(),Fe;let w=c?[]:wi;const F=()=>{if(!!P.active)if(t){const y=P.run();(r||u||(c?y.some((k,R)=>Mn(k,w[R])):Mn(y,w)))&&(p&&p(),Le(t,s,3,[y,w===wi?void 0:w,m]),w=y)}else P.run()};F.allowRecurse=!!t;let L;a==="sync"?L=F:a==="post"?L=()=>ve(F,s&&s.suspense):L=()=>Of(F);const P=new Oa(l,L);return t?n?F():w=P.run():a==="post"?ve(P.run.bind(P),s&&s.suspense):P.run(),()=>{P.stop(),s&&s.scope&&xa(s.scope.effects,P)}}function jf(e,t,n){const r=this.proxy,a=ae(e)?e.includes(".")?us(r,e):()=>r[e]:e.bind(r,r);let i;$(t)?i=t:(i=t.handler,n=t);const o=le;zt(this);const s=fs(a,i.bind(r),n);return o?zt(o):wt(),s}function us(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function gt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))gt(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if($o(e)||Lt(e))e.forEach(n=>{gt(n,t)});else if(Uo(e))for(const n in e)gt(e[n],t);return e}function Ma(e){return $(e)?{setup:e,name:e.name}:e}const On=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function zf(e,t){ds(e,"a",t)}function Uf(e,t){ds(e,"da",t)}function ds(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)cs(a.parent.vnode)&&Bf(r,t,n,a),a=a.parent}}function Bf(e,t,n,r){const a=ar(t,e,r,!0);ms(()=>{xa(r[t],a)},n)}function ar(e,t,n=le,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;qt(),zt(n);const s=Le(t,n,e,o);return wt(),Wt(),s});return r?a.unshift(i):a.push(i),i}}const Qe=e=>(t,n=le)=>(!pn||e==="sp")&&ar(e,t,n),Hf=Qe("bm"),qf=Qe("m"),Wf=Qe("bu"),Yf=Qe("u"),Kf=Qe("bum"),ms=Qe("um"),Vf=Qe("sp"),Xf=Qe("rtg"),Jf=Qe("rtc");function Gf(e,t=le){ar("ec",e,t)}function Qf(e,t){const n=Ne;if(n===null)return e;const r=or(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,u=K]=t[i];$(o)&&(o={mounted:o,updated:o}),o.deep&&gt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:u})}return e}function mt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(qt(),Le(l,n,8,[e.el,s,e,t]),Wt())}}const ps="components";function Fa(e,t){return eu(ps,e,!0,t)||e}const Zf=Symbol();function eu(e,t,n=!0,r=!1){const a=Ne||le;if(a){const i=a.type;if(e===ps){const s=Tu(i,!1);if(s&&(s===t||s===qe(t)||s===Gn(qe(t))))return i}const o=xi(a[e]||i[e],t)||xi(a.appContext[e],t);return!o&&r?i:o}}function xi(e,t){return e&&(e[t]||e[qe(t)]||e[Gn(qe(t))])}function Ei(e,t,n,r){let a;const i=n&&n[r];if(D(e)||ae(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Z(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Qr=e=>e?Os(e)?or(e)||e.proxy:Qr(e.parent):null,$n=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qr(e.parent),$root:e=>Qr(e.root),$emit:e=>e.emit,$options:e=>vs(e),$forceUpdate:e=>e.f||(e.f=()=>rs(e.update)),$nextTick:e=>e.n||(e.n=Ef.bind(e.proxy)),$watch:e=>jf.bind(e)}),tu={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&z(r,t))return o[t]=1,r[t];if(a!==K&&z(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&z(u,t))return o[t]=3,i[t];if(n!==K&&z(n,t))return o[t]=4,n[t];Zr&&(o[t]=0)}}const c=$n[t];let p,m;if(c)return t==="$attrs"&&xe(e,"get",t),c(e);if((p=s.__cssModules)&&(p=p[t]))return p;if(n!==K&&z(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,z(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&z(a,t)?(a[t]=n,!0):r!==K&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&z(e,o)||t!==K&&z(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z($n,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Zr=!0;function nu(e){const t=vs(e),n=e.proxy,r=e.ctx;Zr=!1,t.beforeCreate&&Ai(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:c,beforeMount:p,mounted:m,beforeUpdate:w,updated:F,activated:L,deactivated:P,beforeDestroy:y,beforeUnmount:k,destroyed:R,unmounted:j,render:C,renderTracked:ie,renderTriggered:ue,errorCaptured:pe,serverPrefetch:oe,expose:et,inheritAttrs:De,components:se,directives:Oe,filters:$e}=t;if(u&&ru(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const V=o[G];$(V)&&(r[G]=V.bind(n))}if(a){const G=a.call(n,n);Z(G)&&(e.data=Zn(G))}if(Zr=!0,i)for(const G in i){const V=i[G],We=$(V)?V.bind(n,n):$(V.get)?V.get.bind(n,n):Fe,gr=!$(V)&&$(V.set)?V.set.bind(n):Fe,Xt=Ae({get:We,set:gr});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Ot=>Xt.value=Ot})}if(s)for(const G in s)hs(s[G],r,n,G);if(l){const G=$(l)?l.call(n):l;Reflect.ownKeys(G).forEach(V=>{$f(V,G[V])})}c&&Ai(c,e,"c");function ee(G,V){D(V)?V.forEach(We=>G(We.bind(n))):V&&G(V.bind(n))}if(ee(Hf,p),ee(qf,m),ee(Wf,w),ee(Yf,F),ee(zf,L),ee(Uf,P),ee(Gf,pe),ee(Jf,ie),ee(Xf,ue),ee(Kf,k),ee(ms,j),ee(Vf,oe),D(et))if(et.length){const G=e.exposed||(e.exposed={});et.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:We=>n[V]=We})})}else e.exposed||(e.exposed={});C&&e.render===Fe&&(e.render=C),De!=null&&(e.inheritAttrs=De),se&&(e.components=se),Oe&&(e.directives=Oe)}function ru(e,t,n=Fe,r=!1){D(e)&&(e=ea(e));for(const a in e){const i=e[a];let o;Z(i)?"default"in i?o=Er(i.from||a,i.default,!0):o=Er(i.from||a):o=Er(i),de(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ai(e,t,n){Le(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function hs(e,t,n,r){const a=r.includes(".")?us(n,r):()=>n[r];if(ae(e)){const i=t[e];$(i)&&Cn(a,i)}else if($(e))Cn(a,e.bind(n));else if(Z(e))if(D(e))e.forEach(i=>hs(i,t,n,r));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&Cn(a,i,e)}}function vs(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>jn(l,u,o,!0)),jn(l,t,o)),i.set(t,l),l}function jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&jn(e,i,n,!0),a&&a.forEach(o=>jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=au[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const au={data:Ci,props:ht,emits:ht,methods:ht,computed:ht,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:ht,directives:ht,watch:ou,provide:Ci,inject:iu};function Ci(e,t){return t?e?function(){return me($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function iu(e,t){return ht(ea(e),ea(t))}function ea(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function ht(e,t){return e?me(me(Object.create(null),e),t):t}function ou(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=ce(e[r],t[r]);return n}function su(e,t,n,r=!1){const a={},i={};Fn(i,ir,1),e.propsDefaults=Object.create(null),gs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:vf(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function lu(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=q(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let p=0;p<c.length;p++){let m=c[p];if(nr(e.emitsOptions,m))continue;const w=t[m];if(l)if(z(i,m))w!==i[m]&&(i[m]=w,u=!0);else{const F=qe(m);a[F]=ta(l,s,F,w,e,!1)}else w!==i[m]&&(i[m]=w,u=!0)}}}else{gs(e,t,a,i)&&(u=!0);let c;for(const p in s)(!t||!z(t,p)&&((c=Ht(p))===p||!z(t,c)))&&(l?n&&(n[p]!==void 0||n[c]!==void 0)&&(a[p]=ta(l,s,p,void 0,e,!0)):delete a[p]);if(i!==s)for(const p in i)(!t||!z(t,p)&&!0)&&(delete i[p],u=!0)}u&&Ve(e,"set","$attrs")}function gs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(An(l))continue;const u=t[l];let c;a&&z(a,c=qe(l))?!i||!i.includes(c)?n[c]=u:(s||(s={}))[c]=u:nr(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=q(n),u=s||K;for(let c=0;c<i.length;c++){const p=i[c];n[p]=ta(a,l,p,u[p],e,!z(u,p))}}return o}function ta(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&$(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(zt(a),r=u[n]=l.call(null,t),wt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}function bs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!$(e)){const c=p=>{l=!0;const[m,w]=bs(p,t,!0);me(o,m),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return r.set(e,Ft),Ft;if(D(i))for(let c=0;c<i.length;c++){const p=qe(i[c]);Oi(p)&&(o[p]=K)}else if(i)for(const c in i){const p=qe(c);if(Oi(p)){const m=i[c],w=o[p]=D(m)||$(m)?{type:m}:m;if(w){const F=Pi(Boolean,w.type),L=Pi(String,w.type);w[0]=F>-1,w[1]=L<0||F<L,(F>-1||z(w,"default"))&&s.push(p)}}}const u=[o,s];return r.set(e,u),u}function Oi(e){return e[0]!=="$"}function ki(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Si(e,t){return ki(e)===ki(t)}function Pi(e,t){return D(t)?t.findIndex(n=>Si(n,e)):$(t)&&Si(t,e)?0:-1}const ys=e=>e[0]==="_"||e==="$stable",La=e=>D(e)?e.map(Be):[Be(e)],fu=(e,t,n)=>{if(t._n)return t;const r=If((...a)=>La(t(...a)),n);return r._c=!1,r},_s=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ys(a))continue;const i=e[a];if($(i))t[a]=fu(a,i,r);else if(i!=null){const o=La(i);t[a]=()=>o}}},ws=(e,t)=>{const n=La(t);e.slots.default=()=>n},uu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),Fn(t,"_",n)):_s(t,e.slots={})}else e.slots={},t&&ws(e,t);Fn(e.slots,ir,1)},cu=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(me(a,t),!n&&s===1&&delete a._):(i=!t.$stable,_s(t,a)),o=t}else t&&(ws(e,t),o={default:1});if(i)for(const s in a)!ys(s)&&!(s in o)&&delete a[s]};function xs(){return{app:null,config:{isNativeTag:Ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let du=0;function mu(e,t){return function(r,a=null){$(r)||(r=Object.assign({},r)),a!=null&&!Z(a)&&(a=null);const i=xs(),o=new Set;let s=!1;const l=i.app={_uid:du++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Nu,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(l,...c)):$(u)&&(o.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,p){if(!s){const m=Q(r,a);return m.appContext=i,c&&t?t(m,u):e(m,u,p),s=!0,l._container=u,u.__vue_app__=l,or(m.component)||m.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l}};return l}}function na(e,t,n,r,a=!1){if(D(e)){e.forEach((m,w)=>na(m,t&&(D(t)?t[w]:t),n,r,a));return}if(On(r)&&!a)return;const i=r.shapeFlag&4?or(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,c=s.refs===K?s.refs={}:s.refs,p=s.setupState;if(u!=null&&u!==l&&(ae(u)?(c[u]=null,z(p,u)&&(p[u]=null)):de(u)&&(u.value=null)),$(l))lt(l,s,12,[o,c]);else{const m=ae(l),w=de(l);if(m||w){const F=()=>{if(e.f){const L=m?c[l]:l.value;a?D(L)&&xa(L,i):D(L)?L.includes(i)||L.push(i):m?(c[l]=[i],z(p,l)&&(p[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else m?(c[l]=o,z(p,l)&&(p[l]=o)):w&&(l.value=o,e.k&&(c[e.k]=o))};o?(F.id=-1,ve(F,n)):F()}}}const ve=Df;function pu(e){return hu(e)}function hu(e,t){const n=Ul();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:c,parentNode:p,nextSibling:m,setScopeId:w=Fe,cloneNode:F,insertStaticContent:L}=e,P=(f,d,h,g=null,v=null,x=null,A=!1,_=null,E=!!d.dynamicChildren)=>{if(f===d)return;f&&!Gt(f,d)&&(g=gn(f),tt(f,v,x,!0),f=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:b,ref:T,shapeFlag:S}=d;switch(b){case Da:y(f,d,h,g);break;case xt:k(f,d,h,g);break;case Ar:f==null&&R(d,h,g,A);break;case Pe:Oe(f,d,h,g,v,x,A,_,E);break;default:S&1?ie(f,d,h,g,v,x,A,_,E):S&6?$e(f,d,h,g,v,x,A,_,E):(S&64||S&128)&&b.process(f,d,h,g,v,x,A,_,E,kt)}T!=null&&v&&na(T,f&&f.ref,x,d||f,!d)},y=(f,d,h,g)=>{if(f==null)r(d.el=s(d.children),h,g);else{const v=d.el=f.el;d.children!==f.children&&u(v,d.children)}},k=(f,d,h,g)=>{f==null?r(d.el=l(d.children||""),h,g):d.el=f.el},R=(f,d,h,g)=>{[f.el,f.anchor]=L(f.children,d,h,g,f.el,f.anchor)},j=({el:f,anchor:d},h,g)=>{let v;for(;f&&f!==d;)v=m(f),r(f,h,g),f=v;r(d,h,g)},C=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=m(f),a(f),f=h;a(d)},ie=(f,d,h,g,v,x,A,_,E)=>{A=A||d.type==="svg",f==null?ue(d,h,g,v,x,A,_,E):et(f,d,v,x,A,_,E)},ue=(f,d,h,g,v,x,A,_)=>{let E,b;const{type:T,props:S,shapeFlag:I,transition:M,patchFlag:U,dirs:W}=f;if(f.el&&F!==void 0&&U===-1)E=f.el=F(f.el);else{if(E=f.el=o(f.type,x,S&&S.is,S),I&8?c(E,f.children):I&16&&oe(f.children,E,null,g,v,x&&T!=="foreignObject",A,_),W&&mt(f,null,g,"created"),S){for(const X in S)X!=="value"&&!An(X)&&i(E,X,null,S[X],x,f.children,g,v,Ye);"value"in S&&i(E,"value",null,S.value),(b=S.onVnodeBeforeMount)&&ze(b,g,f)}pe(E,f,f.scopeId,A,g)}W&&mt(f,null,g,"beforeMount");const Y=(!v||v&&!v.pendingBranch)&&M&&!M.persisted;Y&&M.beforeEnter(E),r(E,d,h),((b=S&&S.onVnodeMounted)||Y||W)&&ve(()=>{b&&ze(b,g,f),Y&&M.enter(E),W&&mt(f,null,g,"mounted")},v)},pe=(f,d,h,g,v)=>{if(h&&w(f,h),g)for(let x=0;x<g.length;x++)w(f,g[x]);if(v){let x=v.subTree;if(d===x){const A=v.vnode;pe(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},oe=(f,d,h,g,v,x,A,_,E=0)=>{for(let b=E;b<f.length;b++){const T=f[b]=_?it(f[b]):Be(f[b]);P(null,T,d,h,g,v,x,A,_)}},et=(f,d,h,g,v,x,A)=>{const _=d.el=f.el;let{patchFlag:E,dynamicChildren:b,dirs:T}=d;E|=f.patchFlag&16;const S=f.props||K,I=d.props||K;let M;h&&pt(h,!1),(M=I.onVnodeBeforeUpdate)&&ze(M,h,d,f),T&&mt(d,f,h,"beforeUpdate"),h&&pt(h,!0);const U=v&&d.type!=="foreignObject";if(b?De(f.dynamicChildren,b,_,h,g,U,x):A||We(f,d,_,null,h,g,U,x,!1),E>0){if(E&16)se(_,d,S,I,h,g,v);else if(E&2&&S.class!==I.class&&i(_,"class",null,I.class,v),E&4&&i(_,"style",S.style,I.style,v),E&8){const W=d.dynamicProps;for(let Y=0;Y<W.length;Y++){const X=W[Y],ke=S[X],St=I[X];(St!==ke||X==="value")&&i(_,X,ke,St,v,f.children,h,g,Ye)}}E&1&&f.children!==d.children&&c(_,d.children)}else!A&&b==null&&se(_,d,S,I,h,g,v);((M=I.onVnodeUpdated)||T)&&ve(()=>{M&&ze(M,h,d,f),T&&mt(d,f,h,"updated")},g)},De=(f,d,h,g,v,x,A)=>{for(let _=0;_<d.length;_++){const E=f[_],b=d[_],T=E.el&&(E.type===Pe||!Gt(E,b)||E.shapeFlag&70)?p(E.el):h;P(E,b,T,null,g,v,x,A,!0)}},se=(f,d,h,g,v,x,A)=>{if(h!==g){for(const _ in g){if(An(_))continue;const E=g[_],b=h[_];E!==b&&_!=="value"&&i(f,_,b,E,A,d.children,v,x,Ye)}if(h!==K)for(const _ in h)!An(_)&&!(_ in g)&&i(f,_,h[_],null,A,d.children,v,x,Ye);"value"in g&&i(f,"value",h.value,g.value)}},Oe=(f,d,h,g,v,x,A,_,E)=>{const b=d.el=f?f.el:s(""),T=d.anchor=f?f.anchor:s("");let{patchFlag:S,dynamicChildren:I,slotScopeIds:M}=d;M&&(_=_?_.concat(M):M),f==null?(r(b,h,g),r(T,h,g),oe(d.children,h,T,v,x,A,_,E)):S>0&&S&64&&I&&f.dynamicChildren?(De(f.dynamicChildren,I,h,v,x,A,_),(d.key!=null||v&&d===v.subTree)&&Es(f,d,!0)):We(f,d,h,T,v,x,A,_,E)},$e=(f,d,h,g,v,x,A,_,E)=>{d.slotScopeIds=_,f==null?d.shapeFlag&512?v.ctx.activate(d,h,g,A,E):Vt(d,h,g,v,x,A,E):ee(f,d,E)},Vt=(f,d,h,g,v,x,A)=>{const _=f.component=Cu(f,g,v);if(cs(f)&&(_.ctx.renderer=kt),Ou(_),_.asyncDep){if(v&&v.registerDep(_,G),!f.el){const E=_.subTree=Q(xt);k(null,E,d,h)}return}G(_,f,d,h,v,x,A)},ee=(f,d,h)=>{const g=d.component=f.component;if(Mf(f,d,h))if(g.asyncDep&&!g.asyncResolved){V(g,d,h);return}else g.next=d,Cf(g.update),g.update();else d.el=f.el,g.vnode=d},G=(f,d,h,g,v,x,A)=>{const _=()=>{if(f.isMounted){let{next:T,bu:S,u:I,parent:M,vnode:U}=f,W=T,Y;pt(f,!1),T?(T.el=U.el,V(f,T,A)):T=U,S&&wr(S),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&ze(Y,M,T,U),pt(f,!0);const X=xr(f),ke=f.subTree;f.subTree=X,P(ke,X,p(ke.el),gn(ke),f,v,x),T.el=X.el,W===null&&Ff(f,X.el),I&&ve(I,v),(Y=T.props&&T.props.onVnodeUpdated)&&ve(()=>ze(Y,M,T,U),v)}else{let T;const{el:S,props:I}=d,{bm:M,m:U,parent:W}=f,Y=On(d);if(pt(f,!1),M&&wr(M),!Y&&(T=I&&I.onVnodeBeforeMount)&&ze(T,W,d),pt(f,!0),S&&yr){const X=()=>{f.subTree=xr(f),yr(S,f.subTree,f,v,null)};Y?d.type.__asyncLoader().then(()=>!f.isUnmounted&&X()):X()}else{const X=f.subTree=xr(f);P(null,X,h,g,f,v,x),d.el=X.el}if(U&&ve(U,v),!Y&&(T=I&&I.onVnodeMounted)){const X=d;ve(()=>ze(T,W,X),v)}(d.shapeFlag&256||W&&On(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ve(f.a,v),f.isMounted=!0,d=h=g=null}},E=f.effect=new Oa(_,()=>rs(b),f.scope),b=f.update=()=>E.run();b.id=f.uid,pt(f,!0),b()},V=(f,d,h)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,lu(f,d.props,g,h),cu(f,d.children,h),qt(),tr(void 0,f.update),Wt()},We=(f,d,h,g,v,x,A,_,E=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,S=d.children,{patchFlag:I,shapeFlag:M}=d;if(I>0){if(I&128){Xt(b,S,h,g,v,x,A,_,E);return}else if(I&256){gr(b,S,h,g,v,x,A,_,E);return}}M&8?(T&16&&Ye(b,v,x),S!==b&&c(h,S)):T&16?M&16?Xt(b,S,h,g,v,x,A,_,E):Ye(b,v,x,!0):(T&8&&c(h,""),M&16&&oe(S,h,g,v,x,A,_,E))},gr=(f,d,h,g,v,x,A,_,E)=>{f=f||Ft,d=d||Ft;const b=f.length,T=d.length,S=Math.min(b,T);let I;for(I=0;I<S;I++){const M=d[I]=E?it(d[I]):Be(d[I]);P(f[I],M,h,null,v,x,A,_,E)}b>T?Ye(f,v,x,!0,!1,S):oe(d,h,g,v,x,A,_,E,S)},Xt=(f,d,h,g,v,x,A,_,E)=>{let b=0;const T=d.length;let S=f.length-1,I=T-1;for(;b<=S&&b<=I;){const M=f[b],U=d[b]=E?it(d[b]):Be(d[b]);if(Gt(M,U))P(M,U,h,null,v,x,A,_,E);else break;b++}for(;b<=S&&b<=I;){const M=f[S],U=d[I]=E?it(d[I]):Be(d[I]);if(Gt(M,U))P(M,U,h,null,v,x,A,_,E);else break;S--,I--}if(b>S){if(b<=I){const M=I+1,U=M<T?d[M].el:g;for(;b<=I;)P(null,d[b]=E?it(d[b]):Be(d[b]),h,U,v,x,A,_,E),b++}}else if(b>I)for(;b<=S;)tt(f[b],v,x,!0),b++;else{const M=b,U=b,W=new Map;for(b=U;b<=I;b++){const ye=d[b]=E?it(d[b]):Be(d[b]);ye.key!=null&&W.set(ye.key,b)}let Y,X=0;const ke=I-U+1;let St=!1,fi=0;const Jt=new Array(ke);for(b=0;b<ke;b++)Jt[b]=0;for(b=M;b<=S;b++){const ye=f[b];if(X>=ke){tt(ye,v,x,!0);continue}let je;if(ye.key!=null)je=W.get(ye.key);else for(Y=U;Y<=I;Y++)if(Jt[Y-U]===0&&Gt(ye,d[Y])){je=Y;break}je===void 0?tt(ye,v,x,!0):(Jt[je-U]=b+1,je>=fi?fi=je:St=!0,P(ye,d[je],h,null,v,x,A,_,E),X++)}const ui=St?vu(Jt):Ft;for(Y=ui.length-1,b=ke-1;b>=0;b--){const ye=U+b,je=d[ye],ci=ye+1<T?d[ye+1].el:g;Jt[b]===0?P(null,je,h,ci,v,x,A,_,E):St&&(Y<0||b!==ui[Y]?Ot(je,h,ci,2):Y--)}}},Ot=(f,d,h,g,v=null)=>{const{el:x,type:A,transition:_,children:E,shapeFlag:b}=f;if(b&6){Ot(f.component.subTree,d,h,g);return}if(b&128){f.suspense.move(d,h,g);return}if(b&64){A.move(f,d,h,kt);return}if(A===Pe){r(x,d,h);for(let S=0;S<E.length;S++)Ot(E[S],d,h,g);r(f.anchor,d,h);return}if(A===Ar){j(f,d,h);return}if(g!==2&&b&1&&_)if(g===0)_.beforeEnter(x),r(x,d,h),ve(()=>_.enter(x),v);else{const{leave:S,delayLeave:I,afterLeave:M}=_,U=()=>r(x,d,h),W=()=>{S(x,()=>{U(),M&&M()})};I?I(x,U,W):W()}else r(x,d,h)},tt=(f,d,h,g=!1,v=!1)=>{const{type:x,props:A,ref:_,children:E,dynamicChildren:b,shapeFlag:T,patchFlag:S,dirs:I}=f;if(_!=null&&na(_,null,h,f,!0),T&256){d.ctx.deactivate(f);return}const M=T&1&&I,U=!On(f);let W;if(U&&(W=A&&A.onVnodeBeforeUnmount)&&ze(W,d,f),T&6)kl(f.component,h,g);else{if(T&128){f.suspense.unmount(h,g);return}M&&mt(f,null,d,"beforeUnmount"),T&64?f.type.remove(f,d,h,v,kt,g):b&&(x!==Pe||S>0&&S&64)?Ye(b,d,h,!1,!0):(x===Pe&&S&384||!v&&T&16)&&Ye(E,d,h),g&&si(f)}(U&&(W=A&&A.onVnodeUnmounted)||M)&&ve(()=>{W&&ze(W,d,f),M&&mt(f,null,d,"unmounted")},h)},si=f=>{const{type:d,el:h,anchor:g,transition:v}=f;if(d===Pe){Ol(h,g);return}if(d===Ar){C(f);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:_}=v,E=()=>A(h,x);_?_(f.el,x,E):E()}else x()},Ol=(f,d)=>{let h;for(;f!==d;)h=m(f),a(f),f=h;a(d)},kl=(f,d,h)=>{const{bum:g,scope:v,update:x,subTree:A,um:_}=f;g&&wr(g),v.stop(),x&&(x.active=!1,tt(A,f,d,h)),_&&ve(_,d),ve(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ye=(f,d,h,g=!1,v=!1,x=0)=>{for(let A=x;A<f.length;A++)tt(f[A],d,h,g,v)},gn=f=>f.shapeFlag&6?gn(f.component.subTree):f.shapeFlag&128?f.suspense.next():m(f.anchor||f.el),li=(f,d,h)=>{f==null?d._vnode&&tt(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,h),os(),d._vnode=f},kt={p:P,um:tt,m:Ot,r:si,mt:Vt,mc:oe,pc:We,pbc:De,n:gn,o:e};let br,yr;return t&&([br,yr]=t(kt)),{render:li,hydrate:br,createApp:mu(li,br)}}function pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Es(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=it(a[i]),s.el=o.el),n||Es(o,s))}}function vu(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const gu=e=>e.__isTeleport,Pe=Symbol(void 0),Da=Symbol(void 0),xt=Symbol(void 0),Ar=Symbol(void 0),an=[];let Re=null;function ne(e=!1){an.push(Re=e?null:[])}function bu(){an.pop(),Re=an[an.length-1]||null}let mn=1;function Ti(e){mn+=e}function As(e){return e.dynamicChildren=mn>0?Re||Ft:null,bu(),mn>0&&Re&&Re.push(e),e}function ge(e,t,n,r,a,i){return As(B(e,t,n,r,a,i,!0))}function kn(e,t,n,r,a){return As(Q(e,t,n,r,a,!0))}function ra(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const ir="__vInternal",Cs=({key:e})=>e!=null?e:null,Sn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ae(e)||de(e)||$(e)?{i:Ne,r:e,k:t,f:!!n}:e:null;function B(e,t=null,n=null,r=0,a=null,i=e===Pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Cs(t),ref:t&&Sn(t),scopeId:rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?($a(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),mn>0&&!o&&Re&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Re.push(l),l}const Q=yu;function yu(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Zf)&&(e=xt),ra(e)){const s=jt(e,t,!0);return n&&$a(s,n),mn>0&&!i&&Re&&(s.shapeFlag&6?Re[Re.indexOf(e)]=s:Re.push(s)),s.patchFlag|=-2,s}if(Iu(e)&&(e=e.__vccOpts),t){t=_u(t);let{class:s,style:l}=t;s&&!ae(s)&&(t.class=un(s)),Z(l)&&(Zo(l)&&!D(l)&&(l=me({},l)),t.style=yt(l))}const o=ae(e)?1:Lf(e)?128:gu(e)?64:Z(e)?4:$(e)?2:0;return B(e,t,n,r,a,o,i,!0)}function _u(e){return e?Zo(e)||ir in e?me({},e):e:null}function jt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?xu(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Cs(s),ref:t&&t.ref?n&&a?D(a)?a.concat(Sn(t)):[a,Sn(t)]:Sn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor}}function wu(e=" ",t=0){return Q(Da,null,e,t)}function on(e="",t=!1){return t?(ne(),kn(xt,null,e)):Q(xt,null,e)}function Be(e){return e==null||typeof e=="boolean"?Q(xt):D(e)?Q(Pe,null,e.slice()):typeof e=="object"?it(e):Q(Da,null,String(e))}function it(e){return e.el===null||e.memo?e:jt(e)}function $a(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),$a(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ir in t)?t._ctx=Ne:a===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),r&64?(n=16,t=[wu(t)]):n=8);e.children=t,e.shapeFlag|=n}function xu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=un([t.class,r.class]));else if(a==="style")t.style=yt([t.style,r.style]);else if(Vn(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function ze(e,t,n,r=null){Le(e,t,7,[n,r])}const Eu=xs();let Au=0;function Cu(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Eu,i={uid:Au++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bs(r,a),emitsOptions:ls(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Sf.bind(null,i),e.ce&&e.ce(i),i}let le=null;const zt=e=>{le=e,e.scope.on()},wt=()=>{le&&le.scope.off(),le=null};function Os(e){return e.vnode.shapeFlag&4}let pn=!1;function Ou(e,t=!1){pn=t;const{props:n,children:r}=e.vnode,a=Os(e);su(e,n,a,t),uu(e,r);const i=a?ku(e,t):void 0;return pn=!1,i}function ku(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=es(new Proxy(e.ctx,tu));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Pu(e):null;zt(e),qt();const i=lt(r,e,0,[e.props,a]);if(Wt(),wt(),jo(i)){if(i.then(wt,wt),t)return i.then(o=>{Ii(e,o,t)}).catch(o=>{er(o,e,0)});e.asyncDep=i}else Ii(e,i,t)}else ks(e,t)}function Ii(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=ts(t)),ks(e,n)}let Ni;function ks(e,t,n){const r=e.type;if(!e.render){if(!t&&Ni&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=me(me({isCustomElement:i,delimiters:s},o),l);r.render=Ni(a,u)}}e.render=r.render||Fe}zt(e),qt(),nu(e),Wt(),wt()}function Su(e){return new Proxy(e.attrs,{get(t,n){return xe(e,"get","$attrs"),t[n]}})}function Pu(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Su(e))},slots:e.slots,emit:e.emit,expose:t}}function or(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ts(es(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $n)return $n[n](e)}}))}function Tu(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function Iu(e){return $(e)&&"__vccOpts"in e}const Ae=(e,t)=>wf(e,t,pn);function Ss(e,t,n){const r=arguments.length;return r===2?Z(t)&&!D(t)?ra(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ra(n)&&(n=[n]),Q(e,t,n))}const Nu="3.2.37",Ru="http://www.w3.org/2000/svg",vt=typeof document<"u"?document:null,Ri=vt&&vt.createElement("template"),Mu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?vt.createElementNS(Ru,e):vt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ri.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ri.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Fu(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Lu(e,t,n){const r=e.style,a=ae(n);if(n&&!a){for(const i in n)aa(r,i,n[i]);if(t&&!ae(t))for(const i in t)n[i]==null&&aa(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Mi=/\s*!important$/;function aa(e,t,n){if(D(n))n.forEach(r=>aa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Du(e,t);Mi.test(n)?e.setProperty(Ht(r),n.replace(Mi,""),"important"):e[r]=n}}const Fi=["Webkit","Moz","ms"],Cr={};function Du(e,t){const n=Cr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return Cr[t]=r;r=Gn(r);for(let a=0;a<Fi.length;a++){const i=Fi[a]+r;if(i in e)return Cr[t]=i}return t}const Li="http://www.w3.org/1999/xlink";function $u(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Li,t.slice(6,t.length)):e.setAttributeNS(Li,t,n);else{const i=Tl(t);n==null||i&&!Lo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function ju(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Lo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[Ps,zu]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ia=0;const Uu=Promise.resolve(),Bu=()=>{ia=0},Hu=()=>ia||(Uu.then(Bu),ia=Ps());function qu(e,t,n,r){e.addEventListener(t,n,r)}function Wu(e,t,n,r){e.removeEventListener(t,n,r)}function Yu(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Ku(t);if(r){const u=i[t]=Vu(r,a);qu(e,s,u,l)}else o&&(Wu(e,s,o,l),i[t]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function Ku(e){let t;if(Di.test(e)){t={};let n;for(;n=e.match(Di);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ht(e.slice(2)),t]}function Vu(e,t){const n=r=>{const a=r.timeStamp||Ps();(zu||a>=n.attached-1)&&Le(Xu(r,n.value),t,5,[r])};return n.value=e,n.attached=Hu(),n}function Xu(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const $i=/^on[a-z]/,Ju=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Fu(e,r,a):t==="style"?Lu(e,n,r):Vn(t)?wa(t)||Yu(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gu(e,t,r,a))?ju(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),$u(e,t,r,a))};function Gu(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&$i.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||$i.test(t)&&ae(n)?!1:t in e}const Qu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Qt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Qt(e,!0),r.enter(e)):r.leave(e,()=>{Qt(e,!1)}):Qt(e,t))},beforeUnmount(e,{value:t}){Qt(e,t)}};function Qt(e,t){e.style.display=t?e._vod:"none"}const Zu=me({patchProp:Ju},Mu);let ji;function ec(){return ji||(ji=pu(Zu))}const tc=(...e)=>{const t=ec().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=nc(r);if(!a)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function nc(e){return ae(e)?document.querySelector(e):e}const dt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},rc={class:"timezone"},ac={data(){return{state:H}}},ic=Object.assign(ac,{__name:"Timezone",setup(e){return(t,n)=>{var r,a;return ne(),ge("div",rc,[B("p",null,Ce((r=re(H))==null?void 0:r.currentTime),1),B("p",null,Ce((a=re(H))==null?void 0:a.timezone),1)])}}}),oc=dt(ic,[["__scopeId","data-v-f6fdc9fa"]]);function zn(e){return new Date(e*1e3)}function Ts(e){const t=n=>n<10?"0"+n:n;return t(e.getHours())+":"+t(e.getMinutes())}function sc(e){return["Domingo","Segunda","Ter\xE7a","Quarta","Quinta","Sexta","S\xE1bado"][e.getDay()]}const lc={class:"weather-panel"},fc={class:"switch-wrapper"},uc={key:0,class:"predictions hourly"},cc={class:"detail"},dc=["src"],mc={key:1,class:"predictions daily"},pc={class:"detail"},hc=["src"],vc={data(){return{state:H,panelSwitch:!1}},methods:{handlePanel(){return this.panelSwitch=!this.panelSwitch}}},gc=Object.assign(vc,{__name:"DailyHourlyPanel",setup(e){return(t,n)=>(ne(),ge("div",lc,[B("div",fc,[B("div",{class:"switch",onClick:n[0]||(n[0]=r=>t.handlePanel())},[B("p",{class:un(!t.panelSwitch&&"active")},"Hourly",2),B("p",{class:un(t.panelSwitch&&"active")},"Daily",2)])]),t.panelSwitch?on("",!0):(ne(),ge("div",uc,[(ne(!0),ge(Pe,null,Ei(re(H).weather.hourly,r=>(ne(),ge("div",cc,[B("span",null,Ce(re(Ts)(re(zn)(r.dt))),1),B("img",{src:"icons/"+r.weather[0].icon+".png"},null,8,dc),B("span",null,Ce(r.temp)+"\xBA",1)]))),256))])),t.panelSwitch?(ne(),ge("div",mc,[(ne(!0),ge(Pe,null,Ei(re(H).weather.daily,r=>(ne(),ge("div",pc,[B("span",null,Ce(re(sc)(re(zn)(r.dt))),1),B("img",{src:"icons/"+r.weather[0].icon+".png"},null,8,hc),B("span",null,Ce(r.temp.day)+"\xBA",1)]))),256))])):on("",!0)]))}}),bc=dt(gc,[["__scopeId","data-v-3df4121e"]]);const yc={class:"footer-info"},_c={data(){return{state:H}}},wc=Object.assign(_c,{__name:"FooterInfo",setup(e){return(t,n)=>{const r=Fa("font-awesome-icon");return ne(),ge("div",yc,[B("div",null,[Q(r,{icon:"fa-solid fa-wind"}),B("span",null,Ce(re(H).weather.current.wind_speed)+"m/s",1)]),B("div",null,[Q(r,{icon:"fa-solid fa-droplet"}),B("span",null,Ce(re(H).weather.current.humidity)+"%",1)]),B("div",null,[Q(r,{icon:"fa-solid fa-sun"}),B("span",null,Ce(re(H).weather.current.uvi),1)])])}}}),xc=dt(wc,[["__scopeId","data-v-b789d747"]]);const Ec={class:"weather-info"},Ac=["src"],Cc={class:"description"},Oc={data(){},methods:{firstLetterCapital(e){return e[0].toUpperCase()+e.replace(/^./,"")}}},kc=Object.assign(Oc,{__name:"CurrentInfo",setup(e){return(t,n)=>{var r,a,i,o,s,l,u,c,p,m,w;return ne(),ge("div",Ec,[B("img",{src:"icons/"+((o=(i=(a=(r=re(H))==null?void 0:r.weather)==null?void 0:a.current)==null?void 0:i.weather[0])==null?void 0:o.icon)+".png"},null,8,Ac),B("p",null,Ce((u=(l=(s=re(H))==null?void 0:s.weather)==null?void 0:l.current)==null?void 0:u.temp)+"\xBA",1),B("p",Cc,Ce(t.firstLetterCapital((w=(m=(p=(c=re(H))==null?void 0:c.weather)==null?void 0:p.current)==null?void 0:m.weather[0])==null?void 0:w.description)),1)])}}}),Sc=dt(kc,[["__scopeId","data-v-499d93eb"]]);const Pc={data(){return{state:H}}},Tc=Object.assign(Pc,{__name:"Main",setup(e){return(t,n)=>(ne(),ge("section",{class:"wrapper",style:yt({backgroundImage:`var(${re(H).dayPeriod})`,color:re(H).dayPeriod=="--night"||re(H).dayPeriod=="--dawn"?"var(--light)":"var(--dark)"})},[Q(oc),Q(Sc),Q(xc),Q(bc)],4))}}),Ic=dt(Tc,[["__scopeId","data-v-d6093636"]]);const Nc={name:"Error",props:["errors"]},Is=e=>(Pf("data-v-0cc2969e"),e=e(),Tf(),e),Rc={class:"error-wrapper"},Mc=Is(()=>B("h1",null,"Ocorreu um erro",-1)),Fc=Is(()=>B("p",null,"Verifique o console para mais informa\xE7\xF5es",-1));function Lc(e,t,n,r,a,i){const o=Fa("font-awesome-icon");return ne(),ge("section",Rc,[B("div",null,[Q(o,{icon:"fa-solid fa-bug"}),Mc]),B("p",null,Ce(n.errors[0]),1),Fc])}const Dc=dt(Nc,[["render",Lc],["__scopeId","data-v-0cc2969e"]]);function $c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ns={exports:{}},ja={exports:{}},Rs=function(t,n){return function(){for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];return t.apply(n,a)}},jc=Rs,za=Object.prototype.toString,Ua=function(e){return function(t){var n=za.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function Ct(e){return e=e.toLowerCase(),function(n){return Ua(n)===e}}function Ba(e){return Array.isArray(e)}function Un(e){return typeof e>"u"}function zc(e){return e!==null&&!Un(e)&&e.constructor!==null&&!Un(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Ms=Ct("ArrayBuffer");function Uc(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ms(e.buffer),t}function Bc(e){return typeof e=="string"}function Hc(e){return typeof e=="number"}function Fs(e){return e!==null&&typeof e=="object"}function Pn(e){if(Ua(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var qc=Ct("Date"),Wc=Ct("File"),Yc=Ct("Blob"),Kc=Ct("FileList");function Ha(e){return za.call(e)==="[object Function]"}function Vc(e){return Fs(e)&&Ha(e.pipe)}function Xc(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||za.call(e)===t||Ha(e.toString)&&e.toString()===t)}var Jc=Ct("URLSearchParams");function Gc(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Qc(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function qa(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),Ba(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function oa(){var e={};function t(a,i){Pn(e[i])&&Pn(a)?e[i]=oa(e[i],a):Pn(a)?e[i]=oa({},a):Ba(a)?e[i]=a.slice():e[i]=a}for(var n=0,r=arguments.length;n<r;n++)qa(arguments[n],t);return e}function Zc(e,t,n){return qa(t,function(a,i){n&&typeof a=="function"?e[i]=jc(a,n):e[i]=a}),e}function ed(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function td(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function nd(e,t,n){var r,a,i,o={};t=t||{};do{for(r=Object.getOwnPropertyNames(e),a=r.length;a-- >0;)i=r[a],o[i]||(t[i]=e[i],o[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function rd(e,t,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return r!==-1&&r===n}function ad(e){if(!e)return null;var t=e.length;if(Un(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n}var id=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),fe={isArray:Ba,isArrayBuffer:Ms,isBuffer:zc,isFormData:Xc,isArrayBufferView:Uc,isString:Bc,isNumber:Hc,isObject:Fs,isPlainObject:Pn,isUndefined:Un,isDate:qc,isFile:Wc,isBlob:Yc,isFunction:Ha,isStream:Vc,isURLSearchParams:Jc,isStandardBrowserEnv:Qc,forEach:qa,merge:oa,extend:Zc,trim:Gc,stripBOM:ed,inherits:td,toFlatObject:nd,kindOf:Ua,kindOfTest:Ct,endsWith:rd,toArray:ad,isTypedArray:id,isFileList:Kc},Pt=fe;function zi(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ls=function(t,n,r){if(!n)return t;var a;if(r)a=r(n);else if(Pt.isURLSearchParams(n))a=n.toString();else{var i=[];Pt.forEach(n,function(l,u){l===null||typeof l>"u"||(Pt.isArray(l)?u=u+"[]":l=[l],Pt.forEach(l,function(p){Pt.isDate(p)?p=p.toISOString():Pt.isObject(p)&&(p=JSON.stringify(p)),i.push(zi(u)+"="+zi(p))}))}),a=i.join("&")}if(a){var o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t},od=fe;function sr(){this.handlers=[]}sr.prototype.use=function(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};sr.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};sr.prototype.forEach=function(t){od.forEach(this.handlers,function(r){r!==null&&t(r)})};var sd=sr,ld=fe,fd=function(t,n){ld.forEach(t,function(a,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(t[n]=a,delete t[i])})},Ds=fe;function Ut(e,t,n,r,a){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}Ds.inherits(Ut,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var $s=Ut.prototype,js={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){js[e]={value:e}});Object.defineProperties(Ut,js);Object.defineProperty($s,"isAxiosError",{value:!0});Ut.from=function(e,t,n,r,a,i){var o=Object.create($s);return Ds.toFlatObject(e,o,function(l){return l!==Error.prototype}),Ut.call(o,e.message,t,n,r,a),o.name=e.name,i&&Object.assign(o,i),o};var Yt=Ut,zs={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Se=fe;function ud(e,t){t=t||new FormData;var n=[];function r(i){return i===null?"":Se.isDate(i)?i.toISOString():Se.isArrayBuffer(i)||Se.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function a(i,o){if(Se.isPlainObject(i)||Se.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),Se.forEach(i,function(l,u){if(!Se.isUndefined(l)){var c=o?o+"."+u:u,p;if(l&&!o&&typeof l=="object"){if(Se.endsWith(u,"{}"))l=JSON.stringify(l);else if(Se.endsWith(u,"[]")&&(p=Se.toArray(l))){p.forEach(function(m){!Se.isUndefined(m)&&t.append(c,r(m))});return}}a(l,c)}}),n.pop()}else t.append(o,r(i))}return a(e),t}var Us=ud,Or,Ui;function cd(){if(Ui)return Or;Ui=1;var e=Yt;return Or=function(n,r,a){var i=a.config.validateStatus;!a.status||!i||i(a.status)?n(a):r(new e("Request failed with status code "+a.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))},Or}var kr,Bi;function dd(){if(Bi)return kr;Bi=1;var e=fe;return kr=e.isStandardBrowserEnv()?function(){return{write:function(r,a,i,o,s,l){var u=[];u.push(r+"="+encodeURIComponent(a)),e.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),e.isString(o)&&u.push("path="+o),e.isString(s)&&u.push("domain="+s),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),kr}var md=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},pd=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},hd=md,vd=pd,Bs=function(t,n){return t&&!hd(n)?vd(t,n):n},Sr,Hi;function gd(){if(Hi)return Sr;Hi=1;var e=fe,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Sr=function(r){var a={},i,o,s;return r&&e.forEach(r.split(`
`),function(u){if(s=u.indexOf(":"),i=e.trim(u.substr(0,s)).toLowerCase(),o=e.trim(u.substr(s+1)),i){if(a[i]&&t.indexOf(i)>=0)return;i==="set-cookie"?a[i]=(a[i]?a[i]:[]).concat([o]):a[i]=a[i]?a[i]+", "+o:o}}),a},Sr}var Pr,qi;function bd(){if(qi)return Pr;qi=1;var e=fe;return Pr=e.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function i(o){var s=o;return n&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=i(window.location.href),function(s){var l=e.isString(s)?i(s):s;return l.protocol===a.protocol&&l.host===a.host}}():function(){return function(){return!0}}(),Pr}var Tr,Wi;function lr(){if(Wi)return Tr;Wi=1;var e=Yt,t=fe;function n(r){e.call(this,r==null?"canceled":r,e.ERR_CANCELED),this.name="CanceledError"}return t.inherits(n,e,{__CANCEL__:!0}),Tr=n,Tr}var Ir,Yi;function yd(){return Yi||(Yi=1,Ir=function(t){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""}),Ir}var Nr,Ki;function Vi(){if(Ki)return Nr;Ki=1;var e=fe,t=cd(),n=dd(),r=Ls,a=Bs,i=gd(),o=bd(),s=zs,l=Yt,u=lr(),c=yd();return Nr=function(m){return new Promise(function(F,L){var P=m.data,y=m.headers,k=m.responseType,R;function j(){m.cancelToken&&m.cancelToken.unsubscribe(R),m.signal&&m.signal.removeEventListener("abort",R)}e.isFormData(P)&&e.isStandardBrowserEnv()&&delete y["Content-Type"];var C=new XMLHttpRequest;if(m.auth){var ie=m.auth.username||"",ue=m.auth.password?unescape(encodeURIComponent(m.auth.password)):"";y.Authorization="Basic "+btoa(ie+":"+ue)}var pe=a(m.baseURL,m.url);C.open(m.method.toUpperCase(),r(pe,m.params,m.paramsSerializer),!0),C.timeout=m.timeout;function oe(){if(!!C){var se="getAllResponseHeaders"in C?i(C.getAllResponseHeaders()):null,Oe=!k||k==="text"||k==="json"?C.responseText:C.response,$e={data:Oe,status:C.status,statusText:C.statusText,headers:se,config:m,request:C};t(function(ee){F(ee),j()},function(ee){L(ee),j()},$e),C=null}}if("onloadend"in C?C.onloadend=oe:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(oe)},C.onabort=function(){!C||(L(new l("Request aborted",l.ECONNABORTED,m,C)),C=null)},C.onerror=function(){L(new l("Network Error",l.ERR_NETWORK,m,C,C)),C=null},C.ontimeout=function(){var Oe=m.timeout?"timeout of "+m.timeout+"ms exceeded":"timeout exceeded",$e=m.transitional||s;m.timeoutErrorMessage&&(Oe=m.timeoutErrorMessage),L(new l(Oe,$e.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,m,C)),C=null},e.isStandardBrowserEnv()){var et=(m.withCredentials||o(pe))&&m.xsrfCookieName?n.read(m.xsrfCookieName):void 0;et&&(y[m.xsrfHeaderName]=et)}"setRequestHeader"in C&&e.forEach(y,function(Oe,$e){typeof P>"u"&&$e.toLowerCase()==="content-type"?delete y[$e]:C.setRequestHeader($e,Oe)}),e.isUndefined(m.withCredentials)||(C.withCredentials=!!m.withCredentials),k&&k!=="json"&&(C.responseType=m.responseType),typeof m.onDownloadProgress=="function"&&C.addEventListener("progress",m.onDownloadProgress),typeof m.onUploadProgress=="function"&&C.upload&&C.upload.addEventListener("progress",m.onUploadProgress),(m.cancelToken||m.signal)&&(R=function(se){!C||(L(!se||se&&se.type?new u:se),C.abort(),C=null)},m.cancelToken&&m.cancelToken.subscribe(R),m.signal&&(m.signal.aborted?R():m.signal.addEventListener("abort",R))),P||(P=null);var De=c(pe);if(De&&["http","https","file"].indexOf(De)===-1){L(new l("Unsupported protocol "+De+":",l.ERR_BAD_REQUEST,m));return}C.send(P)})},Nr}var Rr,Xi;function _d(){return Xi||(Xi=1,Rr=null),Rr}var te=fe,Ji=fd,Gi=Yt,wd=zs,xd=Us,Ed={"Content-Type":"application/x-www-form-urlencoded"};function Qi(e,t){!te.isUndefined(e)&&te.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function Ad(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Vi()),e}function Cd(e,t,n){if(te.isString(e))try{return(t||JSON.parse)(e),te.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var fr={transitional:wd,adapter:Ad(),transformRequest:[function(t,n){if(Ji(n,"Accept"),Ji(n,"Content-Type"),te.isFormData(t)||te.isArrayBuffer(t)||te.isBuffer(t)||te.isStream(t)||te.isFile(t)||te.isBlob(t))return t;if(te.isArrayBufferView(t))return t.buffer;if(te.isURLSearchParams(t))return Qi(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var r=te.isObject(t),a=n&&n["Content-Type"],i;if((i=te.isFileList(t))||r&&a==="multipart/form-data"){var o=this.env&&this.env.FormData;return xd(i?{"files[]":t}:t,o&&new o)}else if(r||a==="application/json")return Qi(n,"application/json"),Cd(t);return t}],transformResponse:[function(t){var n=this.transitional||fr.transitional,r=n&&n.silentJSONParsing,a=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||a&&te.isString(t)&&t.length)try{return JSON.parse(t)}catch(o){if(i)throw o.name==="SyntaxError"?Gi.from(o,Gi.ERR_BAD_RESPONSE,this,null,this.response):o}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_d()},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};te.forEach(["delete","get","head"],function(t){fr.headers[t]={}});te.forEach(["post","put","patch"],function(t){fr.headers[t]=te.merge(Ed)});var Wa=fr,Od=fe,kd=Wa,Sd=function(t,n,r){var a=this||kd;return Od.forEach(r,function(o){t=o.call(a,t,n)}),t},Mr,Zi;function Hs(){return Zi||(Zi=1,Mr=function(t){return!!(t&&t.__CANCEL__)}),Mr}var eo=fe,Fr=Sd,Pd=Hs(),Td=Wa,Id=lr();function Lr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Id}var Nd=function(t){Lr(t),t.headers=t.headers||{},t.data=Fr.call(t,t.data,t.headers,t.transformRequest),t.headers=eo.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),eo.forEach(["delete","get","head","post","put","patch","common"],function(a){delete t.headers[a]});var n=t.adapter||Td.adapter;return n(t).then(function(a){return Lr(t),a.data=Fr.call(t,a.data,a.headers,t.transformResponse),a},function(a){return Pd(a)||(Lr(t),a&&a.response&&(a.response.data=Fr.call(t,a.response.data,a.response.headers,t.transformResponse))),Promise.reject(a)})},_e=fe,qs=function(t,n){n=n||{};var r={};function a(c,p){return _e.isPlainObject(c)&&_e.isPlainObject(p)?_e.merge(c,p):_e.isPlainObject(p)?_e.merge({},p):_e.isArray(p)?p.slice():p}function i(c){if(_e.isUndefined(n[c])){if(!_e.isUndefined(t[c]))return a(void 0,t[c])}else return a(t[c],n[c])}function o(c){if(!_e.isUndefined(n[c]))return a(void 0,n[c])}function s(c){if(_e.isUndefined(n[c])){if(!_e.isUndefined(t[c]))return a(void 0,t[c])}else return a(void 0,n[c])}function l(c){if(c in n)return a(t[c],n[c]);if(c in t)return a(void 0,t[c])}var u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l};return _e.forEach(Object.keys(t).concat(Object.keys(n)),function(p){var m=u[p]||i,w=m(p);_e.isUndefined(w)&&m!==l||(r[p]=w)}),r},Dr,to;function Ws(){return to||(to=1,Dr={version:"0.27.2"}),Dr}var Rd=Ws().version,ot=Yt,Ya={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){Ya[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var no={};Ya.transitional=function(t,n,r){function a(i,o){return"[Axios v"+Rd+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,s){if(t===!1)throw new ot(a(o," has been removed"+(n?" in "+n:"")),ot.ERR_DEPRECATED);return n&&!no[o]&&(no[o]=!0,console.warn(a(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,s):!0}};function Md(e,t,n){if(typeof e!="object")throw new ot("options must be an object",ot.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),a=r.length;a-- >0;){var i=r[a],o=t[i];if(o){var s=e[i],l=s===void 0||o(s,i,e);if(l!==!0)throw new ot("option "+i+" must be "+l,ot.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ot("Unknown option "+i,ot.ERR_BAD_OPTION)}}var Fd={assertOptions:Md,validators:Ya},Ys=fe,Ld=Ls,ro=sd,ao=Nd,ur=qs,Dd=Bs,Ks=Fd,Tt=Ks.validators;function Bt(e){this.defaults=e,this.interceptors={request:new ro,response:new ro}}Bt.prototype.request=function(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ur(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&Ks.assertOptions(r,{silentJSONParsing:Tt.transitional(Tt.boolean),forcedJSONParsing:Tt.transitional(Tt.boolean),clarifyTimeoutError:Tt.transitional(Tt.boolean)},!1);var a=[],i=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(i=i&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});var o=[];this.interceptors.response.forEach(function(w){o.push(w.fulfilled,w.rejected)});var s;if(!i){var l=[ao,void 0];for(Array.prototype.unshift.apply(l,a),l=l.concat(o),s=Promise.resolve(n);l.length;)s=s.then(l.shift(),l.shift());return s}for(var u=n;a.length;){var c=a.shift(),p=a.shift();try{u=c(u)}catch(m){p(m);break}}try{s=ao(u)}catch(m){return Promise.reject(m)}for(;o.length;)s=s.then(o.shift(),o.shift());return s};Bt.prototype.getUri=function(t){t=ur(this.defaults,t);var n=Dd(t.baseURL,t.url);return Ld(n,t.params,t.paramsSerializer)};Ys.forEach(["delete","get","head","options"],function(t){Bt.prototype[t]=function(n,r){return this.request(ur(r||{},{method:t,url:n,data:(r||{}).data}))}});Ys.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,s){return this.request(ur(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Bt.prototype[t]=n(),Bt.prototype[t+"Form"]=n(!0)});var $d=Bt,$r,io;function jd(){if(io)return $r;io=1;var e=lr();function t(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(o){r=o});var a=this;this.promise.then(function(i){if(!!a._listeners){var o,s=a._listeners.length;for(o=0;o<s;o++)a._listeners[o](i);a._listeners=null}}),this.promise.then=function(i){var o,s=new Promise(function(l){a.subscribe(l),o=l}).then(i);return s.cancel=function(){a.unsubscribe(o)},s},n(function(o){a.reason||(a.reason=new e(o),r(a.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]},t.prototype.unsubscribe=function(r){if(!!this._listeners){var a=this._listeners.indexOf(r);a!==-1&&this._listeners.splice(a,1)}},t.source=function(){var r,a=new t(function(o){r=o});return{token:a,cancel:r}},$r=t,$r}var jr,oo;function zd(){return oo||(oo=1,jr=function(t){return function(r){return t.apply(null,r)}}),jr}var zr,so;function Ud(){if(so)return zr;so=1;var e=fe;return zr=function(n){return e.isObject(n)&&n.isAxiosError===!0},zr}var lo=fe,Bd=Rs,Tn=$d,Hd=qs,qd=Wa;function Vs(e){var t=new Tn(e),n=Bd(Tn.prototype.request,t);return lo.extend(n,Tn.prototype,t),lo.extend(n,t),n.create=function(a){return Vs(Hd(e,a))},n}var be=Vs(qd);be.Axios=Tn;be.CanceledError=lr();be.CancelToken=jd();be.isCancel=Hs();be.VERSION=Ws().version;be.toFormData=Us;be.AxiosError=Yt;be.Cancel=be.CanceledError;be.all=function(t){return Promise.all(t)};be.spread=zd();be.isAxiosError=Ud();ja.exports=be;ja.exports.default=be;(function(e){e.exports=ja.exports})(Ns);const Wd=$c(Ns.exports),Yd="f257a63ee436ec4e556b33685fe0c4bc";async function Kd({latitude:e,longitude:t}){return await Wd.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${e}&lon=${t}&units=metric&lang=pt_br&exclude=minutely&appid=${Yd}`)}const Vd={class:"wrapper"},H=Zn({weather:null,timezone:null,dayPeriod:null,currentTime:null}),Xd={data(){return{state:H,errors:[]}},methods:{getWeather(e){Kd(e.coords).then(t=>{const{data:n}=t;H.timezone=n.timezone,H.weather={current:n.current,hourly:n.hourly,daily:n.daily}},t=>{this.setError({error:t,message:"N\xE3o foi poss\xEDvel obter as informa\xE7\xF5es sobre o clima."})})},setError(e){return console.log(e),this.errors.push(e.message)},getCurrentTime(){const e=new Date;H!=null&&H.weather&&(H.dayPeriod=this.getDayPeriod(e.getHours())),H.currentTime=Ts(e)},getDayPeriod(e){var r,a;const t=(r=zn(H.weather.current.sunrise))==null?void 0:r.getHours(),n=(a=zn(H.weather.current.sunset))==null?void 0:a.getHours();return e>=t&&e<t+2?"--dawn":e>=t+2&&e<12?"--morning":e>=12&&e<n?"--afternoon":e>=n&&e<n+2?"--evening":"--night"}},mounted(){navigator.geolocation.watchPosition(this.getWeather,this.setError),setInterval(this.getCurrentTime,1e3)}},Jd=Object.assign(Xd,{__name:"App",setup(e){return(t,n)=>{const r=Fa("pulse-loader");return ne(),ge("section",Vd,[!H.weather&&t.errors.length==0?(ne(),kn(r,{key:0,color:"var(--primary)",size:"32px"},null,8,["color"])):on("",!0),H.weather&&t.errors.length==0?(ne(),kn(Ic,{key:1})):on("",!0),t.errors.length>0?(ne(),kn(Dc,{key:2,errors:t.errors},null,8,["errors"])):on("",!0)])}}}),Gd=dt(Jd,[["__scopeId","data-v-b9d3d7f1"]]);const Qd={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},Zd={class:"v-spinner"};function em(e,t,n,r,a,i){return Qf((ne(),ge("div",Zd,[B("div",{class:"v-pulse v-pulse1",style:yt([a.spinnerStyle,a.spinnerDelay1])},null,4),B("div",{class:"v-pulse v-pulse2",style:yt([a.spinnerStyle,a.spinnerDelay2])},null,4),B("div",{class:"v-pulse v-pulse3",style:yt([a.spinnerStyle,a.spinnerDelay3])},null,4)],512)),[[Qu,n.loading]])}const tm=dt(Qd,[["render",em]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function fo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fo(Object(n),!0).forEach(function(r){am(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function nm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function uo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rm(e,t,n){return t&&uo(e.prototype,t),n&&uo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function am(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ka(e,t){return om(e)||lm(e,t)||Xs(e,t)||um()}function cr(e){return im(e)||sm(e)||Xs(e)||fm()}function im(e){if(Array.isArray(e))return sa(e)}function om(e){if(Array.isArray(e))return e}function sm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lm(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Xs(e,t){if(!!e){if(typeof e=="string")return sa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sa(e,t)}}function sa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function um(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var co=function(){},Va={},Js={},Gs=null,Qs={mark:co,measure:co};try{typeof window<"u"&&(Va=window),typeof document<"u"&&(Js=document),typeof MutationObserver<"u"&&(Gs=MutationObserver),typeof performance<"u"&&(Qs=performance)}catch{}var cm=Va.navigator||{},mo=cm.userAgent,po=mo===void 0?"":mo,ut=Va,J=Js,ho=Gs,En=Qs;ut.document;var Ze=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Zs=~po.indexOf("MSIE")||~po.indexOf("Trident/"),Xe="___FONT_AWESOME___",la=16,el="fa",tl="svg-inline--fa",Et="data-fa-i2svg",fa="data-fa-pseudo-element",dm="data-fa-pseudo-element-pending",Xa="data-prefix",Ja="data-icon",vo="fontawesome-i2svg",mm="async",pm=["HTML","HEAD","STYLE","SCRIPT"],nl=function(){try{return!0}catch{return!1}}(),Ga={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Hn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},rl={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},hm={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},vm=/fa[srltdbk]?[\-\ ]/,al="fa-layers-text",gm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,bm={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},il=[1,2,3,4,5,6,7,8,9,10],ym=il.concat([11,12,13,14,15,16,17,18,19,20]),_m=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wm=[].concat(cr(Object.keys(Hn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",bt.GROUP,bt.SWAP_OPACITY,bt.PRIMARY,bt.SECONDARY]).concat(il.map(function(e){return"".concat(e,"x")})).concat(ym.map(function(e){return"w-".concat(e)})),ol=ut.FontAwesomeConfig||{};function xm(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Em(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Am=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Am.forEach(function(e){var t=Ka(e,2),n=t[0],r=t[1],a=Em(xm(n));a!=null&&(ol[r]=a)})}var Cm={familyPrefix:el,styleDefault:"solid",replacementClass:tl,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},sn=O(O({},Cm),ol);sn.autoReplaceSvg||(sn.observeMutations=!1);var N={};Object.keys(sn).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){sn[e]=n,In.forEach(function(r){return r(N)})},get:function(){return sn[e]}})});ut.FontAwesomeConfig=N;var In=[];function Om(e){return In.push(e),function(){In.splice(In.indexOf(e),1)}}var rt=la,He={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function km(e){if(!(!e||!Ze)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Sm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function hn(){for(var e=12,t="";e-- >0;)t+=Sm[Math.random()*62|0];return t}function Kt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qa(e){return e.classList?Kt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function sl(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pm(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(sl(e[n]),'" ')},"").trim()}function dr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Za(e){return e.size!==He.size||e.x!==He.x||e.y!==He.y||e.rotate!==He.rotate||e.flipX||e.flipY}function Tm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Im(e){var t=e.transform,n=e.width,r=n===void 0?la:n,a=e.height,i=a===void 0?la:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Zs?l+="translate(".concat(t.x/rt-r/2,"em, ").concat(t.y/rt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/rt,"em), calc(-50% + ").concat(t.y/rt,"em)) "):l+="translate(".concat(t.x/rt,"em, ").concat(t.y/rt,"em) "),l+="scale(".concat(t.size/rt*(t.flipX?-1:1),", ").concat(t.size/rt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Nm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ll(){var e=el,t=tl,n=N.familyPrefix,r=N.replacementClass,a=Nm;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var go=!1;function Ur(){N.autoAddCss&&!go&&(km(ll()),go=!0)}var Rm={mixout:function(){return{dom:{css:ll,insertCss:Ur}}},hooks:function(){return{beforeDOMElementCreation:function(){Ur()},beforeI2svg:function(){Ur()}}}},Je=ut||{};Je[Xe]||(Je[Xe]={});Je[Xe].styles||(Je[Xe].styles={});Je[Xe].hooks||(Je[Xe].hooks={});Je[Xe].shims||(Je[Xe].shims=[]);var Me=Je[Xe],fl=[],Mm=function e(){J.removeEventListener("DOMContentLoaded",e),qn=1,fl.map(function(t){return t()})},qn=!1;Ze&&(qn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),qn||J.addEventListener("DOMContentLoaded",Mm));function Fm(e){!Ze||(qn?setTimeout(e,0):fl.push(e))}function vn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?sl(e):"<".concat(t," ").concat(Pm(r),">").concat(i.map(vn).join(""),"</").concat(t,">")}function bo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Lm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Br=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Lm(n,a):n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function Dm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ua(e){var t=Dm(e);return t.length===1?t[0].toString(16):null}function $m(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ca(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=yo(t);typeof Me.hooks.addPack=="function"&&!a?Me.hooks.addPack(e,yo(t)):Me.styles[e]=O(O({},Me.styles[e]||{}),i),e==="fas"&&ca("fa",t)}var ln=Me.styles,jm=Me.shims,zm=Object.values(rl),ei=null,ul={},cl={},dl={},ml={},pl={},Um=Object.keys(Ga);function Bm(e){return~wm.indexOf(e)}function Hm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Bm(a)?a:null}var hl=function(){var t=function(i){return Br(ln,function(o,s,l){return o[l]=Br(s,i,{}),o},{})};ul=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),cl=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),pl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ln||N.autoFetchSvg,r=Br(jm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});dl=r.names,ml=r.unicodes,ei=mr(N.styleDefault)};Om(function(e){ei=mr(e.styleDefault)});hl();function ti(e,t){return(ul[e]||{})[t]}function qm(e,t){return(cl[e]||{})[t]}function Rt(e,t){return(pl[e]||{})[t]}function vl(e){return dl[e]||{prefix:null,iconName:null}}function Wm(e){var t=ml[e],n=ti("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ct(){return ei}var ni=function(){return{prefix:null,iconName:null,rest:[]}};function mr(e){var t=Ga[e],n=Hn[e]||Hn[t],r=e in Me.styles?e:null;return n||r||null}function pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Hm(N.familyPrefix,s);if(ln[s]?(s=zm.includes(s)?hm[s]:s,a=s,o.prefix=s):Um.indexOf(s)>-1?(a=s,o.prefix=mr(s)):l?o.iconName=l:s!==N.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?vl(o.iconName):{},c=Rt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||c||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!ln.far&&ln.fas&&!N.autoFetchSvg&&(o.prefix="fas")}return o},ni());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ct()||"fas"),i}var Ym=function(){function e(){nm(this,e),this.definitions={}}return rm(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),ca(s,o[s]);var l=rl[s];l&&ca(l,o[s]),hl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(p){typeof p=="string"&&(n[s][p]=u)}),n[s][l]=u}),n}}]),e}(),_o=[],Mt={},$t={},Km=Object.keys($t);function Vm(e,t){var n=t.mixoutsTo;return _o=e,Mt={},Object.keys($t).forEach(function(r){Km.indexOf(r)===-1&&delete $t[r]}),_o.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Bn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Mt[o]||(Mt[o]=[]),Mt[o].push(i[o])})}r.provides&&r.provides($t)}),n}function da(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Mt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function At(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Mt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ge(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $t[e]?$t[e].apply(null,t):void 0}function ma(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ct();if(!!t)return t=Rt(n,t)||t,bo(gl.definitions,n,t)||bo(Me.styles,n,t)}var gl=new Ym,Xm=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,At("noAuto")},Jm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ze?(At("beforeI2svg",t),Ge("pseudoElements2svg",t),Ge("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Fm(function(){Qm({autoReplaceSvgRoot:n}),At("watch",t)})}},Gm={icon:function(t){if(t===null)return null;if(Bn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Rt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=mr(t[0]);return{prefix:r,iconName:Rt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.familyPrefix,"-"))>-1||t.match(vm))){var a=pr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ct(),iconName:Rt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ct();return{prefix:i,iconName:Rt(i,t)||t}}}},Ee={noAuto:Xm,config:N,dom:Jm,parse:Gm,library:gl,findIconDefinition:ma,toHtml:vn},Qm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Me.styles).length>0||N.autoFetchSvg)&&Ze&&N.autoReplaceSvg&&Ee.dom.i2svg({node:r})};function hr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return vn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ze){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Zm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Za(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=dr(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ep(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ri(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,p=e.extra,m=e.watchable,w=m===void 0?!1:m,F=r.found?r:n,L=F.width,P=F.height,y=a==="fak",k=[N.replacementClass,i?"".concat(N.familyPrefix,"-").concat(i):""].filter(function(oe){return p.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(p.classes).join(" "),R={children:[],attributes:O(O({},p.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(P)})},j=y&&!~p.classes.indexOf("fa-fw")?{width:"".concat(L/P*16*.0625,"em")}:{};w&&(R.attributes[Et]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||hn())},children:[l]}),delete R.attributes.title);var C=O(O({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},j),p.styles)}),ie=r.found&&n.found?Ge("generateAbstractMask",C)||{children:[],attributes:{}}:Ge("generateAbstractIcon",C)||{children:[],attributes:{}},ue=ie.children,pe=ie.attributes;return C.children=ue,C.attributes=pe,s?ep(C):Zm(C)}function wo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[Et]="");var c=O({},o.styles);Za(a)&&(c.transform=Im({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var p=dr(c);p.length>0&&(u.style=p);var m=[];return m.push({tag:"span",attributes:u,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function tp(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=dr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Hr=Me.styles;function pa(e){var t=e[0],n=e[1],r=e.slice(4),a=Ka(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.familyPrefix,"-").concat(bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(bt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(bt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var np={found:!1,width:512,height:512};function rp(e,t){!nl&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ha(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=ct()),new Promise(function(r,a){if(Ge("missingIconAbstract"),n==="fa"){var i=vl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Hr[t]&&Hr[t][e]){var o=Hr[t][e];return r(pa(o))}rp(e,t),r(O(O({},np),{},{icon:N.showMissingIcons&&e?Ge("missingIconAbstract")||{}:{}}))})}var xo=function(){},va=N.measurePerformance&&En&&En.mark&&En.measure?En:{mark:xo,measure:xo},tn='FA "6.1.2"',ap=function(t){return va.mark("".concat(tn," ").concat(t," begins")),function(){return bl(t)}},bl=function(t){va.mark("".concat(tn," ").concat(t," ends")),va.measure("".concat(tn," ").concat(t),"".concat(tn," ").concat(t," begins"),"".concat(tn," ").concat(t," ends"))},ai={begin:ap,end:bl},Nn=function(){};function Eo(e){var t=e.getAttribute?e.getAttribute(Et):null;return typeof t=="string"}function ip(e){var t=e.getAttribute?e.getAttribute(Xa):null,n=e.getAttribute?e.getAttribute(Ja):null;return t&&n}function op(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function sp(){if(N.autoReplaceSvg===!0)return Rn.replace;var e=Rn[N.autoReplaceSvg];return e||Rn.replace}function lp(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function fp(e){return J.createElement(e)}function yl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?lp:fp:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(yl(o,{ceFn:r}))}),a}function up(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(yl(a),n)}),n.getAttribute(Et)===null&&N.keepOriginalSource){var r=J.createComment(up(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Qa(n).indexOf(N.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(N.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return vn(s)}).join(`
`);n.setAttribute(Et,""),n.innerHTML=o}};function Ao(e){e()}function _l(e,t){var n=typeof t=="function"?t:Nn;if(e.length===0)n();else{var r=Ao;N.mutateApproach===mm&&(r=ut.requestAnimationFrame||Ao),r(function(){var a=sp(),i=ai.begin("mutate");e.map(a),i(),n()})}}var ii=!1;function wl(){ii=!0}function ga(){ii=!1}var Wn=null;function Co(e){if(!!ho&&!!N.observeMutations){var t=e.treeCallback,n=t===void 0?Nn:t,r=e.nodeCallback,a=r===void 0?Nn:r,i=e.pseudoElementsCallback,o=i===void 0?Nn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Wn=new ho(function(u){if(!ii){var c=ct();Kt(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Eo(p.addedNodes[0])&&(N.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&N.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&Eo(p.target)&&~_m.indexOf(p.attributeName))if(p.attributeName==="class"&&ip(p.target)){var m=pr(Qa(p.target)),w=m.prefix,F=m.iconName;p.target.setAttribute(Xa,w||c),F&&p.target.setAttribute(Ja,F)}else op(p.target)&&a(p.target)})}}),Ze&&Wn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cp(){!Wn||Wn.disconnect()}function dp(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function mp(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=pr(Qa(e));return a.prefix||(a.prefix=ct()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=qm(a.prefix,e.innerText)||ti(a.prefix,ua(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function pp(e){var t=Kt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||hn()):(t["aria-hidden"]="true",t.focusable="false")),t}function hp(){return{iconName:null,title:null,titleId:null,prefix:null,transform:He,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mp(e),r=n.iconName,a=n.prefix,i=n.rest,o=pp(e),s=da("parseNodeAttributes",{},e),l=t.styleParser?dp(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:He,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var vp=Me.styles;function xl(e){var t=N.autoReplaceSvg==="nest"?Oo(e,{styleParser:!1}):Oo(e);return~t.extra.classes.indexOf(al)?Ge("generateLayersText",e,t):Ge("generateSvgReplacementMutation",e,t)}function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ze)return Promise.resolve();var n=J.documentElement.classList,r=function(p){return n.add("".concat(vo,"-").concat(p))},a=function(p){return n.remove("".concat(vo,"-").concat(p))},i=N.autoFetchSvg?Object.keys(Ga):Object.keys(vp);i.includes("fa")||i.push("fa");var o=[".".concat(al,":not([").concat(Et,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Et,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Kt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ai.begin("onTree"),u=s.reduce(function(c,p){try{var m=xl(p);m&&c.push(m)}catch(w){nl||w.name==="MissingIcon"&&console.error(w)}return c},[]);return new Promise(function(c,p){Promise.all(u).then(function(m){_l(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(m){l(),p(m)})})}function gp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xl(e).then(function(n){n&&_l([n],t)})}function bp(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ma(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ma(a||{})),e(r,O(O({},n),{},{mask:a}))}}var yp=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?He:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,p=n.title,m=p===void 0?null:p,w=n.titleId,F=w===void 0?null:w,L=n.classes,P=L===void 0?[]:L,y=n.attributes,k=y===void 0?{}:y,R=n.styles,j=R===void 0?{}:R;if(!!t){var C=t.prefix,ie=t.iconName,ue=t.icon;return hr(O({type:"icon"},t),function(){return At("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(m?k["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(F||hn()):(k["aria-hidden"]="true",k.focusable="false")),ri({icons:{main:pa(ue),mask:l?pa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:ie,transform:O(O({},He),a),symbol:o,title:m,maskId:c,titleId:F,extra:{attributes:k,styles:j,classes:P}})})}},_p={mixout:function(){return{icon:bp(yp)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ko,n.nodeCallback=gp,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return ko(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,p=r.maskId,m=r.extra;return new Promise(function(w,F){Promise.all([ha(a,s),c.iconName?ha(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var P=Ka(L,2),y=P[0],k=P[1];w([n,ri({icons:{main:y,mask:k},prefix:s,iconName:a,transform:l,symbol:u,maskId:p,title:i,titleId:o,extra:m,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=dr(s);l.length>0&&(a.style=l);var u;return Za(o)&&(u=Ge("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},wp={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return hr({type:"layer"},function(){At("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.familyPrefix,"-layers")].concat(cr(i)).join(" ")},children:o}]})}}}},xp={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,p=c===void 0?{}:c;return hr({type:"counter",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),tp({content:n.toString(),title:i,extra:{attributes:u,styles:p,classes:["".concat(N.familyPrefix,"-layers-counter")].concat(cr(s))}})})}}}},Ep={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?He:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,p=c===void 0?{}:c,m=r.styles,w=m===void 0?{}:m;return hr({type:"text",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),wo({content:n,transform:O(O({},He),i),title:s,extra:{attributes:p,styles:w,classes:["".concat(N.familyPrefix,"-layers-text")].concat(cr(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Zs){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ap=new RegExp('"',"ug"),So=[1105920,1112319];function Cp(e){var t=e.replace(Ap,""),n=$m(t,0),r=n>=So[0]&&n<=So[1],a=t.length===2?t[0]===t[1]:!1;return{value:ua(a?t[0]:t),isSecondary:r||a}}function Po(e,t){var n="".concat(dm).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Kt(e.children),o=i.filter(function(ie){return ie.getAttribute(fa)===t})[0],s=ut.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(gm),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var p=s.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Hn[l[2].toLowerCase()]:bm[u],w=Cp(p),F=w.value,L=w.isSecondary,P=l[0].startsWith("FontAwesome"),y=ti(m,F),k=y;if(P){var R=Wm(F);R.iconName&&R.prefix&&(y=R.iconName,m=R.prefix)}if(y&&!L&&(!o||o.getAttribute(Xa)!==m||o.getAttribute(Ja)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var j=hp(),C=j.extra;C.attributes[fa]=t,ha(y,m).then(function(ie){var ue=ri(O(O({},j),{},{icons:{main:ie,mask:ni()},prefix:m,iconName:k,extra:C,watchable:!0})),pe=J.createElement("svg");t==="::before"?e.insertBefore(pe,e.firstChild):e.appendChild(pe),pe.outerHTML=ue.map(function(oe){return vn(oe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Op(e){return Promise.all([Po(e,"::before"),Po(e,"::after")])}function kp(e){return e.parentNode!==document.head&&!~pm.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function To(e){if(!!Ze)return new Promise(function(t,n){var r=Kt(e.querySelectorAll("*")).filter(kp).map(Op),a=ai.begin("searchPseudoElements");wl(),Promise.all(r).then(function(){a(),ga(),t()}).catch(function(){a(),ga(),n()})})}var Sp={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=To,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;N.searchPseudoElements&&To(a)}}},Io=!1,Pp={mixout:function(){return{dom:{unwatch:function(){wl(),Io=!0}}}},hooks:function(){return{bootstrap:function(){Co(da("mutationObserverCallbacks",{}))},noAuto:function(){cp()},watch:function(n){var r=n.observeMutationsRoot;Io?ga():Co(da("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},No=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Tp={mixout:function(){return{parse:{transform:function(n){return No(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=No(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(l," ").concat(u," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:p,path:m};return{tag:"g",attributes:O({},w.outer),children:[{tag:"g",attributes:O({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),w.path)}]}]}}}},qr={x:0,y:0,width:"100%",height:"100%"};function Ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ip(e){return e.tag==="g"?e.children:[e]}var Np={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?pr(a.split(" ").map(function(o){return o.trim()})):ni();return i.prefix||(i.prefix=ct()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,p=o.width,m=o.icon,w=Tm({transform:l,containerWidth:p,iconWidth:u}),F={tag:"rect",attributes:O(O({},qr),{},{fill:"white"})},L=c.children?{children:c.children.map(Ro)}:{},P={tag:"g",attributes:O({},w.inner),children:[Ro(O({tag:c.tag,attributes:O(O({},c.attributes),w.path)},L))]},y={tag:"g",attributes:O({},w.outer),children:[P]},k="mask-".concat(s||hn()),R="clip-".concat(s||hn()),j={tag:"mask",attributes:O(O({},qr),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Ip(m)},j]};return r.push(C,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(k,")")},qr)}),{children:r,attributes:a}}}},Rp={provides:function(t){var n=!1;ut.matchMedia&&(n=ut.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Mp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Fp=[Rm,_p,wp,xp,Ep,Sp,Pp,Tp,Np,Rp,Mp];Vm(Fp,{mixoutsTo:Ee});Ee.noAuto;var El=Ee.config,vr=Ee.library;Ee.dom;var Yn=Ee.parse;Ee.findIconDefinition;Ee.toHtml;var Lp=Ee.icon;Ee.layer;var Dp=Ee.text;Ee.counter;function Mo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mo(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kn(e){return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kn(e)}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $p(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function jp(e,t){if(e==null)return{};var n=$p(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ba(e){return zp(e)||Up(e)||Bp(e)||Hp()}function zp(e){if(Array.isArray(e))return ya(e)}function Up(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bp(e,t){if(!!e){if(typeof e=="string")return ya(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ya(e,t)}}function ya(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Hp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Al={exports:{}};(function(e){(function(t){var n=function(y,k,R){if(!u(k)||p(k)||m(k)||w(k)||l(k))return k;var j,C=0,ie=0;if(c(k))for(j=[],ie=k.length;C<ie;C++)j.push(n(y,k[C],R));else{j={};for(var ue in k)Object.prototype.hasOwnProperty.call(k,ue)&&(j[y(ue,R)]=n(y,k[ue],R))}return j},r=function(y,k){k=k||{};var R=k.separator||"_",j=k.split||/(?=[A-Z])/;return y.split(j).join(R)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(k,R){return R?R.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var k=a(y);return k.substr(0,1).toUpperCase()+k.substr(1)},o=function(y,k){return r(y,k).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},p=function(y){return s.call(y)=="[object Date]"},m=function(y){return s.call(y)=="[object RegExp]"},w=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},L=function(y,k){var R=k&&"process"in k?k.process:k;return typeof R!="function"?y:function(j,C){return R(j,y,C)}},P={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,k){return n(L(a,k),y)},decamelizeKeys:function(y,k){return n(L(o,k),y,k)},pascalizeKeys:function(y,k){return n(L(i,k),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:t.humps=P})(qp)})(Al);var Wp=Al.exports,Yp=["class","style"];function Kp(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Wp.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Vp(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return oi(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=Vp(c);break;case"style":l.style=Kp(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=jp(n,Yp);return Ss(e.tag,Ie(Ie(Ie({},t),{},{class:a.class,style:Ie(Ie({},a.style),o)},a.attrs),s),r)}var Cl=!1;try{Cl=!0}catch{}function Xp(){if(!Cl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function fn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?he({},e,t):{}}function Jp(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},he(t,"fa-".concat(e.size),e.size!==null),he(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),he(t,"fa-pull-".concat(e.pull),e.pull!==null),he(t,"fa-swap-opacity",e.swapOpacity),he(t,"fa-bounce",e.bounce),he(t,"fa-shake",e.shake),he(t,"fa-beat",e.beat),he(t,"fa-fade",e.fade),he(t,"fa-beat-fade",e.beatFade),he(t,"fa-flash",e.flash),he(t,"fa-spin-pulse",e.spinPulse),he(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fo(e){if(e&&Kn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Yn.icon)return Yn.icon(e);if(e===null)return null;if(Kn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Gp=Ma({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ae(function(){return Fo(t.icon)}),i=Ae(function(){return fn("classes",Jp(t))}),o=Ae(function(){return fn("transform",typeof t.transform=="string"?Yn.transform(t.transform):t.transform)}),s=Ae(function(){return fn("mask",Fo(t.mask))}),l=Ae(function(){return Lp(a.value,Ie(Ie(Ie(Ie({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Cn(l,function(c){if(!c)return Xp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=Ae(function(){return l.value?oi(l.value.abstract[0],{},r):null});return function(){return u.value}}});Ma({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=El.familyPrefix,i=Ae(function(){return["".concat(a,"-layers")].concat(ba(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Ss("div",{class:i.value},r.default?r.default():[])}}});Ma({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=El.familyPrefix,i=Ae(function(){return fn("classes",[].concat(ba(t.counter?["".concat(a,"-layers-counter")]:[]),ba(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=Ae(function(){return fn("transform",typeof t.transform=="string"?Yn.transform(t.transform):t.transform)}),s=Ae(function(){var u=Dp(t.value.toString(),Ie(Ie({},o.value),i.value)),c=u.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=Ae(function(){return oi(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Qp={prefix:"fas",iconName:"bug",icon:[512,512,[],"f188","M352 96V99.56C352 115.3 339.3 128 323.6 128H188.4C172.7 128 159.1 115.3 159.1 99.56V96C159.1 42.98 202.1 0 255.1 0C309 0 352 42.98 352 96zM41.37 105.4C53.87 92.88 74.13 92.88 86.63 105.4L150.6 169.4C151.3 170 151.9 170.7 152.5 171.4C166.8 164.1 182.9 160 199.1 160H312C329.1 160 345.2 164.1 359.5 171.4C360.1 170.7 360.7 170 361.4 169.4L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L406.6 214.6C405.1 215.3 405.3 215.9 404.6 216.5C410.7 228.5 414.6 241.9 415.7 256H480C497.7 256 512 270.3 512 288C512 305.7 497.7 320 480 320H416C416 344.6 410.5 367.8 400.6 388.6C402.7 389.9 404.8 391.5 406.6 393.4L470.6 457.4C483.1 469.9 483.1 490.1 470.6 502.6C458.1 515.1 437.9 515.1 425.4 502.6L362.3 439.6C337.8 461.4 306.5 475.8 272 479.2V240C272 231.2 264.8 224 255.1 224C247.2 224 239.1 231.2 239.1 240V479.2C205.5 475.8 174.2 461.4 149.7 439.6L86.63 502.6C74.13 515.1 53.87 515.1 41.37 502.6C28.88 490.1 28.88 469.9 41.37 457.4L105.4 393.4C107.2 391.5 109.3 389.9 111.4 388.6C101.5 367.8 96 344.6 96 320H32C14.33 320 0 305.7 0 288C0 270.3 14.33 256 32 256H96.3C97.38 241.9 101.3 228.5 107.4 216.5C106.7 215.9 106 215.3 105.4 214.6L41.37 150.6C28.88 138.1 28.88 117.9 41.37 105.4H41.37z"]},Zp={prefix:"fas",iconName:"droplet",icon:[384,512,[128167,"tint"],"f043","M16 319.1C16 245.9 118.3 89.43 166.9 19.3C179.2 1.585 204.8 1.585 217.1 19.3C265.7 89.43 368 245.9 368 319.1C368 417.2 289.2 496 192 496C94.8 496 16 417.2 16 319.1zM112 319.1C112 311.2 104.8 303.1 96 303.1C87.16 303.1 80 311.2 80 319.1C80 381.9 130.1 432 192 432C200.8 432 208 424.8 208 416C208 407.2 200.8 400 192 400C147.8 400 112 364.2 112 319.1z"]},eh={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"]},th={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"]};vr.add(th);vr.add(Zp);vr.add(eh);vr.add(Qp);tc(Gd).component("font-awesome-icon",Gp).component("pulse-loader",tm).mount("#app");
