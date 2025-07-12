const textInput = document.querySelector("input[type=text]");
const submitBTn = document.querySelector('.submit')

submitBTn.addEventListener('click', runEvent);


const containAtSymbol = (text) => {
    const regex = /@/;
    regex.text(text)
}
const text = textInput.target.value

function getText(e){
    const text = e.target.value
}

function runEvent(){
    console.log(text);
    
}