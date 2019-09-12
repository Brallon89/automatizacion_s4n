const config = require("../config/config.json");
const stringFormat = require("../utils/stringFormat");

exports.command = function urlNavigate(url) {
  const self = this;
  const baseUrl = stringFormat.url(config.url.domain);
  const absoluteUrl = url !== undefined ? `${baseUrl}${url}` : `${baseUrl}`;
  self.url(absoluteUrl);
  return self;
};
