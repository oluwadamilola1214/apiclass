// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import './Navbar.css'

import images from '../assets/logo.svg'

class Navbar extends Component {
    state = {clicked : false}
    handleClick =()=> {
        this.setState({clicked:!this.state.clicked})
    }
    
    render(){
    return (
        <>
            <div>
                <nav>
                    <img src={images} alt="" />
              
           
            <div> 
                <ul id='classname' className={this.state.clicked? '#classname active' :'#classname' }>
                <li><a href="">Home</a></li>
                <li><a href="">New</a></li>
                <li><a href="">Popular</a></li>
                <li><a href="">Trending</a></li>
                <li><a href="">Categories</a></li>
            </ul></div>

            <div id='mobile' onClick={this.handleClick}>
<i  id='bar'className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}></i>

            </div>
            </nav>
            </div>
        </>
    )
}
}
export default Navbar