function findKm() {
  var num1 = document.getElementById("num1").value;

  var num2 = document.getElementById("num2").value;

  var km = num1 * 1.609344;

  var sum = Number(num1);
  Number(num2);
  document.getElementById("sum").innerHTML = km;

  document.getElementById("sum").innerHTML = " " + km;
}

function findProd() {
  var num3 = document.getElementById("num3").value;

  var num4 = document.getElementById("num4").value;

  var product = num3 * num4;

  document.getElementById("product").innerHTML = " " + product;
}

function findQuotient() {
  var num5 = document.getElementById("num5").value;

  var num6 = document.getElementById("num6").value;

  var quotient = num5 / num6;

  document.getElementById("quotient").innerHTML = " " + quotient;
}

