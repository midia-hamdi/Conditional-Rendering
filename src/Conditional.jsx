import React, { Component } from 'react'
import Greeting from "./Greeting"
import Login from "./Login"
import Logout from "./Logout"

export default class Conditional  extends Component {

  state ={
    Logedin: true
  }

  handleLogout(){
    this.setState({
        Logedin: false
    })
  } 

  handleLogin(){
    this.setState({
        Logedin: true
    })
  }



  render() {

    let button = null; 
    if (this.state.Logedin ){
        button =  <Logout handleClick={() => this.handleLogout()} />
    } else {
        button =  <Login handleClick={() => this.handleLogin()} />
    }

    return (
      <div>
        <Greeting Logedin={this.state.Logedin}/>
        {this.state.Logedin ? <Logout handleClick={() => this.handleLogout()} /> : <Login handleClick={() => this.handleLogin()} />}
        {/* {this.state.Logedin && <p>use is logged in</p>} */}
      </div>
    )
  }
}
