import React, { useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { DonutLargeSharp } from "@mui/icons-material";

const Donate = () => {
  const cities = [
    ["Haifa", "Hadera", "Atleet", "Nazareth", "Keryat Yam"],
    ["Tel Aviv", "Kfar saba", "Ranana", "Hertzlia", "Petah tekva"],
    ["Ber sheva", "Rahat", "Ashdod", "Ashkelon"],
  ];
  let citiesBySelectedArea = [];
  const fillCityList = (citiesBySelectedArea) =>
    citiesBySelectedArea.map((city) => <option value={city}>{city}</option>); // {city === "" ? "selected" : ""}

  const [categoryState, setCategoryState] = useState("");
  const [areaState, setAreaState] = useState("");
  const [phoneState, setPhoneState] = useState("");
  const [itemTitleState, setItemTitleState] = useState("");
  const [cityState, setCityState] = useState("");
  const [itemDescriptionState, setItemDescriptionState] = useState("");
  const [itemPhotoState, setItemPhotoState] = useState(""); //must double check if it is good for upload file - as default empty string
  const [emailState, setEmailState] = useState("");
  const [deliveryState, setDeliveryState] = useState("");
  const [sumbited, setSibmited] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    const dataObj = {
      item_title: itemTitleState,
      item_descriptions: itemDescriptionState,
      photo: itemPhotoState,
      category: categoryState,
      area: areaState,
      city: cityState,
      email: emailState,
      phone: phoneState,
      delivery: deliveryState,
      item_status: "available",
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/addItem", dataObj)
      .then((res) => {
        setSibmited(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return sumbited ? (
    <div>
      <h1>Great, Thank you you make people happy </h1>
    </div>
  ) : (
    <div className="DonateForm">
      <form onSubmit={sendForm}>
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
            onChange={(e) => {
              const typedItemTitle = e.target.value;
              setItemTitleState(typedItemTitle);
            }}
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
            onChange={(e) => {
              const descriptionValue = e.target.value;
              setItemDescriptionState(descriptionValue);
            }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="itemPhoto" className="formLables">
            Item Photo
          </label>
        </div>
        <div>
          <input
            type="file"
            id="itemPhoto"
            className="inputGray"
            onChange={(e) => {
              const fileValue = e.target.value;
              setItemPhotoState(fileValue);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="category" className="formLables">
            Category
          </label>
        </div>
        <div>
          <select
            className="inputGray"
            id="category"
            required
            onChange={(e) => {
              const selectedCategory = e.target.value;
              setCategoryState(selectedCategory);
            }}
          >
            <option value=""></option>
            <option value="clothes">Clothes</option>
            <option value="computers">Computers</option>
            <option value="elec-devices">Elec-devices</option>
            <option value="books">Books</option>
            <option value="health">Health</option>
            <option value="video-games">Video Games</option>
            <option value="furni">Furni</option>
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
              setCityState("");
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
          <select
            className="inputGray"
            id="city"
            required
            value={cityState}
            onChange={(e) => {
              const selectedCity = e.target.value;
              setCityState(selectedCity);
            }}
          >
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
            required
            onChange={(e) => {
              const emailValue = e.target.value;
              setEmailState(emailValue);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="phone" className="formLables" required>
            Phone
          </label>
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            placeholder="type phone"
            className="inputGray"
            maxLength="10"
            required
            onChange={(e) => {
              const phoneValue = e.target.value;
              setPhoneState(phoneValue);
            }}
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
            <input
              type="radio"
              id="yes"
              onChange={(e) => {
                const selectedDelivery = e.target.value;
                setDeliveryState(selectedDelivery);
              }}
              name="Delivery"
              value="yes"
              required
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="no"
              onChange={(e) => {
                const selectedDelivery = e.target.value;
                setDeliveryState(selectedDelivery);
              }}
              name="Delivery"
              value="no"
            />
            <label htmlFor="no">No</label>
          </fieldset>
        </div>
        <div>
          <button className="btnRedSmall" type="submit">
            Donate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Donate;
