import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let o={email:"",message:""};const t=document.querySelector(".feedback-form");console.dir(t);t.addEventListener("input",()=>{o.email=t.elements.email.value.trim(),o.message=t.elements.message.value.trim(),console.log(o)});const l=(a,e)=>{try{localStorage.setItem(a,JSON.stringify(e))}catch(r){console.log(r)}},s=a=>{try{const e=localStorage.getItem(a);return e===null?void 0:JSON.parse(e)}catch(e){console.log(e)}};l("feedback-form-state",o);const m=()=>{console.log(s("feedback-form-state"))};m();
//# sourceMappingURL=2-form.js.map
