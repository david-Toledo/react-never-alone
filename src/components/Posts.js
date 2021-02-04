import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Search from './Search';
import CreatePost from './CreatePost';


const RAILS_URL = 'http://localhost:3000/posts.json'

class Posts extends React.Component {

  state = {
    posts:[],
    user_id:'',
    location:'',
  }
  // this.setState({
  //   user_id:
  // })
  // user_id:{this.props.user.id}

  componentDidMount(){
    console.log('posts Mounted on page');

    axios.get(RAILS_URL)
    .then((res) =>{
      console.log('callback',res.data);
      this.setState({posts:res.data});
    })
    .catch(console.warn)

  } // componentDidMount


  savePost = (title,body) => {
    console.log('<Posts> savePost()', {title,body});


    axios.post(RAILS_URL, {
      title:title,
      body:body,

    })
    .then((res) => {
      console.log('response from POST:', res.data);


      this.setState({
        posts:[res.data, ...this.state.posts]
      });
    })
    .catch((res)=>{
      console.dir(res)
    });
  } //savePost


  render(){
    return(


      <div className="posts">




        <Search />
        <br />
        <CreatePost onContentSubmit={this.savePost} />

        <br />
        <h1> Recent Activity </h1>

        <ul>
          {this.state.posts.map(post => (<li key={post.id}> <h3>Subject: {post.title}</h3> posted on: {post.created_at_formatted} by {post.user.name} in {post.user.address} <br /> Replies:{post.responses.length} <br /><p> Content:{post.body} </p></li>))}
        </ul>



      </div>
    )
  }



} //class



export default Posts;
