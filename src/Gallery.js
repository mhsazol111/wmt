import React, { Component } from 'react';

class Gallery extends Component {
  componentDidMount() {
    let $ = jQuery;
    var $owl = $('#amz-gallery-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      dots: false,
      nav: true,
      navText: [`<span><p class="arrow"><img class="on" src=${amzData.theme_url}/assets/images/arrow-prev.svg alt='arrow'/><img class="off" src=${amzData.theme_url}/assets/images/arrow-prev.svg alt='arrow'/></p><p>Previous</p></span>`, `<span><p class="arrow"><img class="on" src=${amzData.theme_url}/assets/images/arrow-next.svg alt='arrow'/><img class="off" src=${amzData.theme_url}/assets/images/arrow-next.svg alt='arrow'/></p><p>Next</p></span>`],
      smartSpeed: 1000,
      navContainer: '#wmt-nav',
    });

    $owl.trigger('refresh.owl.carousel');
  }

  render() {
    let themeUrl = amzData.theme_url;

    return (
      <div id="amz-gallery-wrapper" className="fade-in">
        <div className="amz-gallery-slider-wrap" style={{ width: '100%' }}>
          <div className="frame-wrap">
            <img src={`${themeUrl}/assets/images/Frame_Gallery_WMT.png`} alt="Frame" />
          </div>
          <div id="amz-gallery-slider" className="amz-gallery-slider owl-carousel">
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/Gallery-1.jpg`} alt="gallery1" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/Gallery-2.jpg`} alt="gallery2" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/Gallery-3.jpg`} alt="gallery3" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/Gallery-4.jpg`} alt="gallery3" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/Gallery-5.jpg`} alt="gallery3" />
            </div>
          </div>
          <div id="wmt-nav" className="owl-nav"></div>
        </div>
      </div>
    );
  }
}

export default Gallery;
