import axios from "axios";

const SearchHome = ({ setArea, setCategory, setDelivery, category }) => {
  const onPost = () => {
    axios.post(process.env.REACT_APP_API_URL + "");
  };
  return (
    <div className="mainDiv">
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
              setCategory(e.target.value);
            }}
          >
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
              setArea(e.target.value);
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
              value="yes"
              onSelect={(e) => {
                setDelivery(e.target.value);
              }}
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="no"
              name="Delivery"
              value="no"
              onSelect={(e) => {
                setDelivery(e.target.value);
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
      </div>
    </div>
  );
};

export default SearchHome;
