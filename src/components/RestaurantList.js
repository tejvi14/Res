import axios from 'axios';
import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
export class RestaurantList extends Component {
    constructor(){
        super();
        this.state = {
          list:''
        }
      }
      componentDidMount(){
        fetch("http://localhost:3001/restaurant").then((response)=>{
          response.json().then((result)=>{
            this.setState({list:result})
          })
        })
      }
      deleteRow(id, e){  
        axios.delete(`http://localhost:3001/restaurant`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
        
            const posts = this.state.posts.filter(item => item.id !== id);  
            this.setState({ posts });  
          })  
        
      }  
    
  render() {
    return (
      <div><h1>RestaurantList</h1>
      {
          this.state.list ?
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Location</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    this.state.list.map((item, i) =>
                      //<div className="list-wrapper">
                      //   <span>{item.name}</span>
                      //   <span>{item.email}</span>
                      //    <span>{item.address}</span>
                      //  </div>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.rating}</td>
                        <td>{item.address}</td>
                        <td>
                        <span><Link to={"/update/" + item.id} className="btn btn-primary">Edit</Link></span>
                          <span><Link to={"/details/" + item.id} className="btn btn-info">Details</Link></span>
                          <button className="btn btn-danger" onClick={(e) => this.deleteRow(e)}>Delete</button>  
                       </td>
                      </tr>
                    )
                  }

                </tbody>
              </Table>
            </div>
            : <p>Please wait</p>
        }
        
      </div>
    )
  }
}

export default RestaurantList