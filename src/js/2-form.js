let formData = {
    email: "",
    message: ""
}

const feedbackForm = document.querySelector('.feedback-form');
console.dir(feedbackForm);

const fillFormFilds = () => {
    try {
        const formfromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

        if (formfromLS === null) {
            return;
        }
        formData = formfromLS;
        
        for (const key in formfromLS) {
            feedbackForm.elements[key].value = formfromLS[key];
        }
        
    } catch (err) {
        console.log(err);
    }
};
fillFormFilds();

const formFildChange = event => {

    const { target: formFieldEl } = event;
    
    const fieldValue = formFieldEl.value;
    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


feedbackForm.addEventListener('input', formFildChange);


 feedbackForm.addEventListener ('submit', event => {
    event.preventDefault();

    if (feedbackForm.elements.email.value === '' || feedbackForm.elements.message.value === '') {
        return alert('Fill please all fields');
     }
     
     
     event.currentTarget.reset();
     
     localStorage.removeItem('feedback-form-state');

    
})