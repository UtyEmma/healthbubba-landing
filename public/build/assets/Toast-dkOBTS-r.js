import{j as M,r as d,q as H}from"./app-Ck-2AuGP.js";function zt({children:t,...e}){return M.jsx("button",{className:`btn ${e.className}`,...e,children:t})}let L={data:""},B=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||L,R=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,U=/\/\*[^]*?\*\/|  +/g,T=/\n+/g,b=(t,e)=>{let a="",o="",s="";for(let r in t){let n=t[r];r[0]=="@"?r[1]=="i"?a=r+" "+n+";":o+=r[1]=="f"?b(n,r):r+"{"+b(n,r[1]=="k"?"":e)+"}":typeof n=="object"?o+=b(n,e?e.replace(/([^,])+/g,i=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=b.p?b.p(r,n):r+":"+n+";")}return a+(e&&s?e+"{"+s+"}":s)+o},y={},F=t=>{if(typeof t=="object"){let e="";for(let a in t)e+=a+F(t[a]);return e}return t},q=(t,e,a,o,s)=>{let r=F(t),n=y[r]||(y[r]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(r));if(!y[n]){let l=r!==t?t:(c=>{let u,f,m=[{}];for(;u=R.exec(c.replace(U,""));)u[4]?m.shift():u[3]?(f=u[3].replace(T," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][u[1]]=u[2].replace(T," ").trim();return m[0]})(t);y[n]=b(s?{["@keyframes "+n]:l}:l,a?"":"."+n)}let i=a&&y.g?y.g:null;return a&&(y.g=y[n]),((l,c,u,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(y[n],e,o,i),n},Y=(t,e,a)=>t.reduce((o,s,r)=>{let n=e[r];if(n&&n.call){let i=n(a),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return o+s+(n??"")},"");function A(t){let e=this||{},a=t.call?t(e.p):t;return q(a.unshift?a.raw?Y(a,[].slice.call(arguments,1),e.p):a.reduce((o,s)=>Object.assign(o,s&&s.call?s(e.p):s),{}):a,B(e.target),e.g,e.o,e.k)}let S,I,z;A.bind({g:1});let h=A.bind({k:1});function Z(t,e,a,o){b.p=e,S=t,I=a,z=o}function x(t,e){let a=this||{};return function(){let o=arguments;function s(r,n){let i=Object.assign({},r),l=i.className||s.className;a.p=Object.assign({theme:I&&I()},i),a.o=/ *go\d+/.test(l),i.className=A.apply(a,o)+(l?" "+l:"");let c=t;return t[0]&&(c=i.as||t,delete i.as),z&&c[0]&&z(i),S(c,i)}return s}}var G=t=>typeof t=="function",N=(t,e)=>G(t)?t(e):t,J=(()=>{let t=0;return()=>(++t).toString()})(),_=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Q=20,k=new Map,V=1e3,P=t=>{if(k.has(t))return;let e=setTimeout(()=>{k.delete(t),v({type:4,toastId:t})},V);k.set(t,e)},W=t=>{let e=k.get(t);e&&clearTimeout(e)},D=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,Q)};case 1:return e.toast.id&&W(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:a}=e;return t.toasts.find(r=>r.id===a.id)?D(t,{type:1,toast:a}):D(t,{type:0,toast:a});case 3:let{toastId:o}=e;return o?P(o):t.toasts.forEach(r=>{P(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===o||o===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},$=[],O={toasts:[],pausedAt:void 0},v=t=>{O=D(O,t),$.forEach(e=>{e(O)})},X={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},K=(t={})=>{let[e,a]=d.useState(O);d.useEffect(()=>($.push(a),()=>{let s=$.indexOf(a);s>-1&&$.splice(s,1)}),[e]);let o=e.toasts.map(s=>{var r,n;return{...t,...t[s.type],...s,duration:s.duration||((r=t[s.type])==null?void 0:r.duration)||(t==null?void 0:t.duration)||X[s.type],style:{...t.style,...(n=t[s.type])==null?void 0:n.style,...s.style}}});return{...e,toasts:o}},tt=(t,e="blank",a)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...a,id:(a==null?void 0:a.id)||J()}),w=t=>(e,a)=>{let o=tt(e,t,a);return v({type:2,toast:o}),o.id},p=(t,e)=>w("blank")(t,e);p.error=w("error");p.success=w("success");p.loading=w("loading");p.custom=w("custom");p.dismiss=t=>{v({type:3,toastId:t})};p.remove=t=>v({type:4,toastId:t});p.promise=(t,e,a)=>{let o=p.loading(e.loading,{...a,...a==null?void 0:a.loading});return t.then(s=>(p.success(N(e.success,s),{id:o,...a,...a==null?void 0:a.success}),s)).catch(s=>{p.error(N(e.error,s),{id:o,...a,...a==null?void 0:a.error})}),t};var et=(t,e)=>{v({type:1,toast:{id:t,height:e}})},at=()=>{v({type:5,time:Date.now()})},rt=t=>{let{toasts:e,pausedAt:a}=K(t);d.useEffect(()=>{if(a)return;let r=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&p.dismiss(i.id);return}return setTimeout(()=>p.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,a]);let o=d.useCallback(()=>{a&&v({type:6,time:Date.now()})},[a]),s=d.useCallback((r,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:c}=n||{},u=e.filter(g=>(g.position||c)===(r.position||c)&&g.height),f=u.findIndex(g=>g.id===r.id),m=u.filter((g,C)=>C<f&&g.visible).length;return u.filter(g=>g.visible).slice(...i?[m+1]:[0,m]).reduce((g,C)=>g+(C.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:et,startPause:at,endPause:o,calculateOffset:s}}},st=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ot=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,it=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,nt=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${st} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ot} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${it} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,lt=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ct=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${lt} 1s linear infinite;
`,dt=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ut=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,pt=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${dt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ut} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,mt=x("div")`
  position: absolute;
`,ft=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,gt=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,yt=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${gt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ht=({toast:t})=>{let{icon:e,type:a,iconTheme:o}=t;return e!==void 0?typeof e=="string"?d.createElement(yt,null,e):e:a==="blank"?null:d.createElement(ft,null,d.createElement(ct,{...o}),a!=="loading"&&d.createElement(mt,null,a==="error"?d.createElement(nt,{...o}):d.createElement(pt,{...o})))},bt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,xt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,vt="0%{opacity:0;} 100%{opacity:1;}",wt="0%{opacity:1;} 100%{opacity:0;}",Et=x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,jt=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,kt=(t,e)=>{let a=t.includes("top")?1:-1,[o,s]=_()?[vt,wt]:[bt(a),xt(a)];return{animation:e?`${h(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$t=d.memo(({toast:t,position:e,style:a,children:o})=>{let s=t.height?kt(t.position||e||"top-center",t.visible):{opacity:0},r=d.createElement(ht,{toast:t}),n=d.createElement(jt,{...t.ariaProps},N(t.message,t));return d.createElement(Et,{className:t.className,style:{...s,...a,...t.style}},typeof o=="function"?o({icon:r,message:n}):d.createElement(d.Fragment,null,r,n))});Z(d.createElement);var Ot=({id:t,className:e,style:a,onHeightUpdate:o,children:s})=>{let r=d.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;o(t,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,o]);return d.createElement("div",{ref:r,className:e,style:a},s)},Nt=(t,e)=>{let a=t.includes("top"),o=a?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(a?1:-1)}px)`,...o,...s}},At=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Ct=({reverseOrder:t,position:e="top-center",toastOptions:a,gutter:o,children:s,containerStyle:r,containerClassName:n})=>{let{toasts:i,handlers:l}=rt(a);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(c=>{let u=c.position||e,f=l.calculateOffset(c,{reverseOrder:t,gutter:o,defaultPosition:e}),m=Nt(u,f);return d.createElement(Ot,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?At:"",style:m},c.type==="custom"?N(c.message,c):s?s(c):d.createElement($t,{toast:c,position:u}))}))},j=p;const Dt=()=>{const{props:t}=H();return d.useEffect(()=>{t.toast&&(t.toast.status=="success"&&j.success(t.toast.message),t.toast.status=="error"&&j.error(t.toast.message),t.toast.status=="info"&&j(t.toast.message),t.toast.status=="warn"&&j.success(t.toast.message))},[t]),M.jsx(Ct,{position:"top-right"})};export{zt as B,Ct as I,Dt as T,j as _};
