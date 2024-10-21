class Node {
  constructor(nodeType, value = null, left = null, right = null) {
    this.nodeType = nodeType;
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function createOperandNode(value) {
  return new Node("operand", value);
}

function createOperatorNode(operator, leftNode, rightNode) {
  return new Node("operator", operator, leftNode, rightNode);
}

module.exports = { Node, createOperandNode, createOperatorNode };
