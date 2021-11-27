import React from 'react'
import ReactPlayer from 'react-player'
import hero from '.../public/images/ink.mp4'

const Hero = () => {
    return (
        <div>
            <ReactPlayer
                url={hero}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />
        </div>

    )
}

export default Hero
