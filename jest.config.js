const path = require("path");

module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1"
  },
  verbose: true
};
