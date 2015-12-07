/*Bonfire: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

//initialize DNA strand pairs
  var arr = ['A', 'T', 'C', 'G'];
  var equiArr = ['T', 'A', 'G', 'C'];
 
//get the index of the strand
function check(strand){
  var ind =  arr.indexOf(strand);
  return ind;
}

function pair(str) {
  var strArr = str.split('');
  var len = str.length;
  var arr1 = [];
  var arr2 = [];
  
  for(var i = 0; i < len; i++){
    //return the index of character and its pair
      var indx = check(strArr[i]);
      //push the values to first array;
      arr1.push(arr[indx]);
      arr1.push(equiArr[indx]);
      //push the array into the 2nd array
      arr2.push(arr1);
    //clear the contents of the 1st array
      arr1 = [];
  }
  return arr2;
}

pair("GCG");
