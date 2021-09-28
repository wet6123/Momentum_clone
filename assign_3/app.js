const loginInput = document.querySelector("#numberbox input");
const randomBox = document.querySelector("#randombox-number");
const randomSubmit = document.querySelector("#randombox-submit");
const span1 = document.querySelector("#greeding span:first-child");
const span2 = document.querySelector("#greeding span:last-child");

function handleSubmitClick(event) {
  event.preventDefault();
  if (parseInt(loginInput.value) < 0) {
    alert("범위는 양수가 되어야 합니다.");
  } else if (parseInt(loginInput.value) < parseInt(randomBox.value)) {
    alert("지정한 숫자 범위를 벗어납니다.");
  } else {
    const machineNumber = Math.floor(
      Math.random() * (parseInt(loginInput.value) + 1)
    );
    span1.innerText = `You choose : ${randomBox.value}, the machine chose : ${machineNumber}`;

    if (machineNumber === parseInt(randomBox.value)) {
      span2.innerHTML = "You Won!";
    } else {
      span2.innerHTML = "You Lost!";
    }
  }
}

randomSubmit.addEventListener("click", handleSubmitClick);
