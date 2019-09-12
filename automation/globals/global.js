/* global disabledTests, random, state */
global.disabledTests = require("../config/disabledTests.json");
global.random = require("../utils/random");
const testContext = require("./testContext");
const stringFormat = require("../utils/stringFormat");

module.exports = {
  beforeEach: (driver, done) => {
    driver.disabledTests = disabledTests;
    driver.testContext = testContext;
    driver.random = random;
    driver.stringFormat = stringFormat;
    done();
  },
  afterEach: (driver, done) => {
    driver.end();
    done();
  }
};
