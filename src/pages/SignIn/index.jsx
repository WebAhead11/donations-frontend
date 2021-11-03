import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const history = useHistory();

  const sendForm = (e) => {
    e.preventDefault();
    const emailTocheck = {
      email: emailState,
      kind: "list",
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/donationsNumber", emailTocheck)
      .then((res) => {
        if (res.data > 0) {
          history.push("/donations", emailTocheck);
        } else {
          setMsgState("We didn't find records on this email");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [emailState, setEmailState] = useState("");
  const [msgState, setMsgState] = useState("");
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
          <div className="alertDiv">{msgState}</div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
