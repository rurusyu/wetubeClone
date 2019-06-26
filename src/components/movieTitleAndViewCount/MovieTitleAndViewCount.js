import React from 'react';
import './MovieTitleAndViewCount.scss';
import LikeAndDislike from '../likeAndDislike'

const MovieTitleAndViewCount =({movieTitle,viewCount}) => {
    return(
       <div className="root-MovieTitleAndViewCount">
           <div className="MovieTitle">{movieTitle}</div>
           <div className="wrap-ViewCount-like-dislike">
                <div className="ViewCount">{viewCount}</div>
                <LikeAndDislike likeCount="9.8천" dislikeCount="349"/>
           </div>
       </div>
    )
}

export default MovieTitleAndViewCount;