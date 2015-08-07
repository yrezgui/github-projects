import './App.css';
import React from 'react';
import Header from '../Header';

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
            <Header />
            <div className="px2">Centered Column</div>
          </div>
        </div>
      </div>
    );
  }
}
