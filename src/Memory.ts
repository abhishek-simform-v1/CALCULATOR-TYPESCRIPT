const Memory: HTMLElement = document.querySelector(".Memory")! ?? "";
const MemoryClearEl: HTMLButtonElement = document.querySelector(".m-clear")!;
const MemoryReadEl: HTMLButtonElement = document.querySelector(".m-read ")!;
const MemoryPlusEl: HTMLButtonElement = document.querySelector(".m-plus")!;
const MemoryMinusEl: HTMLButtonElement = document.querySelector(".m-minus ")!;
const MemorySaveEl: HTMLButtonElement = document.querySelector(".m-save")!;

// window.document.onload() = 

(function getMemory() {
  Memory.innerHTML = localStorage.getItem("Memory")!;
})()

// assign the function to the onload property


let memoryInner: number = Number(Memory.innerHTML)
//memory save
function MemorySave(): void {
  let res: number;
  if (isNaN(Number(calculatorDisplay.value))) {
    res = Number(submit());
  } else {
    res = Number(calculatorDisplay.value);
  }
  localStorage.setItem("Memory", JSON.stringify(res));
  MemoryReadEl.disabled = false
  MemoryClearEl.disabled = false
  Memory.innerHTML = calculatorDisplay.value;


}
//memory clear
function MemoryClear(): void {
  MemoryReadEl.disabled = true
  MemoryClearEl.disabled = true

  Memory.innerHTML = "";
}
// memory Read
function MemoryRead(): void {
  calculatorDisplay.value = Memory.innerHTML;
  Memory.innerHTML = localStorage.getItem("Memory")!;

}
// memory plus
function MemoryPlus(): void {
  calculatorDisplay.value =
    (Number(Memory.innerHTML) + Number(calculatorDisplay.value)).toString();
  Memory.innerHTML = calculatorDisplay.value;
}
// memory plus
function MemoryMinus(): void {
  if (isNaN(Number(calculatorDisplay.value))) {
    calculatorDisplay.value =
      (Number(Memory.innerHTML) - Number(calculatorDisplay.value)).toString();
    Memory.innerHTML = calculatorDisplay.value;
  } else {
    Memory.innerHTML =
      (Number(Memory.innerHTML) - Number(calculatorDisplay.value)).toString();
    calculatorDisplay.value = Memory.innerHTML;
  }
}
