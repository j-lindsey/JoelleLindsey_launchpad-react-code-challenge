import React from 'react';
import './customButton.css';

const CustomButton = (props) => {
   
    return (
       <button className="custom-button">{props.children}</button>
    )
}

export default CustomButton;