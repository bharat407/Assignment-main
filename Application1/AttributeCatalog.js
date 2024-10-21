const validAttributes = ["age", "department", "salary", "experience"];

function isValidAttribute(attribute) {
  return validAttributes.includes(attribute);
}

module.exports = { isValidAttribute };
