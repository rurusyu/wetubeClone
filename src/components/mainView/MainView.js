import React,{Component} from 'react';
import './MainView.scss';


class MainView extends Component {



  render(){
    return (
        <div className="mainView-root">
          <iframe className="main-video-item" 
                  src="https://www.youtube.com/embed/f7YRn2MVYJw" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  title="this is main view"
                  allowFullScreen></iframe>
        </div>
    )
  }
}

export default MainView;