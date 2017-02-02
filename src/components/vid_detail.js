import React from 'react';

const VideoDetail = ({currVideo}) => {
  if(!currVideo){
    return(<div> Loading... </div>);
  }else{
    console.log(currVideo);
    const url = "https://www.youtube.com/embed/"+currVideo.id.videoId;
    return(
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} ></iframe>
      </div>
    );
  }
};

export default VideoDetail;
