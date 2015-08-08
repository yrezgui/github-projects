import './Header.css';
import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="px2 mx-auto header">
        <h4 className="header-title left">
          <span className="octicon octicon-octoface"></span> Popular Repositories
        </h4>
        <p className="header-title right h5">
          <img className="rounded" src={this.props.profile.avatar_url} /> {this.props.profile.name}
        </p>
      </div>
    );
  }
}
