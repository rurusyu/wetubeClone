import React,{Component} from 'react';
import './SideVideoList.scss';
import DummyList from '../__test__/dummyVideo/dummyVideo';

class SideNextVideo extends Component {
    state={
      videoList : []
    }

    render(){
      return (
          <><div>
              <div className="root-title">다음 동영상
                 <div className="wrap-next-view">
                    <iframe className ="next-video"
                            src="https://www.youtube.com/embed/f7YRn2MVYJw" 
                            frameborder="0" 
                            title="This is next video"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    <div className="wrap-title-channelName">
                      <div className="next-video-title">NCT랑 중국집에서 1인2메뉴 뿌셨다!</div>        
                      <div className="next-video-channelName">봄날의 소년을 플레이하다</div>
                      <div className="next-video-viewCount">조회수 6.2만회</div>
                      <span className="alert-item">새동영상</span>   
                    </div>
                 </div>
              </div>
              <div className="wrap-showVideoList">
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
               <DummyList/>
              </div>

            </div>
          </>
      )
    }
}

export default SideNextVideo;