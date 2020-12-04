import React from 'react';
import Header from './Header';
import PasswordForm from './PasswordForm';
import Footer from './Footer';
import Countdown from './parts/countDown';
import PreLoader from './parts/preLoader';
import GateContent from './parts/gateContent';
import { Redirect } from 'react-router-dom';
import { AUTH_URL } from './config/endpoints';
import { GATE_OPEN, VIDEO_START_TIME, gate_should_open, gate_should_close, SECOND_OPEN_TIME } from './config/videoScedule';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: '',
      passLabel: 'Enter your Access Code',
      errorMsg: '',
      isLoggedIn: false,
      isRequesting: false,
      countDown: '00:00:00',
      startInterval: null,
      eventDate: SECOND_OPEN_TIME,
      isLoading: true,
      isGateOpen: false,
      isGateClose: false,
      firstShow: GATE_OPEN,
      secondShow: SECOND_OPEN_TIME,
      audioPlaying: false, // BG audio
    };

    //Bind
    this.loginHandler = this.loginHandler.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.timerCompleted = this.timerCompleted.bind(this);

    this.handlePlayAudio = this.handlePlayAudio.bind(this);
    this.handlePauseAudio = this.handlePauseAudio.bind(this);
    this.handlePlayToggle = this.handlePlayToggle.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: false, isGateOpen: gate_should_open(), isGateClose: gate_should_close() });
    if (this.isAlreadyLoggedIn()) {
      this.setState({ isLoading: false, isGateClose: true, isGateOpen: true });
      console.log('logged');
    }
  }

  isAlreadyLoggedIn() {
    let item = localStorage.getItem('__wmt_storage_key');
    return !item ? false : true;
  }

  loginHandler(e) {
    e.preventDefault();
    let pass = this.state.pass;
    let token = amzData.csrf;
    if (!pass || !token || pass.length < 6) {
      this.setState({ isLoggedIn: false, errorMsg: 'Missing required data, please check and try again!' });
      return;
    }
    this.setState({ isRequesting: true });
    fetch(AUTH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': token },
      body: JSON.stringify({ pass: pass, token: token }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          localStorage.setItem('__wmt_storage_key', res.token);
          localStorage.setItem('__visitor_', res.visitor);
          this.setState({ isLoggedIn: true, errorMsg: res.message });
        } else {
          this.setState({ isLoggedIn: false, errorMsg: res.message });
        }
        this.setState({ isRequesting: false });
      })
      .catch((res) => {
        this.setState({ isLoggedIn: false, isRequesting: false, errorMsg: 'Something Went Wrong!' });
      });
  }

  changeValue(e) {
    this.setState({ pass: e.target.value });
  }

  timerCompleted() {
    this.setState({ isGateOpen: true, isGateClose: gate_should_close() });
    jQuery(window).trigger('resize');
  }

  handlePlayAudio() {
    var sound = document.getElementById('bg-audio');
    var startVol = 0;
    var speed = 0.02;
    sound.volume = startVol;
    sound.play();
    var startCounting = setInterval(function () {
      startVol += speed;
      sound.volume = startVol;
      if (startVol.toFixed(1) >= 1) {
        clearInterval(startCounting);
        sound.volume = 1;
      }
    }, 30);
    this.setState({ audioPlaying: true });
  }

  handlePauseAudio() {
    var sound = document.getElementById('bg-audio');
    var startVol = 1;
    var speed = 0.02;
    sound.volume = startVol;
    var startCounting = setInterval(function () {
      startVol -= speed;
      sound.volume = startVol;
      if (startVol.toFixed(1) <= 0) {
        clearInterval(startCounting);
        sound.volume = 0;
        sound.pause();
      }
    }, 10);
    this.setState({ audioPlaying: false });
  }

  handlePlayToggle() {
    var sound = document.getElementById('bg-audio');
    if (sound.paused) {
      this.handlePlayAudio(sound);
    } else {
      this.handlePauseAudio(sound);
    }
  }

  render() {
    let themeUrl = amzData.theme_url;
    let { passLabel, pass, errorMsg, isRequesting, isLoggedIn, isLoading, isGateOpen, isGateClose, audioPlaying } = this.state;
    if (isLoading) {
      return <PreLoader />;
    }
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div
        id="page-container"
        className={this.state.isGateClose ? 'landing-video-bg gate-is-open-now' : 'landing-video-bg'}
        style={{ width: '100%', minHeight: '100vh' }}
      >
        <div className="amz-bg">
          <div className="amz-bg-layer-image" style={{ backgroundImage: `url(${themeUrl}/assets/images/Home_WMT.jpg)` }}></div>
        </div>
        <Header
          hasBgAudio={true}
          toggleAudio={this.handlePlayToggle}
          playAudio={this.handlePlayAudio}
          pauseAudio={this.handlePauseAudio}
          audioPlaying={audioPlaying}
        />

        <div id="main-content">
          <div className="wmt-premiere-wrap">
            <div className="container">
              <div className="row">
                <div className="column-12">
                  <div className="coast-area">
                    {/*{!isGateClose ? (
                      <div className="remaining-timer" id="east-cost">
                        <div className="wmt-premiere-label">
                          <p>Door open at</p>
                        </div>
                        {/* <div className="east-coast-time">
                          <Countdown timeTillDate={this.state.firstShow} timeFormat="YYYY-MM-DD H:m:s" />
                        </div>
                        <div className="wmt-coast-label">
                          <p>{amzData.first_timer_label}</p>
                        </div> */}
                    {/*</div>
                    ) : (
                      ''
                    )} */}
                    {!isGateClose ? (
                      <div className="remaining-timer" id="west-cost">
                        <div className="wmt-premiere-label">
                          <p>Doors open at</p>
                        </div>
                        <div className="west-coast-time">
                          <Countdown timeTillDate={this.state.secondShow} timeFormat="YYYY-MM-DD H:m:s" />
                        </div>
                        <div style={{ display: 'none' }}>
                          <Countdown timeTillDate={this.state.eventDate} timeFormat="YYYY-MM-DD H:m:s" onFinished={this.timerCompleted} />
                        </div>
                        {/* <div className="wmt-coast-label">
                          <p>{amzData.second_timer_label}</p>
                        </div> */}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="amz-center-section">
            <div className="container">
              <div className="row">
                <div className="column-4">
                  <div className="main-logo-wrap">
                    <img src={themeUrl + '/assets/images/main-logo.svg'} alt="Wild Mountain Thyme" />
                  </div>
                </div>
                <div className="column-4"></div>
                <div className="column-4">
                  {isGateOpen && !isGateClose ? (
                    <PasswordForm
                      loginHandler={this.loginHandler}
                      pass={pass}
                      passLabel={passLabel}
                      errorMsg={errorMsg}
                      onChange={this.changeValue}
                      isRequesting={isRequesting}
                    />
                  ) : (
                    <GateContent isClosed={isGateOpen} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer hasLogo={true} />
      </div>
    );
  }
}

export default LoginPage;
