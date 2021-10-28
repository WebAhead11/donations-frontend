import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArchiveIcon from "@mui/icons-material/Archive";

const data = {
  "/": {
    text: "Support Your Comunity",
    homeButton: false,
    backButton: false,
  },
  "/donations": {
    text: "Donations List",
    homeButton: true,
    backButton: true,
  },
  "/Donate": {
    text: "Donate",
    homeButton: true,
    backButton: false,
  },
  "/SearchForm": {
    text: "Search Donations",
    homeButton: true,
    backButton: false,
  },
  "/SignIn": {
    text: "Sign in to your Donations",
    homeButton: true,
    backButton: false,
  },
};
function Navbar() {
  let history = useHistory();
  const [navbarControl, setNavbarControl] = useState(
    data[history.location.pathname]
  );

  useEffect(() => {
    return history.listen((location) => {
      setNavbarControl(data[location.pathname]);
      //   console.log(`You changed the page to: ${location.pathname}`);
    });
  }, [history]);

  return (
    <div className="App-header">
      {navbarControl.homeButton && (
        <HomeIcon
          className="homeIcon"
          onClick={() => {
            history.push("/");
          }}
        />
      )}
      <h1 className="title"> {navbarControl.text}</h1>
    </div>
  );
}

export default Navbar;
