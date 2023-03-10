// // calculator screen
const calculatorDisplay = document.querySelector(".display-container")
// numbers
const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
// operator
const openParenthesis = document.querySelector("#opened-parenthesis")
const closedParenthesis = document.querySelector("#closed-parenthesis")
const eraseAll = document.querySelector("#erase-all-sign")
const eraseButton = document.querySelector("#erase-button")
const divideButton = document.querySelector("#split-operator")
const multiplicationButton = document.querySelector("#multiplication-operator")
const lessButton = document.querySelector("#less-operator")
const plusButton = document.querySelector("#plus-operator")
const decimalButton = document.querySelector("#decimal-operator")
const equalButton = document.querySelector("#equal-button")

function ik(val){
    document.getElementById('one').value = val;  
}

const mydropdown = document.querySelector(".dropdown-menu-scitific")

function drop() {
    // mydropdown.classList.remove("hide")
    console.log("hi")
    mydropdown.classList.contains("hide") ? mydropdown.classList.remove("hide") : mydropdown.classList.add("hide")

}
const mydropdownfunc = document.querySelector(".d-function")

function dropf() {
    // mydropdown.classList.remove("hide")
    console.log("hi")
    mydropdownfunc.classList.contains("hide") ? mydropdownfunc.classList.remove("hide") : mydropdownfunc.classList.add("hide")

}const handleValue= (val) => {
  console.log(val)
}

let inputString = []
const handleString = (str) =>{
return inputString.push(str)
}
let inputUser = prompt("enter value + - * / ^ %")
handleString(inputUser)

let deffInputstring = []

for(i=0;i<inputString.length;i++) {
   let newInput = inputString[i].split("")
  if(newInput==="(" && inputString===")"){
   deffInputstring.push(newInput)
  }
}



console.log(deffInputstring)