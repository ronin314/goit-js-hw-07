const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');


textRef.setAttribute('for', 'font-size-control')

const changeFontSize = () => { 
    textRef.style.fontSize = inputRef.value + 'px'
};

inputRef.addEventListener('input', changeFontSize);