const textInput = document.querySelector("input[type=text]");


textInput.addEventListener('keyup', runEvent);

function runEvent(e){
    var emailInput = e.target.value.toLowerCase()
    
}