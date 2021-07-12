import '../App.css';

function RideQuantity(props) {

  const onNumberInput = (rideQuantity) => {
    props.passUserInput(rideQuantity.target.value);
  }

  return (
    <div className="rideQuantity" >
        {props.title}
        <input type="number" id="rideQuantity" name="rideQuantity"
        onChange={e => onNumberInput(e)}></input>
    </div>
  );
}

export default RideQuantity;