"use strict";
function sinVal() {
    CheckDisplayVal();
    const sinans = Math.sin((res * Math.PI) / 180);
    calculatorDisplay.value = sinans.toFixed(3);
}
function cosVal() {
    CheckDisplayVal();
    const cosans = Math.cos((res * Math.PI) / 180);
    calculatorDisplay.value = cosans.toFixed(3);
}
function tanVal() {
    CheckDisplayVal();
    const tanans = Math.tan((res * Math.PI) / 180);
    calculatorDisplay.value = tanans.toFixed(3);
}
function secVal() {
    CheckDisplayVal();
    const secans = 1 / Math.cos((res * Math.PI) / 180);
    calculatorDisplay.value = secans.toFixed(3);
}
function cscVal() {
    CheckDisplayVal();
    const cscans = 1 / Math.sin((res * Math.PI) / 180);
    calculatorDisplay.value = cscans.toFixed(3);
}
function cotVal() {
    CheckDisplayVal();
    const cotans = 1 / Math.tan((res * Math.PI) / 180);
    calculatorDisplay.value = cotans.toFixed(3);
}
// SIN WITH HEIGHT
function sinhVal() {
    CheckDisplayVal();
    const sinansh = Math.sinh((res * Math.PI) / 180);
    calculatorDisplay.value = sinansh.toFixed(3);
}
function coshVal() {
    CheckDisplayVal();
    const cosansh = Math.cosh((res * Math.PI) / 180);
    calculatorDisplay.value = cosansh.toFixed(3);
}
function tanhVal() {
    CheckDisplayVal();
    const tanansh = Math.tanh((res * Math.PI) / 180);
    calculatorDisplay.value = tanansh.toFixed(3);
}
function sechVal() {
    CheckDisplayVal();
    const secansh = 1 / Math.cosh((res * Math.PI) / 180);
    calculatorDisplay.value = secansh.toFixed(3);
}
function cschVal() {
    CheckDisplayVal();
    const cscansh = 1 / Math.sinh((res * Math.PI) / 180);
    calculatorDisplay.value = cscansh.toFixed(3);
}
function cothVal() {
    CheckDisplayVal();
    const cotansh = 1 / Math.tanh((res * Math.PI) / 180);
    calculatorDisplay.value = cotansh.toFixed(3);
}
//# sourceMappingURL=TrigonoFunctions.js.map