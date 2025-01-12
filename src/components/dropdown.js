import '../App.css';
import React from 'react';

function Dropdown(props) {
    
    const onChange = (e) => {
        props.passUserInput(e.target.value);
    }

    return (
        <div className="dropdown">
            
            <label htmlFor="selectDropdown">{props.title}</label>
            <select onChange={e => onChange(e)} id="selectDropdown">
                <option value={props.dropdownPreview}>{props.dropdownPreview}</option>
                {props.dropdownOptions && props.dropdownOptions.map(option => 
                    <option value={option}>{option}</option>
                )}
            </select>
        </div>
    );
}

export default Dropdown;