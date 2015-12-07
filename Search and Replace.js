Bonfire: Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  var toBeRep = before;
  var str2;
  var up = after.charAt(0).toUpperCase();
  
  if(toBeRep.charAt(0).toUpperCase() == toBeRep.charAt(0)){
      var str1 = after.split('');
      str1.splice(0, 1, up);
      str2 = str1.join('');
  }else{
    str2 = after;
  }
  
  
  var rep = str.replace(toBeRep, str2);
  
  
 return rep;
}

myReplace("His name is Tom", "Tom", "john");
