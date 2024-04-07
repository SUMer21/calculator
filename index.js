const Display = document.getElementById('input');


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