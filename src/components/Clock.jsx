import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };

    setInterval(() => { this.calculateTime(); }, 1000);
  }

  calculateTime() {
    // const { day, hour, minute, second } = this.state.time;
    const dueDate = Date.parse(this.props.dueDate);
    const now = Date.now();
    const diff = Math.round((dueDate - now) / 1000);
    const seconds = diff % 60;
    const minutes = Math.round(diff / 60) % 60;
    const hours = Math.round(diff / 3600) % 24;
    const days = Math.round(diff / 86400);

    this.setState({
      time: {
        seconds, minutes, hours, days,
      },
    });
  }

  render() {
    return (
      <div className="">
        <div>{this.state.time.days} Days</div>
        <div>{this.state.time.hours} Hour</div>
        <div>{this.state.time.minutes} Minutes</div>
        <div>{this.state.time.seconds} Seconds</div>
      </div>
    );
  }
}

export default Clock;
