import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let l={email:"",message:""};const t=document.querySelector(".feedback-form");console.dir(t);const s=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;l=e;for(const a in e)t.elements[a].value=e[a]}catch(e){console.log(e)}};s();const m=e=>{const{target:a}=e,r=a.value,o=a.name;l[o]=r,localStorage.setItem("feedback-form-state",JSON.stringify(l))};t.addEventListener("input",m);t.addEventListener("submit",e=>{if(e.preventDefault(),t.elements.email.value===""||t.elements.message.value==="")return alert("Fill please all fields");e.currentTarget.reset(),l={email:"",message:""},localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=2-form.js.map
