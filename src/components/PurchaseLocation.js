import '../App.css';

function PurchaseLocation(props) {

  const onSelection = (locationSelection) => {
    props.passUserInput(locationSelection.target.value);
  };

  return (

    <div className="purchaseLocation" onChange={e => onSelection(e)}>
      <div className="locationTitle">{props.title}</div>
      <div>
        <input className="locationOption" type="radio" id="stationkiosk" name="purchaseLocation" value="advance_purchase"></input>
        <label htmlFor="stationkiosk" className="locationLabel">Station Kiosk</label>
      </div>
      <div>
        <input className="locationOption" type="radio" id="onboard" name="purchaseLocation" value="onboard_purchase"></input>
        <label htmlFor="onboard" className="locationLabel">Onboard</label>
      </div>

      
    </div>
    
  );
}

export default PurchaseLocation;