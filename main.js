const getTextInput = document.querySelector("input[type=text]");
const submitBTn = document.querySelector('.submit')

submitBTn.addEventListener('click', runEvent);
getTextInput.addEventListener('keyup', getText)

const containAtSymbol = (text) => {
    const regex = /@/;
    regex.text(text)
}

function getText(e){
    const textInput = e.target.value
    console.log(textInput);
}

function runEvent(e){
    e.preventDefault()
    
    
}