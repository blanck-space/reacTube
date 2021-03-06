import React from 'react';

const VListItem = (props) => {
  return(
    <li onClick={()=>props.onItemClick(props.video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={props.video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <div className = "media-heading">{props.video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VListItem;
