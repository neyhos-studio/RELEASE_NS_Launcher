#is-git-check
#### Simple module to check whether a directory is a git repository or not

##### Installation
```bash
npm install is-git-check
```

##### Usage
```javascript
const isGit = require('is-git-check');

// checking current working directory
isGit(process.cwd()) // returns true or false
```

##### Test
```bash
npm test
```

##### Changelog
  - 1.1
    - Added tests
  - 1.0.2
    - added useful comments in code
  - 1.0.1
    - fixed typos in Readme
  - 1.0
    - Initial commit
