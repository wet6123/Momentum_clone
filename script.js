//JS와 HTML은 연결되어있음 => JS로 HTML 수정 가능
//querySelector -> CSS스타일로 첫번째 엘리먼트를 찾아올 수 있다.
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h1 = document.querySelector("h1");
console.log(h1);

function handlerMouseenter() {
  h1.style.color = colors[0];
  h1.innerText = "Mouse is here!";
}
function handlerMouseleave() {
  h1.style.color = colors[1];
  h1.innerText = "Mouse is gone!";
}
function handerWindworesize() {
  h1.style.color = colors[2];
  h1.innerText = "Window is resized!";
}
function handlerMouseleft() {
  h1.style.color = colors[3];
  h1.innerText = "That was a right click!";
}

h1.addEventListener("mouseenter", handlerMouseenter);
h1.addEventListener("mouseleave", handlerMouseleave);
window.addEventListener("resize", handerWindworesize);
window.addEventListener("contextmenu", handlerMouseleft);
