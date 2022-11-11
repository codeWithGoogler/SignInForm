import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [errorHandle, setErrorHandle] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErrorHandler, setPasswordErrorHandler] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErrorHandler, setConfirmPasswordErrorHandler] =
    useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);
    setErrorHandle(false);
  };

  const emailBlurHandler = () => {
    if (email.trim() === "") {
      setErrorHandle(true);
    }
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    setPasswordErrorHandler(false);
  };

  const touchPasswordHanlder = () => {
    if (!password.trim() === "") {
      setPasswordErrorHandler(true);
    }
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordErrorHandler(false);
  };

  const touchConfirmPasswordHandlder = () => {
    if (!confirmPassword.trim() === "") {
      setConfirmPasswordErrorHandler(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!email) {
      setErrorHandle(true);
    }

    if (!password) {
      setPasswordErrorHandler(true);
    }

    if (!confirmPassword) {
      setConfirmPasswordErrorHandler(true);
    }

    setEmail('')
    setPassword('')
    setConfirmPassword('')

    const formData = fetch(
      "past your URL here",
      { method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword
      })
    }
    );

    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };
  return (
    <div className="main-section">
      <div className="title">Code With Googler</div>
      <div className="inputs">
        <form onSubmit={formSubmitHandler}>
          <div className="form-input">
            <label>Email</label>
            <input
              value={email}
              onBlur={emailBlurHandler}
              onChange={(event) => emailHandler(event)}
              type="email"
              placeholder="Enter Your Email"
            />
            {errorHandle && <span className="error">Email is required</span>}
          </div>

          <div className="form-input">
            <label>Password</label>
            <input
              value={password}
              onBlur={touchPasswordHanlder}
              onChange={(event) => passwordHandler(event)}
              type="password"
              placeholder="Enter Your Email"
            />
            {passwordErrorHandler && (
              <span className="error">Password is required</span>
            )}
          </div>

          <div className="form-input">
            <label>Confirm Password</label>
            <input
              value={confirmPassword}
              onBlur={touchConfirmPasswordHandlder}
              onChange={(event) => confirmPasswordHandler(event)}
              type="password"
              placeholder="Enter Your Email"
            />
            {confirmPasswordErrorHandler && (
              <span className="error">Confirm password is required</span>
            )}
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
