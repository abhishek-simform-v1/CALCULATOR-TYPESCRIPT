
function sinVal(): void {

  CheckDisplayVal();

  const sinans = Math.sin((res * Math.PI) / 180);
  calculatorDisplay.value = sinans.toFixed(3);
}
function cosVal(): void {

  CheckDisplayVal();


  const cosans = Math.cos((res * Math.PI) / 180);
  calculatorDisplay.value = cosans.toString();
}
function tanVal(): void {


  CheckDisplayVal();

  const tanans = Math.tan((res * Math.PI) / 180);
  calculatorDisplay.value = tanans.toString();
}
function secVal(): void {


  CheckDisplayVal();

  const secans = 1 / Math.cos((res * Math.PI) / 180);
  calculatorDisplay.value = secans.toString();
}
function cscVal(): void {


  CheckDisplayVal();

  const cscans = 1 / Math.sin((res * Math.PI) / 180);
  calculatorDisplay.value = cscans.toString();
}
function cotVal(): void {

  CheckDisplayVal();

  const cotans = 1 / Math.tan((res * Math.PI) / 180);
  calculatorDisplay.value = cotans.toString();
}
// SIN WITH HEIGHT
function sinhVal(): void {

  CheckDisplayVal();

  const sinansh = Math.sinh((res * Math.PI) / 180);
  calculatorDisplay.value = sinansh.toString();
}
function coshVal(): void {

  CheckDisplayVal();

  const cosansh = Math.cosh((res * Math.PI) / 180);
  calculatorDisplay.value = cosansh.toString();
}
function tanhVal(): void {

  CheckDisplayVal();

  const tanansh = Math.tanh((res * Math.PI) / 180);
  calculatorDisplay.value = tanansh.toString();
}
function sechVal(): void {

  CheckDisplayVal();

  const secansh = 1 / Math.cosh((res * Math.PI) / 180);
  calculatorDisplay.value = secansh.toString();
}
function cschVal(): void {

  CheckDisplayVal();

  const cscansh = 1 / Math.sinh((res * Math.PI) / 180);
  calculatorDisplay.value = cscansh.toString();
}
function cothVal() {

  CheckDisplayVal();

  const cotansh = 1 / Math.tanh((res * Math.PI) / 180);
  calculatorDisplay.value = cotansh.toString();
}
