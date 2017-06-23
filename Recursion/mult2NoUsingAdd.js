var multiTwoNum = function ( a, b ){
  debugger;
  if(b==1){
    return a;
  }
  return (multiTwoNum(a, b-1 ) + a);
}

console.log(multiTwoNum(2,3));