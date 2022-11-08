function check(){
    console.log('test');
}

function submit(){
    alert(output.textContent);
}

function reset(){
    outputInt = 0;
    output.textContent = outputInt;
}

function minus(){
    if (output > 0){
        outputInt -= 1;
        output.textContent = outputInt;
    }
}
function plus(){
    outputInt += 1;
    output.textContent = outputInt;
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const minusButton = document.querySelector(".minus-button").addEventListener('click', minus);
const plusButton = document.querySelector(".plus-button").addEventListener('click', plus);
const resetButton = document.querySelector(".reset-button").addEventListener('click', reset);
const sumbitButton = document.querySelector(".submit-button").addEventListener('click', submit);


// const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
//     alert(phone_content.value);
// }

