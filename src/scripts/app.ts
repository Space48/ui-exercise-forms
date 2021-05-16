let helpTitle = document.querySelector(".form-section-help__title");

helpTitle.addEventListener("click", () => {
  let helpText = document.querySelector(".form-section-help__content");
  helpText.classList.toggle("hidden");
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(document.querySelector(".form"));

  console.log(formData);

  fetch("http://localhost:3005", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formData,
  })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      console.log(text);
    })
    .catch((error) => {
      console.log(error);
    });
});
