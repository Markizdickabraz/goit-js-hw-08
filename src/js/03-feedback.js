import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

// console.log(form);
const email = document.querySelector('.feedback-form input');

const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';


form.addEventListener('input', eventValue);
form.addEventListener('submit', eventSubmit);


throttleEvents();
populateInputs();


function eventValue(event) {
    
    const {
        elements: { email, message }} =
        event.currentTarget;
        
        const newObject = {
            email: event.currentTarget.elements.email.value,
            message: event.currentTarget.elements.message.value,
        };
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newObject));
        
        
    };
    
function throttleEvents() { throttle(eventValue, 10000)};



function eventSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

};

function populateInputs() {
    const populateInputMessage = localStorage.getItem(STORAGE_KEY);
    const parsePopulateInputMessage = JSON.parse(populateInputMessage);
    console.dir(parsePopulateInputMessage);
    if (populateInputMessage) {
        // console.log(populateInputMessage);
        email.value = parsePopulateInputMessage.email;
        message.value = parsePopulateInputMessage.message;
    }
};