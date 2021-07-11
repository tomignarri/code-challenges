import '../App.css';

function PurchaseLocation(props) {
  return (
    <div className="purchaseLocation">
        {props.title}
        <input type="radio" id="" name="" value="Station Kiosk"></input>
        <input type="radio" id="" name="" value="Onboard"></input>
    </div>
  );
}

export default PurchaseLocation;