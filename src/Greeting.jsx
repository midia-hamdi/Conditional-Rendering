import React from 'react'
import UserGreeting from "./UserGreeting"
import GusetGreeting from "./GusetGreeting"

export default function Greeting(props) {
    if(props.isLoggedIn) {
      return <UserGreeting />
    } 
      return <GusetGreeting />

}
