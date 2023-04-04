"use strict";
const Memory = document.querySelector(".Memory") ?? "";
const MemoryClearEl = document.querySelector(".m-clear");
const MemoryReadEl = document.querySelector(".m-read ");
const MemoryPlusEl = document.querySelector(".m-plus");
const MemoryMinusEl = document.querySelector(".m-minus ");
const MemorySaveEl = document.querySelector(".m-save");
// window.document.onload() = 
(function getMemory() {
    Memory.innerHTML = localStorage.getItem("Memory");
})();
// assign the function to the onload property
let memoryInner = Number(Memory.innerHTML);
//memory save
function MemorySave() {
    let res;
    if (isNaN(Number(calculatorDisplay.value))) {
        res = Number(submit());
    }
    else {
        res = Number(calculatorDisplay.value);
    }
    localStorage.setItem("Memory", JSON.stringify(res));
    MemoryReadEl.disabled = false;
    MemoryClearEl.disabled = false;
    Memory.innerHTML = calculatorDisplay.value;
}
//memory clear
function MemoryClear() {
    MemoryReadEl.disabled = true;
    MemoryClearEl.disabled = true;
    Memory.innerHTML = "";
}
// memory Read
function MemoryRead() {
    calculatorDisplay.value = Memory.innerHTML;
    Memory.innerHTML = localStorage.getItem("Memory");
}
// memory plus
function MemoryPlus() {
    calculatorDisplay.value =
        (Number(Memory.innerHTML) + Number(calculatorDisplay.value)).toString();
    Memory.innerHTML = calculatorDisplay.value;
}
// memory plus
function MemoryMinus() {
    if (isNaN(Number(calculatorDisplay.value))) {
        calculatorDisplay.value =
            (Number(Memory.innerHTML) - Number(calculatorDisplay.value)).toString();
        Memory.innerHTML = calculatorDisplay.value;
    }
    else {
        Memory.innerHTML =
            (Number(Memory.innerHTML) - Number(calculatorDisplay.value)).toString();
        calculatorDisplay.value = Memory.innerHTML;
    }
}
//# sourceMappingURL=Memory.js.map