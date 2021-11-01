import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const history = useHistory();

  const sendForm = (e) => {
    e.preventDefault();
    const emailTocheck = {
      email: emailState,
    };
    axios
      .get(process.env.REACT_APP_API_URL + "/donationsNumber", emailTocheck)
      .then((res) => {
        console.log(
          res,
          " the number is ",
          res.data,
          " for email ",
          emailState
        );
        //history.push("/Donations");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [emailState, setEmailState] = useState("");
  return (
    <div className="mainDiv">
      <form onSubmit={sendForm}>
        <div className="DonateForm">
          <div>
            <label htmlFor="eMail" className="formLables" required>
              E-mail
            </label>
          </div>
          <div>
            <input
              type="email"
              id="eMail"
              placeholder="type e-mail"
              className="inputGray"
              onChange={(e) => {
                const emailValue = e.target.value;
                setEmailState(emailValue);
              }}
              required
            ></input>
          </div>
          <div>
            <button className="btnRedSmall" type="submit">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
