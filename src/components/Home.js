import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class Home extends React.Component {

  state = {
    posts:[]
  };

  componentDidMount(){
    console.log('posts Mounted on page');

    axios.get('http://localhost:3000/posts.json')
    .then((res) =>{
      console.log('callback',res.data);
      this.setState({posts:res.data});
    })
    .catch(console.warn)

  } // componentDidMount



  render(){
    return(
      <div>
        Activity

        <ul>
          {this.state.posts.map(post => (<li key={post.id}> {post.title}{post.body}</li>))}
        </ul>



      </div>
    )
  }



} //class



export default Home;
