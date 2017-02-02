import React from 'react';
import VListItem from './list_items';

const VList = (props) => {
  const listItems = props.vids.map((video)=>{
    return <VListItem key={video.etag} video={video} />
  });
  console.log(listItems);
  return(
    <ul className="list-group">
      <div className="list-cont">
        {listItems}
      </div>
    </ul>
  );
};
export default VList;
