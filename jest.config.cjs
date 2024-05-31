module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testMatch: [
    "**/test/**/*.test.js"
    ]
  babelConfig: require('./babel.config.js')
};
