import { useHistory } from "react-router-dom";
import axios from "axios";
import React from "react";

const Home = () => {
  const [donatesCounter, setDonatesCounter] = React.useState(null);
  const [takedItems, setTakedItems] = React.useState(null);
  const [lastFiveDonates, setLastFiveDonates] = React.useState([]);

  const history = useHistory();

  const TakenNum = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/deliveredItems")
      .then((res) => {
        setTakedItems(res.data.rows[0].count);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DonatesNum = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/totalDonations")
      .then((res) => {
        setDonatesCounter(res.data.rows[0].count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetLastFive = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/latestItems")
      .then((res) => {
        setLastFiveDonates(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    DonatesNum();
    TakenNum();
    GetLastFive();
  }, []);

  return (
    <div className="mainDiv">
      <div className="statesticsTitle">People just love Giving</div>
      <div className="statDiv">
        <div className="box">
          Donates
          <div className="boxStat">{donatesCounter}</div>
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
          {lastFiveDonates.map((title) => {
            return <li>{title.item_title}</li>;
          })}
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
