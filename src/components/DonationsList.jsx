import React, { useState } from "react";
import Donation from "./Donation";
import axios from "axios";

function DonationsList(props) {
  const kindOfList = props.data.kind;
  const [donations, setDonations] = useState([{}]);
  const RSres = null;
  if (kindOfList === "search") {
    const dataToSearch = {
      category: props.data.category,
      area: props.data.area,
      delivery: props.data.delivery,
      kind: "search",
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/searchDonations", dataToSearch)
      .then((res) => {
        setDonations(res.data);
        // console.log("query response ", res.data);
      })
      .catch((err) => console.log(err));
  } else if (kindOfList === "list") {
  } else if (kindOfList === "archive") {
  }
  // {
  //   title: "T-shirt POLO",
  //   descriptions: "size XXL white color",
  //   photo: "NoImg",
  //   Category: "Clothes",
  //   Area: "Center",
  //   City: "tel-aviv",
  //   eMail: "mario.saliba98@gmail.com",
  //   phone: "0543198210",
  //   Delivery: "yes",
  //   status: "Available",
  //   id: 1,
  // },
  // {
  //   title: "T-shirt POLO",
  //   descriptions: "size XXL white color",
  //   photo: "NoImg",
  //   Category: "Clothes",
  //   Area: "Center",
  //   City: "tel-aviv",
  //   eMail: "mario.saliba98@gmail.com",
  //   phone: "0543198210",
  //   Delivery: "yes",
  //   status: "Available",
  //   id: 2,
  // },
  // {
  //   title: "T-shirt POLO",
  //   descriptions: "size XXL white color",
  //   photo: "NoImg",
  //   Category: "Clothes",
  //   Area: "Center",
  //   City: "tel-aviv",
  //   eMail: "mario.saliba98@gmail.com",
  //   phone: "0543198210",
  //   Delivery: "yes",
  //   status: "Available",
  //   id: 3,
  // },
  // {
  //   title: "T-shirt POLO",
  //   descriptions: "size XXL white color",
  //   photo: "NoImg",
  //   Category: "Clothes",
  //   Area: "Center",
  //   City: "tel-aviv",
  //   eMail: "mario.saliba98@gmail.com",
  //   phone: "0543198210",
  //   Delivery: "yes",
  //   status: "Available",
  //   id: 4,
  // },

  return (
    <div className="donationsList">
      <Donation data={donations} kind={kindOfList}></Donation>
    </div>
  );
}

export default DonationsList;
