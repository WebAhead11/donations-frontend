import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Donation = (props) => {
  const kind = props.kind;
  const divFooter = (donate) => {
    if (kind === "archive") {
      return <div>deleted / delivered</div>;
    }
    if (kind === "list") {
      return <div>my list</div>;
    }
    if (kind === "search") {
      return (
        <div>
          <div>
            <EmailIcon />
          </div>
          <div>
            <PhoneAndroidIcon />
          </div>
        </div>
      );
    }
  };

  // console.log(kind);
  const donations = props.data;
  return (
    <div className="donations">
      {donations.map((donation) => (
        <div className="donationData" key={donation.id}>
          <h2>{donation.item_title}</h2>
          <div>{donation.descriptions}</div>
          {divFooter(donation)}
        </div>
      ))}
    </div>
  );
};
export default Donation;
