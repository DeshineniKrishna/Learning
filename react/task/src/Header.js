import React, { Component } from 'react'

import {
    Link
  } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="logo" src="https://pngimg.com/uploads/instagram/instagram_PNG10.png"/>    
                <ul className="menu-ul">
                    <li> <Link to="/" > Home </Link> </li>
                    <li> <Link to="/Contact" > Contact </Link> </li>   
                    <li> <Link to="/AboutUs" > AboutUs </Link> </li> 
                </ul>          
            </div>
        )
    }
}

export default Header
