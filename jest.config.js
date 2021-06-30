const path = require("path");

module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
  },
};
