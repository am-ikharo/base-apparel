const getTextInput = document.querySelector("input[type=text]");
const submitBTn = document.querySelector('.submit')

submitBTn.addEventListener('click', runEvent);
getTextInput.addEventListener('keyup', getText)

function containAtSymbol(text) {
    return text.includes('@');
}

const txt = 'hello@world';
if(containAtSymbol(txt)){
    console.log("contain @")
}else{
    console.log("doesnt contain @");
    
}

function getText(e){
    const textInput = e.target.value
    console.log(textInput);
}

function runEvent(e){
    e.preventDefault()
    
    
}