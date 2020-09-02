window.onload = function () {
  const moreInfoButton = document.getElementById("more-info-button");
  const moreInfoContainer = document.getElementById("more-info-container");

  moreInfoButton.onclick = function () {
    moreInfoContainer.classList.toggle("open");
  };

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const submitButton = document.getElementById("submit-button");

  submitButton.onclick = function () {
    const data = document.getElementById("email-input").value;

    if (re.test(data)) {
      console.log("PASS");
    } else {
      console.log("FAIL");
      document.querySelector(".error-message").innerHTML =
        "Please enter a valid email address.";
      return false;
    }

    fetch("http://localhost:3005/customer/account/resetPassword", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["errors"].length == 0) {
          document
            .querySelector(".success-container")
            .classList.toggle("success");

          document.querySelector(".error-message").innerHTML = "";

          console.log("SUCCESS");
        } else if (data["errors"][0]["status"] == 404) {
          document.querySelector(".error-message").innerHTML =
            data["errors"][0]["detail"];
          console.log("ERROR: " + 404);
        }
      });
  };
};
