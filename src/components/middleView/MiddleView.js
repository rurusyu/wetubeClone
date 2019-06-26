import React from 'react';
import './MiddleView.scss';
import Profile from '../middleView/profile';
import SubcButton from '../middleView/subcButton';
import pfPhoto from '../../img/profile.jpg';  //사진은 src 벗어나면 import안됨.

const MiddleView = ({channelName,createDate,inputText,textAreaBtnName,handelTextBtnClick,pTagClassName})=> {
    return(
        <div className="root-middle-view">
            <div className="wrap-profile-channelName-Btn">
                <Profile pfPhoto={pfPhoto} photoName="photo"/>
                <div className="wrap-MiddleView-ChannelName-createdDate">
                    <div className="MiddleView-ChannelName">{channelName}</div>
                    <div className="MiddleView-CreatedDate">{createDate}</div>
                </div>
                <SubcButton buttonName="구독" btnClassName="Subcbutton-button"/>
            </div>
            <div className="explanation">
                <p className={pTagClassName}>{inputText}</p>
                <button className="explanation-textAreaBtn" onClick={(e)=>handelTextBtnClick(e)}>{textAreaBtnName}</button>
            </div>
        </div>
    )
}

export default MiddleView;