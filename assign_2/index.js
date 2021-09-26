const body = document.querySelector("body");

function hanleWindowColor() {
  const width = window.innerWidth;

  if (width < 500) {
    body.classList.remove("middle");
    body.classList.add("small");
  } else if (width >= 500 && width < 1000) {
    body.classList.remove("small", "large");
    body.classList.add("middle");
  } else {
    body.classList.remove("middle");
    body.classList.add("large");
  }
}

window.addEventListener("resize", hanleWindowColor);
