import './Repository.css';
import React from 'react';

export default class Repository extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="repository">
        <a href="#" className="left h5">{this.props.name}</a>
        <span className="right">
          <div className="stats h6">
            <span className="octicon octicon-star"></span> 20
          </div>
          <div className="stats h6">
            <span className="octicon octicon-eye"></span> 2
          </div>
          <div className="stats h6">
            <span className="octicon octicon-git-branch"></span> 9000
          </div>
        </span>
      </div>
    );
  }
}
