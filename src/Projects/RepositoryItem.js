import './Repository.css';
import React from 'react';

export default class RepositoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.onSelect(this.props.repo);
  }

  render() {
    return (
      <div className="repository">
        <div className="repository-header">
          <a className="left name h5" href="#" onClick={this.onClick}>{this.props.repo.name}</a>
          <span className="right">
            <div className="stats h6">
              <span className="octicon octicon-star"></span> {this.props.repo.stargazers_count}
            </div>
            <div className="stats h6">
              <span className="octicon octicon-eye"></span> {this.props.repo.watchers_count}
            </div>
            <div className="stats h6">
              <span className="octicon octicon-git-branch"></span> {this.props.repo.forks_count}
            </div>
          </span>
        </div>
      </div>
    );
  }
}
