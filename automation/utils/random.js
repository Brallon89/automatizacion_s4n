function alphaRandom(text, limit) {
  let str = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < limit; i += 1)
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  return text.replace("%random", str);
}

function upperAlphaRandom(text, limit) {
  let str = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < limit; i += 1)
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  return text.replace("%random", str);
}

function lowerAlphaRandom(text, limit) {
  let str = "";
  const possible = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < limit; i += 1)
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  return text.replace("%random", str);
}

function alphaNumericRandom(text, limit) {
  let str = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < limit; i += 1)
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  return text.replace("%random", str);
}

function upperAlphaNumericRandom(text, limit) {
  let str = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < limit; i += 1)
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  return text.replace("%random", str);
}

function lowerAlphaNumericRandom(text, limit) {
  let str = "";
  const possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < limit; i += 1)
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  return text.replace("%random", str);
}

function numericRandom(text, limit) {
  let num = "";
  const possible = "0123456789";
  for (let i = 0; i < limit; i += 1)
    num += possible.charAt(Math.floor(Math.random() * possible.length));
  return text.replace("%random", num);
}

function keyRandom(object) {
  const myArray = Object.keys(object).map(key => key);
  const randomKey = myArray[Math.floor(Math.random() * myArray.length)];
  return object[randomKey];
}

module.exports = {
  alpha: alphaRandom,
  upperAlpha: upperAlphaRandom,
  lowerAlpha: lowerAlphaRandom,
  alphaNumeric: alphaNumericRandom,
  upperAlphaNumeric: upperAlphaNumericRandom,
  lowerAlphaNumeric: lowerAlphaNumericRandom,
  numeric: numericRandom,
  key: keyRandom
};
