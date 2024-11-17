import{r as i,j as s,Y as v,a as w}from"./app-DDYenmDB.js";import{G as C}from"./GuestLayout-wZkVH98A.js";import{C as b}from"./Cta-CHIKOXPO.js";import{SingleProduct as N}from"./SingleProduct-wcH2UuOu.js";import{F as k}from"./fuse-CU2r43ac.js";import"./CartIcon-CfwlorfL.js";import"./Toast-BNKLN8rx.js";import"./CartModal-3yCqMKQM.js";function H({categories:d,products:r}){const[p,M]=i.useState(r),[c,n]=i.useState(r),[u,o]=i.useState(d[0]),[j,x]=i.useState(null),[S,m]=i.useState(!1),y=t=>{o(a=>(x(a),t)),m(!0),fetch(route("medications.list",{category:t.category_id})).then(async a=>{const{medications:l,category:h}=await a.json();n(l)}).catch(a=>{o(j),x(null)}).finally(()=>{m(!1)})},f=()=>n(r),g=()=>{const t=e.target.value;if(!t)return f();const l=new k(p,{keys:["medication_name"]}).search(t);n(l.map(h=>h.item))};return s.jsxs(C,{children:[s.jsx(v,{title:"Medication"}),s.jsx("div",{className:"mb-4",children:s.jsxs("div",{class:"max-w-7xl mx-auto px-4",children:[s.jsxs("ul",{class:"flex space-x-1 font-medium text-muted items-center",children:[s.jsx("li",{children:s.jsx(w,{className:"hover:text-primary",href:route("home"),children:"Home"})}),s.jsx("li",{children:"/"}),s.jsx("li",{children:"Medications"})]}),s.jsx("h2",{class:"text-2xl md:text-4xl font-medium",children:"Explore Medications"})]})}),s.jsx("div",{className:"py-3 border-y border-gray-200",children:s.jsxs("div",{className:"max-w-7xl mx-auto flex gap-x-4 justify-between items-center px-4",children:[s.jsx("div",{className:"shrink-0 md:w-2/5 hidden md:block",children:s.jsxs("p",{className:"text-muted",children:["1-",c.length," of ",c.length," results"]})}),s.jsx("div",{class:"flex-1 md:w-2/5 ",children:s.jsxs("div",{class:"relative  flex items-center ",children:[s.jsx("span",{class:"absolute left-2",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M17.4999 17.5L13.8749 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z",stroke:"#9CA3AF","stroke-width":"1.31602","stroke-linecap":"round","stroke-linejoin":"round"})})}),s.jsx("input",{onChange:g,type:"text",class:"pl-10 w-full border border-primary rounded-md shadow",placeholder:"Search Medications"})]})}),s.jsx("div",{class:"md:w-1/6"})]})}),s.jsxs("div",{className:"md:py-20 py-5 max-w-7xl mx-auto px-4",children:[s.jsxs("div",{class:"md:grid md:grid-cols-12 space-y-5 md:space-y-0",children:[s.jsx("div",{className:"md:col-span-3 col-span-full space-y-2",children:s.jsx("ul",{class:"space-y-2 sticky top-10",children:d.map((t,a)=>s.jsx("li",{children:s.jsxs("label",{class:"flex space-x-2  items-center font-medium",children:[s.jsx("input",{type:"checkbox",checked:t.category_id==u.category_id,onChange:l=>y(t),class:"rounded text-primary p-2",id:""}),s.jsx("span",{children:t.category_name})]})}))})}),s.jsx("div",{className:"col-span-9",children:s.jsx("div",{className:"grid md:grid-cols-3 gap-5 mb-4",children:c.map(t=>s.jsx("div",{children:s.jsx(N,{medication:t})}))})})]}),s.jsx("div",{className:"py-20",children:s.jsx(b,{})})]})]})}export{H as default};