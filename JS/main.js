var P_Result = document.getElementById("result");
function add() {
  // Get the values of the input fields
  var number1 = Number(document.getElementById("number1").value);
  var number2 = Number(document.getElementById("number2").value);

  // Perform the calculation
  var result = number1 + number2;

  // Display the result in P_Result element
  P_Result.innerHTML = "Result: " + result;
}

function subtract() {
  var number1 = Number(document.getElementById("number1").value);
  var number2 = Number(document.getElementById("number2").value);

  var result = number1 - number2;

  P_Result.innerHTML = "Result: " + result;
}

function multiply() {
  var number1 = Number(document.getElementById("number1").value);
  var number2 = Number(document.getElementById("number2").value);

  var result = number1 * number2;

  P_Result.innerHTML = "Result: " + result;
}

function divide() {
  var number1 = Number(document.getElementById("number1").value);
  var number2 = Number(document.getElementById("number2").value);
  number2 == 0
    ? (P_Result.innerHTML = "Error: can't divide by 0.")
    : (P_Result.innerHTML = "Result: " + number1 / number2);
}
