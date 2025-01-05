function validateform(){
let username=document.getElementById('username');
let password=document.getElementById('password');
let confirmPassword=document.getElementById('confirmPassword');


let usernameRequired=document .getElementById('usernameRequired');
let passwordRequired=document .getElementById('passwordRequired');
let confirmPasswordRequired=document .getElementById('confirmPasswordRequired');

isValid=false;


if (username.trim()===""){
    usernameRequired .style .display ="inline";
    usernameRequired .style .color="red";

    isValid= false;
    
}else{
    usernameRequired.style.display="none";
}








if (password.trim()===""){
    passwordRequired .style .color="red";
    passwordRequired .style .display ="inline";
isValid= false;
} else{
    passwordRequired .style.display="none";
}







if (confirmPassword.trim()===""){
   confirmPasswordRequired.style .color="red";
   confirmPasswordRequired.style .display ="inline";
isValid= false;
}else{
    confirmPasswordRequired .style .display="none";
}










if (password!==confirmPassword){
    document.write("Passwords do not match");
    isValid= false;
}

isValid= true;




}



   