import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <div className='login-main'>
            <form className='login-card' action='http://localhost/spotify/login.php' method='POST'>
                <h1>Login to Logify</h1>
                <div className='login-already'>
                    <button>Continue with Google</button>
                    <button>Continue with Facebook</button>
                    <button>Continue with Apple</button>
                </div>
                <p></p>
                <div>
                    <label>Email or username</label>
                    <input type='email' name='email' placeholder='Email or username' />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' placeholder='Password' />
                </div>
                <input className='submit-btn' type='submit' name='submit' value='Log In' />
                <h3>Forgot your password?</h3>
                <span><Link className='guest-account' to='/main'>Continue as Guest</Link></span>

                <a></a>
                <h2><span>Don't have an account? </span><Link className='link-signup' to='/signup'>Sign up for Logify</Link></h2>

            </form>


        </div>
    )
}

export default LoginPage
