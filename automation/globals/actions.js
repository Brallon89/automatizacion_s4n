const find = require("../utils/findSelector");
const login = require("../pages/elements/login");
const stringFormat = require("../utils/stringFormat");
//const recursive = require("../utils/recursive");

function setValue(element, value) {
  const self = this;
  self.api.pause(1000);
  return self.waitForElementPresent(element, 25000, () => {
    self.assert
      .elementPresent(element)
      .clearValue(element)
      .setValue(element, value, () => {
        self.expect.element(element).to.have.value.that.equals(value);
      });
  });
}

function setColor(element, value) {
  const self = this;
  self.api.pause(1000);
  return self.waitForElementPresent(element, 25000, () => {
    self.assert
      .elementPresent(element)
      .clearValue(element)
      .setValue(element, value);
  });
}

function click(element) {
  const self = this;
  self.api.pause(1000);
  return self.waitForElementPresent(element, 25000, () => {
    self.assert.elementPresent(element).click(element);
  });
}

function getText(element, value) {
  const self = this;
  self.api.pause(1000);
  return self.waitForElementVisible(element, 25000, () => {
    self.assert.elementPresent(element);
    self.api.pause(1000, () => {
      self.api.getText(find.findElement(this.elements, element), result => {
        self.assert.equal(result.value, value);
      });
    });
  });
}

function isNotPresent(element, value) {
  const self = this;
  self.api.pause(1000);
  return self.waitForElementVisible(element, 25000, () => {
    self.assert.elementPresent(element);
    self.api.pause(1000, () => {
      self.api.getText(find.findElement(this.elements, element), result => {
        self.assert.notEqual(result.value, value);
      });
    });
  });
}
function elementDisabled(element, value) {
  const self = this;
  self.api.pause(1000);
  return self.waitForElementPresent(element, 25000, () => {
    self.assert.attributeEquals(element, value, "true");
  });
}

function fullFill(element, fileName) {
  const self = this;
  self.api.pause(1000);
  return self.waitForElementPresent(element, 25000, () => {
    stringFormat.readTxt(fileName, data => {
      self.assert.elementPresent(element).clearValue(element);
      self.setValue(element, data);
    });
  });
}

function listSelection(element, value) {
  const self = this;
  const elementList = "@rowList";
  this.api.pause(1000);
  return this.waitForElementVisible(element, 25000, () => {
    self.assert.elementPresent(element).click(element);
    self.api.pause(1000);
    self.waitForElementVisible(elementList, 25000, () => {
      self.assert.visible(elementList);
      self.api.elements(
        "css selector",
        find.findElement(this.elements, elementList),
        list => {
          recursive.select(self.api, list.value, value);
        }
      );
    });
    self.expect.element(element).to.have.text.that.equal(value);
  });
}

function getTextCompare(callback) {
  const self = this;
  const element = "@exportTextArea";
  self.api.pause(1000);
  return self.waitForElementVisible(element, 25000, () => {
    self.assert.elementPresent(element);
    self.api.pause(1000, () => {
      self.api.getValue(
        "css selector",
        find.findElement(this.elements, element),
        result => {
          callback(result.value);
        }
      );
    });
  });
}

module.exports = {
  setValue,
  setColor,
  click,
  getText,
  isNotPresent,
  elementDisabled,
  fullFill,
  listSelection,
  getTextCompare
};
