function findSection(object, element) {
  const name = element.replace("@", "");
  let value = "";
  Object.keys(object.elements).forEach(key => {
    if (name === key) value = object.elements[key].selector;
  });
  return value;
}

function findElement(object, element) {
  const name = element.replace("@", "");
  let value = "";
  Object.keys(object).forEach(key => {
    if (name === key) value = object[key].selector;
  });
  return value;
}

module.exports = {
  findSection,
  findElement
};
