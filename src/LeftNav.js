import React, { Component } from 'react';

class LeftNav extends Component {
  render() {
    const { currentPage, handleClick, isGateClosed } = this.props;
    return (
      <div id="amz-nav">
        <div className="amz-nav-items">
          <ul>
            {isGateClosed ? (
              <React.Fragment>
                <li>
                  <a data-hover="Trailer" href="/trailer" id="trailer" className={currentPage === 'trailer' ? 'active' : ''} onClick={handleClick}>
                    <div>Trailer</div>
                  </a>
                </li>
              </React.Fragment>
            ) : (
              <li>
                <a data-hover="Presentation" href="/" id="home" className={currentPage === 'home' ? 'active' : ''} onClick={handleClick}>
                <div>Presentation</div>
                </a>
              </li>
            )}
            <li>
              <a data-hover="Gallery" href="/gallery" id="gallery" className={currentPage === 'gallery' ? 'active' : ''} onClick={handleClick}>
              <div>Gallery</div>
              </a>
            </li>
            <li>
              <a data-hover="Bios" href="/bios" id="bios" className={currentPage === 'bios' ? 'active' : ''} onClick={handleClick}>
              <div>Bios</div>
              </a>
            </li>
          </ul>
          <span className="menu-close"></span>
        </div>
      </div>
    );
  }
}

export default LeftNav;
