function BSNode( data ){
  this.data = data;
  this.left = null;
  this.right = null;
}

function BSTree(){
  this.first = null;
}

BSTree.prototype.insert = function(data, node){
	if(this.first === null){
    this.first = new BSNode(data);
    return;
  }
  
  if(node == null){
    return true;
  }
  if(data > node.data){
   var temp = this.insert(data, node.right);
    if(temp){
      node.right = new BSNode(data);
      return;
    }
  }else{
    var temp = this.insert(data, node.left);
    if(temp){
     node.left = new BSNode(data); 
     return;
    }
  }
}


BSTree.prototype.inOrderTraversal = function(node, serialize){
  if(node === null){
    return;
  }
  this.inOrderTraversal(node.left,serialize);
  console.log(node.data);
  serialize.push(node.data);
  this.inOrderTraversal(node.right,serialize);
}


BSTree.prototype.bSHeight = function(node){
  if(node === null){
    return 0;
  }
  var lHeight = this.bSHeight(node.left);
  var rHeight = this.bSHeight(node.right);
  if(lHeight > rHeight){
  	return(lHeight + 1);  
  } else{
    return(rHeight + 1);  
  }
  
}

var init = function(){
  debugger;
  var serializedTree = [5,3,7,6,2,8,4,1];
  var bSTree = new BSTree();
  for(var data in serializedTree){
    bSTree.insert(serializedTree[data], bSTree.first);
  }
  var serialize=[];
  bSTree.inOrderTraversal( bSTree.first, serialize );
  console.log(bSTree.bSHeight(bSTree.first));
}

init();