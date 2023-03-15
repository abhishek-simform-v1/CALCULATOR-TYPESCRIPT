// square root of two function
function sqrtoftwo() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  calculatorDisplay.value = Math.sqrt(res);
  calculatorDisplay.value.pop();
}

// cube root of three function
function cbrtofthree() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  calculatorDisplay.value = Math.cbrt(res);
  calculatorDisplay.value.pop();
}
// square root of two function
function sqroftwo() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  calculatorDisplay.value = res * res;
  calculatorDisplay.value.pop();
}

// cube root of three function
function cbrofthree() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  calculatorDisplay.value = res * res * res;
  calculatorDisplay.value.pop();
}

// log base 10 function
function log() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  calculatorDisplay.value = Math.log10(res);
  calculatorDisplay.value.pop();
}
// log base 2 function
function ln() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  calculatorDisplay.value = Math.log2(res);
  calculatorDisplay.value.pop();
}
// 1/x function
function devideByOne() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  console.log(1 / res);
  calculatorDisplay.value = 1 / res;
  calculatorDisplay.value.pop();
}
// log base 2 function
function ex() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  calculatorDisplay.value = Math.pow(res, 2.718281828459045);
  calculatorDisplay.value.pop();
}

// exponential function
function expo() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  calculatorDisplay.value = Math.exp(res).toFixed(2);
  calculatorDisplay.value.pop();
}
// factorial function
function fact() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
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
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  if (Math.pow(10, res) == Number("Infinty")) {
    console.table(Math.pow(10, res));
  } else {
    calculatorDisplay.value = Math.pow(10, res);
    console.log(Math.pow(10, res));
  }
}
// power two function

function powerOftwo() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  if (Math.pow(2, res) == Number("Infinty")) {
  } else {
    calculatorDisplay.value = Math.pow(2, res);
  }
}
// absolute function

function absoluteVal() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }

  calculatorDisplay.value = Math.abs(res);
}
// floor function

function floorVal() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }

  calculatorDisplay.value = Math.floor(res);
}

// floor function

function ceilVal() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }

  calculatorDisplay.value = Math.ceil(res);
}
