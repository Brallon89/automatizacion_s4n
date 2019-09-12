const config = require("./automation/config/config.json");

module.exports = (function conf(settings) {
  const newset = settings;
  newset.test_workers = {
    enabled: config.parallel.enabled === "true",
    workers:
      config.parallel.workers === "auto"
        ? "auto"
        : parseInt(`${config.parallel.workers}`, 10)
  };
  return newset;
})(require("./nightwatch.json.js"));
