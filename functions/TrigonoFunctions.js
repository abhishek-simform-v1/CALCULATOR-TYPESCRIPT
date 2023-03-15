function sinVal() {
  CheckDisplayVal();
  const sinans = Math.sin(res);
  calculatorDisplay.value = sinans.toFixed(2);
}
function cosVal() {
  const cosans = Math.cos(res);
  calculatorDisplay.value = cosans.toFixed(2);
}
function tanVal() {
  CheckDisplayVal();
  const tanans = Math.tan(res);
  calculatorDisplay.value = tanans.toFixed(2);
}
function secVal() {
  CheckDisplayVal();
  const secans = 1 / Math.cos(res);
  calculatorDisplay.value = secans.toFixed(2);
}
function cscVal() {
  CheckDisplayVal();
  const cscans = 1 / Math.sin(res);
  calculatorDisplay.value = cscans.toFixed(2);
}
function cotVal() {
  CheckDisplayVal();
  const cotans = 1 / Math.tan(res);
  calculatorDisplay.value = cotans.toFixed(2);
}
