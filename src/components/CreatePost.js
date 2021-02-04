import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class CreatePost extends React.Component{

  state ={
    title:'',
    body:''
  };

  handleSubjectChange = (ev) => {
    console.log('handleChange', ev.target.value);
    this.setState({title:ev.target.value});
  }

  handleContentChange = (ev) => {
    console.log('handleChange', ev.target.value);
    this.setState({body:ev.target.value});
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.onContentSubmit(this.state.title, this.state.body);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h3> Need some help? Share a post! </h3>
        <br />



      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          <label>Topic of your post:</label><br />
      <input type="text" placeholder="Enter here what kind of help you need" size="40" onChange={this.handleSubjectChange} />
      </InputGroup.Text>
      </InputGroup>
      <br />
      <br />


      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
        <label> Further Details about your post: </label><br />

      <textarea placeholder="Enter here more information" onChange={this.handleContentChange} />
      </InputGroup.Text>
      </InputGroup>
      <br />
      <br />
      <button variant="outline-primary"> Share </button>
      </form>


    )
  }






}

export default CreatePost
