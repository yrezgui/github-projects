# Github Projects
[![Build status](https://api.travis-ci.org/yrezgui/github-projects.svg)](https://travis-ci.org/yrezgui/github-projects/)
[![NPM dependencies](https://david-dm.org/yrezgui/github-projects.svg)](https://david-dm.org/yrezgui/github-projects)
[![License](https://img.shields.io/github/license/yrezgui/github-projects.svg)](https://github.com/yrezgui/github-projects/blob/master/LICENSE)

Nice view to display the GitHub projects of a user. Check the demo [here](http://www.yrezgui.com/github-projects/).

## Getting started
Run these commands

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
nvm install iojs-v2.4.0
nvm use iojs-v2.4.0
npm install
npm run build
```

And finally open `index.html` from the `dist` folder in your browser.


## Technologies
This project was made with:

 - ReactJS
 - Basscss
 - Webpack
 - Karma
 - Mocha
 - GitHub API

 
## Todo
I did that project quickly (less than 4.5 hours) so it lacks many things:

- Tests for every component
- Real fetch of GitHub API data (not a JSON file bundled with the project)
- Better componentization (`Repository` component is too big)
- Automatic GitHub pages deployment
- Loading while data are fetched
- More data (links to repositories, number of issues, etc.)
- Display all the languages and their percentage within the repo and not just the main one
- Add router to have url (with `react-router`) like `/#/username/my-repository`