import './Projects.css';
import React from 'react';
import RepositoryItem from './RepositoryItem';
import RepositoryDetails from './RepositoryDetails';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      selectedRepository: null,
      repos: this.generateRepositoriesList(props.repos)
    };
  }

  generateRepositoriesList(repos) {
    let sortedRepos = repos.concat([]);

    sortedRepos.sort(function(repoA, repoB) {
      return (repoB.stargazers_count + repoB.watchers_count) - (repoA.stargazers_count + repoA.watchers_count);
    });

    return sortedRepos.slice(0, 20);
  }

  onSelect(repo) {
    this.setState({
      selectedRepository: repo
    });
  }

  render() {
    if (this.state.selectedRepository) {
      return (
        <div className="m3">
          <RepositoryDetails repo={this.state.selectedRepository} />
        </div>
      );
    }

    return (
      <div className="m3 projects">
      {this.state.repos.map((repo, k) => <RepositoryItem key={k} repo={repo} onSelect={this.onSelect} />)}
      </div>
    );
  }
}
