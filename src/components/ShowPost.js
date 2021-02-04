import React from 'react';
import axios from 'axios';
import CreateResponse from './CreateResponse';


const BASE_URL = 'http://localhost:3000/posts'
const RESPONSE_URL = 'http://localhost:3000/responses.json'

class ShowPost extends React.Component{


  state = {
    post: {
      responses:[],
      user:{}
    },
    responses:[]


  };


  fetchPost = () => {

    const {id} = this.props.match.params;

    const postURL = `${BASE_URL}/${id}`;

    axios.get(postURL)
    .then((res)=> {
      console.log('post', res.data);
      this.setState({
        post: res.data,
        responses: res.data.responses
      })
    })
    .catch(console.warn);

  };

  componentDidMount(){

    this.fetchPost();
  } //componentDidMount

  saveResponse = (body) => {
    console.log('<Response> saveResponse()', {body});


    axios.post(RESPONSE_URL, {
      body:body,
      post_id:this.props.match.params.id

    })
    .then((res) => {
      console.log('response from POST:', res.data);


      this.setState({
        responses:[res.data, ...this.state.responses]
      });
    })
    .catch((res)=>{
      console.dir(res)
    });
  } //saveResponse


  render(){

    return(
    <div className="home">

      <CreateResponse onContentSubmit={this.saveResponse}/>

      <br />

      <h2> {this.state.post.title}</h2>
      Posted on: {this.state.post.created_at_formatted}
      <p>in: {this.state.post.user.address} </p>


      <h5> {this.state.post.body} </h5>
      <hr />

      <h3> Replies: </h3>


          <ul >
            {this.state.responses.map(response => (
              <li key={response.id}>

              From :{response.user.name}

              <h5>Content:{response.body} </h5>

              <hr />
            </li>)
          ) //map
        }
          </ul>

    </div>



    )  //return
  } //render
}  //showPost



export default ShowPost


// key={response.id}
