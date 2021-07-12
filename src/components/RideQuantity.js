import '../App.css';

function RideQuantity(props) {

  const onNumberInput = (rideQuantity) => {
    props.passUserInput(rideQuantity.target.value);
  }

  return (
    <div className="rideQuantity" onChange={e => onNumberInput(e)}>
        {props.title}
        <input type="number" id="rideQuantity" name="rideQuantity"
        min="1" max="100"></input>
    </div>
  );
}

export default RideQuantity;