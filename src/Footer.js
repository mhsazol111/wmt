import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let themeUrl = amzData.theme_url;
    return (
      <div id="main-footer">
        <div className="container">
          <div className="row">

            <div className="column-4">
              <div className="pg-disclaimer">
                <img src={themeUrl + '/assets/images/pg-132.png'} alt="PG 13" />
              </div>
            </div>
            <div className="column-4">
              <div className="bottom-credits">
                <p>
                  From Screenwriter-Director <strong>JOHN PATRICK SHANLEY</strong>
                </p>
              </div>
            </div>
            <div className="column-4">
              {/* {this.props.hasLogo ? ( */}
                <React.Fragment>
                  <div className="hash-tag-logo1">
                    <div className="bs"><img className="" src={themeUrl + '/assets/images/b-streat.png'} alt="b street" /></div>
                    <div className="ams"><img className="" src={themeUrl + '/assets/images/amasia.png'} alt="amasia" /></div>
                    <div className="mar"><img className="" src={themeUrl + '/assets/images/mar-pic.png'} alt="mar pic" /></div>
                    <div className="ls"><img className="" src={themeUrl + '/assets/images/ls-logo-m.png'} alt="LS" /></div>
                    <div className="por"><img className="" src={themeUrl + '/assets/images/por-pic.png'} alt="Por" /></div>
                  </div>
                </React.Fragment>
              {/* ) : (
                ''
              )} */}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
