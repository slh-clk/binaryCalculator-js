var operand1
var operand2
var operator
var pattern

var res = document.getElementById('res')
var btn0 = document.getElementById('btn0')
var btn1 = document.getElementById('btn1')
var btnClr = document.getElementById('btnClr')
var btnEql = document.getElementById('btnEql')
var btnSum = document.getElementById('btnSum')
var btnSub = document.getElementById('btnSub')
var btnMul = document.getElementById('btnMul')
var btnDiv = document.getElementById('btnDiv')

btn0.addEventListener("click", () => res.innerHTML += 0)
btn1.addEventListener("click", () => res.innerHTML += 1)
btnClr.addEventListener("click", () => res.innerHTML = '')
btnSum.addEventListener("click", () => res.innerHTML += '+')
btnSub.addEventListener("click", () => res.innerHTML += '-')
btnMul.addEventListener("click", () => res.innerHTML += '*')
btnDiv.addEventListener("click", () => res.innerHTML += '/')
btnEql.addEventListener("click", doTheMath)

function doTheMath() {
    findOperator()
    findOperands()
    var result
    switch (operator) {
        case '+':
            result = operand1 + operand2
            break;
        case '-':
            result = operand1 - operand2
            break;
        case '*':
            result = operand1 * operand2
            break;
        case '/':
            result = operand1 / operand2
            break;
    }
    res.innerHTML = result.toString(2)
}

function findOperator() {
    var pattern = new RegExp(/\+|\-|\*|\//g)
    operator = res.innerHTML.match(pattern)[0]
}

function findOperands() {
    var operand1_string = res.innerHTML.split(operator)[0]
    var operand2_string = res.innerHTML.split(operator)[1]
    operand1 = parseInt(operand1_string, 2)
    operand2 = parseInt(operand2_string, 2)
}




