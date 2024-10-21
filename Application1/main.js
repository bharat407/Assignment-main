const { parseRuleString } = require("./RuleParser");
const { evaluateRule } = require("./RuleEvaluator");
const { modifyOperator, modifyOperand } = require("./RuleModifier");

const userData1 = {
  age: 35,
  department: "Sales",
  salary: 60000,
  experience: 3,
};
const userData2 = {
  age: 22,
  department: "Marketing",
  salary: 30000,
  experience: 1,
};

let rule1 = parseRuleString("(age > 30 AND department = 'Sales')");
let result1 = evaluateRule(rule1, userData1);
console.log("User 1 result:", result1);

rule1 = modifyOperator(rule1, "OR");
result1 = evaluateRule(rule1, userData1);
console.log("User 1 result after modification:", result1);

let rule2 = parseRuleString("(isSenior(age) OR department = 'Marketing')");
let result2 = evaluateRule(rule2, userData2);
console.log("User 2 result:", result2);
