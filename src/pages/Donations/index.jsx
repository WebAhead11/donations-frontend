import DonationsList from "../../components/DonationsList";
import { useLocation } from "react-router-dom";

const Donations = () => {
  let locationNow = useLocation();
  return (
    <div className="MainDiv">
      <DonationsList data={locationNow.state}></DonationsList>
    </div>
  );
};

export default Donations;
