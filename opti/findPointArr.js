(function(arr){
  if(arr.length == 0){
    console.log("No such point");
  }
  var lsum = 0;
  var rsum = 0;
  var lcount = 0;
  var rcount = arr.length;
  for(var i = 0; i<arr.length; i++){
    if(lcount < rcount){
      if(lsum <= rsum){
        lsum += arr[lcount++];
      } else{
        rsum += arr[--rcount];
      }
      console.log(`i: ${i} ---  lcount: ${lcount}  ---- rcount: ${rcount} ---- ${arr.toString()}`);
      console.log(`lsum: ${lsum} --- rsum: ${rsum}`);
    }
  }
})([0,1,2,3,1,1,2,1,1,0]);

//[1,2,3,1,1,2,1]
//[]
//[1]
//[1,1]
//[1,0,1]
