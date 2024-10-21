const userDefinedFunctions = {
  isSenior: (age) => age >= 60,
  highIncome: (salary) => salary >= 100000,
};

function evaluateUserFunction(functionName, param) {
  if (userDefinedFunctions[functionName]) {
    return userDefinedFunctions[functionName](param);
  } else {
    throw new Error(`Undefined user function: ${functionName}`);
  }
}

module.exports = { evaluateUserFunction };
