const text = `
Hello Pakhi...

If you're seeing this,

they took Shreyas.

I don't know how long this transmission will survive.

You have one mission:

Find him.
`;

const typewriter = document.getElementById("typewriter");
const startBtn = document.getElementById("startBtn");

let index = 0;

function typeEffect() {

  if(index < text.length){

    typewriter.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 45);

  } else {

    startBtn.classList.add("show");

  }
}

typeEffect();

startBtn.addEventListener("click", () => {

  window.location.href = "pages/riddle.html";

});