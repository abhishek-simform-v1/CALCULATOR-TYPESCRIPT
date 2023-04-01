// square root of two function
let res;
function CheckDisplayVal() {
  if (isNaN(Number(calculatorDisplay.value))) {
    return (res = submit());
  } else {
    return (res = Number(calculatorDisplay.value));
  }
}
function sqrtoftwo() {
  CheckDisplayVal();
  if (CheckDisplayVal()) {
    calculatorDisplay.value = Math.sqrt(res);
    calculatorDisplay.value.pop();
  }
}

// cube root of three function
function cbrtofthree() {
  CheckDisplayVal();
  calculatorDisplay.value = Math.cbrt(res);
  calculatorDisplay.value.pop();
}

// square root of two function
function sqroftwo() {
  CheckDisplayVal();
  calculatorDisplay.value = res * res;
  calculatorDisplay.value.pop();
}

// cube root of three function
function cbrofthree() {
  CheckDisplayVal();
  calculatorDisplay.value = res * res * res;
  calculatorDisplay.value.pop();
}

// log base 10 function
function log() {
  CheckDisplayVal();
  calculatorDisplay.value = Math.log10(res);
  calculatorDisplay.value.pop();
}
// log base 2 function
function ln() {
  CheckDisplayVal();
  calculatorDisplay.value = Math.log(res);
  calculatorDisplay.value.pop();
}
// 1/x function
function devideByOne() {
  CheckDisplayVal();
  calculatorDisplay.value = 1 / res;
  calculatorDisplay.value.pop();
}
// e function
function multByE() {
  CheckDisplayVal();
  if (res === 0) {
    calculatorDisplay.value = 2.72 + res;
  } else {
    calculatorDisplay.value = 2.72 * res;
    calculatorDisplay.value.pop();
  }
}

// e function
function multByPie() {
  CheckDisplayVal();
  console.log(typeof res);
  if (res === 0) {
    calculatorDisplay.value = 3.14 + res;
  } else {
    calculatorDisplay.value = 3.14 * res;
    calculatorDisplay.value.pop();
  }
}

//Deg function
function Deg() {
  CheckDisplayVal();
  if (res === 0) {
    return;
  } else {
    if (res) {
      let Deg = document.querySelector(".toggleDeg");
      console.log(typeof Deg.innerHTML);
      if (Deg.classList.contains("Deg")) {
        calculatorDisplay.value = ((res * 180) / Math.PI).toFixed(2);
        Deg.innerHTML = "RAD";
        Deg.style.backgroundColor = "#91c1e7";
        Deg.style.color = "#fff";

        Deg.classList.remove("Deg");
      } else {
        Deg.style.backgroundColor = "#efefef";
        Deg.style.color = "#000";
        calculatorDisplay.value = ((res * Math.PI) / 180).toFixed(2);
        Deg.innerHTML = "DEG";
        Deg.classList.add("Deg");
      }
    } else {
      error.style.color = "#ff0000";
      error.innerHTML = "<p>not a valid Number</p>";
      setTimeout(() => {
        error.innerHTML = "";
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
  calculatorDisplay.value = Math.pow(res, 2.718281828459045);
  calculatorDisplay.value.pop();
}

// exponential function
function expo() {
  CheckDisplayVal();
  calculatorDisplay.value = Math.exp(res).toFixed(2);
  calculatorDisplay.value.pop();
}

// factorial function
function fact() {
  CheckDisplayVal();
  function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
      return answer;
    } else if (n > 1) {
      for (var i = n; i >= 1; i--) {
        answer = answer * i;
        calculatorDisplay.value = answer;
      }
    } else {
      error.style.color = "#ff0000";
      error.innerHTML = "<p>not a valid Number</p>";
      calculatorDisplay.value = "";
      setTimeout(() => {
        error.innerHTML = "";
      }, 1000);
    }
  }
  factorial(res);
}

// power function

function powerOften() {
  CheckDisplayVal();
  calculatorDisplay.value = Math.pow(10, res);
}
// power two function

function powerOftwo() {
  CheckDisplayVal();
  calculatorDisplay.value = Math.pow(2, res);
}
// power of e function

function powerOfEv() {
  CheckDisplayVal();
  calculatorDisplay.value = Math.pow(2.72, res);
}

// absolute function

function absoluteVal() {
  CheckDisplayVal();
  calculatorDisplay.value = Math.abs(res);
}
// floor function

function floorVal() {
  CheckDisplayVal();
  calculatorDisplay.value = Math.floor(res);
}

// floor function

function ceilVal() {
  CheckDisplayVal();
  calculatorDisplay.value = Math.ceil(res);
}
// cube root of three function
function handlePlusMinus() {
  CheckDisplayVal();
  calculatorDisplay.value = `-(${res})`;
  console.log(calculatorDisplay.value);
}
function focusingonInput() {
  calculatorDisplay.focus();
}
