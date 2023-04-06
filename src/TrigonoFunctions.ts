
function sinVal(): void {

  CheckDisplayVal();

  const sinans = Math.sin((res * Math.PI) / 180);
  calculatorDisplay.value = sinans.toFixed(3);
}
function cosVal(): void {

  CheckDisplayVal();


  const cosans = Math.cos((res * Math.PI) / 180);
  calculatorDisplay.value = cosans.toFixed(3);
}
function tanVal(): void {


  CheckDisplayVal();

  const tanans = Math.tan((res * Math.PI) / 180);
  calculatorDisplay.value = tanans.toFixed(3);
}
function secVal(): void {


  CheckDisplayVal();

  const secans = 1 / Math.cos((res * Math.PI) / 180);
  calculatorDisplay.value = secans.toFixed(3);
}
function cscVal(): void {


  CheckDisplayVal();

  const cscans = 1 / Math.sin((res * Math.PI) / 180);
  calculatorDisplay.value = cscans.toFixed(3);
}
function cotVal(): void {

  CheckDisplayVal();

  const cotans = 1 / Math.tan((res * Math.PI) / 180);
  calculatorDisplay.value = cotans.toFixed(3);
}
// SIN WITH HEIGHT
function sinhVal(): void {

  CheckDisplayVal();

  const sinansh = Math.sinh((res * Math.PI) / 180);
  calculatorDisplay.value = sinansh.toFixed(3);
}
function coshVal(): void {

  CheckDisplayVal();

  const cosansh = Math.cosh((res * Math.PI) / 180);
  calculatorDisplay.value = cosansh.toFixed(3);
}
function tanhVal(): void {

  CheckDisplayVal();

  const tanansh = Math.tanh((res * Math.PI) / 180);
  calculatorDisplay.value = tanansh.toFixed(3);
}
function sechVal(): void {

  CheckDisplayVal();

  const secansh = 1 / Math.cosh((res * Math.PI) / 180);
  calculatorDisplay.value = secansh.toFixed(3);
}
function cschVal(): void {

  CheckDisplayVal();

  const cscansh = 1 / Math.sinh((res * Math.PI) / 180);
  calculatorDisplay.value = cscansh.toFixed(3);
}
function cothVal() {

  CheckDisplayVal();

  const cotansh = 1 / Math.tanh((res * Math.PI) / 180);
  calculatorDisplay.value = cotansh.toFixed(3);
}
