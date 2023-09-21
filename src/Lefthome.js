import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBookBookmark, faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Lefthome.css'
import likeimage from '/Users/user/spotify/src/Source/like.jpg'


function Lefthome() {
    return (
        <div className='left-main' >
            <LeftTop />
            <LeftBottom />
        </div>
    )
}
export default Lefthome

function LeftTop() {
    return (
        <div className='left-home'>
            <h3><FontAwesomeIcon className='icons' icon={faHome} />Home</h3>
            <h3><FontAwesomeIcon className='icons' icon={faSearch} />Search</h3>
        </div>
    )
}
function LeftBottom() {
    return (
        <div className='left-library'>
            <div className='library-top'>
                <div>
                    <h3><FontAwesomeIcon className='icons' icon={faBookBookmark} />Your Library</h3>
                </div>
                <div className='plus-minus'>
                    <h3><FontAwesomeIcon className='icons' icon={faPlus} /></h3>
                    <h3><FontAwesomeIcon className='icons' icon={faArrowRight} /></h3>
                </div>
            </div>
            <div className='artist'>
                <h6>Playlists</h6>
                <h6>Artists</h6>
            </div>
            <div className='library-bottom'>
                <div className='search-select'>
                    <h3><FontAwesomeIcon className='icons' icon={faSearch} /></h3>
                    <select>
                        <option>Recents</option>
                        <option>Recently Added</option>
                        <option>Alphabetical</option>
                        <option>Creator</option>
                    </select>
                </div>
            </div>
            <div className='liked-songs'>
                <div>
                    <img src={likeimage}></img>
                </div>
                <div className='liked-list'>
                    <h6>Liked Songs</h6>
                    <h6>Playlist - 8 Songs</h6>
                </div>
            </div>

            {/* <form action="http://localhost/youtube/indexs.php" method='POST'>

                <input type='text' name='username'></input>
                <input type='submit' value='Submit'></input>

            </form> */}

        </div>
    )
}