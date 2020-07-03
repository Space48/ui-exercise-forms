// Show the instructions
document.getElementById("password-trouble").addEventListener("click", (e) => {
  const el = document.getElementById("password-instructions");

  !el.classList.contains("d-block")
    ? el.classList.add("d-block")
    : el.classList.remove("d-block");

  // Bubbling
  e.stopPropagation();
});

const database = [
  "koosvandermerwe@space48.com",
  "erika.mustermann@space48.com",
  "john.doe@space48.com",
  "joe.bloggs@space48.com",
];

const email_address = document.getElementById("email").value;
const email_regex = document.querySelector(".form-body span");

document.getElementById("password-form").addEventListener("submit", (e) => {
  const method = {
    method: "POST",
    header: { "Content-type": "application/json" },
    body: JSON.stringify(email_address),
  };

  const errorHandling = (response) => {
    if (!response.ok) throw Error("Something went wrong");

    return response.json();
  };

  fetch("/customer/account/resetPassword", method)
    .then(errorHandling)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  if (email_address.length === 0)
    regexAlert(e.target, "error", "Email is required");

  console.log(database[email_address], email_address.length === 0);

  e.preventDefault();
  e.stopPropagation;
});

// target - where to add the error in our case form
// alert_type = succes or error
// message = ??
function regexAlert(target, alert_type, message) {
  const alert = document.createElement("p");

  const alert_time = 2500;

  alert.classList.add(
    "regex-alert",
    `${alert_type === "error" ? "error" : "success"}`
  );

  if (alert_type === "error") {
    email_regex.classList.add("d-block");
    document.getElementById("email").classList.add("input-error");

    setTimeout(() => {
      email_regex.classList.remove("d-block");
      document.getElementById("email").classList.remove("input-error");
    }, alert_time);
  }

  alert.textContent = message;

  if (!document.body.contains(document.querySelector(".regex-alert")))
    target.insertAdjacentElement("beforebegin", alert);

  setTimeout(() => alert.remove(), alert_time);
}
