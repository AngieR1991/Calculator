  let data = '';
  let firstNumber = '';
  let secondNumber = '';
  let operator = '';


const currentNumber = document.getElementById('currentNumber');
const equation = document.getElementById('equation');
const numBtns = document.querySelectorAll('[data-number]');
const allOperators = document.querySelectorAll('[data-operator]');
const point = document.getElementById('decimal');
const deleteBtn = document.getElementById('delete');
const clearBtn = document.getElementById('clear')
const screenOperator = document.getElementById('operator')
const equalBtn = document.getElementById('equal')

numBtns.forEach((button) => button.addEventListener('click', () => assignNumbers(button.textContent)));
allOperators.forEach((button) => button.addEventListener('click', () => assignOperator(button.textContent)));

point.addEventListener('click', assignPoint);
deleteBtn.addEventListener('click', deleteNumber);
clearBtn.addEventListener('click', clear);
equalBtn.addEventListener('click', evaluate);


window.addEventListener('keydown', handleKeyboardInput);


function assignNumbers(value)
{
  
    data = value;
    if(value == undefined)
    {
        data = this.id;
    }
    else{
        data = value;
    }

   if(firstNumber != '' && screenOperator.textContent != '')
   {
        secondNumber += data;
        currentNumber.textContent = secondNumber;
   }
   else
   {
        firstNumber += data;
        currentNumber.textContent = firstNumber;
   }
}

function assignOperator(value)
{
    operator = value;
    if(value == undefined)
    {
        operator = this.id;
    }
    else
    {
        operator = value;
    }

    screenOperator.textContent = operator;
    equation.textContent = currentNumber.textContent
    currentNumber.textContent = '';
}

function assignPoint()
{
    if(!currentNumber.textContent.includes('.'))
    {
        currentNumber.textContent += '.'
        if(operator !='')
        {
            secondNumber += '.'
        }
        else
        {
            firstNumber +='.'
        }
    }
}


function deleteNumber()
{
    currentNumber.textContent = currentNumber.textContent.toString().slice(0, -1)
    if(operator !='')
    {
        secondNumber = secondNumber.toString().slice(0, -1)
    }
    else
    {
        firstNumber = firstNumber.toString().slice(0, -1)
    }
}

function clear()
{
    data = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    screenOperator.textContent = '';
    currentNumber.textContent = '';
}

function evaluate()
{
    if(screenOperator.textContent === '+' )
    {
        currentNumber.textContent = +firstNumber + +secondNumber;
    }
    else if(screenOperator.textContent === '-' )
    {
        currentNumber.textContent = +firstNumber - +secondNumber;
    }
    else if(screenOperator.textContent === '*' || screenOperator.textContent === 'x')
    {
        currentNumber.textContent = +firstNumber * +secondNumber;
    }
    else
    {
        if(secondNumber == 0)
            alert("Cannot divide by zero")
        else
            currentNumber.textContent = +firstNumber / +secondNumber;
    }

    firstNumber = currentNumber.textContent;
    secondNumber = '';
    screenOperator.textContent = '';
    equation.textContent = '';

}


function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) assignNumbers(e.key)
    if (e.key === '.') assignPoint()
    if (e.key === '=' || e.key === 'Enter') evaluate()
    if (e.key === 'Backspace') deleteNumber()
    if (e.key === 'Escape') clear()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
        assignOperator(e.key)
  }        if(screenOperator.textContent == '/' && data == '0')
  {
      alert("Cannot divide by zero")
  }