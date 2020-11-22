import React from 'react';
import { AUTH_CHECK } from './config/endpoints';
import {
  VIDEO_START_TIME,
  video_should_start,
  SECOND_SHOW_TIME,
  is_second_show_start,
  gate_should_close,
  started_second_show,
  REDIRECT_AFTER,
  REDIRECT_AFTER_2ND,
} from './config/videoScedule';

import { TRACK_INTERVAL, start_tracking } from './parts/ieTracking';

import Header from './Header';
import LeftNav from './LeftNav';
import MainVideo from './parts/mainVideo';
import PreScreen from './parts/preScreen';
import Footer from './Footer';
import Gallery from './Gallery';
import Trailer from './Trailer';
import Bios from './Bios';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      currentPage: 'home',
      hasFooter: true,
      shouldStart: false,
      secondShow: false,
      countDownEnd: VIDEO_START_TIME,
      isGateClosed: gate_should_close(),
      started_last_show: started_second_show(),
      sesson_start_time: new Date().getTime(),
      redirect_after: REDIRECT_AFTER,
      videoMuted: true,
      videoVolumeOverlay: false,
    };

    this.checkAuth = this.checkAuth.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleTimerFinished = this.handleTimerFinished.bind(this);
    this.handleVideoFinished = this.handleVideoFinished.bind(this);
    this.handleVideoComplete = this.handleVideoComplete.bind(this);
    this.handleVideoMuteToggle = this.handleVideoMuteToggle.bind(this);
    this.handleVideoMute = this.handleVideoMute.bind(this);
    this.handleVideoUnmute = this.handleVideoUnmute.bind(this);
    this.enableVideoVolumeOverlay = this.enableVideoVolumeOverlay.bind(this);
    this.disableVideoVolumeOverlay = this.disableVideoVolumeOverlay.bind(this);
  }

  componentDidMount() {
    if (gate_should_close()) {
      this.setState({
        isGateClosed: true,
        shouldStart: false,
        currentPage: 'trailer',
        isLoading: false,
        sesson_start_time: new Date().getTime(),
      });
    } else {
      this.checkAuth();
      this.setState({
        shouldStart: video_should_start(),
        isLoading: false,
        sesson_start_time: new Date().getTime(),
      });
    }
    console.log('click added!');

    // Started tracking
    this.startTracking();

    this.interval = setInterval(() => {
      // tracking interval
      this.startTracking();
    }, TRACK_INTERVAL);

    if (!gate_should_close()) {
      let currentIntTime;
      this.timeinterval = setInterval(() => {
        // check if the redirect time reach
        currentIntTime = new Date().getTime();
        // First show
        if (currentIntTime >= this.state.redirect_after) {
          if (!started_second_show(currentIntTime)) {
            this.redirectToHome();
            console.log('Interval done 2nd');
          }
          //clearInterval(this.timeinterval);
          this.setState({ redirect_after: REDIRECT_AFTER_2ND });
          if (started_second_show(currentIntTime) && currentIntTime >= REDIRECT_AFTER_2ND) {
            this.redirectToHome();
            clearInterval(this.timeinterval);
            console.log('Interval done 2nd');
            let trailerLink = document.querySelector('a#trailer');
            trailerLink.click();
          }
        }
      }, 1000);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.timeinterval) {
      clearInterval(this.timeinterval);
    }
  }

  startTracking() {
    let { sesson_start_time, currentPage } = this.state;
    start_tracking(sesson_start_time, currentPage);
  }

  redirectToHome() {
    this.setState({
      currentPage: 'home',
    });
  }

  checkAuth() {
    let xToken = amzData.csrf;
    let token = localStorage.getItem('__hell_t');
    if (token) {
      return fetch(AUTH_CHECK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': xToken },
        body: JSON.stringify({ token: token }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status) {
            this.setState({ isLoading: false });
          } else {
            localStorage.removeItem('__hell_t');
            window.location.href = amzData.site_url + '/access';
          }
        })
        .catch((res) => {
          localStorage.removeItem('__hell_t');
          window.location.href = amzData.site_url + '/access';
        });
    } else {
      localStorage.removeItem('__hell_t');
      window.location.href = amzData.site_url + '/access';
    }
  }

  handlePageChange(event) {
    event.preventDefault();
    const currentPage = event.target.id;

    if (this.state.currentPage == currentPage) return; // if clicked on the same page

    const pageContainer = document.querySelector('#page-container');
    const mainContainer = document.querySelector('#main-content');
    const toggleMenu = document.querySelector('.toggle-menu');
    let hasFooter;

    if (currentPage === 'bios' || currentPage === 'faqs' || currentPage === 'involved') {
      hasFooter = false;
    } else {
      hasFooter = true;
    }

    toggleMenu.classList.remove('hamburger-active');
    mainContainer.className = '';
    pageContainer.className = currentPage + '-element-rendered';
    this.setState({ currentPage, hasFooter, sesson_start_time: new Date().getTime() });
  }

  handleTimerFinished() {
    // console.log('timer_finished', this.state);
    if (!gate_should_close() && !this.state.isGateClosed) {
      this.setState({
        shouldStart: true,
        currentPage: 'home',
      });
    } else {
      this.setState({
        shouldStart: false,
      });
    }
  }

  handleVideoFinished() {
    let current_time = new Date().getTime();
    let last_show = started_second_show(current_time);
    if (last_show) {
      this.setState({
        isGateClosed: true,
        shouldStart: false,
        currentPage: 'trailer',
      });
      let trailerLink = document.querySelector('a#trailer');
      trailerLink.click();
    } else {
      this.setState({
        countDownEnd: SECOND_SHOW_TIME,
        shouldStart: false,
        secondShow: is_second_show_start(),
        started_last_show: last_show,
      });
      document.querySelector('body').classList.remove('playing-inFullscreen');
      document.querySelector('.amz-video-wrapper').classList.remove('video-fullscreen');
    }
  }

  handleVideoComplete() {
    this.setState({
      isGateClosed: true,
      shouldStart: false,
      currentPage: 'trailer',
    });
  }

  handleVideoMuteToggle() {
    this.setState({ videoMuted: !this.state.videoMuted });
  }

  handleVideoMute() {
    this.setState({ videoMuted: true });
  }

  handleVideoUnmute() {
    this.setState({ videoMuted: false });
  }

  enableVideoVolumeOverlay() {
    this.setState({ videoVolumeOverlay: true });
  }

  disableVideoVolumeOverlay() {
    this.setState({ videoMuted: false, videoVolumeOverlay: false });
  }

  render() {
    let { currentPage, hasFooter, shouldStart, countDownEnd, started_last_show, videoVolumeOverlay } = this.state;

    let themeUrl = amzData.theme_url;

    let optionalComponents;
    if (currentPage === 'gallery') {
      optionalComponents = <Gallery />;
    } else if (currentPage === 'trailer') {
      optionalComponents = <Trailer />;
    } else if (currentPage === 'bios') {
      optionalComponents = <Bios />;
    }

    let bgUrl = 'theater-bg.jpg';
    if (this.state.currentPage === 'gallery') {
      bgUrl = 'gallery-bg.jpg';
    } else if (this.state.currentPage === 'bios') {
      bgUrl = 'bios-bg.jpg';
    }

    return (
      <div
        id="page-container"
        style={{ width: '100%', minHeight: '100vh' }}
        className={(videoVolumeOverlay ? 'has-video-overlay ' : '') + currentPage + '-element-rendered'}
      >
        <div className="amz-bg">
          <div className="amz-bg-layer-image" style={{ backgroundImage: `url(${themeUrl}/assets/images/${bgUrl})` }}></div>
        </div>

        {videoVolumeOverlay ? <div className="video-volume-overlay fade-in" onClick={this.disableVideoVolumeOverlay}></div> : ''}

        <Header
          hasNav={true}
          handleNavClick={this.handlePageChange}
          navCurrentPage={currentPage}
          isGateClosed={this.state.isGateClosed}
          hasHeaderSound={shouldStart}
          videoMuted={this.state.videoMuted}
          onVideoMuteToggle={this.handleVideoMuteToggle}
          onVideoMute={this.handleVideoMute}
          onVideoUnmute={this.handleVideoUnmute}
          insideLogo={true}
        />

        <div id="main-content">
          <div className="container">
            {/* <div className="row">
              <div className="inner-page-logo">
                <img src={themeUrl + '/assets/images/Sylvieslove-logo.svg'} alt="Sylvie's Love" />
              </div>
            </div> */}
            <div className="row align-center">
              <div className={this.state.isGateClosed ? 'amz-left-panel premiere-finished' : 'amz-left-panel'}>
                <LeftNav handleClick={this.handlePageChange} currentPage={currentPage} isGateClosed={this.state.isGateClosed} />
              </div>

              <div className="amz-center-panel">
                <div className="amz-center-panel-inner">
                  {shouldStart ? (
                    <MainVideo
                      onFinished={this.handleVideoFinished}
                      onVideoComplete={this.handleVideoComplete}
                      videoMuted={this.state.videoMuted}
                      onVideoMuteToggle={this.handleVideoMuteToggle}
                      onVideoMute={this.handleVideoMute}
                      overlayStatus={videoVolumeOverlay}
                      enableOverlay={this.enableVideoVolumeOverlay}
                      disableOverlay={this.disableVideoVolumeOverlay}
                    />
                  ) : currentPage !== 'trailer' && !started_last_show ? (
                    <PreScreen onFinished={this.handleTimerFinished} endTime={countDownEnd} />
                  ) : (
                    ''
                  )}
                  {optionalComponents}
                </div>
              </div>

              <div className="amz-right-panel">{/* <RightNav /> */}</div>
            </div>
          </div>
        </div>
        {hasFooter ? <Footer /> : ''}

        <div class="amz-back-to-top">
          <a href="#">
            <img src={`${themeUrl}/assets/images/up-arrow.svg`} alt="Back to top" />
          </a>
        </div>
      </div>
    );
  }
}
export default HomePage;
