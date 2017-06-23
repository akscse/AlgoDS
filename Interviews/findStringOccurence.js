/* find occurrence of string */
var possibleStrings = function( input ){
	debugger;
	var counter = 0;
	for(var _i = 0; _i< input.length; _i++){
		if(dataDictionary[input[_i]] == undefined){
			counter = 0;
			break;
		}else{
			counter = 1;
		}
	}
	if(dataDictionary[input] != undefined){
		counter++;
	}
	if(counter == 0){
		alert("No Match");
	} else{
		alert("Total Match: " + counter);
	}
}

var dataDictionary = {
	0:"a",
	1:"b",
	2:"c",
	10:"k",
	25:"Z"
}