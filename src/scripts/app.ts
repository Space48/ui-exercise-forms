const mainResetBtn = document.querySelector('.reset-btn'),
      emailInput = document.querySelector('.email-input'),
      messageBtn = document.querySelector('.messageBtn'),
      messageContent = document.querySelector('.reset-content'),
      notValidMsg = document.querySelector('.notValidMsg'),
      errorMsg = document.querySelector('.errorMsg')

mainResetBtn.addEventListener('click', () => {
    let checkEmail = validate(emailInput.value)
    checkEmail ? (notValidMsg.classList.remove('show'), postEmail(emailInput.value)) : notValidMsg.classList.add('show') 
})

messageBtn.addEventListener('click', () =>{
    messageContent.classList.contains('open') ? messageContent.classList.remove('open') : messageContent.classList.add('open')
})

const postEmail = (email) => {
    fetch('/customer/account/resetPassword', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: encodeURIComponent(JSON.stringify(email))
    })
    .then(resp => resp.json())
    .then()
}

const validate = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
