import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Donate = () => {
  const cities = [
    ["Haifa", "Hadera", "Atleet", "Nazareth", "Keryat Yam"],
    ["Tel Aviv", "Kfar saba", "Ranana", "Hertzlia", "Petah tekva"],
    ["Ber sheva", "Rahat", "Ashdod", "Ashkelon"],
  ];
  let citiesBySelectedArea = [];
  const fillCityList = (citiesBySelectedArea) =>
    citiesBySelectedArea.map((city) => <option value={city}>{city}</option>);

  const [areaState, setAreaState] = useState("");

  return (
    <div className="DonateForm">
      <div>
        <label htmlFor="itemTitle" className="formLables">
          Item Title
        </label>
      </div>
      <div>
        <input
          type="text"
          id="itemTitle"
          placeholder="type item title"
          className="inputGray"
          required
        ></input>
      </div>
      <div>
        <label htmlFor="itemDescription" className="formLables">
          Item Description
        </label>
      </div>
      <div>
        <textarea
          id="itemDescription"
          cols="30"
          rows="10"
          placeholder="type item description like status/condition/data etc."
          className="inputGray"
        ></textarea>
      </div>
      <div>
        <label htmlFor="itemPhoto" className="formLables">
          Item Photo
        </label>
      </div>
      <div>
        <input type="file" id="itemPhoto" className="inputGray"></input>
      </div>
      <div>
        <label htmlFor="category" className="formLables">
          Category
        </label>
      </div>
      <div>
        <select className="inputGray" id="category" required>
          <option value=""></option>
          <option value="clothes">Clothes</option>
          <option value="computers">Computers</option>
          <option value="elec-devices">Elec-devices</option>
          <option value="books">Books</option>
          <option value="health">Health</option>
          <option value="video-games">Video Games</option>
          <option value="furmi">Furmi</option>
          <option value="electronics">Electronics</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="areaSelect" className="formLables">
          Area
        </label>
      </div>
      <div>
        <select
          className="inputGray"
          id="areaSelect"
          onChange={(e) => {
            const selectedArea = e.target.value;
            setAreaState(selectedArea);
          }}
          required
        >
          <option value=""></option>
          <option value="north">North</option>
          <option value="center">Center</option>
          <option value="south">South</option>
          <option value="other">All</option>
        </select>
      </div>
      <div>
        <label htmlFor="City" className="formLables">
          City
        </label>
      </div>
      <div>
        <select className="inputGray" id="city" required>
          <option value=""></option>
          {areaState === "north" ? (
            fillCityList(cities[0])
          ) : areaState === "center" ? (
            fillCityList(cities[1])
          ) : areaState === "south" ? (
            fillCityList(cities[2])
          ) : (
            <option value="all">All</option>
          )}
        </select>
      </div>
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
        ></input>
      </div>
      <div>
        <label htmlFor="Delivery" className="formLables" required>
          Delivery
        </label>
      </div>
      <div>
        <fieldset className="legendDelivery">
          <legend>Select if you can delivered the Item:</legend>
          <input type="radio" id="yes" name="Delivery" value="yes" />
          <label for="yes">Yes</label>
          <input type="radio" id="no" name="Delivery" value="no" />
          <label for="no">No</label>
        </fieldset>
      </div>
      <div>
        <button className="btnRedSmall">Donate</button>
      </div>
    </div>
  );
};

export default Donate;
