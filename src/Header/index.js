import React from 'react';
import './Header.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="px2 mx-auto header">
        <p className="header-title left">
          <span className="octicon octicon-octoface"></span> Popular Repositories
        </p>
        <p className="header-title right">
          <img className="rounded" src="1113976.jpeg" /> Yacine Rezgui
        </p>
      </div>
    );
  }
}
