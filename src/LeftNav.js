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
                  <a href="/trailer" id="trailer" className={currentPage === 'trailer' ? 'active' : ''} onClick={handleClick}>
                    Trailer
                  </a>
                </li>
              </React.Fragment>
            ) : (
              <li>
                <a href="/" id="home" className={currentPage === 'home' ? 'active' : ''} onClick={handleClick}>
                  Film
                </a>
              </li>
            )}
            <li>
              <a href="/gallery" id="gallery" className={currentPage === 'gallery' ? 'active' : ''} onClick={handleClick}>
                Gallery
              </a>
            </li>
            <li>
              <a href="/bios" id="bios" className={currentPage === 'bios' ? 'active' : ''} onClick={handleClick}>
                Bios
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
