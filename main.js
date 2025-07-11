const textInput = document.querySelector("input[type=text]");


textInput.addEventListener('keyup', runEvent);

function runEvent(e){
    console.log(e.target.value);
    
}