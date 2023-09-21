import React from 'react'
import Lefthome from './Lefthome'
import RightContent from './RightContent'
import './Spotify.css'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'


function Spotify() {
    return (
        <div className='container-fluid'>
            <Lefthome />
            <RightContent />
            {/* <LoginPage /> */}
            {/* <SignUpPage /> */}
        </div>
    )
}
export default Spotify