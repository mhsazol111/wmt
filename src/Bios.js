import React, { Component } from 'react';

class Bios extends Component {
  render() {
    let themeUrl = amzData.theme_url;
    return (
      <div className="amz-bios-wrapper">

        <div className="wmt-bios-item">
          <div className="wmt-bios-img">
            <img className="frame" src={themeUrl + '/assets/images/image-frame.svg'} alt="frame" />
            <img className="profile" src={themeUrl + '/assets/images/emily.jpg'} alt="Emily Blunt" />
          </div>
          <div className="wmt-bios-content">
            <h3>Emily Blunt</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd estgubergren, no sea takimata.</p>
          </div>
          <div className="wmt-bios-divider">
            <img className="" src={themeUrl + '/assets/images/bios-divider.svg'} alt="Divider" />
          </div>
        </div>

        <div className="wmt-bios-item">
          <div className="wmt-bios-img">
            <img className="frame" src={themeUrl + '/assets/images/image-frame.svg'} alt="frame" />
            <img className="profile" src={themeUrl + '/assets/images/emily.jpg'} alt="Jamie Dornan" />
          </div>
          <div className="wmt-bios-content">
            <h3>Jamie Dornan</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd estgubergren, no sea takimata.</p>
          </div>
          <div className="wmt-bios-divider">
            <img className="" src={themeUrl + '/assets/images/bios-divider.svg'} alt="Divider" />
          </div>
        </div>

        <div className="wmt-bios-item">
          <div className="wmt-bios-img">
            <img className="frame" src={themeUrl + '/assets/images/image-frame.svg'} alt="frame" />
            <img className="profile" src={themeUrl + '/assets/images/emily.jpg'} alt="Jon Hamm" />
          </div>
          <div className="wmt-bios-content">
            <h3>Jon Hamm</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd estgubergren, no sea takimata.</p>
          </div>
          <div className="wmt-bios-divider">
            <img className="" src={themeUrl + '/assets/images/bios-divider.svg'} alt="Divider" />
          </div>
        </div>

        <div className="wmt-bios-item">
          <div className="wmt-bios-img">
            <img className="frame" src={themeUrl + '/assets/images/image-frame.svg'} alt="frame" />
            <img className="profile" src={themeUrl + '/assets/images/emily.jpg'} alt="Christopher Walken" />
          </div>
          <div className="wmt-bios-content">
            <h3>Christopher Walken</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd estgubergren, no sea takimata.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Bios;
