import React, { Component } from 'react';

class Styling extends Component {
  componentDidMount() {
    let $ = jQuery;
    var $owl = $('#amz-styling-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      dots: false,
      nav: true,
      navText: [
        `<span><img src=${amzData.theme_url}/assets/images/left-arrow-dark.png alt='arrow'/></span>`,
        `<span><img src=${amzData.theme_url}/assets/images/right-arrow-dark.png alt='arrow'/></span>`,
      ],
      smartSpeed: 1000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
    });

    $owl.trigger('refresh.owl.carousel');
  }

  render() {
    let themeUrl = amzData.theme_url;

    return (
      <div id="amz-gallery-wrapper" className="fade-in">
        <div className="amz-gallery-slider-wrap" style={{ width: '100%' }}>
          <div id="amz-styling-slider" className="amz-gallery-slider owl-carousel">
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/styling/1.jpg`} alt="styling-1" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/styling/2.jpg`} alt="styling-2" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/styling/3.jpg`} alt="styling-3" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/styling/4.jpg`} alt="styling-4" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/styling/5.jpg`} alt="styling-5" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Styling;
