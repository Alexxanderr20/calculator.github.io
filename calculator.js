/*
    Edward Alexander Munoz
*/

let operation = '';
let totalValue = '0';
let currentValue = '0';
let maxDisplayLength = '10';
let displayValue = document.querySelector('.displayText');
let historyValue = document.querySelector('.historyText');
let deleteButton = document.querySelector('delete-button');
let equalButton = document.querySelectorAll('equal-button');


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
            currentValue = displayValue.innerHTML;
            if(displayValue.innerHTML.length > maxDisplayLength)
            {
                displayValue.innerHTML = 'infinity';
            }
        }
            displayValue.innerHTML += number.id;
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

//allows user to delete individual numbers
let backSpace = document.getElementById('delete-button');
backSpace.addEventListener('click', (e) => {
    displayValue.innerHTML = displayValue.innerHTML.slice(0, displayValue.innerHTML.length - 1);
    currentValue = displayValue.innerHTML;
});

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
    if(y === '0')
    {
        displayValue.innerHTML = 'Infinity'
    }
    else
    {
        return x / y;
    }
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

