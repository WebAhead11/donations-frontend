const SignIn = () => {
  return (
    <div className="mainDiv">
      <div className="DonateForm">
        <div>
          <label for="eMail" className="formLables" required>
            E-mail
          </label>
        </div>
        <div>
          <input
            type="email"
            id="eMail"
            placeholder="type e-mail"
            className="inputGray"
          ></input>
        </div>
        <div>
          <button className="btnRedSmall">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
