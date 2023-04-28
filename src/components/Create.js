import React, { Component } from 'react'

export class Create extends Component {
    constructor(props)
  {
    super(props);
    this.state={
      name:'',
      email:'',
      address:'',
      rating:'',
    }
  }
  create()
  {
    fetch('http://localhost:3001/restaurant',{
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant has been added");
       // window.open("http://localhost:3001/list","_self");
       window.location.replace("http://localhost:3001/restaurant");
      })
    })
  }
  render() {
    return (
      <div> <h1> Restaurant Create</h1>
      <form>
        <input type={"text"} placeholder = "Restaurant Id" onChange={(event) => { this.setState({ id: event.target.value }) }} /><br/>
        <input type={"text"} placeholder = "Restaurant Name"onChange={(event) => { this.setState({ name: event.target.value }) }} /><br/>
        <input type={"text"} placeholder = "Restaurant Address" onChange={(event) => { this.setState({ address: event.target.value }) }}/> <br/>
        <input type={"text"} placeholder = "Restaurant Rating" onChange={(event) => { this.setState({ rating: event.target.value }) }}/> <br/>
        <input type={"text"} placeholder = "Restaurant Email" onChange={(event) => { this.setState({ email: event.target.value }) }}/> <br/><br/>
        <button className='btn btn-primary' onClick={() => { this.create() }}> Create </button>
      </form>
      </div>
    )
  }
}

export default Create