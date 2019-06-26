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
        console.log("클릭된다.")

        const inputState = {
            inputMessage : this.state.inputMessage,
            
        }

        const newReplyList =[inputState,...this.state.replyList]

        this.setState({
            inputMessage : '',
            replyList : newReplyList,
            replyCount : this.state.replyList.length+1,
        })
    }
    //Q.한글자입력할때 마다 버튼색이 바뀌죠?? ㅠㅠ
    handleChange=(e)=>{
        console.log(e.target.value)
        
        if(e.target.value.length !==0){
            this.setState({
                inputIsNull : !this.state.inputIsNull,
                inputMessage : e.target.value
            })
        }else{
            this.setState({
                inputIsNull : this.state.inputIsNull,
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
                            // style={{!this.state.inputIsNull ? "background:#C7C7C7" : "background:#045ED4"}} //<=Q.왜 안먹히죠??
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