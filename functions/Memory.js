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
    Number(calculatorDisplay.value) + Number(Memory.innerHTML);
  Memory.innerHTML = calculatorDisplay.value;
}
// memory plus
function MemoryMinus() {
  if (isNaN(calculatorDisplay.value)) {
    calculatorDisplay.value =
      Number(calculatorDisplay.value) - Number(Memory.innerHTML);
    Memory.innerHTML = calculatorDisplay.value;
  } else {
    Memory.innerHTML =
      Number(calculatorDisplay.value) - Number(Memory.innerHTML);
  }
}
