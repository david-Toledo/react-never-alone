import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class CreateResponse extends React.Component{

  state ={
    body:''
  };

  handleContentChange = (ev) => {
    this.setState({body:ev.target.value});
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.onContentSubmit(this.state.body);
    ev.target.reset();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h3> Reply to this thread: </h3>
        <br />



      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">


      <textarea placeholder="Enter here your reply" onChange={this.handleContentChange} />
      </InputGroup.Text>
      </InputGroup>
      <br />

      <button variant="outline-primary"> Share </button>
      </form>


    )
  }






}

export default CreateResponse
