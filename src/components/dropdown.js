import '../App.css';
import React from 'react';

function Dropdown(props) {
    
    const onChange = (e) => {
        console.log(e.target.value);
        props.passUserInput(e.target.value);
    }

    return (
        <div className="dropdown">
            {props.title}

            <select onChange={e => onChange(e)}>
                <option value={props.dropdownPreview}>{props.dropdownPreview}</option>
                {props.dropdownOptions && props.dropdownOptions.map(option => 
                    <option value={option}>{option}</option>
                )}
            </select>
        </div>
    );
}

export default Dropdown;