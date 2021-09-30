const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const dDay = new Date("2021-12-25T00:00:00+0900").getTime();

  const today = new Date().getTime();

  const result = dDay - today;

  const nowDay = Math.ceil(result / (1000 * 60 * 60 * 24));
  const nowHour = Math.floor(
    (result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const nowMinutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
  const nowSeconds = Math.floor((result % (1000 * 60)) / 1000);

  clockTitle.innerText = `${nowDay}d ${nowHour}h ${nowMinutes}m ${nowSeconds}s.`;
}

getClock();
setInterval(getClock, 1000);
