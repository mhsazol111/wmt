import React, { Component } from 'react';

class PasswordForm extends Component {
  render() {
    return (
      <div className="password-section fade-in">
        <div className="container-r">
          <div className="password-fields-wrapper text-center">
            <form method="post" onSubmit={this.props.loginHandler}>
              <div className="input-group">
                <label for="password" className="text-center text-uppercase text-light font-address">
                  {this.props.passLabel}
                </label>
                <input type="password" id="password" name="password" maxlength="6" value={this.props.pass} onChange={this.props.onChange} />
                {this.props.errorMsg ? <p className="text-center text-uppercase text-yellow">{this.props.errorMsg}</p> : ''}
              </div>
              <div className="submit-wrap">
                <button type="submit" className="text-light text-center font-gautreaux">
                  {this.props.isRequesting ? 'Please wait' : 'Enter'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordForm;
