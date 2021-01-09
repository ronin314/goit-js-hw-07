const InputRef = document.querySelector('#validation-input');

const checkInput = (event) => {
    if (event.target.value.length === Number(InputRef.getAttribute('data-length'))) { InputRef.classList.add('valid'); }
    else { InputRef.classList.add('invalid'); }
};

InputRef.addEventListener('blur', checkInput);