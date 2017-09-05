(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Calculator = require("./../js/calculator.js").calcModule;

$(document).ready(function() {
  $('#num').submit(function(e) {
    e.preventDefault();
    var num1 = parseInt($("input[name=num1]").val() );
    var num2 = parseInt($("input[name=num2]").val());
    var operator = $("input[name=operator]").val();

    var machine = new Calculator(num1, num2);
    alert('hey guys')

    var calculateIt = machine.calculateIt(operator);

    $("#answer").text("Your answer is: " + calculateIt);
  });
});

},{"./../js/calculator.js":1}]},{},[2]);
