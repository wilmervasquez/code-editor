function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.CuvyEhoG.js","../chunks/disclose-version.C38xRji1.js","../chunks/runtime.-07KXPar.js","../chunks/lifecycle.B2mp_6Ww.js","../chunks/paths.DsuFjMkh.js","../chunks/toggleHighContrast.LphKncg8.js","../chunks/preload-helper.CJGUh2Th.js","../assets/toggleHighContrast.IPRbgGub.css","../chunks/utils.BR8NLXGw.js","../assets/0.DkK3t4he.css","../nodes/1.-3TJeABJ.js","../chunks/entry.DNYf5WiW.js","../nodes/2.BwyF4UYS.js","../assets/2.C5SKuqpz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var U=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var u=(t,e,n)=>(U(t,e,"read from private field"),n?n.call(t):e.get(t)),L=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},G=(t,e,n,s)=>(U(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n);import{p as S,_ as j}from"../chunks/preload-helper.CJGUh2Th.js";import{B as ce,S as d,C as ue,D as de,w as ne,E as P,v as le,e as g,U as I,F as _e,b as H,m as J,g as x,G as T,a as z,H as me,i as R,I as Y,J as V,K as he,z as Z,l as Q,c as A,u as se,k as ye,p as ge,j as ve,L as be}from"../chunks/runtime.-07KXPar.js";import{r as b,l as re,m as we,n as p,p as W,q as xe,u as Ee,v as ke,d as O,w as Pe,i as X,o as Ie,f as D,g as $,x as C,j as Re,e as Oe,y as De,s as Le,h as ie}from"../chunks/disclose-version.C38xRji1.js";import{c as ae}from"../chunks/utils.BR8NLXGw.js";function k(t,e=!0,n){if(typeof t=="object"&&t!=null&&!ce(t)){if(d in t){const r=t[d];if(r.t===t||r.p===t)return r.p}const s=me(t);if(s===ue||s===de){const r=new Proxy(t,Se);return ne(t,d,{value:{s:new Map,v:P(0),a:le(t),i:e,p:r,t},writable:!0,enumerable:!1}),r}}return t}function ee(t,e=1){g(t,t.v+e)}const Se={defineProperty(t,e,n){if(n.value){const s=t[d],r=s.s.get(e);r!==void 0&&g(r,k(n.value,s.i,s.o))}return Reflect.defineProperty(t,e,n)},deleteProperty(t,e){const n=t[d],s=n.s.get(e),r=n.a,i=delete t[e];if(r&&i){const a=n.s.get("length"),c=t.length-1;a!==void 0&&a.v!==c&&g(a,c)}return s!==void 0&&g(s,I),i&&ee(n.v),i},get(t,e,n){var i;if(e===d)return Reflect.get(t,d);const s=t[d];let r=s.s.get(e);if(r===void 0&&(T()||_e)&&(!(e in t)||(i=H(t,e))!=null&&i.writable)&&(r=(s.i?P:J)(k(t[e],s.i,s.o)),s.s.set(e,r)),r!==void 0){const a=x(r);return a===I?void 0:a}return Reflect.get(t,e,n)},getOwnPropertyDescriptor(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);if(n&&"value"in n){const r=t[d].s.get(e);r&&(n.value=x(r))}return n},has(t,e){var i;if(e===d)return!0;const n=t[d],s=Reflect.has(t,e);let r=n.s.get(e);return(r!==void 0||T()&&(!s||(i=H(t,e))!=null&&i.writable))&&(r===void 0&&(r=(n.i?P:J)(s?k(t[e],n.i,n.o):I),n.s.set(e,r)),x(r)===I)?!1:s},set(t,e,n,s){const r=t[d];let i=r.s.get(e);i===void 0&&T()&&(z(()=>s[e]),i=r.s.get(e)),i!==void 0&&g(i,k(n,r.i,r.o));const a=r.a,c=!(e in t);if(a&&e==="length")for(let o=n;o<t.length;o+=1){const f=r.s.get(o+"");f!==void 0&&g(f,I)}if(t[e]=n,c){if(a){const o=r.s.get("length"),f=t.length;o!==void 0&&o.v!==f&&g(o,f)}ee(r.v)}return!0},ownKeys(t){const e=t[d];return x(e.v),Reflect.ownKeys(t)}};function M(t,e,n,s,r=!1){const i=ae();re(t);let a,c,o=null,f=null,E=null;const l=R(()=>{var y,v;if(E===(E=!!e()))return;let h=!1;if(we){const _=(v=(y=p)==null?void 0:y[0])==null?void 0:v.data;!_||_==="ssr:if:true"&&!E||_==="ssr:if:false"&&E?(b(p),W(null),h=!0):p.shift()}E?(o?Y(o):o=R(()=>(a=n(t),()=>{a!==void 0&&(b(a),a=void 0)}),i,!0),f&&V(f,()=>{f=null,c&&b(c)})):(f?Y(f):s&&(f=R(()=>(c=s(t),()=>{c!==void 0&&(b(c),c=void 0)}),i,!0)),o&&V(o,()=>{o=null,a&&b(a)})),h&&W([])},i);r&&(l.f|=he),l.ondestroy=()=>{a!==void 0&&b(a),c!==void 0&&b(c),o&&Z(o),f&&Z(f)}}function q(t,e,n){const s=ae();re(t);let r,i,a=new Set;const c=R(()=>{if(r!==(r=e())){if(i){var o=i;V(o,()=>{a.delete(o)})}r&&(i=R(()=>{n(r);const f=s.d;return()=>{f!==null&&b(f)}},s,!0,!0),i.d=s.d,a.add(i))}},s,!1);c.ondestroy=()=>{for(const o of a)o.d&&b(o.d)}}function te(t,e){var s;var n=t&&((s=t[d])==null?void 0:s.t);return t===e||n===e}function K(t,e,n,s){var r,i,a=Q(()=>{r=i,i=(s==null?void 0:s())||[],z(()=>{t!==n(...i)&&(e(t,...i),r&&te(n(...r),t)&&e(null,...r))})});a.ondestroy=()=>{Q(()=>{i&&te(n(...i),t)&&e(null,...i)})}}function je(t){return class extends Te{constructor(e){super({component:t,...e})}}}var w,m;class Te{constructor(e){L(this,w,{});L(this,m,void 0);const n=k({...e.props||{},$$events:u(this,w)},!1);G(this,m,(e.hydrate?xe:Ee)(e.component,{target:e.target,props:n,context:e.context,intro:e.intro,recover:e.recover}));for(const s of Object.keys(u(this,m)))s==="$set"||s==="$destroy"||s==="$on"||ne(this,s,{get(){return u(this,m)[s]},set(r){u(this,m)[s]=r},enumerable:!0});u(this,m).$set=s=>{Object.assign(n,s)},u(this,m).$destroy=()=>{ke(u(this,m))}}$set(e){u(this,m).$set(e)}$on(e,n){u(this,w)[e]=u(this,w)[e]||[];const s=(...r)=>n.call(this,...r);return u(this,w)[e].push(s),()=>{u(this,w)[e]=u(this,w)[e].filter(r=>r!==s)}}$destroy(){u(this,m).$destroy()}}w=new WeakMap,m=new WeakMap;function Ae(t){if(A===null)throw new Error("onMount can only be used during component initialisation.");A.r?se(()=>{const e=z(t);if(typeof e=="function")return e}):pe(A).m.push(t)}function pe(t){return t.u??(t.u={a:[],b:[],m:[]})}const Ne={};var Ce=ie('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Me=ie("<!> <!>",!0);function qe(t,e){ye(e,!0);let n=S(e,"components",11,()=>[]),s=S(e,"data_0",3,null),r=S(e,"data_1",3,null);ge(()=>e.stores.page.set(e.page)),se(()=>{e.stores,e.page,e.constructors,n(),e.form,s(),r(),e.stores.page.notify()});let i=P(!1),a=P(!1),c=P(null);Ae(()=>{const l=e.stores.page.subscribe(()=>{x(i)&&(g(a,!0),be().then(()=>{g(c,k(document.title||"untitled page"))}))});return g(i,!0),l});var o=Ie(t,!0,Me),f=D(o),E=$($(f,!0));M(f,()=>e.constructors[1],l=>{var h=C(l),y=D(h);return q(y,()=>e.constructors[0],v=>{K(v(y,{get data(){return s()},children:(_,B)=>{var F=C(_),N=D(F);return q(N,()=>e.constructors[1],oe=>{K(oe(N,{get data(){return r()},get form(){return e.form}}),fe=>n()[1]=fe,()=>n()[1])}),O(_,F)}}),_=>n()[0]=_,()=>n()[0])}),O(l,h)},l=>{var h=C(l),y=D(h);return q(y,()=>e.constructors[0],v=>{K(v(y,{get data(){return s()},get form(){return e.form}}),_=>n()[0]=_,()=>n()[0])}),O(l,h)}),M(E,()=>x(i),l=>{var h=Re(l,!0,Ce),y=Oe(h);return M(y,()=>x(a),v=>{var _=De(v),B=Le(_);return Pe(B,()=>x(c)),X(v,_)},null),X(l,h)},null),O(t,o),ve()}const Ue=je(qe),Ge=[()=>j(()=>import("../nodes/0.CuvyEhoG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),()=>j(()=>import("../nodes/1.-3TJeABJ.js"),__vite__mapDeps([10,1,2,3,11,4]),import.meta.url),()=>j(()=>import("../nodes/2.BwyF4UYS.js"),__vite__mapDeps([12,1,2,5,3,6,7,4,13]),import.meta.url)],He=[],Je={"/":[2]},Ye={handleError:({error:t})=>{console.error(t)},reroute:()=>{}};export{Je as dictionary,Ye as hooks,Ne as matchers,Ge as nodes,Ue as root,He as server_loads};
