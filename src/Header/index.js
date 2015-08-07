import './Header.css';
import React from 'react';
import profile from '../profile.json';

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
        <p className="header-title right">
          <img className="rounded" src={profile.avatar_url} /> {profile.name}
        </p>
      </div>
    );
  }
}
