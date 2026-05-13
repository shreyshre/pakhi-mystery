const puzzle = document.getElementById("puzzle");
const message = document.getElementById("message");

const size = 4;

let tiles = [];

/* create ordered tiles */

for(let i = 0; i < 16; i++){

  tiles.push(i);

}

/* shuffle */

tiles.sort(() => Math.random() - 0.5);

/* render puzzle */

function renderPuzzle(){

  puzzle.innerHTML = "";

  tiles.forEach((tile,index) => {

    const piece = document.createElement("div");

    piece.classList.add("tile");

    if(tile !== 15){

      const row = Math.floor(tile / size);
      const col = tile % size;

      piece.style.backgroundImage =
      "url('../assets/images/memory.jpg')";

      piece.style.backgroundSize =
      "452px 452px";

      piece.style.backgroundPosition =
      `-${col * 113}px -${row * 113}px`;

    }

    else{

      piece.style.background = "#111";

    }

    piece.addEventListener("click", () => moveTile(index));

    puzzle.appendChild(piece);

  });

}

/* move tile */

function moveTile(index){

  const emptyIndex = tiles.indexOf(15);

  const row = Math.floor(index / size);
  const col = index % size;

  const emptyRow = Math.floor(emptyIndex / size);
  const emptyCol = emptyIndex % size;

  const valid =

    (Math.abs(row-emptyRow)===1 && col===emptyCol)

    ||

    (Math.abs(col-emptyCol)===1 && row===emptyRow);

  if(valid){

    [tiles[index],tiles[emptyIndex]] =
    [tiles[emptyIndex],tiles[index]];

    renderPuzzle();

    checkWin();

  }

}

/* win */

function checkWin(){

  let won = true;

  for(let i = 0; i < 16; i++){

    if(tiles[i] !== i){

      won = false;

      break;

    }

  }

  if(won){

    message.innerHTML = `

      <p style="
        color:#00ff99;
        letter-spacing:2px;
      ">
        MEMORY RESTORED
      </p>

      <br>

      <h2 style="
        font-size:3.5rem;
        color:#ff4d88;
      ">
        1
      </h2>

      <br>

      <p style="
        color:#ddd;
        line-height:1.7;
      ">
        “Recovered clue:
        He trusted patterns.”
        <br><br>

      <button onclick="nextPage()">
      OPEN SECURITY GRID
      </button>
      </p>

    `;

  }

}

renderPuzzle();
function nextPage(){

  window.location.href = "sudoku.html";

}