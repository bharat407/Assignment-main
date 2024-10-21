function modifyOperator(node, newOperator) {
  if (node.nodeType === "operator") {
    node.value = newOperator;
    return node;
  } else {
    throw new Error("Node is not an operator");
  }
}

function modifyOperand(node, newValue) {
  if (node.nodeType === "operand") {
    node.value = newValue;
    return node;
  } else {
    throw new Error("Node is not an operand");
  }
}

function addSubExpression(parentNode, newNode, operator) {
  if (parentNode.nodeType === "operator") {
    return createOperatorNode(operator, parentNode, newNode);
  } else {
    throw new Error("Parent node is not an operator");
  }
}

module.exports = { modifyOperator, modifyOperand, addSubExpression };
