import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArchiveIcon from "@mui/icons-material/Archive";

// let titleForDonation = "Donations List";

function Navbar() {
  const [titleForDonation, setTitleForDonationState] = useState("");
  const data = {
    "/": {
      text: "Support Your Comunity",
      homeButton: false,
      backButton: false,
    },
    "/donations": {
      text: titleForDonation,
      homeButton: true,
      backButton: false,
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
  let history = useHistory();

  const [navbarControl, setNavbarControl] = useState(
    data[history.location.pathname]
  );

  useEffect(() => {
    return history.listen((location) => {
      setTitleForDonationState(null);
      if (location.state) {
        if (history.location.pathname === "/donations") {
          // console.log(history.location.state.kind);
          history.location.state.kind === "search"
            ? setTitleForDonationState("Search Results")
            : setTitleForDonationState("My Donations List/Archive");

          // console.log("state value ", titleForDonation);
        }
      }
      setNavbarControl(data[location.pathname]);
      //   console.log(`You changed the page to: ${location.pathname}`);
      // if (location.pathname === "/donations") {
      //   const locationState = history.location.state;
      //   if (locationState.kind === "search") {
      //     setTitleForDonationState("Search Result");
      //   } else if (locationState.kind === "list") {
      //     setTitleForDonationState("My Donations List");
      //   } else if (locationState.kind === "archive") {
      //     setTitleForDonationState("My Donations Archive");
      //   }
      // }
    });
  }, [history]); //titleForDonation

  return (
    <div className="App-header">
      <div>
        {navbarControl.homeButton && (
          <HomeIcon
            className="homeIcon"
            onClick={() => {
              history.push("/");
            }}
          />
        )}
      </div>
      <div>
        <h1 className="title"> {titleForDonation || navbarControl.text}</h1>
      </div>
      <div>&nbsp;</div>
    </div>
  );
}

export default Navbar;
