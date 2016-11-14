import React, { Component } from 'react';

import './Counter.css';

class Counter extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      cnt: 0,
    };

    // find all methods in this class
    // and bind context to this
    // if its name is started 'on'
    const protoMembers = Object.getPrototypeOf(this);
    Object.getOwnPropertyNames(protoMembers).forEach((k) => {
      let member = protoMembers[k];
      if (typeof member === 'function' && k.slice(0, 2) === 'on') {
        this[k] = member.bind(this);
      }
    });
  }

  onUpClickHander() {
    this.setState({
      cnt: this.state.cnt + 1,
    });
  }

  onDownClickUHander() {
    this.setState({
      cnt: this.state.cnt - 1,
    });
  }

  render() {
    return (
      <div className="Counter">
        <span>{this.state.cnt}</span>
        <div className="ui buttons">
          <button className="ui button positive" onClick={this.onUpClickHander}>Up</button>
          <div className="or"></div>
          <button className="ui button" onClick={this.onDownClickUHander}>Down</button>
        </div>
      </div>
    );
  }
}

export default Counter;
