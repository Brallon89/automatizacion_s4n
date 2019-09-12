const fs = require("fs");

function upperCase(string) {
  return string.toUpperCase();
}

function lowerCase(string) {
  return string.toUpperCase();
}

function url(domain, port) {
  return port === undefined ? `${domain}` : `${domain}:${port}`;
}

module.exports = {
  upperCase,
  lowerCase,
  url
};
