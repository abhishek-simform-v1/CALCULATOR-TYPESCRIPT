const Memory = document.querySelector(".Memory");
//memory save
function MemorySave(): void {
  let res;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = submit();
  } else {
    res = Number(calculatorDisplay.value);
  }
  Memory.innerHTML = res;
}
//memory clear
function MemoryClear(): void {
  Memory.innerHTML = "";
}
// memory Read
function MemoryRead(): void {
  calculatorDisplay.value = Memory.innerHTML;
}
// memory plus
function MemoryPlus(): void {
  calculatorDisplay.value =
    Number(Memory.innerHTML) + Number(calculatorDisplay.value);
  Memory.innerHTML = calculatorDisplay.value;
}
// memory plus
function MemoryMinus(): void {
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
