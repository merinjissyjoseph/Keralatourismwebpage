function validate(){
let email=document.getElementById("email").value;
let error1=document.getElementById("error1");
// let regexp1=/^([A=Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z{2,3}])(.[a-z]{2,3})?$/;
let regexp1=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
if (regexp1.test(email.value)){
    error1.innerHTML="valid email ";
    return true;
}
else {
    error1.innerHTML="invalid email";
    return false;
}
}