import React, {Component} from 'react';
import Header from '../../components/header/Header';
import MainView from '../../components/mainView/MainView';
import SideVideoList from '../../components/sideVideoList';
import './WatchTemplate.scss';
import MovieTitleAndViewCount from '../../components/movieTitleAndViewCount'
import MiddleView from '../../components/middleView';
import ReplyList from '../../components/replyList';

class WatchTemplate extends Component {
    dummyText = `무료] 공부법은 물론, 습관까지 만들어 드려요.
    ▶ https://goo.gl/6fEpZC
    [공부의신 페이스북] 좋아요!
    ▶ http://fb.com/gongsin
    
    10시간짜리 밤의 숲 ASMR~
    공부할 때 들어봐!`;

    state={
        isClicked : false
    }

    handelTextBtnClick =(e)=>{
        this.setState({
            isClicked : !this.state.isClicked
        })
    }

    render(){
        return(
            <>
            <Header/>
            <div className ="wrap-main-sideNextVideo">
                <div className="wrap-mainView-MovieTitle-Commtent">
                    <MainView/>
                    <MovieTitleAndViewCount movieTitle="NCT랑 중국집에서 1인2메뉴 뿌셨다!" viewCount="조회수 775,024회"/>
                    <MiddleView channelName="Amanda J. young [J.flower]" 
                                createDate="게시일:2018.2.20." 
                                inputText={this.dummyText}
                                textAreaBtnName={!this.state.isClicked ? "더보기" : "간략히"}
                                handelTextBtnClick ={this.handelTextBtnClick}
                                pTagClassName={!this.state.isClicked ?  "explanation-inputText-short" :"explanation-inputText-detail"}
                                />
                    <ReplyList innerReplyText="댓글 1,108개"/>            
                </div>
             <SideVideoList/>
            </div>
            </>
        )
    }
}
export default WatchTemplate;