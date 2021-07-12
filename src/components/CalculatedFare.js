import '../App.css';

function CalculatedFare(props) {


  return (
    <div className="calculatedFare">
        Your fare will cost
        <div>
          $ {props.fare}
        </div>
        
    </div>
  );
}

export default CalculatedFare;