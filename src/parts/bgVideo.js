import React from 'react';

class BgVideo extends React.Component{
    render() {
        let clip = amzData.theme_url + '/assets/videos/video-bg.mp4';
        let poster = amzData.theme_url + '/assets/images/video-banner.png';
        let videoHolderStyle = {
            position: 'absolute',
            zIndex: '-1',
            top: '0px',
            left: '0px',
            bottom: '0px',
            right: '0px',
            overflow: 'hidden',
            backgroundSize: 'cover',
            backgroundColor: 'transparent',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundImage: 'none'
        }
        let videoStyle = {
            margin: 'auto',
            position: 'absolute',
            zIndex: '-1',
            top: '50%',
            left: '50%',
            transform: 'translate(50%, -50%)',
            width: '100%',
            height: '100%'
        }
        return(
            <div
                className="landingVideoHolder"
                style={videoHolderStyle}>
                    <video autoplay="true" loop="true" muted="true" poster={poster} style={videoStyle}>
                        <source src={clip} type="video/mp4"/>
                    </video>
            </div>
        )
    }
}
export default BgVideo;