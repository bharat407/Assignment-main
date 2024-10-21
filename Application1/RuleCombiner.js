const { createOperatorNode } = require("./Node");

function combineRules(rules, combineOp) {
  if (rules.length === 0) return null;
  if (rules.length === 1) return rules[0];

  let combinedRule = rules[0];
  for (let i = 1; i < rules.length; i++) {
    combinedRule = createOperatorNode(combineOp, combinedRule, rules[i]);
  }
  return combinedRule;
}

module.exports = { combineRules };
