import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VList from './components/video_list';
import VideoDetail from './components/vid_detail';
import yt from 'izap-youtube-search';
const YT_KEY = "AIzaSyBQslUipnnvPOl8oW36z6cRv1Ug7b5MyO8";
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      vids: [],
      currentVideo: null,
      term: "David Bowie"
     };
     this._search(this.state.term);
   }

  render(){
    return(
        <div>
          <SearchBar term={(newTerm)=>this._search(newTerm)}/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <VideoDetail currVideo={this.state.currentVideo} />
              </div>
              <div className="col-md-4">
                <VList
                  vids={this.state.vids}
                  onItemClick={(newVid)=>this.setState({currentVideo: newVid}) }/> {/**/}
              </div>
            </div>
          </div>
        </div>
    );
  }
  _search(term){
   yt({key: YT_KEY, term: term, maxResults: 5},(res)=>{
     this.setState({
       vids:res,
       currentVideo: res[0]
     });
   });
 }
}

ReactDOM.render(<App />  , document.querySelector('.container'));
