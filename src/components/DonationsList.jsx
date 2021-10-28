import React, { useState } from "react";
import Donation from "./Donation";

function DonationsList() {
  const [donations, setDonations] = useState([
    {
      title: "T-shirt POLO",
      descriptions: "size XXL white color",
      photo: "NoImg",
      Category: "Clothes",
      Area: "Center",
      City: "tel-aviv",
      eMail: "mario.saliba98@gmail.com",
      phone: "0543198210",
      Delivery: "yes",
      status: "Available",
      id: 1,
    },
    {
      title: "T-shirt POLO",
      descriptions: "size XXL white color",
      photo: "NoImg",
      Category: "Clothes",
      Area: "Center",
      City: "tel-aviv",
      eMail: "mario.saliba98@gmail.com",
      phone: "0543198210",
      Delivery: "yes",
      status: "Available",
      id: 2,
    },
    {
      title: "T-shirt POLO",
      descriptions: "size XXL white color",
      photo: "NoImg",
      Category: "Clothes",
      Area: "Center",
      City: "tel-aviv",
      eMail: "mario.saliba98@gmail.com",
      phone: "0543198210",
      Delivery: "yes",
      status: "Available",
      id: 3,
    },
    {
      title: "T-shirt POLO",
      descriptions: "size XXL white color",
      photo: "NoImg",
      Category: "Clothes",
      Area: "Center",
      City: "tel-aviv",
      eMail: "mario.saliba98@gmail.com",
      phone: "0543198210",
      Delivery: "yes",
      status: "Available",
      id: 4,
    },
  ]);
  //this should come from props
  const kindOfList = "serach";
  // const theProps = props;
  return (
    <div className="donationsList">
      {/* <Donation donation={theProps.data} kind={theProps.kindOfList}></Donation> */}
      <Donation></Donation>
    </div>
  );
}

export default DonationsList;
