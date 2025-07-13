const textInput = document.querySelector("input[type=text]");
const submitBTn = document.querySelector('.submit')
const getError = document.querySelector('.error')
const getErrorMessage = document.querySelector('.error-message')

submitBTn.addEventListener('click', runEvent);
textInput.addEventListener('keyup', getText)

function containAtSymbol(text) {
    return text.indexOf('@') !== -1;
}

function getText(e){
    const textInput = e.target.value
    return textInput
    
}

function runEvent(e){
    e.preventDefault()
    const txt = textInput.value
    if(containAtSymbol(txt)){
        getError.style.display = 'none'
        getErrorMessage.style.display = 'none'
    }else{
        getError.style.display = 'block'
        getErrorMessage.style.display = 'block'
    }
    
}