function LNode (data){
  this.data = data;
  this.next = null;
}

function LinkedList( data ){
	this.first = null; 
}

LinkedList.prototype.insert = function(data, node){
  if(this.first === null){
    this.first = new LNode(data);
    return;
  }
  if(node === null ){
    return true;
  }
  if(this.insert(data,node.next)){
  	node.next = new LNode(data);
  	return; 
  }
}

var serialize = function(node, arr){
  debugger;
  if(node === null){
    return arr;
  }
  arr = node.data + arr*10;
  var temp = serialize(node.next, arr);
  return temp;
}

var init = function(){
  debugger;
  var linkedList = [2,1,5];
  var lList1 = new LinkedList();
  for(var val in linkedList){
    lList1.insert(linkedList[val], lList1.first);
  }
  var lList2 = new LinkedList();
  var linkedList2 = [2,4,5];
  for(var val in linkedList2){
    lList2.insert(linkedList2[val], lList2.first);
	}
  var arr1 = 0;
  var arr2 = 0;
  debugger;
  arr1 = serialize(lList1.first, arr1);
  arr2 = serialize(lList2.first, arr2);
  console.log(parseInt(arr1) + parseInt(arr2));
}

init();