import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.calculateTime = this.calculateTime.bind(this);
    this.state = {
      ticker: 1,
    };
  }

  componentDidMount() {
    const ticker = this.state.ticker + 1;
    setInterval(() => { this.setState({ ticker }); }, 1000);
  }

  calculateTime() {
    const dueDate = Date.parse(this.props.dueDate);
    const now = Date.now();
    const diff = Math.round((dueDate - now) / 1000);
    const seconds = diff % 60;
    const minutes = Math.round(diff / 60) % 60;
    const hours = Math.round(diff / 3600) % 24;
    const days = Math.round(diff / 86400);

    return {
      seconds, minutes, hours, days,
    };
  }

  render() {
    return (
      <div className="">
        <div>{this.calculateTime().days} Days</div>
        <div>{this.calculateTime().hours} Hour</div>
        <div>{this.calculateTime().minutes} Minutes</div>
        <div>{this.calculateTime().seconds} Seconds</div>
      </div>
    );
  }
}

export default Clock;
