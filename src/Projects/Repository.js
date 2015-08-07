import './Repository.css';
import React from 'react';

export default class Repository extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="repository">
        {this.props.name}
      </div>
    );
  }
}
