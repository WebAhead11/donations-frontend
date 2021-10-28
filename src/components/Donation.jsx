import React, { useState } from "react";

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
      return <div>search</div>;
    }
  };

  console.log(kind);
  const donations = props.donation;
  return (
    <div className="donations">
      {donations.map((donation) => (
        <div className="donationData" key={donation.id}>
          <h2>{donation.title}</h2>
          <div>{donation.descriptions}</div>
          {divFooter(donation)}
        </div>
      ))}
    </div>
  );
};
export default Donation;
