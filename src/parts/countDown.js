import React from 'react';
import { data } from 'jquery';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timerEnd: false,
    };

    this.timerFinished = this.timerFinished.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      let now = new Date().getTime();
      let distance = timeTillDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Leading 0
      let dayInHours = days * 24;
      hours = dayInHours + hours;
      // days = days < 10 ? '0' + days.toString() : days;
      // hours = hours < 10 ? '0' + totalHours.toString() : totalHours;
      // minutes = minutes < 10 ? '0' + minutes.toString() : minutes;
      // seconds = seconds < 10 ? '0' + seconds.toString() : seconds;

      if (distance < 1) {
        this.timerFinished();
      } else {
        this.setState({ hours, minutes, seconds });
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  timerFinished() {
    this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0, timerEnd: true });

    const { onFinished } = this.props;
    onFinished && onFinished();
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div className="count-down-timer" style={this.props.style || {}}>
        {/* { '00' !== days ? days + ':' : ''}{ ('00' !== days || '00' !== hours) ? hours + ':' : ''}{minutes}:{seconds} */}
        { ('0' + hours).slice(-2) }:{ ('0' + minutes).slice(-2) }:{ ('0' + seconds).slice(-2) }
      </div>
    );
  }
}

export default Countdown;
