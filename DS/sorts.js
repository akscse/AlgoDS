/* -------------------------------------------------------------------- */
/* -------------------------Bubble Sort-------------------------------- */
/* -------------------------------------------------------------------- */
var bubbleSort = function () {
	//var inputValC = prompt('Input "," seperated int values');
	//var inputVal = inputValC.split(",");
	var inputVal = [2, 5, 1, 7, 4, 5, 9, 0];
	console.log("Before: " + inputVal);
	for (i = 0; i < inputVal.length; i++) {
		for (j = 0; j < inputVal.length - i - 1; j++) {
			if (parseInt(inputVal[j]) > parseInt(inputVal[j + 1])) {
				var temp = parseInt(inputVal[j]);
				inputVal[j] = parseInt(inputVal[j + 1]);
				inputVal[j + 1] = temp;
			}
		}
	}
	console.log(inputVal);
}

/* -------------------------------------------------------------------- */
/* -------------------------Insertion Sort----------------------------- */
/* -------------------------------------------------------------------- */

var insertionSort = function () {
	debugger;
	var a = [2, 5, 1, 7, 4, 5, 9, 3];
	for (var i = 1; i < a.length; i++) {
		var key = a[i];
		var j = i - 1;
		while (key < a[j] && j >= 0) {
			a[j + 1] = a[j];
			j--;
		}
		a[j + 1] = key;
	}
	console.log(a);
}

insertionSort();

/* -------------------------------------------------------------------- */
/* -------------------------Selection Sort----------------------------- */
/* -------------------------------------------------------------------- */

var selectionSort = function () {
	debugger;
	var arr = [2, 5, 1, 7, 4, 5, 9, 3];
	for (var i = 0; i < arr.length - 1; i++) {
		var m = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[m] > arr[j]) {
				m = j;
			}
		}
		var temp = arr[m];
		arr[m] = arr[i];
		arr[i] = temp;
	}
	console.log(arr);
}

/* -------------------------------------------------------------------- */
/* -------------------------Quick Sort--------------------------------- */
/* -------------------------------------------------------------------- */

var quickSort = function () {
	debugger;
	var arr = [2, 5, 1, 7, 4, 5, 9, 3];
	console.log("Before: " + arr);
	var sortedArr = QuickSort(arr, 0, arr.length - 1);
	console.log(arr);
}

var QuickSort = function (arr, start, end) {
	if (start < end) {
		var pivot = PartitionArr(arr, start, end);
		QuickSort(arr, start, pivot - 1);
		QuickSort(arr, pivot + 1, end);
	}
}

var PartitionArr = function (arr, start, end) {
	var pivotElement = arr[start];
	var pIndex = end;
	for (var i = end; i > start; i--) {
		if (arr[i] > pivotElement) {
			var temp = arr[i];
			arr[i] = arr[pIndex];
			arr[pIndex] = temp;
			pIndex--;
		}
	}
	var temp = arr[start];
	arr[start] = arr[pIndex];
	arr[pIndex] = temp;
	return pIndex;
}


/* -------------------------------------------------------------------- */
/* -------------------------Merge Sort--------------------------------- */
/* -------------------------------------------------------------------- */

var merger = function(arr, start, mid, end){
  var n1 = mid - start + 1;
  var n2 = end - mid;
  var l1 = []; 
  var l2 = [];
  for(var i=0; i<n1; i++){
    l1.push(arr[start + i]);
  }
  for(var j=0; j<n2; j++){
    l2.push(arr[mid + 1 + j]);
  }
  i = 0;
  j = 0;
  var k = start;
  while(i < n1 && j < n2){
    if(l1[i] < l2[j]){
      arr[k] = l1[i];
      i++;
    } else{
      arr[k] = l2[j];
      j++
    }
    k++;
  }
  
  while(i<n1){
    arr[k] = l1[i];
    i++;
    k++;
  }
  while(j<n2){
    arr[k] = l2[j];
    j++;
    k++;
  }
}

var mergeSort = function(arr, start, end){
  if(start<end){
    var mid = Math.floor((start + end)/2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);
    merger(arr, start, mid, end);
  }
}

var init = function(){
  debugger;
  var arr = [2, 5, 1, 7, 4, 5, 9];
  mergeSort(arr, 0, arr.length -1);
  console.log(arr);
}

init();