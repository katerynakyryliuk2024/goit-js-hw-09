let formData = {
    email: "",
    message: ""
}

const feedbackForm = document.querySelector('.feedback-form');
console.dir(feedbackForm);

feedbackForm.addEventListener('input', () => {
   
    formData.email = feedbackForm.elements.email.value.trim();
    formData.message = feedbackForm.elements.message.value.trim();

    console.log(formData);

})

const saveToLS = (key, data) => {

try {
    
 localStorage.setItem( key, JSON.stringify(data));
    
} catch (err) {
    console.log(err);
}

}

saveToLS('feedback-form-state', formData);

//const getFormFromLS () => {
    //try {
       // const formFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
        
       // if (formFromLS === null) {
       //     return
//}
//
        //formData = formFromLS;
        //console.log(formData);

  //  } catch (err) {
     //   console.log(err);
  //  }
//}

//getFormFromLS();
