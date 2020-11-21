import React, { Component } from 'react';

class RightNav extends Component {
  render() {
    let themeUrl = amzData.theme_url;
    return (
      <div className="amz-right-logos">
        <div className="amz-award amz-award-1">
          <img src={themeUrl + '/assets/images/telluride-film-festival.svg'} alt="Telluride Flim Festival" />
        </div>
        <div className="amz-award amz-award-2">
          <img src={themeUrl + '/assets/images/mill-valley-film-festival.svg'} alt="Mill Valley Flim Festival" />
        </div>
        <div className="amz-award amz-award-3">
          <img src={themeUrl + '/assets/images/new-york-film-festival.svg'} alt="New York Flim Festival" />
        </div>
        <div className="amz-award amz-award-4">
          <img src={themeUrl + '/assets/images/chicago-international-film-festival.svg'} alt="The Chicago International Film Festival" />
        </div>
      </div>
    );
  }
}

export default RightNav;
