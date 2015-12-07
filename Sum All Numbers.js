/*Bonfire: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  max -= 1;
  
  for(max; max > min; max--){
    arr.push(max);
  }
  
  var sum = arr.reduce(function(a, b){
    return a + b;
  });
  
  return sum;
}

sumAll([1, 4]);
