/*Bonfire: Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/
function translate(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var strArr = str.split('');
  var ind;
  var sub;
  for(var i = 0; i < strArr.length; i++){
    ind = vowels.indexOf(strArr[i]);
    //run this only when a vowel found at first char
    if(ind != -1 && i === 0){
      //found vowels
      sub = str.substr(i);
      str = sub + "way";
      break;
    }else if(ind != -1){
      //consonant at first char
      var first = str.substr(-strArr.length, i);
      sub = str.substr(i);
      str = sub + first +"ay";
      break;
    }
  }
  return str;
}

translate("eight");
