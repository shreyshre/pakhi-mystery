const checkBtn = document.getElementById("checkBtn");

const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {

  const inputs =
  document.querySelectorAll(".sudoku input");

  const values = [];

  inputs.forEach(input => {

    values.push(input.value);

  });

  const solution = [

    "1","2","3","4","5","6",
    "6","5","4","2","1","3",
    "3","4","6","5","1","2",
    "5","6","2","1","3","4",
    "2","1","5","3","4","6",
    "4","3","5","6","2","1"

  ];

  let correct = true;

  for(let i = 0; i < values.length; i++){

    if(values[i] !== solution[i]){

      correct = false;

      break;

    }

  }

  if(correct){

    result.innerHTML = `

      <p style="
        color:#00ff99;
        letter-spacing:2px;
        font-size:1rem;
      ">
        ACCESS RESTORED
      </p>

      <br>

      <h2 style="
        font-size:4rem;
        color:#ff4d88;

        text-shadow:
        0 0 25px rgba(255,77,136,0.7);
      ">
        11
      </h2>

      <br>

      <p style="
        color:#ddd;
        line-height:1.8;
        font-size:1rem;
      ">
        “Recovered clue:
        The clock stopped when he disappeared.”
      </p>

      <br>

      <button onclick="nextPage()">
        OPEN CLOCK FILE
      </button>

    `;

  }

  else{

    result.innerHTML = `

      <p style="
        color:red;
        letter-spacing:1px;
      ">
        Incorrect grid. Access denied.
      </p>

    `;

  }

});

function nextPage(){

  window.location.href = "clock.html";

}