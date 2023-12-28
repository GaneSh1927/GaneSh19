const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAYYY, I PROMISE YOU HONEYY ILL ALWAYS KEEP YOU HAPPY HONEYY<br>I WILL NEVER HURT YOU HONEYY IM NOT LETTING THOSE TEARS FALL FROM MY HONEYY EYES<br>I LOVEE YOUU SOO SOO MUCH HONEYY( MORE THAN INFINITE)<br>WISHING MAH HONEYY ATHAYA GARUU MAVAYA GARUU COOKIE A VERY HAPPY NEW YEAR";
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
