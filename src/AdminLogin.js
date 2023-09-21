import React, { useState } from 'react'
import './AdminLogin.css'
import { useEffect } from 'react'

function AdminLogin() {

    const [open, setOpen] = useState([]);

    useEffect(() => {
        fetch('http://localhost/spotify/adminLogin.php')
            .then(res => res.json())
            .then(data => setOpen(data))
            .catch(err => console.log(err))
    }, [])



    return (
        <div className='adminlogin-main'>
            <form className='admin-form' action="http://localhost/spotify/adminlogin.php" method="post">
                <div className='labels'>
                    <label >Username</label>
                    <input className='input-box' name='username' type='text' placeholder='Please enter your Username' />

                </div>
                <div className='labels'>
                    <label >Password</label>
                    <input className='input-box' type='text' name='password' placeholder='Please enter your Password' />
                </div>
                <div className='labels'>
                    <input className='button-submit' type='submit' value='Login' />
                </div>
            </form>
        </div>
    )
}

export default AdminLogin