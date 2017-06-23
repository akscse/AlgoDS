function NodeTrie(char) {
	this.charMap = [];
	this.charMap[char] = null;
	this.endWord = true;
}

function Trie() {
	this.first = new NodeTrie('');
}

Trie.prototype.insertWord = function (word) {
	debugger;
	var trace = this.first;
	word = word.split("");
	var char = word.shift();
	if (Object.keys(this.first.charMap).indexOf("") == 0) {
		this.first.charMap[char] = new NodeTrie('');
		this.first.endWord = false;
		delete this.first.charMap[""];
	} else if (Object.keys(this.first.charMap).indexOf(char) == -1) {
		this.first.charMap[char] = new NodeTrie('');
		this.first.endWord = false;
	}
	while (word.length > 0) {
		if (Object.keys(trace.charMap[char].charMap).indexOf(word[0]) != -1) {
			trace = trace.charMap[char];
			char = word.shift();
		} else {
			var char2 = word.shift();
			trace.charMap[char].charMap[char2] = new NodeTrie('');
			trace = trace.charMap[char];
			trace.endWord = false;
			delete trace.charMap[""];
			char = char2;
		}
	}
}

var init = function () {
	debugger;
	var words = 'abc,abgl,cdf,abcd,lmn'.split(',');
	var word1 = words[0].split("");
	var trie1 = new Trie();
/* 	trie1.insertWord(words[0]);
	trie1.insertWord(words[1]);
	trie1.insertWord(words[2]);
	trie1.insertWord(words[3]);
	trie1.insertWord(words[4]); */
	for(var val in words){
		trie1.insertWord(words[val]);
	}
}

init();