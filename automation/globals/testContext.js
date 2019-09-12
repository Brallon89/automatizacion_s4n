module.exports = {
  build: function buildTestContext(driver, context) {
    const self = context;
    self.login = driver.page.login();

    return self;
  }
};
