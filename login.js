function validateForm(){
    var uname=document.getElementById("username");
    var pwd=document.getElementById("password");
    let regexp =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&():;<>,.?/~_+-=|]).{8,32}$/;
    if (uname.value=="" ){
        error.innerHTML="Please enter a valid username and password";
        error.style.color="red";
        return false;
    }
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

        // error.innerHTML="Valid";
        // error.style.color="green";
        // return true;
    }
    

}