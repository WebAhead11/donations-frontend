import { useHistory } from "react-router-dom";
import axios from "axios";

// const DonatesNum = 100;
const takedItems = 10;
const Home = () => {
  const history = useHistory();
  const DonatesNum = () => {
    axios.get(process.env.REACT_APP_API_URL + "/deliveredItems").then((res) => {
      console.log(res);
    });
  };

  // const takedItems = () => {};
  return (
    <div className="mainDiv">
      <div className="statesticsTitle">People just love Giving</div>
      <div className="statDiv">
        <div className="box">
          Donates
          <div className="boxStat">{DonatesNum()}</div>
        </div>
        <div className="box">
          Taken
          <div className="boxStat">{takedItems}</div>
        </div>
      </div>
      <div className="buttonsDiv">
        <div
          className="btnRed"
          onClick={() => {
            history.push("/Donate");
          }}
        >
          Donate Item
        </div>
        <div
          className="btnRed"
          onClick={() => {
            history.push("/SearchForm");
          }}
        >
          Search Item
        </div>
      </div>
      <div className="topFie">
        <h2>Last Five Donates</h2>
        <ul>
          <li>T-shirt polo</li>
          <li>tv 33 lg</li>
          <li>3 charis</li>
          <li>table for 6 persons</li>
          <li>hand made bag</li>
        </ul>
      </div>
      <div className="divCenter">
        <div
          className="btnRedDouble"
          onClick={() => {
            history.push("/SignIn");
          }}
        >
          My Donates List
        </div>
      </div>
    </div>
  );
};

export default Home;
