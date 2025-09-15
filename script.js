// --- Part 2: JavaScript Functions ---

// Example of local vs global scope
let globalMessage = "Hello from the global scope!";

function squareNumber(num) {
  let result = num * num; // local variable
  return result;
}

function showSquare() {
  let input = document.getElementById("numInput").value;
  let number = parseInt(input);

  if (!isNaN(number)) {
    let squared = squareNumber(number);
    document.getElementById("result").innerText =
      `Square of ${number} is ${squared}`;
  } else {
    document.getElementById("result").innerText =
      "Please enter a valid number.";
  }
}

// Another function that uses global variable
function showGlobalMessage() {
  console.log(globalMessage);
}

// --- Part 3: Combining CSS + JS ---

let box = document.querySelector(".js-box");
let animateBtn = document.getElementById("animateBtn");

// Function that toggles animation class
function toggleAnimation() {
  box.classList.toggle("animate");
}

// Event listener triggers animation
animateBtn.addEventListener("click", toggleAnimation);
