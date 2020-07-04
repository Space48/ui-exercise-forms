import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    email: "",
  };

  handleInput = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="page-title">Forgot your password?</h1>
        <h5 className="page-subtitle">
          Please enter your email address below to receive a password reset
          link.
        </h5>
        <div className="reset-form">
          <div>
            <p className="email-label">Email Address</p>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              onChange={this.handleInput}
            />
            <div className="buttons">
              <button className="reset-button">Reset Password</button>
              <a>Go Back</a>
            </div>
          </div>
          <span className="instructions-btn">
            Are you having trouble receiving your password reset?{" "}
            <ion-icon name="chevron-down-outline" />
          </span>
          <div>
            <p className="main-paragraphs">
              We have had some customers who mistakenly believe they have store
              account when in fact they are only signed up to receive our VIP
              Club newsletter.
            </p>
            <br />
            <p className="main-paragraphs">
              If you receive our newsletter but have never made a purchase
              online this might apply to you, the best way to check this is to
              do the following:
            </p>
            <br />
            <p>
              1. Go back to the <a>register page</a>.
            </p>
            <p>
              2. Register with your email address.
              <span>
                <br />
                If do you already have an account the form will tell you.
              </span>
            </p>
            <br />
            <p className="main-paragraphs">
              If the form tells you you already have an account and the password
              reset doesn't work please contact the Customer Service Team on 033
              900 0094.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
