import '../App.css';
import React, { useState } from 'react';

function Dropdown(props) {

  const [setSelectionItems, selectionItems] = useState();  


  return (
    <div className="dropdown">
        {props.title}



        <select>
            <option value=""></option>
        </select>
    </div>
  );
}

export default Dropdown;