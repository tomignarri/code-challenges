import '../App.css';

function PurchaseLocation(props) {

  const onSelection = (locationSelection) => {
    console.log(locationSelection.target.value);
    props.passUserInput(locationSelection.target.value);
  };

  return (

    <div className="purchaseLocation" onChange={e => onSelection(e)}>
      {props.title}
      <input type="radio" id="stationkiosk" name="purchaseLocation" value="advance_purchase"></input>
      Station Kiosk
      <input type="radio" id="onboard" name="purchaseLocation" value="onboard_purchase"></input>
      Onboard
    </div>
    
  );
}

export default PurchaseLocation;