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
      navText: [`<span><img src=${amzData.theme_url}/assets/images/left-arrow.png alt='arrow'/></span>`, `<span><img src=${amzData.theme_url}/assets/images/right-arrow.png alt='arrow'/></span>`],
      smartSpeed: 1000,
    });

    $owl.trigger('refresh.owl.carousel');
  }

  render() {
    let themeUrl = amzData.theme_url;

    return (
      <div id="amz-gallery-wrapper" className="fade-in">
        <div className="amz-gallery-slider-wrap" style={{ width: '100%' }}>
          <div id="amz-gallery-slider" className="amz-gallery-slider owl-carousel">
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-1.jpg`} alt="gallery1" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-2.jpg`} alt="gallery2" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-3.jpg`} alt="gallery3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
