module.exports = {
    testEnvironment: "node",
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    globals: {
        'babel-jest': {
            configFile: './babel.config.json'
        }
    }
};
