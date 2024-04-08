const Display = document.getElementById('input');
let sound = document.getElementsByClassName('sounds');

function  display(input){
    Display.value += input;
    
}

function calculate() {
   try{
        Display.value = eval(Display.value);
   }
   catch(Error){
    Display.value = 'Error';
   }
}

function clearDisplay() {
    Display.value = " ";
}
sound.addEventListener('click', fun());
function fun() {
    var audio = new Audio('sound.mp3');
    audio.play();
}
