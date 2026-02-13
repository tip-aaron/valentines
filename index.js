/**
 * @type {HTMLDialogElement}
 */
const yesDialog = document.querySelector("dialog[data-answer=yes]");
/**
 * @type {HTMLDialogElement}
 */
const noDialog = document.querySelector("dialog[data-answer=no]");
const vid = yesDialog.querySelector("video");

document
  .querySelector("button[data-choose=yes]")
  .addEventListener("click", () => {
    yesDialog.showPopover();
  });
document
  .querySelector("button[data-choose=no]")
  .addEventListener("click", () => {
    noDialog.showPopover();
  });

yesDialog.addEventListener("toggle", (ev) => {
  if (ev.newState === "closed") {
    console.log("CLOSE");
    vid.pause();
    vid.currentTime = 0;
  } else {
    vid.play();
  }
});

function createHeart() {
  const heart = document.createElement("heart");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  const dur = Math.random() * 2 + 3;
  heart.style.animationDuration = dur + "s";
  heart.style.transitionDuration = dur + "s";
  heart.style.rotate = Math.random() * 360 + "deg";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.opacity = 0;
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 5000);
}

function loop() {
  for (let i = 0; i < 10; ++i) {
    setTimeout(createHeart, i * 500);
  }

  setTimeout(() => {
    loop();
  }, 5000);
}

loop();
