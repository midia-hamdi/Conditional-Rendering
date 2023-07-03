import React from 'react'

export default function Message(props) {
    if(!props.Logedin) {
        return null
    }

    return <p>User is logged in</p>

}
