import './App.css';
import React from 'react';
import Header from '../Header';
import Projects from '../Projects';
import profile from '../profile.json';
import repos from '../repos.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="header-wrapper" />
        <div className="clearfix">
          <div className="col-6 mx-auto main-content">
            <Header profile={profile} />
            <Projects repos={repos} />
          </div>
        </div>
      </div>
    );
  }
}
