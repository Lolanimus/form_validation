function kek() {
    pass = document.querySelector('input[name="user_password"]')
    passConf = document.querySelector('input[name="user_confirm_password"]')
    if(pass.value === passConf.value) {
        passConf.setCustomValidity('');
    } else {
        passConf.setCustomValidity("Passwords do not match");
        pass.style.border = '1px solid #c13535';
        pass.style.boxShadow = '1px 1px 6px'
        passConf.style.border = '1px solid #c13535';
    }
}

button = document.querySelector('button');
button.addEventListener('click', () => {
    kek();
})