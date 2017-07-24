//没有用到
function Vertex(lable, wasVisited) {
	this.label = label;
	this.wasVisited = wasVisited;
}

function Graph(v) {
	this.vertices = v;
	this.vertexList = [];
	this.edges = 0;
	this.adj = [];
	for(var i = 0; i < this.vertices; i++) {
		this.adj[i] = [];
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.marked = [];
	for(var i = 0; i < this.vertices; i++) {
		this.marked[i] = false;
	}
	this.bfs = bfs;
	this.edgeTo = [];
	this.pathTo = pathTo;
	this.hasPathTo = hasPathTo;
	this.topSortHelper = topSortHelper;
	this.topSort = topSort;
	this.showGraphByName = showGraphByName;
}

function addEdge(v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edge++;
}

function showGraph() {
	for(var i = 0; i < this.vertices; i++) {
		var s = i + "->";
		for(var j = 0; j < this.vertices; j++) {
			if(this.adj[i][j] != undefined) {
				s = s + this.adj[i][j] + " ";
			}
		}
		console.log(s);
	}
}

function dfs(v) {
	this.marked[v] = true;
	if(this.adj[v] != undefined) {
		console.log("Visited vertex: " + v);
	}
	for(var w in this.adj[v]) {
		if(!this.marked[this.adj[v][w]]) {
			this.dfs(this.adj[v][w]);
		}
	}
}

function bfs(s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s);
	while(queue.length > 0) {
		var v = queue.shift();
		if(this.adj[v] != undefined) {
			console.log("Visited vertex: " + v);
		}
		for(var w in this.adj[v]) {
			var ww = this.adj[v][w];
			if(!this.marked[ww]) {
				this.edgeTo[ww] = v;
				this.marked[ww] = true;
				queue.push(ww);
			}
		}
	}
}

function hasPathTo(v) {
	return this.marked[v];
}

function pathTo(v) {
	var source = 0;
	if(!this.hasPathTo(v)) {
		return undefined;
	}
	var path = [];
	for(var i = v; i != source; i = this.edgeTo[i]) {
		path.push(i);
	}
	path.push(source);
	return path;
}

function topSort() {
	var stack = [];
	var visited = [];
	for(var i = 0; i < this.vertices; i++) {
		visited[i] = false;
	}
	for(var i = 0; i < this.vertices; i++) {
		if(visited[i] == false) {
			this.topSortHelper(i, visited, stack);
		}
	}
	for(var i = 0; i < stack.length; i++) {
		if(stack[i] != undefined) {
			console.log(this.vertexList[stack[i]]);
		}
	}
}

function topSortHelper(v, visited, stack) {
	visited[v] = true;
	stack.push(v);
	for(var w in this.adj[v]) {
		if(!visited[this.adj[v][w]]) {
			this.topSortHelper(this.adj[v][w], visited, stack)
		}
	}
}

function showGraphByName() {
	for(var i = 0; i < this.vertices; i++) {
		var s = this.vertexList[i] + "->";
		for(var j = 0; j < this.vertices; j++) {
			if(this.adj[i][j] != undefined) {
				s = s + this.vertexList[this.adj[i][j]] + ";";
			}
		}
		console.log(s);
	}
}