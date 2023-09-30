let form=document.querySelector('.testForm')
console.log(form);

//ab submit pr ek event listener add krenge jo submit button click hone pr chalega
form.addEventListener('submit',(e)=>{
    //ab yha e.preventdefault lgaenge so that reload hone me dikkt na kre
    e.preventDefault(); //default behaviour ko rokta hai
    console.log("submit the form successfully")

})

//ab hme particular value ko access krna hai
let password=document.querySelector('.inputPass')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(password.value);
})