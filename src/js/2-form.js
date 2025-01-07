let formData = {
    email: "",
    message: ""
}

const feedbackForm = document.querySelector('.feedback-form');
console.dir(feedbackForm);

const load = key => {
try {
    const dataFromLS = localStorage.getItem(key);

    return dataFromLS === null ? undefined : JSON.parse(dataFromLS);

    for (const key in dataFromLS) {
        feedbackForm.elements[key].value = dataFromLS[key];
    }

} catch (err) {
    console.log(err);
}

}

const getFormFromLS = () => {
   
    console.log(load('feedback-form-state'));
}

getFormFromLS();

feedbackForm.addEventListener('input', () => {
   
    formData.email = feedbackForm.elements.email.value.trim();
    formData.message = feedbackForm.elements.message.value.trim();

    console.log(formData);

    const saveToLS = (key, data) => {

try {
    
 localStorage.setItem( key, JSON.stringify(data));
    
} catch (err) {
    console.log(err);
}

}

console.log(saveToLS('feedback-form-state', formData)); 

})



 feedbackForm.addEventListener ('submit', event => {
    event.preventDefault();

    if (feedbackForm.elements.email.value === '' || feedbackForm.elements.message.value === '') {
        return alert('Fill please all fields');
     }
     
     
     feedbackForm.reset();
     localStorage.removeItem('feedback-form-state');

    
})