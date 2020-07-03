// Show the instructions
document.getElementById("password-trouble").addEventListener("click", (e) => {
  const el = document.getElementById("password-instructions");

  !el.classList.contains("d-block")
    ? el.classList.add("d-block")
    : el.classList.remove("d-block");

  // Bubbling
  e.stopPropagation();
});
