import React from 'react';
import './SubcButton.scss';

const SubcButton =({buttonName,handleClick,btnClassName})=>{
    return(
        <div className="root-Subcbutton">
            <button className={btnClassName} type="button" onClick={handleClick}>{buttonName}</button>            
        </div>
    )
}

export default SubcButton;