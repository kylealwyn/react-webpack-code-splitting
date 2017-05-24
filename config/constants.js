const path = require('path');

const root = path.resolve(`${__dirname}/..`);
const source = `${root}/src`;

module.exports = {
  Source: source,
  ScriptEntry: `${source}/root.jsx`,
  HtmlEntry: `${source}/index.html`,
  Build: `${root}/build`,
};
