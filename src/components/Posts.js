import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class Posts extends React.Component {

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
        <h1> Recent Activity </h1>

        <ul>
          {this.state.posts.map(post => (<li key={post.id}> <h3>Subject: {post.title}</h3> posted on: {post.created_at_formatted} by {post.user.name} in {post.user.address} <br /> Replies:{post.responses.length} <br /><p> Content:{post.body} </p></li>))}
        </ul>



      </div>
    )
  }



} //class



export default Posts;
