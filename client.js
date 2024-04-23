const clearValue = document.getElementById('clear');
const numberValue = document.querySelectorAll('.number');
const operatorValue = document.querySelectorAll('.operator');
const equalsValue = document.getElementById('equals');
const resultInput = document.getElementById('result');

clearValue.addEventListener('click', ()=> {
    resultInput.value = '';
});

numberValue.forEach((button)=> {
    button.addEventListener('click', ()=> {
        resultInput.value += parseInt(button.textContent);
    });
});

operatorValue.forEach((button)=> {
    button.addEventListener('click', ()=> {
        resultInput.value += button.textContent;
    });
});

equalsValue.addEventListener('click', ()=> {
    resultInput.value = eval(resultInput.value);
});