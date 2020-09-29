import React, { useEffect, useState } from "react";
import "./App.css";

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

function App() {
  const [emailAddress, updateEmailAddress] = useState();
  const [error, updateError] = useState([]);
  const [responseSuccess, updateResponseSuccess] = useState(false);
  const [invalidEmail, updateInvalidEmail] = useState(false);

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    updateInvalidEmail(false);
    updateResponseSuccess(false);
    updateError([]);

    if (validateEmail(emailAddress)) {
      const data = await fetch(
        "http://localhost:3005/customer/account/resetPassword",
        {
          method: "POST",
          body: JSON.stringify({ email: emailAddress }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await data.json();

      if (json.errors.length) {
        const errors = json.errors.map((error) => {
          return error.detail;
        });
        updateError(errors);
      } else {
        updateResponseSuccess(true);
      }
    } else {
      updateInvalidEmail(true);
    }
  };

  return (
    <div className="container">
      <h1>Forgot Your Password?</h1>
      <p>
        Please enter your email address below to receive a password reset link.
      </p>
      {error.map((error) => {
        return error;
      })}
      {responseSuccess && (
        <div>Success, we have emailed your password reset link</div>
      )}
      <form className="form" method="post">
        <div>
          <label>Email Address</label>
          <input
            placeholder="Your email address"
            onChange={(event) => updateEmailAddress(event.target.value)}
          />
          {invalidEmail && <div>Please enter valid email address</div>}
        </div>
        <div>
          <button onClick={handleFormSubmission}>Reset Password</button>
        </div>
      </form>
    </div>
  );
}

export default App;
