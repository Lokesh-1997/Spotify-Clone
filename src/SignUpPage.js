import React from 'react'
import './SignUpPage.css'
import { Link } from 'react-router-dom'


export default function SignUpPage() {
    return (
        <div className='signup-main'>
            <h5>Logify</h5>

            <h1>Sign up for free to start listening.</h1>

            <div className='signup-card'>

                <div className='suggestins'>
                    <button>Sign up with Google</button>
                    <button>Sign up with Facebook</button>
                </div>

                <div className='straightline'>
                    <p></p>
                    <h2>or</h2>
                    <p></p>
                </div>
                <div className='form'>

                    <form action='http://localhost/spotify/signup.php' method='POST'>
                        <div className='user-inputs'>
                            <label>What's your email?</label>
                            <input type='email' name='email' placeholder='Enter your email.' />
                        </div>
                        <div className='user-inputs'>
                            <label>Create a password</label>
                            <input type='text' name='password' placeholder='Create a password.' />
                        </div>
                        <div className='user-inputs'>
                            <label>What should we call you?</label>
                            <input type='text' name='profilename' placeholder='Enter a profile name.' />
                            <p>This appears on your profile.</p>
                        </div>
                        <div className='birthday-text'>
                            <label>What's your date of birth?</label>
                            <div className='birthday-select'>
                                <div >
                                    <label>Year</label>
                                    <input className='year' name='year' type='text' placeholder='YYYY' />
                                </div>
                                <div >
                                    <label>Month</label>
                                    <select className='month' name='month'>
                                        <option>January</option><option>February</option><option>March</option><option>April</option><option>May</option><option>June</option><option>July</option><option>Augest</option><option>September</option><option>October</option><option>November</option><option>December</option>
                                    </select>
                                </div>
                                <div >
                                    <label>Day</label>
                                    <input className='day' name='day' type='text' placeholder='DD' />
                                </div>
                            </div>
                        </div>
                        <div className='radio-main'>
                            <label>What's your gender?</label>
                            <div className='radio-section'>

                                <input type='radio' name='radio' value='male' /> <label>Male</label>

                                <input type='radio' name='radio' value='female' /> <label>Female</label>

                                <input type='radio' name='radio' value='non-binary' /> <label>Non - Binary</label>

                                <input type='radio' name='radio' value='other' /> <label>Other</label>

                            </div>

                        </div>

                        <div className='signup-btn'>
                            <input type='submit' value='Sign up' />
                        </div>



                    </form>

                    <h3>Have an account? <span> <Link className='Login-Link' to='/'>Log in.</Link></span></h3>

                </div>

            </div>

        </div>
    )
}
