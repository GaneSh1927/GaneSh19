const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I PROMISE YOU ILL HAPPILY BE YOUR EVRYTHING HONEYY<br>YOUR MINE HONEYY ONLY MINE<br>HAND IN HAND... YOU ND ME... TODAY.. TOMORROW.. FOREVER WILL BE MINE <br>I LOVEE YOUU SOO SOO MUCH HONEYYYY( MORE THAN INFINITE)<br>WISHING MAH HONEYY ATHAYA GARUU MAVAYA GARUU COOKIE A VERY VERY HAPPYY NEW YEARRR";
  gif.src =
    "https://i.pinimg.com/originals/f7/f2/34/f7f234f2fff0b7c55a293b168571975b.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
