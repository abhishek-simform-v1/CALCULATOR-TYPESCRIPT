const Memory = document.querySelector(".Memory");
//memory save
function MemorySave() {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  Memory.innerHTML = res;
}
//memory clear
function MemoryClear() {
  Memory.innerHTML = "";
}
// memory Read
function MemoryRead() {
  calculatorDisplay.value = Memory.innerHTML;
}
// memory plus
function MemoryPlus() {
  calculatorDisplay.value =
    Number(Memory.innerHTML) + Number(calculatorDisplay.value);
  Memory.innerHTML = calculatorDisplay.value;
}
// memory plus
function MemoryMinus() {
  if (isNaN(calculatorDisplay.value)) {
    calculatorDisplay.value =
      Number(Memory.innerHTML) - Number(calculatorDisplay.value);
    Memory.innerHTML = calculatorDisplay.value;
  } else {
    Memory.innerHTML =
      Number(Memory.innerHTML) - Number(calculatorDisplay.value);
    calculatorDisplay.value = Memory.innerHTML;
  }
}
