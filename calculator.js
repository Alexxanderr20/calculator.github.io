/*
    Edward Alexander Munoz
*/
let operation = '';
let currentValue = '0';
let maxDisplayLength = '10';

// let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operation-key');
let clearButton = document.querySelector('clear-button');
let deleteButton = document.querySelector('delete-button');
let equalButton = document.querySelectorAll('equal-button');
let display = document.querySelector('#display');


//pulls number input and outputs to screen
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', (e) =>
    {
        if(!display.innerHTML || operation === '=')
        {
            display.innerHTML = number.id;
            if(operation === '=')
            {
                operation = '';
            }
        }
        else
        {
            if(display.innerHTML.length > maxDisplayLength)
            {
                display.innerHTML = 'infinity';
            }
            display.innerHTML += number.id;
        }
            currentValue = display.innerHTML;
    });
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
    return x / y;
}

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
