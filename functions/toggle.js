const tooglrtoggle = document.querySelector(".calk-2nd-toggle");

//////////////
const squre = document.querySelector(".squre");
const cube = document.querySelector(".cube");
const squrt = document.querySelector(".squrt");
const curt = document.querySelector(".curt");
const power = document.querySelector(".power");
const rootyx = document.querySelector(".rootyx");
const powerten = document.querySelector(".powerten");
const powertwo = document.querySelector(".powertwo");
const logx = document.querySelector(".log");
const logyx = document.querySelector(".logyx");
const ln2 = document.querySelector(".ln");
const exV = document.querySelector(".ex");
const sinModal = document.querySelector(".sin-modal");
const sinhModal = document.querySelector(".sinh-modal");
tooglrtoggle.style.backgroundColor = "#f6f6f6";

// Function for Toggleing 2nd row
function toggler() {
  event.preventDefault();

  if (squre.classList.contains("hide")) {
    squre.classList.remove("hide");
    cube.classList.add("hide");
    tooglrtoggle.style.backgroundColor = "#f6f6f6";
    tooglrtoggle.style.color = "var(--col-black-costom)";
  } else {
    squre.classList.add("hide");
    cube.classList.remove("hide");
    tooglrtoggle.style.backgroundColor = "#91c1e7";
    tooglrtoggle.style.color = "#fff";
  }

  if (squrt.classList.contains("hide")) {
    squrt.classList.remove("hide");
    curt.classList.add("hide");
  } else {
    squrt.classList.add("hide");
    curt.classList.remove("hide");
  }
  if (power.classList.contains("hide")) {
    power.classList.remove("hide");
    rootyx.classList.add("hide");
  } else {
    power.classList.add("hide");
    rootyx.classList.remove("hide");
  }
  if (powerten.classList.contains("hide")) {
    powerten.classList.remove("hide");
    powertwo.classList.add("hide");
  } else {
    powerten.classList.add("hide");
    powertwo.classList.remove("hide");
  }
  if (logx.classList.contains("hide")) {
    logx.classList.remove("hide");
    logyx.classList.add("hide");
  } else {
    logx.classList.add("hide");
    logyx.classList.remove("hide");
  }
  if (ln2.classList.contains("hide")) {
    ln2.classList.remove("hide");
    exV.classList.add("hide");
  } else {
    ln2.classList.add("hide");
    exV.classList.remove("hide");
  }
  if (sinModal.classList.contains("hide")) {
    sinModal.classList.remove("hide");
    sinhModal.classList.add("hide");
  } else {
    sinModal.classList.add("hide");
    sinhModal.classList.remove("hide");
  }
}
