alert('check this shit out');

function Calculator (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  alert('hey why didn tyou hack');
}

Calculator.prototype.calculateIt = function(operator){
  if(operator === "add") {
    return this.num1 + this.num2;
  } else if (operator === "subtract") {
    return this.num1 - this.num2;
  } else if (operator === "divide") {
    return this.num1 / this.num2;
  } else if (operator === "multiply") {
    return this.num1 * this.num2;
  } else {
    return "Please enter a valid input";
  }
};


exports.calcModule = Calculator;
