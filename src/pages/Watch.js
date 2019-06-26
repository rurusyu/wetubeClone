import React, {Component} from 'react';
import WatchTemplate from './template/WatchTemplate';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Watch extends Component {
    render(){
        return(
            <>
            <WatchTemplate />
            {/* <FontAwesomeIcon icon ="check-square" /> */}
            </>
        )
    }
}
export default Watch;
