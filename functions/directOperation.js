"use strict";
// square root of two function
let res;
function CheckDisplayVal() {
    if (isNaN(Number(calculatorDisplay.value))) {
        return (res = submit());
    }
    else {
        return (res = Number(calculatorDisplay.value));
    }
}
function sqrtoftwo() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.sqrt(Number(res)).toString();
}
// cube root of three function
function cbrtofthree() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.cbrt(res).toString();
}
// square root of two function
function sqroftwo() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.pow(res, 2).toString();
}
// cube root of three function
function cbrofthree() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.pow(res, 3).toString();
}
// log base 10 function
function log() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.log10(res).toString();
}
// log base 2 function
function ln() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.log(res).toString();
}
// 1/x function
function devideByOne() {
    CheckDisplayVal();
    calculatorDisplay.value = (1 / res).toString();
}
// e function
function multByE() {
    CheckDisplayVal();
    if (res === 0) {
        calculatorDisplay.value = (2.72 + res);
        console.log(calculatorDisplay.value);
    }
    else {
        // console.log(res);
        calculatorDisplay.value = (2.72 * res);
        console.log(calculatorDisplay.value);
    }
}
// e function
function multByPie() {
    CheckDisplayVal();
    if (res === 0) {
        calculatorDisplay.value = (3.14 + res);
        console.log(calculatorDisplay.value);
    }
    else {
        calculatorDisplay.value = (3.14 * res);
        console.log(calculatorDisplay.value);
    }
}
//Deg function
function Deg() {
    CheckDisplayVal();
    if (res === 0) {
        return;
    }
    else {
        if (res) {
            let Deg = document.querySelector('.toggleDeg');
            if (Deg.classList.contains('Deg')) {
                calculatorDisplay.value = ((res * 180) / Math.PI).toString();
                Deg.innerHTML = 'RAD';
                Deg.style.backgroundColor = '#91c1e7';
                Deg.style.color = '#fff';
                Deg.classList.remove('Deg');
            }
            else {
                Deg.style.backgroundColor = '#efefef';
                Deg.style.color = '#000';
                calculatorDisplay.value = ((res * Math.PI) / 180).toString();
                Deg.innerHTML = 'DEG';
                Deg.classList.add('Deg');
            }
        }
        else {
            error.style.color = '#ff0000';
            error.innerHTML = '<p>not a valid Number</p>';
            setTimeout(() => {
                error.innerHTML = '';
            }, 1000);
        }
    }
}
//F-e function
function FeFunc() {
    CheckDisplayVal();
    calculatorDisplay.value = res.toExponential(10).toString();
}
// log base 2 function
function ex() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.pow(res, 2.718281828459045).toString();
}
// exponential function
function expo() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.exp(res).toString();
}
// factorial function
function fact() {
    CheckDisplayVal();
    function factorial(n) {
        let answer = 1;
        if (n == 0 || n == 1) {
            return answer;
        }
        else if (n > 1) {
            for (var i = n; i >= 1; i--) {
                answer = answer * i;
                calculatorDisplay.value = answer.toString();
            }
        }
        else {
            error.style.color = '#ff0000';
            error.innerHTML = '<p>not a valid Number</p>';
            calculatorDisplay.value = '';
            setTimeout(() => {
                error.innerHTML = '';
            }, 1000);
        }
    }
    factorial(res);
}
// power function
function powerOften() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.pow(10, res).toString();
}
// power two function
function powerOftwo() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.pow(2, res).toString();
}
// power of e function
function powerOfEv() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.pow(2.72, res).toString();
}
// absolute function
function absoluteVal() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.abs(res).toString();
}
// floor function
function floorVal() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.floor(res).toString();
}
// floor function
function ceilVal() {
    CheckDisplayVal();
    calculatorDisplay.value = Math.ceil(res).toString();
}
// cube root of three function
function handlePlusMinus() {
    CheckDisplayVal();
    calculatorDisplay.value = `-(${res})`;
}
function focusingonInput() {
    calculatorDisplay.focus();
}
//# sourceMappingURL=directOperation.js.map