const submitBtn = document.getElementById("submitBtn");

const result = document.getElementById("result");

submitBtn.addEventListener("click", () => {

  const answer =
    document
      .getElementById("answer")
      .value
      .toLowerCase()
      .trim();

  if(
    answer === "golgappe" ||
    answer === "golgappa" ||
    answer === "pani puri"
  ){

    result.innerHTML = `

      <p style="
        color:#00ff99;
        letter-spacing:2px;
      ">
        ACCESS GRANTED
      </p>

      <br>

      <h2 style="
        font-size:3.5rem;
        color:#ff4d88;
        text-shadow:0 0 20px rgba(255,77,136,0.6);
      ">
        16
      </h2>

      <br>

      <p style="
        line-height:1.7;
        color:#dddddd;
      ">
        “Recovered clue:
        He hid memories in fragments.”
      </p>

      <br>

      <button onclick="nextPage()">
        OPEN NEXT FILE
      </button>

    `;

  } else {

    result.innerHTML = `

      <p style="
        color:red;
        letter-spacing:1px;
      ">
        Incorrect answer.
      </p>

    `;

  }

});

function nextPage(){

  window.location.href = "photo.html";
}
