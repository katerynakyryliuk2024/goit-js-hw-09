import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let t={email:"",message:""};const e=document.querySelector(".feedback-form");console.dir(e);e.addEventListener("input",()=>{t.email=e.elements.email.value.trim(),t.message=e.elements.message.value.trim(),console.log(t),console.log(((l,o)=>{try{localStorage.setItem(l,JSON.stringify(o))}catch(s){console.log(s)}})("feedback-form-state",t))});const m=a=>{try{const l=localStorage.getItem(a);return l===null?void 0:JSON.parse(l)}catch(l){console.log(l)}},r=()=>{console.log(m("feedback-form-state"))};r();e.addEventListener("submit",a=>{if(a.preventDefault(),e.elements.email.value===""||e.elements.message.value==="")return alert("Fill please all fields");t.email=e.elements.email.value.trim(),t.message=e.elements.message.value.trim(),console.log(t),e.reset(),localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=2-form.js.map
