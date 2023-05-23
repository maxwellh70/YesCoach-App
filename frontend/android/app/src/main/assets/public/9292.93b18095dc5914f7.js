"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9292],{9292:(q,O,g)=>{g.r(O),g.d(O,{startInputShims:()=>X});var w=g(5861),P=g(8986),S=g(9397),m=g(3457),p=(()=>{return(e=p||(p={})).Body="body",e.Ionic="ionic",e.Native="native",e.None="none",p;var e})();const j={getEngine(){var e;return(null===(e=null==m.w?void 0:m.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Keyboard"))&&(null==m.w?void 0:m.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const e=this.getEngine();return e&&e.getResizeMode?e.getResizeMode():Promise.resolve(void 0)}},C=new WeakMap,I=(e,n,t,o=0,s=!1)=>{C.has(e)!==t&&(t?F(e,n,o,s):H(e,n))},F=(e,n,t,o=!1)=>{const s=n.parentNode,i=n.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o&&(i.disabled=!0),s.appendChild(i),C.set(e,i);const d="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${d}px,${t}px,0) scale(0)`},H=(e,n)=>{const t=C.get(e);t&&(C.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},A="input, textarea, [no-blur], [contenteditable]",R="$ionPaddingTimer",T=(e,n,t)=>{const o=e[R];o&&clearTimeout(o),n>0?e.style.setProperty("--keyboard-offset",`${n}px`):e[R]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},N=(e,n,t)=>{e.addEventListener("focusout",()=>{n&&T(n,0,t)},{once:!0})};let y=0;const V=(e,n,t,o,s,i,a,d=!1)=>{const r=i&&(void 0===a||a.mode===p.None),_=function(){var u=(0,w.Z)(function*(){J(e,n,t,o,s,r,d)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",_,!0),()=>{e.removeEventListener("focusin",_,!0)}},J=function(){var e=(0,w.Z)(function*(n,t,o,s,i,a,d=!1){if(!o&&!s)return;const r=((e,n,t)=>{var o;return((e,n,t,o)=>{const s=e.top,i=e.bottom,a=n.top,r=a+15,u=Math.min(n.bottom,o-t)-50-i,h=r-s,l=Math.round(u<0?-u:h>0?-h:0),v=Math.min(l,s-a),M=Math.abs(v)/.3;return{scrollAmount:v,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:t,inputSafeY:4-(s-r)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)})(n,o||s,i);if(o&&Math.abs(r.scrollAmount)<4)return t.focus(),void(a&&null!==o&&(y+=r.scrollPadding,T(o,y),N(t,o,()=>y=0)));if(I(n,t,!0,r.inputSafeY,d),t.focus(),(0,S.r)(()=>n.click()),a&&o&&(y+=r.scrollPadding,T(o,y)),typeof window<"u"){let _;const u=function(){var l=(0,w.Z)(function*(){void 0!==_&&clearTimeout(_),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,P.c)(o,0,r.scrollAmount,r.scrollDuration)),I(n,t,!1,r.inputSafeY),t.focus(),a&&N(t,o,()=>y=0)});return function(){return l.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",u)};if(o){const l=yield(0,P.g)(o);if(r.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===t.type?(r.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",u),void(_=setTimeout(u,1e3))}u()}});return function(t,o,s,i,a,d){return e.apply(this,arguments)}}(),X=function(){var e=(0,w.Z)(function*(n,t){const o=document,s="ios"===t,i="android"===t,a=n.getNumber("keyboardHeight",290),d=n.getBoolean("scrollAssist",!0),r=n.getBoolean("hideCaretOnScroll",s),_=n.getBoolean("inputBlurring",s),u=n.getBoolean("scrollPadding",!0),h=Array.from(o.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,v=new WeakMap,U=yield j.getResizeMode(),M=function(){var f=(0,w.Z)(function*(c){yield new Promise(L=>(0,S.c)(c,L));const x=c.shadowRoot||c,b=x.querySelector("input")||x.querySelector("textarea"),D=(0,P.f)(c),W=D?null:c.closest("ion-footer");if(b){if(D&&r&&!l.has(c)){const L=((e,n,t)=>{if(!t||!n)return()=>{};const o=d=>{(e=>e===e.getRootNode().activeElement)(n)&&I(e,n,d)},s=()=>I(e,n,!1),i=()=>o(!0),a=()=>o(!1);return(0,S.a)(t,"ionScrollStart",i),(0,S.a)(t,"ionScrollEnd",a),n.addEventListener("blur",s),()=>{(0,S.b)(t,"ionScrollStart",i),(0,S.b)(t,"ionScrollEnd",a),n.removeEventListener("blur",s)}})(c,b,D);l.set(c,L)}if("date"!==b.type&&"datetime-local"!==b.type&&(D||W)&&d&&!v.has(c)){const L=V(c,b,D,W,a,u,U,i);v.set(c,L)}}});return function(x){return f.apply(this,arguments)}}();_&&(()=>{let e=!0,n=!1;const t=document;(0,S.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",a=>{if(n)return void(n=!1);const d=t.activeElement;if(!d||d.matches(A))return;const r=a.target;r!==d&&(r.matches(A)||r.closest(A)||(e=!1,setTimeout(()=>{e||d.blur()},50)))},!1)})();for(const f of h)M(f);o.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),o.addEventListener("ionInputDidUnload",f=>{(f=>{if(r){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=v.get(f);c&&c(),v.delete(f)}})(f.detail)})});return function(t,o){return e.apply(this,arguments)}}()}}]);