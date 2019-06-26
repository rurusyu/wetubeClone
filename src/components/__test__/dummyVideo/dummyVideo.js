import React from 'react';
import './dummyVideo.scss';

const DummyList = () => {
    return (
        <div className="wrap-list-view">
          <iframe className ="list-video"
                  src="https://www.youtube.com/embed/f7YRn2MVYJw" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  title="This is List view"
                  allowfullscreen></iframe>
          <div className="wrap-title-channelName">
            <div className="next-video-title">NCT랑 중국집에서 1인2메뉴 뿌셨다!</div>        
            <div className="next-video-channelName">봄날의 소년을 플레이하다</div>
            <div className="next-video-viewCount">조회수 6.2만회</div>
            <span className="alert-item">새동영상</span>   
          </div>
        </div>
    )
}

export default DummyList;