const verifyBtn =
document.getElementById("verifyBtn");

const result =
document.getElementById("result");

verifyBtn.addEventListener("click", () => {

  const hour =
  document.getElementById("hour").value;

  const minute =
  document.getElementById("minute").value;

  if(hour === "6" && minute === "45"){

    result.innerHTML = `

      <p style="
        color:#00ff99;
        letter-spacing:2px;
        font-size:1rem;
      ">
        TEMPORAL SIGNAL RESTORED
      </p>

      <br>

      <h2 style="
        font-size:4rem;
        color:#ff4d88;

        text-shadow:
        0 0 25px rgba(255,77,136,0.7);
      ">
        8
      </h2>

      <br>

      <p style="
        color:#ddd;
        line-height:1.8;
      ">
        “Recovered clue:
        His final signal came from the stars.”
      </p>

      <br>

      <button onclick="nextPage()">
        TRACK FINAL SIGNAL
      </button>

    `;

  }

  else{

    result.innerHTML = `

      <p style="
        color:red;
        letter-spacing:1px;
      ">
        Incorrect time.
      </p>

    `;

  }

});

function nextPage(){

  window.location.href = "stars.html";

}