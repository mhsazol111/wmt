import React from 'react';

export default class GateContent extends React.Component {
  constructor(props) {
    super(props);
    let { isClosed } = this.props;
    this.state = {
      isClosed: isClosed,
    };
  }
  render() {
    let siteUrl = amzData.site_url;
    if (!this.state.isClosed) {
      return (
        <div className="gate_not_opened">
          <h5 className="text-uppercase font-address">
            HAVE YOUR PASSWORD READY. SOON YOU WILL BE ABLE TO ACCESS THE SPECIAL SCREENING.
          </h5>
        </div>
      );
    } else {
      return (
        <div className="password-fields-wrapper text-center">
          <a href={siteUrl} class="text-light text-center font-gautreaux">
            Enter
          </a>
        </div>
      );
    }
  }
}
