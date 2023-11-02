const formOpenBtn = document.querySelector("#form-open")
home = document.querySelector(".home")
form_container = document.querySelector(".form_container")
formCloseBtn = document.querySelector(".form_close")
signupBtn = document.querySelector("#signup")
loginBtn = document.querySelector("#login")

formOpenBtn.addEventListener("click",()=>home.classList.add("show"));
formCloseBtn.addEventListener("click",()=>home.classList.remove("show"));



signupBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    form_container.classList.add("active");
});
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    form_container.classList.remove("active");
});