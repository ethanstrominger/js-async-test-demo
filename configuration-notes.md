These commands were used to initially create the project.  The npm install commands should not be necessary to do again for this project but could be useful for a new project.

~~~~
npm init
git init
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install babel-cli babel-preset-env
npm install jest
npm audit fix
~~~~
Changed package.json to change "test":"..." to "test":"jest"
babel-node src/demoAsync.js 

This error occured when initially :
ReferenceError: regeneratorRuntime is not defined

To fix this, based on this article: https://github.com/babel/babel-preset-env/issues/340 changed .babelrc from:
~~~~
{ "presets: ["env"] }
~~~~
to: 
~~~~
{
  "presets": [
    ["env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
}
~~~~