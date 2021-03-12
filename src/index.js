// ! calling the tag I need from the HTML tree
const troubleQuestion = document.getElementById("trouble-question");
const revealInstruction = document.getElementById("reveal-instruction");

// ! I rather show and hide  the text by toggling between calsses but here another way using setTimout to show case my skill
function addingShowClass() {
  if (troubleQuestion.classList.contains("hide-text")) {
    troubleQuestion.classList.remove("hide-text");
  } else if (!troubleQuestion.classList.contains("hide-text")) {
    troubleQuestion.classList.add("hide-text");
  }
  // setTimeout(() => {
  //   troubleQuestion.classList.add('hide-text')
  // }, 10000)
}

//! event listner
revealInstruction.addEventListener("click", addingShowClass);
