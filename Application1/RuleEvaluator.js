const { evaluateUserFunction } = require("./UserDefinedFunctions");

function evaluateNode(node, userData) {
  if (node.nodeType === "operand") {
    const condition = node.value;

    if (condition.includes("isSenior")) {
      const age = userData.age;
      return evaluateUserFunction("isSenior", age);
    }

    if (condition.includes("age >")) {
      const ageThreshold = parseInt(condition.split(">")[1].trim(), 10);
      return userData.age > ageThreshold;
    } else if (condition.includes("age <")) {
      const ageThreshold = parseInt(condition.split("<")[1].trim(), 10);
      return userData.age < ageThreshold;
    } else if (condition.includes("department =")) {
      const department = condition.split("=")[1].trim().replace(/['"]+/g, "");
      return userData.department === department;
    }
  } else if (node.nodeType === "operator") {
    if (node.value === "AND") {
      return (
        evaluateNode(node.left, userData) && evaluateNode(node.right, userData)
      );
    } else if (node.value === "OR") {
      return (
        evaluateNode(node.left, userData) || evaluateNode(node.right, userData)
      );
    }
  }
  return false;
}

function evaluateRule(astRoot, userData) {
  return evaluateNode(astRoot, userData);
}

module.exports = { evaluateRule };
