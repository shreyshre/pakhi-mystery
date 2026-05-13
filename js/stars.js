const stars =
document.querySelectorAll(".star");

const startBtn =
document.getElementById("startBtn");

const result =
document.getElementById("result");

const sequence = [1,4,0,3,2];

let userSequence = [];

let currentStep = 0;

/* flash stars */

function flashStar(index){

  stars[index].classList.add("active");

  setTimeout(() => {

    stars[index].classList.remove("active");

  },600);

}

/* play sequence */

function playSequence(){

  let i = 0;

  const interval = setInterval(() => {

    flashStar(sequence[i]);

    i++;

    if(i >= sequence.length){

      clearInterval(interval);

    }

  },900);

}

/* start */

startBtn.addEventListener("click", () => {

  userSequence = [];

  currentStep = 0;

  playSequence();

});

/* clicking stars */

stars.forEach(star => {

  star.addEventListener("click", () => {

    const clicked =
    Number(star.dataset.id);

    flashStar(clicked);

    userSequence.push(clicked);

    if(userSequence[currentStep] !== sequence[currentStep]){

      result.innerHTML = `

        <p style="color:red;">
          Signal lost. Try again.
        </p>

      `;

      userSequence = [];

      currentStep = 0;

      return;

    }

    currentStep++;

    if(currentStep === sequence.length){

      result.innerHTML = `

        <p style="
          color:#00ff99;
          letter-spacing:2px;
        ">
          CONSTELLATION RESTORED
        </p>

        <br>

        <h2 style="
          font-size:3.5rem;
          color:#ff4d88;
        ">
          9
        </h2>

        <br>

        <p style="
          color:#ddd;
          line-height:1.7;
        ">
          “Final recovered number acquired.”
        </p>

        <br>

        <button onclick="nextPage()">
          DECODE TRANSMISSION
        </button>

      `;

    }

  });

});

function nextPage(){

  window.location.href = "decode.html";

}