let display = document.getElementById("display")

let expression = ""

function updateDisplay(){

display.innerText = expression || "0"

}

function press(value){

expression += value

updateDisplay()

}

function clearDisplay(){

expression = ""

updateDisplay()

}

function backspace(){

expression = expression.slice(0,-1)

updateDisplay()

}

function calculate(){

try{

let result = math.evaluate(expression)

expression = result.toString()

updateDisplay()

}

catch{

display.innerText = "Error"

expression = ""

}

}

function toBinary(){

let num = parseInt(expression)

expression = num.toString(2)

updateDisplay()

}

function toHex(){

let num = parseInt(expression)

expression = num.toString(16)

updateDisplay()

}

function toOctal(){

let num = parseInt(expression)

expression = num.toString(8)

updateDisplay()

}

/* KEYBOARD SUPPORT */

document.addEventListener("keydown", function(e){

let key = e.key

if(!isNaN(key)) press(key)

if(key === "+" || key === "-" || key === "*" || key === "/") press(key)

if(key === ".") press(".")

if(key === "(" || key === ")") press(key)

if(key === "Enter") calculate()

if(key === "Backspace") backspace()

if(key === "Escape") clearDisplay()

})