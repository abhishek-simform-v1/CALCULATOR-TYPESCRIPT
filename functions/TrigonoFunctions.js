"use strict";
function sinVal() {
    CheckDisplayVal();
    const sinans = Math.sin((res * Math.PI) / 180);
    calculatorDisplay.value = sinans.toFixed(3);
}
function cosVal() {
    CheckDisplayVal();
    const cosans = Math.cos((res * Math.PI) / 180);
    calculatorDisplay.value = cosans.toString();
}
function tanVal() {
    CheckDisplayVal();
    const tanans = Math.tan((res * Math.PI) / 180);
    calculatorDisplay.value = tanans.toString();
}
function secVal() {
    CheckDisplayVal();
    const secans = 1 / Math.cos((res * Math.PI) / 180);
    calculatorDisplay.value = secans.toString();
}
function cscVal() {
    CheckDisplayVal();
    const cscans = 1 / Math.sin((res * Math.PI) / 180);
    calculatorDisplay.value = cscans.toString();
}
function cotVal() {
    CheckDisplayVal();
    const cotans = 1 / Math.tan((res * Math.PI) / 180);
    calculatorDisplay.value = cotans.toString();
}
// SIN WITH HEIGHT
function sinhVal() {
    CheckDisplayVal();
    const sinansh = Math.sinh((res * Math.PI) / 180);
    calculatorDisplay.value = sinansh.toString();
}
function coshVal() {
    CheckDisplayVal();
    const cosansh = Math.cosh((res * Math.PI) / 180);
    calculatorDisplay.value = cosansh.toString();
}
function tanhVal() {
    CheckDisplayVal();
    const tanansh = Math.tanh((res * Math.PI) / 180);
    calculatorDisplay.value = tanansh.toString();
}
function sechVal() {
    CheckDisplayVal();
    const secansh = 1 / Math.cosh((res * Math.PI) / 180);
    calculatorDisplay.value = secansh.toString();
}
function cschVal() {
    CheckDisplayVal();
    const cscansh = 1 / Math.sinh((res * Math.PI) / 180);
    calculatorDisplay.value = cscansh.toString();
}
function cothVal() {
    CheckDisplayVal();
    const cotansh = 1 / Math.tanh((res * Math.PI) / 180);
    calculatorDisplay.value = cotansh.toString();
}
//# sourceMappingURL=TrigonoFunctions.js.map