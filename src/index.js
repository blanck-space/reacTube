import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VList from './components/video_list';
import yt from 'izap-youtube-search';
const YT_KEY = "AIzaSyBQslUipnnvPOl8oW36z6cRv1Ug7b5MyO8";
class App extends Component{
  constructor(props){
    super(props);
    this.state = { vids: [] };
    yt({key: YT_KEY, term: 'lou reed', maxResults: 5},(res)=>{
    this.setState({vids:res});
    });
  }

  render(){
    return(
        <div>
          <SearchBar/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-md-8">
              </div>
                <VList vids={this.state.vids}/>
            </div>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<App />  , document.querySelector('.container'));
