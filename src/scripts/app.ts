const responseInvalid = document.querySelector('.form__response-no');

document.querySelector('.form__reset-password-btn').addEventListener("click", e => responseInvalid.style.display = "inline-block");


const helpShow = document.querySelector('.form__reset-help-text');

document.querySelector('.form__reset-help').addEventListener("click", e => helpShow.style.display = "inline-block");
