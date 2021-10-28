import DonationsList from "../../components/DonationsList";

const Donations = () => {
  //here we handle the fetch to get the data from the api by the kind of process (by props)
  return (
    <div className="MainDiv">
      {/* <DonationsList data={data} kind={props.kindOfList}></DonationsList> */}
      <DonationsList></DonationsList>
    </div>
  );
};

export default Donations;
