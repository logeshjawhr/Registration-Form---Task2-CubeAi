const form = document.getElementById("form");
const username = document.getElementById("username");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener('submit', e=>{
    e.preventDefault();
    checkInput();
});


function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username cannot be blank');
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setError(email, 'Not a valid email');
    }
    else{
        setSuccess(email);
    }
    if(mobileValue === ''){
        setError(mobile, 'mobile number cannot be blank');
    }
    else if(mobileValue.length<11){
        setError(mobile, 'mobile number should be 10 digits');
    }
    else if(mobileValue.length>11){
        setError(mobile, 'enter valid mobile number');
    }
    else{
        setSuccess(mobile);
    }
    if(passwordValue === ''){
        setError(password, 'password cannot be blank');
    }
    else if(passwordValue.length<8){
        setError(password, 'Password should be greater than 8 characters')
    }
    else{
        setSuccess(password);
    }
    if(password2Value === ''){
        setError(password2, 'password cannot be blank');
    }
    else if(password2Value.length<8){
        setError(password2, 'Password should be greater than 8 characters')
    }
    else if(passwordValue !== password2Value){
        setError(password2, 'Password does not match')
    }
    else{
        setSuccess(password2);
    }



}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'input-field error';
    small.innerText = message;
}
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'input-field success';
}

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}