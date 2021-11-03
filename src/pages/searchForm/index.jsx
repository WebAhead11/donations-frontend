import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const SearchHome = () => {
  const history = useHistory();
  const onPost = (e) => {
    e.preventDefault();
    const dataToSearch = {
      category: categoryState,
      area: areaState,
      delivery: deliveryState,
      kind: "search",
    };
    axios
      .post(
        process.env.REACT_APP_API_URL + "/searchDonationsNumber",
        dataToSearch
      )
      .then((res) => {
        if (res.data > 0) {
          history.push({
            pathname: "/donations",
            state: dataToSearch,
          });
        } else {
          setMsgState("We didn't find records on this serach Criteria's");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [categoryState, setCategoryState] = useState("");
  const [areaState, setAreaState] = useState("");
  const [deliveryState, setDeliveryState] = useState("");
  const [msgState, setMsgState] = useState("");

  return (
    <div className="mainDiv">
      <form onSubmit={onPost}>
        <div className="DonateForm">
          <div>
            <label htmlFor="category" className="formLables">
              Category
            </label>
          </div>
          <div>
            <select
              className="inputGray"
              id="category"
              onChange={(e) => {
                setCategoryState(e.target.value);
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
                setAreaState(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="north">North</option>
              <option value="center">Center</option>
              <option value="south">South</option>
              <option value="other">All</option>
            </select>
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
                name="Delivery"
                required
                value="yes"
                onChange={(e) => {
                  setDeliveryState(e.target.value);
                }}
              />
              <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                id="no"
                name="Delivery"
                value="no"
                onChange={(e) => {
                  setDeliveryState(e.target.value);
                }}
              />
              <label htmlFor="no">No</label>
            </fieldset>
          </div>
          <div>
            <button className="btnRedSmall" onSubmit={onPost}>
              Search
            </button>
          </div>
          <div className="alertDiv">{msgState}</div>
        </div>
      </form>
    </div>
  );
};

export default SearchHome;
