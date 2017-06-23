function printInterLeave(s1,s2,l1,l2,soFar){
  debugger;
  if(l1 == s1.length && l2 == s2.length){
   console.log(soFar);
    return;
  }
  if(l1<s1.length){
    printInterLeave(s1,s2,parseInt(l1 + 1),l2, soFar + s1[l1]);
  }
   if(l2<s2.length){
    printInterLeave(s1,s2,l1, parseInt(l2 + 1), soFar + s2[l2]);
  }
}

var init = function(){
  var str1 = 'a';
  var str2 = 'b';
  var soFar = '';
  printInterLeave(str1,str2,0,0, soFar);
}

init();