const decodeBtn =
document.getElementById("decodeBtn");

const result =
document.getElementById("result");

decodeBtn.addEventListener("click", () => {

  const answer =
  document
    .getElementById("answer")
    .value
    .toLowerCase()
    .trim();

  if(answer === "pakhi"){

    result.innerHTML = `

      <p style="
        color:#00ff99;
        letter-spacing:2px;
      ">
        TRANSMISSION DECODED
      </p>

      <br>

      <h2 style="
        font-size:2.8rem;
        color:#ff4d88;

        text-shadow:
        0 0 25px rgba(255,77,136,0.6);
      ">
        PAKHI
      </h2>

      <br>

      <p style="
        color:#ddd;
        line-height:1.8;
      ">
        “The final answer was never a place.
        Never a password.
        Never a location.
        <br><br>
        It was you.”
      </p>

      <br>

      <button onclick="nextPage()">
        OPEN FINAL FILE
      </button>

    `;

  }

  else{

    result.innerHTML = `

      <p style="color:red;">
        Incorrect transmission.
      </p>

    `;

  }

});

function nextPage(){

  window.location.href = "sike.html";

}