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
              <img src={`${themeUrl}/assets/images/gallery/gallery-1.jpg`} alt="gallery1" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-2.jpg`} alt="gallery2" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-3.jpg`} alt="gallery3" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-4.jpg`} alt="gallery4" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-5.jpg`} alt="gallery5" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-6.jpg`} alt="gallery6" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-7.jpg`} alt="gallery7" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-8.jpg`} alt="gallery8" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-9.jpg`} alt="gallery9" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-10.jpg`} alt="gallery10" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-11.jpg`} alt="gallery11" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-12.jpg`} alt="gallery12" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-13.jpg`} alt="gallery13" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-14.jpg`} alt="gallery14" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-15.jpg`} alt="gallery15" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-16.jpg`} alt="gallery16" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-17.jpg`} alt="gallery17" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-18.jpg`} alt="gallery18" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/gallery-19.jpg`} alt="gallery19" />
            </div>
          </div>
          <div id="wmt-nav" className="owl-nav"></div>
        </div>
      </div>
    );
  }
}

export default Gallery;
