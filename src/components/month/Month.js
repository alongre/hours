import React, { Component } from 'react';

export class Month extends Component {
  render() {
    return (
      <div className="Month">
        <h3>{this.props.time}</h3>
      </div>
    );
  }
}

Month.propTypes = {
  daysInMonth: React.PropTypes.arrayOf(object).isRequired,
};
