// grab buttons and input section from DOM and assign to variables

const pushBtn = document.getElementById("push-btn");
const shiftBtn = document.getElementById("shift-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

// create emojis array and grab container and input
const emojisArr = [];
const emojiContainer = document.querySelector(".emojiContainer");
const emojiInput = document.getElementById("input");

const bodyContainer = document.querySelector("body");

//set background to first image

const bgImages = [
  "blue-swirls.jpg",
  "desert.jpg",
  "ir-leaves.jpg",
  "sunset-water.jpg",
  "vw-purple.jpg",
  "yellow-splash.jpg",
];

function renderBg(img) {
  bodyContainer.style.backgroundImage = `url(/images/${img})`;
}

// render emojis from emojisArr
function renderEmojis() {
  emojiContainer.innerHTML = ""; // clear previous emojis
  emojiInput.value = ""; // empty input field
  for (let i = 0; i < emojisArr.length; i++) {
    emojiContainer.innerHTML += `${emojisArr[i]}`;
  }
}

renderEmojis();
let currentImage = 0;
renderBg(bgImages[currentImage]);

// add event listeners
pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    emojisArr.push(emojiInput.value);
    renderEmojis();
  }
});

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    emojisArr.unshift(emojiInput.value);
    renderEmojis();
  }
});

shiftBtn.addEventListener("click", function () {
  emojisArr.shift();
  renderEmojis();
});

popBtn.addEventListener("click", function () {
  emojisArr.pop();
  renderEmojis();
});

backBtn.addEventListener("click", function () {
  currentImage === 0 ? (currentImage = bgImages.length - 1) : currentImage--;
  renderBg(bgImages[currentImage]);
});

nextBtn.addEventListener("click", function () {
  currentImage === bgImages.length - 1 ? (currentImage = 0) : currentImage++;
  renderBg(bgImages[currentImage]);
});
