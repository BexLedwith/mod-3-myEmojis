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

// render emojis from emojisArr
function renderEmojis() {
  emojiContainer.innerHTML = ""; // clear previous emojis
  emojiInput.value = ""; // empty input field
  for (let i = 0; i < emojisArr.length; i++) {
    emojiContainer.innerHTML += `${emojisArr[i]}`;
  }
}

renderEmojis();

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
