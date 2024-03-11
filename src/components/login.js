import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function FormComponent() {
  const [loginVisible, setLoginVisible] = useState(true);
  const [btnPosition, setBtnPosition] = useState(0);
  let navigate = useNavigate();

  const toggleForms = () => {
    setLoginVisible(!loginVisible);
    setBtnPosition(loginVisible ? 110 : 0);
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    console.log("Logged-in successfully!");
    navigate("/home");
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    console.log("Logged-up successfully!");
    navigate("/home");
  };

  return (
    <div className="box">
      <div className="form-box">
        <div className="button-box">
          <div id="btn" style={{ left: btnPosition + "px" }}></div>
          <button type="button" className="toggle-btn" onClick={toggleForms}>
            ADD UP
          </button>
          <button type="button" className="toggle-btn" onClick={toggleForms}>
            ADD IN
          </button>
        </div>
        {loginVisible ? (
          <form
            onSubmit={handleSubmit2}
            method="POST"
            autoComplete="off"
            className="input-group"
            id="signin"
          >
            {/* Sign-up Form */}
            <input
              type="text"
              id="fid1"
              name="fid1"
              placeholder="Enter username"
              className="input-field1"
              required
            />
            <br />
            <br />
            <input
              type="text"
              id="fid2"
              name="fid2"
              placeholder="Set id"
              className="input-field1"
              required
            />
            <br />
            <br />
            <input
              type="email"
              id="fid3"
              name="fid3"
              placeholder="Enter email"
              className="input-field1"
              required
            />
            <br />
            <br />
            <input
              type="text"
              id="fid4"
              name="fid4"
              placeholder="Enter phone no."
              className="input-field1"
              required
            />
            <br />
            <br />
            <input
              type="password"
              id="pass1"
              name="pass1"
              placeholder="Set password"
              className="input-field1"
              required
            />
            <br />
            <br />
            <input
              type="text"
              id="fid5"
              name="fid5"
              placeholder="Confirm password"
              className="input-field1"
              required
            />
            <br />
            <br />
            <br />
            <div className="submit-button">
              <button id="reset" type="reset" className="submit1">
                RESET
              </button>
              <button type="submit" name="addup" className="submit1">
                REGISTER
              </button>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit1}
            method="POST"
            autoComplete="off"
            className="input-group"
            id="login"
          >
            {/* Login Form */}
            <input
              type="text"
              id="fid2"
              name="fid2"
              placeholder="Enter id"
              className="input-field1"
              required
            />
            <br />
            <br />
            <input
              type="password"
              id="pass2"
              name="pass2"
              placeholder="Enter password"
              className="input-field1"
              required
            />
            <br />
            <br />
            <br />
            <div className="submit-button">
              <button id="reset" type="reset" className="submit1">
                RESET
              </button>
              <button type="submit" name="addin" className="submit1">
                LOGIN
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default FormComponent;
