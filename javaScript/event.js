console.log("this is are event");

let button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("amr sonar bangla");
});

// option two
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option three
const makeGreen = document.getElementById("make-gren");
makeGreen.onclick = function makeGreen() {
  document.body.style.backgroundColor = "green";
};

const makePurple = document.getElementById("make-purple");
makePurple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option four
const pinkBtn = document.getElementById("makePink");
pinkBtn.addEventListener("click", function pinkBtn() {
  document.body.style.backgroundColor = "pink";
});

const makeOrange = document
  .getElementById("makeOrange")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "orange";
  });
