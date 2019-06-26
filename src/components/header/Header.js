import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faBell,faBars, faVideo,faTh} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import SearchBar from '../searchbar/SearchBar';

const Header =() => {
    return (
        <div className ="header-root">
            <div className ="header-wrap-left">
                <span className="left-navi-btn"><FontAwesomeIcon icon={faBars} size="lg"/></span>
                <span className="wetube-logo">>Wetube</span>
            </div>
            <div className ="header-wrap-center">
               <SearchBar/>
            </div>
            <div className ="header-wrap-right">
                <span className="create-video"><FontAwesomeIcon icon={faVideo} size="lg"/></span>
                <span className="wetube-app"><FontAwesomeIcon icon={faTh} size="lg"/></span>
                <span className="wetube-message"><FontAwesomeIcon icon={faShareSquare} size="lg"/></span>
                <span className="wetube-alram"><FontAwesomeIcon icon={faBell} size="lg"/></span>
            </div>
        </div>
    );
}

export default Header;