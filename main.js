const textInput = document.querySelector("input[type=text]");
const submitBTn = document.querySelector('.submit')

textInput.addEventListener('keyup', runEvent);
submitBTn.addEventListener('click', submit)

function runEvent(e){
    var emailInput = e.target.value.toLowerCase()
    
}

function containAtSymbol(text){
    return text.includes('@');
}

function submit(e){
    e.preventDefault()
    if(containAtSymbol(emailInput)){
        console.log('the email is valid');
        
    }else {
        console.log("invalid")
    }
}