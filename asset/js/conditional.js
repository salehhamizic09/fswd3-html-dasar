// if
let response = prompt("1 + 1 =");
if (response == 2) {
  alert("correct!");
}
// if-else
let responsee = prompt("1 + 1 =");
if (responsee == 2) {
  alert("correct!");
} else {
  alert("wrong!");
}
// else if
let responseee = prompt("1 + 1 =");
if (responseee == 2) {
  alert("correct!");
} else if (responseee < 2) {
  alert("Too low!");
} else {
  alert("Too hight!");
}
// switch
let color = "red";

switch (color) {
  case "red":
    alert("i love red!");
    break;
  case "blue":
    alert("i love blue!");
    break;
  default:
    alert("i dont know what color it is!");
    break;
}
