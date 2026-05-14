const verifyBtn =
document.getElementById("verifyBtn");

const result =
document.getElementById("result");

verifyBtn.addEventListener("click", () => {

  const code =
  document
    .getElementById("code")
    .value
    .trim();

  if(code === "1"){

    result.innerHTML = `

      <p style="
        color:#00ff99;
        letter-spacing:2px;
      ">
        SECURITY GRID RESTORED
      </p>

      <br>

      <h2 style="
        font-size:4rem;
        color:#ff4d88;
      ">
        11
      </h2>

      <br>

      <p style="
        color:#ddd;
        line-height:1.8;
      ">
        “Recovered clue:
        The clock froze before the gates closed.”
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
      ">
        Incorrect value.
      </p>

    `;

  }

});

function nextPage(){

  window.location.href = "clock.html";

}