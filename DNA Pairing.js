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
