import React from 'react';
import axios from 'axios';


// const BASE_URL = 'http://localhost:3000/posts.json'

class Search extends React.Component {

  state = {
    query:''
  };

  handleChange = (ev) => {
    this.setState({query:ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('submit!');
    //Send search query to the parent component
    // this.props.onSearch(this.state.query);
    this.setState(ev.target.value);
  }

  render(){
    return(
      <div className="search">
        <form >
          <input type = "text" onChange={this.handleChange}/>
          <button onSubmit={this.handleSubmit}> Search </button>
          <br />
        </form>

      </div>



    )

  }


}


export default Search;
