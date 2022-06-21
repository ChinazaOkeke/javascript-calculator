const value1 = prompt("Enter the First Value");
const value2 = prompt("Enter the Second Value");
const operatorVar = prompt("Enter the operator that you want to use (*, -, +, / )");


var result;
if (operatorVar == "*") {
  result = value1 * value2;
}
  else if (operatorVar == "-") {
  result = value1 - value2;
  }
  else if (operatorVar == "/") {
  result = value1 / value2;
  } 
  else if (operatorVar == "+") {
  result = parseInt(value1) + parseInt(value2);
  } 
else {
  alert("Invalid Operator");
}

alert("The result is : " + result);