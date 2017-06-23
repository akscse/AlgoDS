function Node(data){
  this.data = data;
  this.left = null;
  this.right = null;
}

var BFS = function(){
  this.queue = [];
}

BFS.prototype.search = function( node ){
  if(node === null){
    return;
  }
  this.queue.unshift(node);
  while(!this.queue.length<1){
    var temp = this.queue.pop();
    console.log(temp.data);
    if(temp.left != null ){
      this.queue.unshift(temp.left);
    }
    if(temp.right != null){
      this.queue.unshift(temp.right);
    }
  }
}



var init = function(){
  debugger;
  var root = new Node(5);
  root.left = new Node(3);
  root.left.left = new Node(1);
  root.left.right = new Node(2);
  root.right = new Node(8);
  root.right.left = new Node(7);
  root.right.right = new Node(8);
	var bfs = new BFS();
  bfs.search(root);
}

init();