let form=document.querySelector('.testForm')

let password= document.querySelector('.inputPass')

//condition
//atleast ,8 digit , contain 1 uppercase, 1 lowercase, 0-9



let pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let passwordValue = password.value;
    console.log(passwordValue);
    let result = passwordValue.match(pattern);
    console.log(result);
    if(result){
        console.log("Your password is strong")
    }
    else{
        console.log("Try Again")
    }
})