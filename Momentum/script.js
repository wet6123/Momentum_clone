const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const greetingUser = document.querySelector("#greetingUser");
const banner = document.querySelector("#banner");
const clock = document.querySelector("#clock");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function getClock() {
  const time = new Date();
  const Month = "";

  switch (time.getMonth()) {
    case 0:
      nowMonth = "Jan";
      break;
    case 1:
      nowMonth = "Feb";
      break;
    case 2:
      nowMonth = "Mar";
      break;
    case 3:
      nowMonth = "Apr";
      break;
    case 4:
      nowMonth = "Mat";
      break;
    case 5:
      nowMonth = "Jun";
      break;
    case 6:
      nowMonth = "Jul";
      break;
    case 7:
      nowMonth = "Aug";
      break;
    case 8:
      nowMonth = "Sep";
      break;
    case 9:
      nowMonth = "Oct";
      break;
    case 10:
      nowMonth = "Nov";
      break;
    case 11:
      nowMonth = "Dec";
      break;
  }

  let nowDay = time.getDate();
  if (nowDay === 1) {
    nowDay = nowDay + "st";
  } else if (nowDay === 2) {
    nowDay = nowDay + "nd";
  } else if (nowDay === 3) {
    nowDay = nowDay + "rd";
  } else {
    nowDay = nowDay + "th";
  }

  const nowHour = String(time.getHours()).padStart(2, "0");
  const nowMinutes = String(time.getMinutes()).padStart(2, "0");
  const nowSeconds = String(time.getSeconds()).padStart(2, "0");

  clock.innerText = `${nowMonth}. ${nowDay} \n ${nowHour} : ${nowMinutes} : ${nowSeconds}`;
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greetingUser.innerText = `Hello ${username}`;
  banner.innerText = `Currnet Time`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  getClock();
  setInterval(getClock, 1000);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}
