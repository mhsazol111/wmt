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
      navText: [`<span><img src=${amzData.theme_url}/assets/images/left-arrow-dark.png alt='arrow'/></span>`, `<span><img src=${amzData.theme_url}/assets/images/right-arrow-dark.png alt='arrow'/></span>`],
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
              <img src={`${themeUrl}/assets/images/pre_screening.jpg`} alt="PreScreen" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/SYLVIE_SG_00199R.jpg`} alt="SYLVIE_SG_00199R" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/SYLVIE_SG_00496R.jpg`} alt="SYLVIE_SG_00496R" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/SYLVIE_Unit_00059RC.jpg`} alt="SYLVIE_Unit_00059RC" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/SYLVIE_Unit_00139RC.jpg`} alt="SYLVIE_Unit_00139RC" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/SYLVIE_Unit_00327RC.jpg`} alt="SYLVIE_Unit_00327RC" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/SYLVIE_Unit_01392RC.jpg`} alt="SYLVIE_Unit_01392RC" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/SYLVIE_Unit_01641RC.jpg`} alt="SYLVIE_Unit_01641RC" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/SYLVIE_Unit_02487RC.jpg`} alt="SYLVIE_Unit_02487RC" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/SYLVIE_Unit_03722RC.jpg`} alt="SYLVIE_Unit_03722RC" />
            </div>
            <div className="amz-gallery-item">
              <img src={`${themeUrl}/assets/images/gallery/SYLVIE_Unit_03992RC.jpg`} alt="SYLVIE_Unit_03992RC" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
