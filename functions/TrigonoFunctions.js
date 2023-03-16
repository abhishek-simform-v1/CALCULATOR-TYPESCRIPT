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
// SIN WITH HEIGHT
function sinhVal() {
  CheckDisplayVal();
  const sinansh = Math.sinh(res);
  calculatorDisplay.value = sinansh.toFixed(2);
}
function coshVal() {
  const cosansh = Math.cosh(res);
  calculatorDisplay.value = cosansh.toFixed(2);
}
function tanhVal() {
  CheckDisplayVal();
  const tanansh = Math.tanh(res);
  calculatorDisplay.value = tanansh.toFixed(2);
}
function sechVal() {
  CheckDisplayVal();
  const secansh = 1 / Math.cosh(res);
  calculatorDisplay.value = secansh.toFixed(2);
}
function cschVal() {
  CheckDisplayVal();
  const cscansh = 1 / Math.sinh(res);
  calculatorDisplay.value = cscansh.toFixed(2);
}
function cothVal() {
  CheckDisplayVal();
  const cotansh = 1 / Math.tanh(res);
  calculatorDisplay.value = cotansh.toFixed(2);
}
