//program for power of 2 power n with O(logn) time complexit
//
var init = function(){
  debugger;
  var prod = parseInt(prompt("Enter Prod"));
  var power = parseInt(prompt("Enter power"));
  alert(powerN(prod, power));
}


function powerN(prod, power){
  if(power === 0){
    return 1;
  }
  
  var temp = powerN(prod, parseInt(power/2));
  if(power%2 === 0){
    return (temp*temp);
  } else{
    return(temp*temp*prod);
  }
}

init();