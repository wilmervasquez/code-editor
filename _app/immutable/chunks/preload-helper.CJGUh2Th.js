import{P as R,a as I,b as L,c as b}from"./disclose-version.C38xRji1.js";import{b as w,s as A,g as P,e as y,a as p,h as B,m as k}from"./runtime.-07KXPar.js";function C(c,i,u,v){var S;var _=(u&I)!==0,o=(u&L)!==0,t=(u&b)!==0,f=c[i],e=(S=w(c,i))==null?void 0:S.set,a=v,d=!0,h=()=>(t&&d&&(d=!1,a=p(v)),a);if(f===void 0&&v!==void 0){if(e&&o)throw new Error("ERR_SVELTE_BINDING_FALLBACK");f=h(),e&&e(f)}var n=o?()=>{var r=c[i];return r===void 0?h():(d=!0,r)}:()=>{var r=c[i];return r!==void 0&&(a=void 0),r===void 0?a:r};if(!(u&R))return n;if(e)return function(r){return arguments.length===1?(e(r),r):n()};var s=!1,l=k(f),m=B(()=>{var r=n(),E=P(l);return s?(s=!1,E):l.v=r});return _||(m.equals=A),function(r){var E=P(m);return arguments.length>0?(m.equals(r)||(s=!0,y(l,r),P(m)),r):E}}const q="modulepreload",O=function(c,i){return new URL(c,i).href},g={},D=function(i,u,v){let _=Promise.resolve();if(u&&u.length>0){const o=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),f=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));_=Promise.all(u.map(e=>{if(e=O(e,v),e in g)return;g[e]=!0;const a=e.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(!!v)for(let s=o.length-1;s>=0;s--){const l=o[s];if(l.href===e&&(!a||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const n=document.createElement("link");if(n.rel=a?"stylesheet":q,a||(n.as="script",n.crossOrigin=""),n.href=e,f&&n.setAttribute("nonce",f),document.head.appendChild(n),a)return new Promise((s,l)=>{n.addEventListener("load",s),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})}))}return _.then(()=>i()).catch(o=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=o,window.dispatchEvent(t),!t.defaultPrevented)throw o})};export{D as _,C as p};
