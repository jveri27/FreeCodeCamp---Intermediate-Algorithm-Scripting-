Bonfire: Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the original arrays.

function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  //combined the two arrays
  //newArr = arr1.concat(arr2);
  var i = arr1.length - 1;
  
  for(i; i >= 0; i--){
    var a = arr1[i];
    var res = arr2.indexOf(a);
    if(res == -1){
      var c = arr1[i];
      newArr.push(c);
    }
  }
  
  var j = arr2.length - 1;
  for(j; j >= 0; j--){
    var b = arr2[j];
    var res1 = arr1.indexOf(b);
    if(res1 == -1){
      var d = arr2[j];
      newArr.push(d);
    }
  }
  
  return newArr;
}

diff([1, "calf", 3, 4], [1, "calf", 3, "piglet"]);
