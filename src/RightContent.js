import React from 'react'
import './RightContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faDownload, faHeart } from '@fortawesome/free-solid-svg-icons'
import naruto from './Source/naruto.png'
import { useState, useEffect } from 'react'
import './Songs.css'
import { Link } from 'react-router-dom'


function RightContent() {
    const [click, setClick] = useState(false);

    const Goback = () => {
        setClick(false)
    }

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost/spotify/spotifydata.php')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

    const [play, setPlay] = useState(data)

    const SongClicked = (targetIndex) => {
        setClick(true)
        setPlay(data.filter((a, idx) => (idx === targetIndex)))
    }

    const [isOpen, setIsOpen] = useState();

    return (
        <div className='right-main'>
            <div className='header-main'>
                <div className='hearder-left'>
                    <FontAwesomeIcon onClick={Goback} className='icons' icon={faArrowLeft} />
                    <FontAwesomeIcon className='icons' icon={faArrowRight} />
                </div>
                <div className='header-right'>
                    <h6 className='explore'>Explore Premium</h6>
                    <h6 className='download'><FontAwesomeIcon className='icons' icon={faDownload} />Install App</h6>
                    <img onClick={() => (setIsOpen(!isOpen))} src={naruto} alt='gg3' />
                    {isOpen &&
                        (<div className='dropdown'>
                            <p>Account</p>
                            <p>Profile</p>
                            <p>Settings</p>
                            <p><Link className='link-tag' to='/'>Log out</Link></p>
                        </div>)
                    }
                </div>
                <div className='songs-main'>

                    <div className='your-songs'>
                        <h1>Your songs</h1>
                    </div>
                    <div className='song-card' >
                        {
                            data.map((song, idx) => {
                                return (
                                    <div className='song-comp' onClick={() => SongClicked(idx)} >
                                        <img src={`data:image/png;base64,${song.songImage}`} alt={song.title}></img>
                                        <h2 className='song'>
                                            {song.songName}
                                        </h2>
                                        <h2 className='song-artist'>
                                            Artist: {song.Artist}
                                        </h2>

                                        <audio className='audio-player' src={`data:audio/mp3;base64,${song.Song}`} >
                                        </audio>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {click && < Songspage play={play} />}
                </div>
            </div>
            )
        </div>
    )
}
export default RightContent

function Songspage(props) {
    const data = props.play

    return (
        <div className='clickedsong'>
            <div className='newsongcard'>
                {
                    data.map((song) => {
                        return (

                            <div className='singlecard'>
                                <div className='song-data'>
                                    <div><img src={`data:image/png;base64,${song.songImage}`} alt='img'></img></div>
                                    <div><h1>{song.songName}</h1><h1>Artist : {song.Artist}</h1></div>
                                </div>

                                <div>
                                    <audio className='audio-player' controls autoplay src={`data:audio/mp3;base64,${song.Song}`} >
                                    </audio>
                                </div>
                                <FontAwesomeIcon className='heart-like' icon={faHeart} />
                            </div>
                        )
                    })

                }
                {/* <div className='singlecard'>
                    <div className='song-data'>
                        <div>
                            <img src={data[0].artwork} alt={data[0].title}></img>
                        </div>
                        <div>
                            <h1>{data[0].title}</h1>
                            <h1>Artist : {data[0].artist}</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <audio className='audio-player' controls autoplay src={data[0].url} >
                    </audio>
                </div> */}
            </div>
        </div >
    )
}