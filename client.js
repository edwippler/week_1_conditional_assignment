var a = 19;
var b = 9;
var c = 32;
var d = 9;
var e = '12 chicken wings';
var g = 'things 4'

function compareNumbers(numOne, numTwo) {
  numOne = parseFloat(numOne);
  numTwo = parseFloat(numTwo);
  var message = '';
  if (numOne > numTwo) {
    message += 'The first number is bigger!';
  }else if (numOne < numTwo) {
    message += 'The second number is bigger!';
  }else if (numOne == numTwo){
    message += 'The numbers are the same!';
  }else {
    message += 'One of these is not like the others?!?'
  }
  return message
}

console.log(compareNumbers(a, b));
console.log(compareNumbers(b, c));
console.log(compareNumbers(d, b));
console.log(compareNumbers((d + b), (a - 1)));

console.log(compareNumbers(e, d));
console.log(compareNumbers(b, e));
console.log(compareNumbers(e, 12));

console.log(compareNumbers(e, g));
