let res;
function sinVal() {
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }

  const sinans = Math.sin(res);
  calculatorDisplay.value = sinans.toFixed(2);
  console.log(sinans);
  return Number(sinans.toFixed(2));
}
function cosVal() {
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }

  const cosans = Math.cos(res);
  calculatorDisplay.value = cosans.toFixed(2);
  console.log(cosans);
  return Number(cosans.toFixed(2));
}
function tanVal() {
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  const tanans = Math.tan(res);
  calculatorDisplay.value = tanans.toFixed(2);
  console.log(tanans);
  return Number(tanans.toFixed(2));
}
function secVal() {
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }

  const secans = 1 / Math.cos(res);
  calculatorDisplay.value = secans.toFixed(2);
  console.log(secans);
  return Number(secans.toFixed(2));
}
function cscVal() {
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }

  const cscans = 1 / Math.sin(res);
  calculatorDisplay.value = cscans.toFixed(2);
  console.log(cscans);
  return Number(cscans.toFixed(2));
}
function cotVal() {
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  const cotans = 1 / Math.tan(res);
  calculatorDisplay.value = cotans.toFixed(2);
  console.log(cotans);
  return Number(cotans.toFixed(2));
}
