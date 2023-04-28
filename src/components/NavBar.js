import { faHome, faInfoCircle, faList, faPlusCircle, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Create from './Create'
import Details from './Details'
import Home from './Home'
import RestaurantList from './RestaurantList'
import Search from './Search'
import Update from './Update'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <ul>
            <li>
                <Link to = "/home"> <FontAwesomeIcon icon={faHome}> </FontAwesomeIcon> Home </Link>
            </li>
            <li>
                <Link to = "/RestaurantList"> <FontAwesomeIcon icon={faList}></FontAwesomeIcon> Restaurant List</Link>
            </li>
            <li>
                <Link to = "/Details"> <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon> Details</Link>
            </li>
            <li>
                <Link to = "/Update"> <FontAwesomeIcon icon={faUserEdit}></FontAwesomeIcon>Update</Link>
            </li>
            <li>
                <Link to = "/Search"> 
                <input type="text" placeholder='search'/> <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                </Link>
            </li>
            <li>
                <Link to = "/Create"> Create</Link>
            </li>
        </ul>
        <Routes>
            <Route path='/home' element = {<Home/> }/>
            <Route path='/RestaurantList' element = {<RestaurantList/> }/>
            <Route path='/Details' element = {<Details/> }/>
            <Route path='/Update' element = {<Update/> }/>
            <Route path='/Search' element = {<Search/> }/>
            <Route path='/Create' element = {<Create/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default NavBar