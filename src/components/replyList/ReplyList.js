import React,{Component} from 'react';
import './ReplyList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUp} from '@fortawesome/free-solid-svg-icons';
import Profile from '../middleView/profile';
import whoAU from '../../img/who.jpg';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

class ReplyList extends Component {

    state={
        replyList :[],
        replyCount : 0,
        isInputClicked : false,
        inputIsNull : true,
        username : '',
        inputMessage :'',
        isRereplyClick : false,
    }

    handleClick = ()=>{
        this.setState({
            isInputClicked : !this.state.isInputClicked
        })
    }

    handleCancleClick =()=>{
        this.setState({
            isInputClicked : false,
            inputMessage :''
        })
    }

    handleAddReplyClick=(e)=>{

        const inputState = {
            inputMessage : this.state.inputMessage,            
        }

        const newReplyList =[inputState,...this.state.replyList]

        this.setState({
            inputMessage : '',
            replyList : newReplyList,
            replyCount : this.state.replyList.length+1,
            isInputClicked : false,
            inputIsNull : true,
        })
    }
   
    handleChange=(e)=>{        
        if(e.target.value.length !==0){
            this.setState({
                inputIsNull : false,
                inputMessage : e.target.value
            })
        }else{
            this.setState({
                inputIsNull : true,
                inputMessage : e.target.value
            })
        }
    }

    handleRereply = ()=>{
        this.setState({
            isRereplyClick : !this.state.isInputClicked
        })
    }

    render(){
        const {isInputClicked,inputIsNull,replyCount} =this.state;

        return(
            <div className="root-replyList">
                <div className="wrap-reply-count-sort">
                    <div className="reply-list-count">댓글 {replyCount}개</div>
                    <div className="reply-list-sort"><FontAwesomeIcon icon={faSortAmountUp}/>&nbsp;&nbsp;정렬기준</div>
                </div>
                <div className="wrap-reply-profile-inputText">
                    <Profile pfPhoto={whoAU} photoName="replyPhoto"/>
                    <input className="inputReply" 
                           onChange={this.handleChange} 
                           value={this.state.inputMessage}
                           placeholder="공개 댓글 추가..." 
                           onClick={this.handleClick}/>
                </div>
                <div className="wrap-reply-cancle-ok">
                    <button className={!isInputClicked ? "noclick":"reply-cancle-button"} 
                            onClick={this.handleCancleClick}>취소</button>
                    <button className={!isInputClicked ? "noclick": "reply-ok-button"}
                            id={inputIsNull ? "reply-ok-button" : "reply-ok-button-color"} 
                            onClick={this.handleAddReplyClick}
                            >댓글</button>
                </div>
                <ul className="reply-item-list">
                    {
                        this.state.replyList.map((item,index)=>{
                            return (
                                <div className="wrap-list-all">
                                   <Profile pfPhoto={whoAU} photoName="replyListPhoto"/>
                                   <div className="wrap-username-reply">
                                       <div className="reply-userName">하드코딩</div>
                                       <div className="reply-userComment">{item.inputMessage}</div>
                                       <div className="wrap-reply-like-dislike-re-reply">
                                            <div className="reply-like"><FontAwesomeIcon icon={faThumbsUp} size="lg"/></div>
                                            <div className="reply-like-title"></div>
                                            <div className="reply-dislike"><FontAwesomeIcon icon={faThumbsDown} size="lg"/></div>
                                            <div className="reply-dislike-title"></div>
                                            <div className="reply-dislike-re-reply" onClick={this.handleRereply}>답글</div>
                                       </div>
                                   </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ReplyList;