/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');

const calculator = document.querySelector('#calculator');

const display = document.querySelector('.display')

showZero = display.innerText = 0

/*-------------------------------- Variables --------------------------------*/
// operands
let initialOp = ''
let currentOp = ''
let operation = ''
let product = ''

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    //console.log(event.target.innerText)

    // Future logic to capture the button's value would go here...
  });
});

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  //display.innerText = initialOp;//(event.target.innerText);
 
  // Example
  if (event.target.classList.contains('number')) {
    // Do something with a number
    // concat to first number
    if(operation === ''){
      initialOp += event.target.innerText
      updateDisplay()
    }else {
      currentOp +=event.target.innerText
      updateDisplay()
    }
    //initialOp += event.target.innerText
    //updateDisplay()

  } else if (event.target.innerText === '=') {
    calculateNum()
    display.innerText = product

  } else if (event.target.innerText === 'C') {
    clear()
    
  } else if (event.target.innerText === '+') {
    operation = '+'

  } else if (event.target.innerText === '/') {
    operation = '/'
    
  } else if (event.target.innerText === '*') {
    operation = '*'

  } else if (event.target.innerText === '-') {
    operation = '-'

  }
})

/*-------------------------------- Functions --------------------------------*/

function clear () {
  showZero
  initialOp = ''
  currentOp = ''
  operation =''
  updateDisplay()
}

function updateDisplay () {
  // show numbers
  // concatenate numbers until an operator is pressed
  if(operation===''){
    display.innerText =initialOp
  } else {
    display.innerText = currentOp
  }
}
function calculateNum () {
  initialOp = Number(initialOp)
  currentOp = Number(currentOp)
  console.log(typeof(initialOp,currentOp))
  if(operation === '*'){
    product = initialOp*currentOp
  }else if(operation === '/'){
    product =  initialOp/currentOp
  }else if(operation === '+'){
    product =  initialOp + currentOp
  } else if(operation === '-'){
    product = initialOp - currentOp
  }
  
}

