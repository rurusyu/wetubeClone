import React from 'react';
import './LikeAndDislike.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown,faShare, faBookmark,faEllipsisH} from '@fortawesome/free-solid-svg-icons';

const LikeAndHate = ({likeCount,dislikeCount}) => {
    return(        
        <div className="root-like-dislike">
            <div className="like"><FontAwesomeIcon icon={faThumbsUp} /></div>
            <div className="likeCount">{likeCount}</div>
            <div className="dislike"><FontAwesomeIcon icon={faThumbsDown} /></div>
            <div className="dislikeCount">{dislikeCount}</div>
            <div className="like-dislike-share-video"><FontAwesomeIcon icon={faShare} /></div>
            <div className="like-dislike-share-video-title">공유</div>
            <div className="like-dislike-save"><FontAwesomeIcon icon={faBookmark} /></div>
            <div className="like-dislike-save-title">저장</div>
            <div className="like-dislike-options"><FontAwesomeIcon icon={faEllipsisH} /></div>
        </div>        
    )
}

export default LikeAndHate;