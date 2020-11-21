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
              <a href="/styling" id="styling" className={currentPage === 'styling' ? 'active' : ''} onClick={handleClick}>
                Styling
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
