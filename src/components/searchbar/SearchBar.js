import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faSearch} from '@fortawesome/free-solid-svg-icons';
import './SearchBar.scss';

const SearchBar = (props) => {
    return(
        <div className="SearchBar-root">
        <div className="SearchBar-wrap">
         <input className="SearchBar" onChange={props.onChange} value={props.value}></input>
         <button className="Search-Btn"><FontAwesomeIcon icon={faSearch} size="lg"/></button>
        </div>
        <div className="keyboard" ><FontAwesomeIcon icon={faKeyboard} size="lg"/></div>
        </div>
    )
}

export default SearchBar;