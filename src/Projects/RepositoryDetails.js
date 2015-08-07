import './Repository.css';
import React from 'react';
import moment from 'moment';

export default class RepositoryDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="repository">
        <div className="repository-header active">
          <span className="left name h5">{this.props.repo.name}</span>
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
        <p className="repository-description h5">{this.props.repo.description}</p>
        <div className="repository-language py2 mb1">
          <p className="name h5">{this.props.repo.language || 'No language found'}</p>
          <p className="percentage h3">100%</p>
        </div>
        <a href="#" className="back-to-list py2 h6">Back to list</a>
      </div>
    );
  }
}
