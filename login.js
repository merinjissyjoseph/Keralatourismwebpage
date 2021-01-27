function validateForm(){
    let email=document.getElementById("email");
    let pwd=document.getElementById("password");
    let regexp1=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
   
    if (regexp1.test(email.value)){
        error.innerHTML="Valid email address";
        error.style.color="green";
        
         if(pwd.value ==""){  
          document.getElementById("error").innerHTML = "**Fill the password please!";  
          return false;  
          }  

         else{
          let regexp =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&():;<>,.?/~_+-=|]).{8,32}$/;
           if (regexp.test(pwd.value)){
            error.innerHTML="Welcome to God's own Country";
            error.style.color="green";
                 
             return true;
           }
        else{
            error.innerHTML="Please enter a valid password ";
            error.style.color="blue";
             return false;
        }
       }
    }
    else {
        error.innerHTML="Please enter a valid email address";
        error.style.color="red";
         return false;
    }
}