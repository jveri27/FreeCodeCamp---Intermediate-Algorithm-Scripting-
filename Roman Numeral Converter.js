Bonfire: Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

   var arrRom = ['I','IV', 'V', 'IX', 'X', 'XL', "L", "XC", "C", "CD", "D", "CM", "M"];
   var arrEquiv = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

function filt(filarr){
  return filarr <= this;
}

function rep(val, len){
  var b = len;
  var ret = "";
  while(val !== 0){
      val = val - arrEquiv[b];
      ret = ret + arrRom[b];
      var fil = arrEquiv.filter(filt, val);
      b = fil.length - 1;
  }
  return ret;
}

function convert(num) {
  var nToStr = num.toString();
  var nToStrL = nToStr.length - 1;
  var i = nToStrL;
  var c = 0;
  var con = "";
 
  for(i; i>= 0; i--){
    c += 1;
    var a = nToStr.charAt(i);
    var val = Number(a);
    var indval;
    var fil;
    var filL;
    if(c == 1){
      indval = arrEquiv.indexOf(val);
      if(indval != -1){
        con = arrRom[indval];
      }else{
        fil = arrEquiv.filter(filt, val);
        filL = fil.length - 1;
        con = rep(val, filL);
      }
    }else if(c == 2){
      val = val + "0";
      val = Number(val);
      indval = arrEquiv.indexOf(val);
      if(indval != -1){
        con = arrRom[indval] + con;
      }else{
        fil = arrEquiv.filter(filt, val);
        filL = fil.length - 1;
        con = rep(val, filL) + con;
      }
    }else if(c == 3){
      val = val + "00";
      val = Number(val);
      indval = arrEquiv.indexOf(val);
      if(indval != -1){
        con = arrRom[indval] + con;
      }else{
        fil = arrEquiv.filter(filt, val);
        filL = fil.length - 1;
        con = rep(val, filL) + con;
      }
    }else if(c == 4){
      val = val + "000";
      val = Number(val);
      indval = arrEquiv.indexOf(val);
      if(indval != -1){
        con = arrRom[indval] + con;
      }else{
        fil = arrEquiv.filter(filt, val);
        filL = fil.length - 1;
        con = rep(val, filL) + con;
      }
    }
  }
  return con;
  }

convert(891);
