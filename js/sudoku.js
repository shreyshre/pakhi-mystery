const grid = document.getElementById("sudokuGrid");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

const puzzle = [
  "3","","","","4","9","","","",
  "","","","6","","","5","","1",
  "7","5","2","","","1","","","",

  "","","1","","","","7","","",
  "5","","","3","9","6","","","",
  "","","8","1","5","","","9","6",

  "","","3","","1","","","6","",
  "","","4","","","","1","","",
  "","","","","2","8","","",""
];

const solution = [
  "3","1","6","5","4","9","8","2","7",
  "4","8","9","6","7","2","5","3","1",
  "7","5","2","8","3","1","6","4","9",

  "6","9","1","2","8","4","7","5","3",
  "5","4","7","3","9","6","2","1","8",
  "2","3","8","1","5","7","4","9","6",

  "8","7","3","4","1","5","9","6","2",
  "9","2","4","7","6","3","1","8","5",
  "1","6","5","9","2","8","3","7","4"
];

function createGrid(){
  grid.innerHTML = "";

  puzzle.forEach((value, index) => {
    const input = document.createElement("input");

    input.maxLength = 1;
    input.inputMode = "numeric";

    if(value !== ""){
      input.value = value;
      input.disabled = true;
    }

    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^1-9]/g, "");
    });

    grid.appendChild(input);
  });
}

checkBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".sudoku input");

  let correct = true;

  inputs.forEach((input, index) => {
    if(input.value !== solution[index]){
      correct = false;
    }
  });

  if(correct){
    result.innerHTML = `
      <p style="color:#00ff99; letter-spacing:2px;">
        SECURITY GRID RESTORED
      </p>

      <br>

      <h2 style="font-size:4rem; color:#ff4d88;">
        11
      </h2>

      <br>

      <p style="color:#ddd; line-height:1.8;">
        “Recovered clue:
        The clock froze before the gates closed.”
      </p>

      <br>

      <button onclick="nextPage()">
        OPEN CLOCK FILE
      </button>
    `;
  } else {
    result.innerHTML = `
      <p style="color:red;">
        Incorrect grid. Access denied.
      </p>
    `;
  }
});

function nextPage(){
  window.location.href = "clock.html";
}

createGrid();
