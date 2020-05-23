/*
    Edward Alexander Munoz

*/

const numberValue = document.querySelectorAll(".number-key");
const operationValue = document.querySelectorAll(".operation-key");
const clearButton = document.querySelector("#clear-button");
const deleteButton = document.querySelector("#delete-button");
const equalButton =document.querySelectorAll("equal-button");




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
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
    }
}