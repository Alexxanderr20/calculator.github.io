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
const numberButton = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operation');

    function add(x,y)
    {
        return +x + +y;
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
            displayValue.innerHTML = 'infinty';
        }
        else
        {
            return x / y;
        }
    }

    function getNumbers()
    {
        for(let i = 0; i < numberButton.length; i++)
        {
            numberButton[i].addEventListener('click', (e) =>
            {
                const maxDisplayLength = 12;
                if(numString.length < maxDisplayLength && operatorButtonPush === false)
                    {
                        numString += numberButton[i].innerHTML;
                        displayValue.innerHTML = numString;
                        firstValue = numString;
                        //console.log(`firstValue  ${firstValue}`);
                    }
                else if(numString.length < maxDisplayLength && operatorButtonPush === true)
                    {
                        numString += numberButton[i].innerHTML;
                        console.log(numString);
                        displayValue.innerHTML = numString;
                        secondValue = numString;
                        //console.log(`secondValue  ${secondValue}`);
                    }
                else
                    {
                    console.log('not working lol')
                    }
                    numButtonPush = true;
                    equalButtonPush = false;
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
                        currentOperation = operator[j].innerHTML;
                        console.log(`Condition 1: ${currentOperation}`);
                        operatorButtonPush = true;
                        numButtonPush = false;
                    }
                if(firstValue !== undefined && secondValue !== undefined && operatorButtonPush === true)
                {
                    const temporaryValue = operate(firstValue, secondValue, currentOperation);
                    displayValue.innerHTML = temporaryValue;
                    currentOperation = operator[j].innerHTML;
                    //console.log(`Conditional 2: ${currentOperation}`);

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
                displayValue.innerHTML = finalValue;
                //console.log(finalValue);
            }
                equalButtonPush = true;
        })
            numString = '';
            numString = '';
    };


    function operate(x,y, currentOperation)
        {
            switch(currentOperation)
                {
                    case '+':
                        return add(x,y);
                        break;
                    case '-':
                        return subtract(x,y)
                        break;
                     case 'x':
                        return multiply(x,y);
                        break;
                    case '÷':
                        return divide(x,y);
                        break;
                }
        }


function clearCal()
{
    firstValue = undefined;
    secondValue = undefined;
    numString = '';
    numString = '';
    numButtonPush = false;
    operatorButtonPush = false;
    equalButtonPush = undefined;
    displayValue.innerHTML = '';
}

function calculate()
{
    getNumbers();
    getOperation();
    equalFunction();
    clearCal();
}

calculate();

//allows user to clear calculator screen
let clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click',(e) =>
    {
        return clearCal();
    });

//allows user to delete individual numbers
let backSpace = document.getElementById('delete-button');
backSpace.addEventListener('click', (e) => {
    displayValue.innerHTML = displayValue.innerHTML.slice(0, displayValue.innerHTML.length - 1);
    currentValue = displayValue.innerHTML;
});

