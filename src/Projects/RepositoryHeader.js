import './Repository.css';
import React from 'react';
import moment from 'moment';

export default class RepositoryHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event) {
    event.preventDefault();
    if (!this.props.active) {
      this.props.onSelect(this.props.repo);
    } else {
      this.props.onSelect(null);
    }
  }

  render() {
    return (
      <div className="repository-header">
        <a className="left name h5" href="#" onClick={this.onSelect}>{this.props.repo.name}</a>
        <span className="left last-modification h6">
          <b>&nbsp;&middot;</b> Last updated {moment(this.props.repo.updated_at).fromNow()}
        </span>
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
    );
  }
}
