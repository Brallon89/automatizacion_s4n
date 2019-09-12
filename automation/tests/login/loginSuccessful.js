/* global disabledTests */
module.exports = {
  "@disabled": disabledTests.login.loginSuccessful === "true",
  "@tags": ["login", "loginSuccessful"],
  "Login successful": driver => {
    const self = this;
    const pages = driver.testContext.build(driver, self);

    pages.login
      .urlNavigate("")
      .fillField("@email", "adminuser@admin.com")
      .fillField("@password", "123456")
      .clickButton("@signIn");
    driver.pause(1000);
    // pages.learningCenter.clickButton("@menu").clickButton("@logOut");
    driver.end();
  }
};
