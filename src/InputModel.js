import React, { useState } from 'react'
import './Spotify.css'

function InputModel() {

    return (
        <div>
            <form className='admin-form' action="http://localhost/spotify/inputmodel.php" method="post" enctype="multipart/form-data">

                <div className='admin-inputs'>
                    <div><label>Song Image | </label>
                        <input type="file" name="SongImage" /></div>

                    <div>
                        <label>Song Name | </label>
                        <input type='text' name='SongName' />
                    </div>

                    <div>
                        <label>Artist | </label>
                        <input type='text' name='Artist' />
                    </div>
                    <div>
                        <label>Song | </label>
                        <input type='file' name='SongMp3' />
                    </div>

                </div>
                <input className='button' type="submit" name="submit" />
            </form>
        </div>
    )
}

export default InputModel


