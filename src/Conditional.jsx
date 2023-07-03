import React, { Component } from 'react'
import Greeting from "./Greeting"
import Login from "./Login"
import Logout from "./Logout"

export default class  extends Component {

  state ={
    Logedin: true
  }

  render() {

    let button = null; 
    if (this.state.Logedin ){
        button =  <Logout />
    } else {
        button =  <Login />
    }

    return (
      <div>
        <Greeting Logedin={this.state.Logedin}/>
        {button }
      </div>
    )
  }
}
