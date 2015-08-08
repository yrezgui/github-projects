import './Repository.css';
import React from 'react';
import classNames from 'classnames';
import RepositoryHeader from './RepositoryHeader';

export default class RepositoryDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames('repository', {
      active: this.props.active
    });

    return (
      <div className={classes}>
        <RepositoryHeader
          repo={this.props.repo}
          active={this.props.active}
          onSelect={this.props.onSelect}
        />
        <div className="repository-details">
          <p className="repository-description h5">{this.props.repo.description}</p>
          <div className="repository-language py2 mb1">
            <p className="name h5">{this.props.repo.language || 'No language found'}</p>
            <p className="percentage h3">100%</p>
          </div>
        </div>
      </div>
    );
  }
}
