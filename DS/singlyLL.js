/* ---------------------------------- */
/* Singly Linked List */
/* ---------------------------------- */

var NodeVal = function( data ){
	this.data= data;
	this.next= null;
}

var Singly = function(){
	this.first = null;
}

Singly.prototype.insertNode = function(data){
	var trace = this.first;
	var newNode = new NodeVal(data);
	var tempNode = new NodeVal();
	if(this.first == null){
		this.first = newNode;
	} else{
		while(trace != null){
			tempNode = trace;
			trace = trace.next;
		}
		tempNode.next = newNode;
	}
}

Singly.prototype.deleteNode = function( index ){
	var counter = 0;
	if( this.first == null || index < 1 || index > this.length() ){
		console.log("Operation not feasible");
		return;
	} else {
		this.trace = this.first;
		var tempNode;
		if(index == 1){
			this.first = this.first.next;
			return;
		} else {
			while(this.trace != null){
				counter++;
				tempNode = this.trace;
				this.trace = this.trace.next;
				if(counter == index - 1){
					tempNode.next = this.trace.next;
					return;
				}
			}
		}
	}
}

Singly.prototype.length = function(){
	this.trace = this.first;
	var counter = 0;
	if(this.first == null){
		return -1;
	}else{
		while(this.trace != null){
			counter++;
			this.trace = this.trace.next;
		}
	}
	return counter;
}

Singly.prototype.displayLL = function(){
	if(this.first == null){
		console.log("Link List is empty");
		return;
	}else{
		console.log("LL elements");
		var trace = this.first;
		while(trace != null){
			console.log(trace.data);
			trace = trace.next;
		}
		return;
	}
}

/* inserting element using recursion */
Singly.prototype.insertRec= function( data ){
	if(this.first == null){
		var newNode = new NodeVal( data );
		this.first = newNode;
		traceNode = this.first;
		return;
	} else if(traceNode.next == null){
		var newNode = new NodeVal( data );
		traceNode.next = newNode;
		return;
	}
	traceNode = traceNode.next;
	this.insertRec( data );
}

var nodeToStirng = function( nodeVal ){
	if( nodeVal == null ){
		return 0;
	}
	var val = nodeToStirng(nodeVal.next);
	return nodeVal.data + val*10;
}

var mainFunc = function(){
	debugger;
	var nodeCheck = new Singly();
	nodeCheck.displayLL();
	console.log("Length: " + nodeCheck.length());
	nodeCheck.insertNode(1);
	console.log("Length: " + nodeCheck.length());
	nodeCheck.insertNode(2);
	nodeCheck.insertNode(3);
	nodeCheck.insertNode(4);
	console.log("Length: " + nodeCheck.length());
	nodeCheck.displayLL();
	nodeCheck.deleteNode(prompt("Enter Index"));
	console.log("Length: " + nodeCheck.length());
	nodeCheck.displayLL();
	
	var node2 = new Singly();
	node2.insertNode(4);
	node2.insertNode(3);
	node2.insertNode(2);
	node2.displayLL();
	console.log(nodeToStirng(nodeCheck.first));
	console.log(nodeToStirng(node2.first));
	console.log(nodeToStirng(nodeCheck.first) + nodeToStirng(node2.first));
	
}