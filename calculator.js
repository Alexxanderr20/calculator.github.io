/* Edward Alexander Munoz */
let currentOperation;
let firstValue;
let secondValue;

let numString = '';
let operatorValue;

let numButtonPush = false;
let operatorButtonPush = false;
let equalButtonPush;

const equalButton = document.querySelector('.equalButton');
const displayValue = document.querySelector('.displayText');
const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operation');
//let historyValue = document.querySelector('.historyText');
//let equalButton = document.querySelectorAll('equal-button');

//pulls number input and outputs to screen
//const numbers = document.querySelectorAll('.number');
//numbers.forEach((number) => {

    function add(x,y)
    {
        return x + y;
    }

    function subtract(x,y)
    {
        return x - y;
    }

    function multiply(x,y)
    {
        return x * y;
    }

    function divide(x,y)
    {
        if(y === '0')
        {
            displayValue.innerHTML = 'infinte'
        }
        else
        {
            return x / y;
        }
    }

    function getNumbers()
    {
        for(let i = 0; i < numbers.length; i++)
        {
            numbers[i].addEventListener('click', (e) =>
            {
                const maxDisplayLength = 12;
                if(numString.length < maxDisplayLength && operatorButtonPush === false)
                    {
                        numString += numbers[i].textContent;
                        displayValue.textContent = numString;
                        firstValue = numString;
                        console.log(`firstValue = ${firstValue}`);
                    }
                else if(numString.length < maxDisplayLength && operatorButtonPush === true)
                    {
                        numString += numbers[i].textContent;
                        console.log(numString);
                        displayValue.textContent = numString;
                        secondValue = numString;
                        console.log(`secondValue = ${secondValue}`);
                    }
                else
                    {
                    console.log('not working lol')
                    }
            });
    }};


    function getOperation()
    {
        for(let j = 0; j < operator.length; j++)
        {
            operator[j].addEventListener('click', (e) => 
            {
                if(numButtonPush === true && secondValue === undefined)
                    {
                        currentOperation = operator[j].textContent;
                        console.log(`Condition 1: ${currentOperation}`);
                        operatorButtonPush = true;
                        numButtonPush = false;
                    }
                if(firstValue !== undefined && secondValue !== undefined && operatorButtonPush === true)
                {
                    const temporaryValue = operate(firstValue, secondValue, operation);
                    displayValue.textContent = ' = ' + temporaryValue.toString().slice(0, 13);
                    currentOperation = operator[j].textContent;
                    console.log(`Conditional 2: ${currentOperation}`);

                    firstValue = temporaryValue;
                    secondValue = undefined;
                }
                    numString = '';
            })
        }
    }

    function equalFunction()
    {
        equalButton.addEventListener('click', (e) =>
        {
            if(operatorButtonPush === true && equalButtonPush === false && firstValue !== undefined && secondValue !== undefined)
            {
                finalValue = operate(firstValue,secondValue, currentOperation);
                displayValue.textContent = " = " + finalValue.toString().slice(0,13);
                console.log(finalValue);
            }
                equalButtonPush = true;
        })
            numString = '';
            numString = '';
    };


    function operate(x,y,operator)
        {
            switch(operator)
                {
                    case '+':
                        return add(x,y);
                        break;
                    case '-':
                        return subtract(x,y);
                        break;
                    case '*':
                        return multiply(x,y);
                        break;
                    case '÷':
                        return divide(x,y);
                        break;
                }
        }

//allows user to clear calculator screen
let clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click',(e) =>
    {
        displayValue.innerHTML = '';
        firstValue = '';
        secondValue = '';
        numString = '';
        currentOperation = '';
        numButtonPush = false;
        operatorButtonPush = false;
    });

//allows user to delete individual numbers
let backSpace = document.getElementById('delete-button');
backSpace.addEventListener('click', (e) => {
    displayValue.innerHTML = displayValue.innerHTML.slice(0, displayValue.innerHTML.length - 1);
    currentValue = displayValue.innerHTML;
});

function calculate()
{
    getNumbers();
    getOperation();
    equalFunction();
}

calculate();
