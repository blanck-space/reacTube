import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term: ""
    }
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
              <input value={this.state.term} onChange={evt => this.setState({term:evt.target.value})}/>
          </div>
        </div>
    </div>
    );
  }
}
export default SearchBar;
