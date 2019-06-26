import React from 'react';
import './Profile.scss';

const Profile =({pfPhoto,photoName})=>{
    return(
        <div className="root-profile">
            <div className="proile-photo"><img className={photoName} src={pfPhoto} alt="this is profile"/></div>
        </div>
    )
}

export default Profile;