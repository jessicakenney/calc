
$(document).ready(function() {
  $('#num').submit(function(e) {
    e.preventDefault();
    var num1 = parseInt($("input[name=num1]").val() );
    var num2 = parseInt($("input[name=num2]").val());
    var operator = $("input[name=operator]").val();
    var machine = new Calculator(num1, num2);
    console.log(operator);
    var calculateIt = machine.calculateIt(operator);
    console.log(calculateIt);
    $("#answer").text("Your answer is: " + calculateIt);
  });
});
