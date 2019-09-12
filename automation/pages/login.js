const login = require("./elements/login.json");
const actions = require("../globals/actions");

const loginCommands = {
  fillField: function action(element, value) {
    return actions.setValue.call(this, element, value);
  },
  clickButton: function action(element) {
    return actions.click.call(this, element);
  },
  compareText: function action(element, value) {
    return actions.getText.call(this, element, value);
  },
  buttonDisabled: function action(element, value) {
    return actions.elementDisabled.call(this, element, value);
  }
};

module.exports = {
  commands: [loginCommands],
  elements: login.elements
};
