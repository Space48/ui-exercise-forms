// This is only to simulate your fetch from JSON
function fakeFetch() {
  return Promise.resolve([
    { email: "joe.bloggs@space48.com" },
    { email: "john.doe@space48.com" },
    { email: "erika.mustermann@space48.com" },
    { email: "koosvandermerwe@space48.com" },
  ]);
}

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.querySelector("#email").value;

  const object = {
    email: emailInput,
  };

  fakeFetch()
    .then((users) => {
      // Check each user in users and try to find a match
      for (let user of users) {
        // Destructuring email and password from the current user
        let { email } = user;

        // Comparing email and pwd from active user with the ones in object
        if (email === object.email) {
          // Found, do something
          console.log("found!");

          var success = document.querySelector("#ff");
          success.style.display = "block";
          return;
        }
      }

      // Not found, do something else
      console.log("Not found...");
      var error = document.querySelector("#error");
      error.style.display = "block";
      return;
    })
    .catch((error) => console.log(error));
});
