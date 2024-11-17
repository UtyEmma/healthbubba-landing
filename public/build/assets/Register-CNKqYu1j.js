import{W as n,r as i,j as e,Y as m,a as c}from"./app-C4wyntpX.js";import"./GuestLayout-ET2SJAb2.js";import{B as d}from"./Toast-YWkRXbmD.js";import{A as p}from"./AuthLayout-fHOdG8An.js";import{F as x}from"./CartModal-yQimo8Vf.js";import"./CartIcon-j3_lPLiS.js";function b(){const{data:a,setData:t,post:r,processing:u,errors:h,reset:l}=n({firstname:"",lastname:"",email:"",password:"",password_confirmation:""});i.useEffect(()=>()=>{l("password","password_confirmation")},[]);const o=s=>{s.preventDefault(),r(route("register"),{onSuccess(){}})};return e.jsxs(p,{children:[e.jsx(m,{title:"Register"}),e.jsxs("form",{onSubmit:o,className:"md:p-10 p-5 shadow-xl border rounded-2xl space-y-5",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"font-semibold text-xl md:text-2xl",children:"Create an Account"}),e.jsx("p",{className:"text-muted text-sm md:text-base",children:"Book appointment, Order Lab Test and Manage Prescription"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"font-medium",children:"First Name"}),e.jsx("input",{value:a.firstname,onChange:s=>t("firstname",s.target.value),className:"form-control",placeholder:"First Name"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"font-medium",children:"Last Name"}),e.jsx("input",{value:a.lastname,onChange:s=>t("lastname",s.target.value),className:"form-control",placeholder:"Last Name"})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"font-medium",children:"Email Address"}),e.jsx("input",{type:"email",value:a.email,onChange:s=>t("email",s.target.value),className:"form-control",placeholder:"Email Address"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"font-medium",children:"Password"}),e.jsx("input",{type:"password",value:a.password,onChange:s=>t("password",s.target.value),className:"form-control",placeholder:"Password"})]}),e.jsx("div",{children:e.jsxs(d,{className:"btn w-full btn-primary",children:["Get Started ",e.jsx(x,{className:"text-white text-opacity-70 w-6 h-6"})]})}),e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"text-sm text-muted",children:["Already have an account? ",e.jsx(c,{className:"text-primary",href:route("login"),children:"Login"})]})})]})]})}export{b as default};
