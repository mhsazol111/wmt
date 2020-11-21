import React from 'react';
import ReactPlayer from 'react-player/wistia';
import { VIDEO_START_TIME, time_format, is_second_show_start, SECOND_SHOW_TIME } from '../config/videoScedule';

export default class MainVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      videoPlaying: false,
      videoVolume: 1,
      progressBar: 0,
      amz_vid: amzData.video_id,
      // amz_vid: 'jmkimfhl7j', //bird video
      isFullScreen: false,
    };

    this.videoOnProgress = this.videoOnProgress.bind(this);
    this.videoOnReady = this.videoOnReady.bind(this);
    this.videoOnPause = this.videoOnPause.bind(this);
    this.videoRefs = this.videoRefs.bind(this);
    this.seekTime = this.seekTime.bind(this);
    this.handleBrowserFullScreen = this.handleBrowserFullScreen.bind(this);
  }

  updateProgress(t) {
    let width = (t / duration) * 100;
    this.setState({ progressBar: width });
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.props.disableOverlay();
    this.props.onVideoMute();
  }

  videoOnProgress(e) {
    this.setState({ progressBar: e.played * 100 });
  }

  seekTime() {
    let startTime = is_second_show_start() ? SECOND_SHOW_TIME : VIDEO_START_TIME;
    let current_time = new Date().getTime();
    return (startTime - current_time) / 1000;
  }

  videoOnReady() {
    if ('undefined' !== typeof window.Wistia) {
      let _video = window.Wistia.api(this.state.amz_vid);
      _video.bind('pause', function () {
        _video.play();
      });

      _video.mute();

      this.props.enableOverlay();
    }

    let { onFinished, onVideoComplete } = this.props;
    let duration = this.player ? this.player.getDuration() : 0;
    let seekTo = this.seekTime();
    if (seekTo < 0) {
      if (Math.abs(seekTo) < duration) {
        let _seekTo = parseFloat(Math.abs(seekTo));
        if (1 < _seekTo) {
          this.player && this.player.seekTo(_seekTo);
        }
        this.setState({ videoPlaying: true });
      } else {
        if (is_second_show_start()) {
          onVideoComplete();
        } else {
          onFinished();
        }
      }
    } else {
      if (is_second_show_start()) {
        onVideoComplete();
      } else {
        onFinished();
      }
    }
  }

  videoOnPause() {
    this.setState({ videoPlaying: true });
  }

  videoRefs(player) {
    this.player = player;
  }

  handleBrowserFullScreen() {
    function isMobileTablet() {
      return navigator.userAgent.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
    }

    function iOS() {
      return (
        ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
      );
    }

    if (isMobileTablet() || iOS()) {
      this.setState({
        isFullScreen: !this.state.isFullScreen,
      });

      this.state.isFullScreen
        ? document.querySelector('body').classList.remove('playing-inFullscreen')
        : document.querySelector('body').classList.add('playing-inFullscreen');
    } else {
      var elem = document.querySelector('#amz-video-player');
      if (screenfull.isEnabled) {
        screenfull.toggle(elem);
      }
    }
  }

  render() {
    let { amz_vid } = this.state;
    let themeUrl = amzData.theme_url;
    const { videoMuted, onVideoMuteToggle, overlayStatus, disableOverlay } = this.props;

    return (
      <React.Fragment>
        <div className={`amz-video-wrapper fade-in ${this.state.isFullScreen ? 'video-fullscreen' : ''}`}>
          <div className="amz-video" id="amz-video-player" style={{ position: 'relative', width: '800px', height: '500px' }}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}></div>
            <ReactPlayer
              ref={this.videoRefs}
              url={'https://home.wistia.com/medias/' + amz_vid}
              muted={videoMuted}
              fakeFullscreen={true}
              fullscreenOnRotateToLandscape={false}
              copyLinkAndThumbnailEnabled={false}
              controlsVisibleOnLoad={false}
              playbackRateControl={false}
              playbar={false}
              playButton={false}
              playsinline={true}
              settingsControl={false}
              playing={this.state.videoPlaying}
              onProgress={this.videoOnProgress}
              onReady={this.videoOnReady}
              onPause={this.videoOnPause}
              onEnded={this.props.onFinished}
              width="800px"
              height="500px"
              style={{ zIndex: '-1' }}
            />
            <div className="video-bottom-bar">
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }} id="main_vid_rogress">
                <div
                  style={{
                    width: this.state.progressBar + '%',
                    height: '.5rem',
                    backgroundColor: '#ffde00',
                    borderRadius: '5px',
                    transition: 'all 0.4s ease-in-out',
                  }}
                ></div>
              </div>
              <span className={videoMuted ? 'amz-video-volume muted' : 'amz-video-volume sound'} onClick={onVideoMuteToggle}></span>
              <span
                className="amz-fullscreen-btn"
                id="real-fullscreen"
                onClick={this.handleBrowserFullScreen}
                style={{ backgroundImage: `url(${themeUrl}/assets/images/fullscreen.svg)` }}
              ></span>
            </div>
          </div>

          {overlayStatus ? (
            <div className="video-volume-overlay fade-in" onClick={disableOverlay}>
              <div className="syl-welcome-screening-wrapper">
                <div className="video-overlay-arrow">
                  <img src={`${themeUrl}/assets/images/overlay-arrow.svg`} alt="Overlay Arrow" />
                </div>
                <div className="syl-welcome-screening">
                  <img className="overlay-ticket" src={`${themeUrl}/assets/images/overlay-bg.svg`} alt="Overlay Image" />
                  <img className="overlay-ticket-hover" src={`${themeUrl}/assets/images/overlay-bg-hover.svg`} alt="Overlay Image Hover" />
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </React.Fragment>
    );
  }
}
