/*
    Edward Alexander Munoz
*/

let operation = '';
let totalValue = '0';
let currentValue = '0';
let maxDisplayLength = '10';
let displayValue = document.querySelector('.displayText');
let historyValue = document.querySelector('.historyText');
let operations = document.querySelectorAll('.operation-key');
let deleteButton = document.querySelector('delete-button');
let equalButton = document.querySelectorAll('equal-button');
// let display = document.querySelector('#display-values');


//pulls number input and outputs to screen
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', (e) =>
    {
        if(!displayValue.innerHTML || operation === '=')
        {
            displayValue.innerHTML = number.id;
            if(operation === '=')
            {
                operation = '';
            }
        }
        else
        {
            if(displayValue.innerHTML.length > maxDisplayLength)
            {
                displayValue.innerHTML = 'infinity';
            }
            displayValue.innerHTML += number.id;
        }
            currentValue = displayValue.innerHTML;
    });
});


//allows user to clear calculator screen
let clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click',(e) =>
    {
        displayValue.innerHTML = '';
        historyValue.innerHTML = '';
        currentValue = '0';
        total = '0';
        operation = '';
    })


//basic calculator functions
function add(x,y)
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x,y)
{
    return x * y;
}

function divide(x, y)
{
    return x / y;
}

//runs through and determines operation based on user input
function operate(x,y,operator)
{
    switch(operator)
    {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '*':
            return multiply(x,y);
        case '/':
            return divide(x,y);
    }
}


// //Takes user input and  applies operations
    function calculate(x)
    {
        
    }


    // firstValue = numbers.id;
    // console.log(firstValue);