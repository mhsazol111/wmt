import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let themeUrl = amzData.theme_url;
    return (
      <div id="main-footer">
        <div className="container">
          <div className="row">
            <div className="column-12 main-footer-column">
              <div className="pg-disclaimer">
                <img src={themeUrl + '/assets/images/pg-132.png'} alt="PG 13" />
              </div>

              {this.props.hasLogo ? (
                <React.Fragment>
                  <div className="hash-tag-logo1">
                    <img className="slw" src={themeUrl + '/assets/images/SLWLogo2.png'} alt="SLW FILMS" />
                    <img className="iam" src={themeUrl + '/assets/images/Iam212.png'} alt="Iam 21" />
                    <img className="es-logo" src={themeUrl + '/assets/images/ES-Logo-White2.png'} alt="ESSENCE STUDIOS" />
                    <img className="amazon" src={themeUrl + '/assets/images/amazon-logo2.png'} alt="Amazon Studio" />
                  </div>

                  <div className="hash-tag-logo2">
                    <img src={themeUrl + '/assets/images/Sundance2.png'} alt="Sundance" />
                  </div>
                </React.Fragment>
              ) : (
                ''
              )}

              <div className="bottom-credits">
                <p className="text-uppercase font-address">
                  <span className="small">Written and Directed by</span> <span className="large">Eugene Ashe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
