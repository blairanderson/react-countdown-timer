import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '00',
      days_ref: 'days',
      hours: '00',
      hours_ref: 'hours',
      minutes: '00',
      minutes_ref: 'minutes',
      seconds: '00',
      seconds_ref: 'seconds'
    };
    this.currentDate = this.currentDate.bind(this);
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  currentDate() {
    const offset = this.props.offset || 1;
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * offset);
  }

  tick() {
    const target_date = new Date(this.props.date);
    const current_date = this.currentDate();
    const difference = target_date - current_date;
    if (difference < 0) {
      // stop timer
      clearInterval(this.interval);
      if (this.props.callback && typeof this.props.callback === 'function') {
        this.props.callback();
      }
      return;
    }

    const _second = 1000,
      _minute = _second * 60,
      _hour = _minute * 60,
      _day = _hour * 24;

    let days = Math.floor(difference / _day),
      hours = Math.floor(difference % _day / _hour),
      minutes = Math.floor(difference % _hour / _minute),
      seconds = Math.floor(difference % _minute / _second);

    days = String(days).length >= 2 ? days : '0' + days;
    hours = String(hours).length >= 2 ? hours : '0' + hours;
    minutes = String(minutes).length >= 2 ? minutes : '0' + minutes;
    seconds = String(seconds).length >= 2 ? seconds : '0' + seconds;

    const ref_days = days === 1 ? 'day' : 'days',
      ref_hours = hours === 1 ? 'hour' : 'hours',
      ref_minutes = minutes === 1 ? 'minute' : 'minutes',
      ref_seconds = seconds === 1 ? 'second' : 'seconds';

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      days_ref: ref_days,
      hours_ref: ref_hours,
      minutes_ref: ref_minutes,
      seconds_ref: ref_seconds
    });
  }
  render() {
    return (
      <div>
        <ul className="countdown">
          <li>
            <span className="days">{this.state.days}</span>
            <p className="days_ref">{this.state.days_ref}</p>
          </li>
          <li className="seperator">.</li>
          <li>
            <span className="hours">{this.state.hours}</span>
            <p className="hours_ref">{this.state.hours_ref}</p>
          </li>
          <li className="seperator">:</li>
          <li>
            <span className="minutes">{this.state.minutes}</span>
            <p className="minutes_ref">{this.state.minutes_ref}</p>
          </li>
          <li className="seperator">:</li>
          <li>
            <span className="seconds">{this.state.seconds}</span>
            <p className="seconds_ref">{this.state.seconds_ref}</p>
          </li>
        </ul>
      </div>
    );
  }
}
