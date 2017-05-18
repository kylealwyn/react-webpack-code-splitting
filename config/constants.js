const path = require('path');

const root = path.resolve(`${__dirname}/..`);
const source = `${root}/src`;

module.exports = {
  Source: source,
  ScriptEntry: `${source}/app.js`,
  HtmlEntry: `${source}/index.html`,
  Build: `${root}/build`,
};
