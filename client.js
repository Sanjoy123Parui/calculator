// define variable
const clearValue = document.getElementById('clear');
const numberValue = document.querySelectorAll('.number');
const operatorValue = document.querySelectorAll('.operator');
const equalsValue = document.getElementById('equals');
const resultInput = document.getElementById('result');

//there define clear function call
clearValue.addEventListener('click', ()=> {
    resultInput.value = '';
});


// there define all numbers function call
numberValue.forEach((button)=> {
    button.addEventListener('click', ()=> {
        resultInput.value += parseInt(button.textContent);
    });
});

// there define operators function call
operatorValue.forEach((button)=> {
    button.addEventListener('click', ()=> {
        resultInput.value += button.textContent;
    });
});

// there define calculate value function call
equalsValue.addEventListener('click', ()=> {
    resultInput.value = eval(resultInput.value);
});