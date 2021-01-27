var pass = document.getElementById("password");



pass.addEventListener("keyup", function() {
  checkPassword(pass.value)
});


function checkPassword(password) {
    
  if (password.length < 8) {
    error.innerHTML = "minimum number of characters is 8";
  }
  else {
  var strengthbar = document.getElementById("strength");
  var strength = 0;
  if (password.match(/[a-z]+/)) {
    strength += 1;
    // document.write(strength);
  }
  if (password.match(/[A-Z]+/)) {
    strength += 1;
    // document.write(strength);
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
    // document.write(strength);
  }
  if (password.match(/[$@#&!]+/)) {
    strength += 1;
    // document.write(strength);

  }

 

  switch (strength) {
    case 0:
      strengthbar.value = 0;
      break
      case 1:
        strengthbar.value = 25;
        error.innerHTML="weak password";
        break
  
      case 2:
        strengthbar.value = 50;
        error.innerHTML="medium password";
        break
  
      case 3:
        strengthbar.value =75  ;
        error.innerHTML= "password is strong";
        break
  
      case 4:
        strengthbar.value = 100;
        error.innerHTML= "password is safe now";
        break
    }
}
}
  

//   final validation
  function validate(){
     let password = document.getElementById("password").value;
     let passwordrepeat  = document.getElementById("passwordrepeat").value;
     
     if (password != passwordrepeat){
        error.innerHTML="Password  doesn't match";
         return false ;
     }
     else if (password == passwordrepeat) {
        
        let error=document.getElementById("error");
        let error1=document.getElementById("error1");
        let digits=document.getElementById("phonenumber").value;
        let email=document.getElementById("email");
        let regexp1=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        if (regexp1.test(email.value)){
            error1.innerHTML="valid email ";
            if (digits.length<10){
            error.innerHTML="Please enter a valid mobile number";
            return false;
            }
            else if (digits.length ==10){
              let regexp =/^\d{10}$/;
                if (regexp.test(phonenumber.value)){
                 error.innerHTML="Valid";
                 error.style.color="green";
                 return true;
              }
            else{
                error.innerHTML="INVALID";
                error.style.color="red";
                return false;  
            }
            }
           else if (digits.length >=10){
                let regexp =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                  if(regexp.test(phonenumber.value)){
                    error.innerHTML="Valid phone number";
                    error.style.color="green";
                    return true;
                    }  
                    else{
                        error.innerHTML="INVALID phone number";
                        error.style.color="red";
                        return false;  
                    }
                }
            }
        
            else {
                error1.innerHTML="Enter a valid email address";
                return false;
            }
        }
    }



