import React from 'react';
import LeftNav from './LeftNav';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let themeUrl = amzData.theme_url;
    let {
      premiereFinished,
      hasNav,
      handleNavClick,
      navCurrentPage,
      isGateClosed,
      hasBgAudio,
      toggleAudio,
      playAudio,
      pauseAudio,
      audioPlaying,
      hasHeaderSound,
      videoMuted,
      onVideoMuteToggle,
      onVideoMute,
      onVideoUnmute,
    } = this.props;

    return (
      <div id="main-header">
        <div className="container">
          <div className="row">
            <div className="column-4">
              {hasBgAudio ? (
                <React.Fragment>
                  <div className="header-sound-toggle">
                    <p className="font-address text-uppercase">
                      <span>Sound</span>
                      <span id="hs-on" className={audioPlaying ? 'active clickable' : 'clickable'} onClick={playAudio}>
                        on
                      </span>
                      <span className="separator">|</span>
                      <span id="hs-off" className={audioPlaying ? 'clickable' : 'active clickable'} onClick={pauseAudio}>
                        off
                      </span>
                      <span id="hs-toggle-img" className="clickable" onClick={toggleAudio}>
                        <img src={themeUrl + '/assets/images/sound-animation.gif'} />
                      </span>
                    </p>
                  </div>
                  <audio controls="false" id="bg-audio">
                    <source src={themeUrl + '/assets/audios/bg-audio.mp3'} type="audio/mpeg" />
                    {/* <source src="audios/creativeminds.ogg" type="audio/ogg" />
                    <source src="audios/creativeminds.wav" type="audio/wav" /> */}
                  </audio>
                </React.Fragment>
              ) : (
                ''
              )}

              {hasHeaderSound ? (
                <React.Fragment>
                  <div className="header-sound-toggle fade-in">
                    <p className="font-address text-uppercase">
                      <span>Sound</span>
                      <span id="hs-on" className={videoMuted ? 'clickable' : 'active clickable'} onClick={onVideoUnmute}>
                        on
                      </span>
                      <span className="separator">|</span>
                      <span id="hs-off" className={videoMuted ? 'active clickable' : 'clickable'} onClick={onVideoMute}>
                        off
                      </span>
                      <span id="hs-toggle-img" className="clickable" onClick={onVideoMuteToggle}>
                        <img src={themeUrl + '/assets/images/sound-animation.gif'} />
                      </span>
                    </p>
                  </div>
                </React.Fragment>
              ) : (
                ''
              )}
            </div>
            <div className="column-4">
              <div className="amazon-original font-ember text-uppercase text-center text-light">Amazon original movie</div>
            </div>
            <div className="column-4">
              <div className="premiere-date-wrap display-flex">
                {premiereFinished ? (
                  <a href="#" className="amz-watch-prime text-uppercase text-light">
                    <span>Watch Now</span>
                  </a>
                ) : (
                  <p className="premiere-date text-light text-uppercase">December 25</p>
                )}
                <img src={themeUrl + '/assets/images/prime-video.svg'} alt="Prime Video" />
              </div>
            </div>
          </div>
        </div>
        <div className="toggle-menu">
          <span className="toggle-menu-inner"></span>
        </div>
        {hasNav ? (
          <div className="mobile-menu">
            <LeftNav handleClick={handleNavClick} currentPage={navCurrentPage} isGateClosed={isGateClosed} />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Header;
