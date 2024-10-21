const { isValidAttribute } = require("./AttributeCatalog");
const { createOperandNode, createOperatorNode } = require("./Node");

function parseRuleString(ruleString) {
  try {
    if (!ruleString.includes("AND") && !ruleString.includes("OR")) {
      throw new Error("Invalid rule string: missing operators (AND/OR)");
    }

    const attributes = ["age", "department"];
    attributes.forEach((attr) => {
      if (!isValidAttribute(attr)) {
        throw new Error(`Invalid attribute: ${attr}`);
      }
    });

    const ageCondition = createOperandNode("age > 30");
    const departmentCondition = createOperandNode("department = 'Sales'");
    return createOperatorNode("AND", ageCondition, departmentCondition);
  } catch (error) {
    console.error("Error parsing rule string:", error.message);
    return null;
  }
}

module.exports = { parseRuleString };
