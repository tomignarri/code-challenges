import './App.css';

function Container() {
  return (
    <div className="dropdown">
        <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
    </div>
  );
}

export default Container;