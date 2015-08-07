import './Projects.css';
import React from 'react';
import Repository from './Repository';
import repos from '../repos.json';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="m3 projects">
      {repos.map((repo, k) => <Repository key={k} name={repo.name} />)}
      </div>
    );
  }
}
