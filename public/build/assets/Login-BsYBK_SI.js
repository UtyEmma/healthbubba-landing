import{W as n,r as i,j as s,Y as d}from"./app-DDYenmDB.js";import"./GuestLayout-wZkVH98A.js";import{B as c}from"./Toast-BNKLN8rx.js";import{A as m}from"./AuthLayout-BpHUZ-MI.js";import"./CartIcon-CfwlorfL.js";import"./CartModal-3yCqMKQM.js";function b(){const{data:t,setData:r,post:a,processing:p,errors:x,reset:o}=n({email:"",password:""});i.useEffect(()=>()=>{o("password","password_confirmation")},[]);const l=e=>{e.preventDefault(),a(route("login"))};return s.jsxs(m,{children:[s.jsx(d,{title:"Login"}),s.jsxs("form",{onSubmit:l,className:"md:p-10 p-5 shadow-xl border rounded-2xl space-y-5",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("h2",{class:"font-semibold text-xl md:text-2xl",children:"Log into your Account"}),s.jsx("p",{class:"text-muted text-sm md:text-base",children:"Book appointment, Order Lab Test and Manage Prescription"})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("label",{class:"font-medium",children:"Email Address"}),s.jsx("input",{type:"email",value:t.email,onChange:e=>r("email",e.target.value),class:"form-control",placeholder:"Email Address"})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("label",{class:"font-medium",children:"Password"}),s.jsx("input",{type:"password",value:t.password,onChange:e=>r("password",e.target.value),class:"form-control",placeholder:"Password"})]}),s.jsx("div",{children:s.jsx(c,{class:"btn w-full btn-primary",children:"Login"})})]})]})}export{b as default};