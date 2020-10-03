window.addEventListener("load", load);
function load() {
  let selectors = {
    formElement: 'form[action="/customer/account/resetPassword"]',
    emailInput: "input",
    inputWrapperElement: ".input",
    inputErrorElement: ".input__error",
  };
  let classes = {
    inputErrorClass: "input__error--hidden",
    inputWrapperErrorClass: "input--error",
  };

  let formElement = document.querySelector(selectors.formElement);
  formElement.addEventListener("submit", resetPassword);

  function resetPassword(event) {
    event.preventDefault();

    // double validate the form
    let currentForm = event.target;
    let emailInput = currentForm.querySelector(selectors.emailInput);
    let inputWrapperElement = emailInput.parentElement;
    let inputErrorElement = emailInput.parentElement.querySelector(
      selectors.inputErrorElement
    );

    if (
      !emailInput.checkValidity() &&
      inputErrorElement.classList.contains(classes.inputErrorClass)
    ) {
      inputErrorElement.classList.remove(classes.inputErrorClass);
      inputWrapperElement.classList.add(classes.inputWrapperErrorClass);
      inputErrorElement.innerText = emailInput.validationMessage; // or use 'Please enter valid email address'
      return;
    } else if (
      emailInput.checkValidity() &&
      !inputErrorElement.classList.contains(classes.inputErrorClass)
    ) {
      inputErrorElement.classList.add(classes.inputErrorClass);
      inputWrapperElement.classList.remove(classes.inputWrapperErrorClass);
    }
  }
}
