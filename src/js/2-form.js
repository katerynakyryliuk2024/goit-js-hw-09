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

const load = key => {
try {
    const dataFromLS = localStorage.getItem(key);

    return dataFromLS === null ? undefined : JSON.parse(dataFromLS);
} catch (err) {
    console.log(err);
}

}

const getFormFromLS = () => {
   
    console.log(load('feedback-form-state'));
}

getFormFromLS();

const feedbackForm.addEventListener ('submit', event => {
    event.preventDefault();

    if (feedbackForm.elements.email.value === '' || feedbackForm.elements.message.value === '') {
        return alert('Fill please all fields');
    }
})