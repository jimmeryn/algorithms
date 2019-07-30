/**
 * Node to use as vertex in graph
 */
class Node {
  constructor() {
    this.number = null;
    this.weight = null;
  }
}

/**
 * Graph implementation
 */
class Graph {
  constructor() {
    this.size = 0;
    this.AdjList = new Map();
  }

  /**
   * Adding new vertex to AdjList
   * @param {Number} v
   */
  addVertex(v) {
    this.AdjList.set(v, []);
    this.size++;
  }

  /**
   * Removing vertex from AdjList
   * @param {Number} v
   */
  removeVertex(v) {
    this.AdjList.delete(v);
    this.size--;
  }

  /**
   * Adding edge between src and destNode.number with weight (destNode.weight)
   * @param {Number} src
   * @param {Node} destNode
   */

  addEdge(src, destNode) {
    let n = new Node();
    n.number = src;
    n.weight = destNode.weight;

    let n2 = new Node();
    n2.number = destNode.number;
    n2.weight = destNode.weight;

    if (n.number !== n2.number) {
      this.AdjList.get(n.number).push(n2);
      this.AdjList.get(n2.number).push(n);
    }
  }

  /**
   * Removing edge beetween nodes nr: src and dest
   * @param {Number} src
   * @param {Number} dest
   */
  removeEdge(src, dest) {
    this.AdjList.get(src).pop(dest);
    this.AdjList.get(dest.number).pop(src);
  }

  /**
   * Printing graph to console
   */
  printGraph() {
    console.log(`Size of graph ${this.size}`);
    for (var [key, value] of this.AdjList) {
      let mess = "";
      for (let i = 0; i < value.length; i++) {
        mess += `${value[i].number}(${value[i].weight}) `;
      }
      console.log(`${key} => ${mess}`);
    }
  }

  /**
   * Create instance of a graph of size
   * @param {Number} graphSize
   */
  createBinTree(graphSize) {
    for (let i = 0; i < graphSize; i++) {
      this.addVertex(i);
    }

    let destNode = new Node();

    // Add edges to make binary tree
    for (let i = 0; 2 * i + 2 < this.size + 1; i++) {
      destNode.number = 2 * i + 1;
      destNode.weight = Math.ceil(Math.random() * 10);
      this.addEdge(i, destNode);
      if (2 * i + 2 < this.size) {
        destNode.number = 2 * i + 2;
        destNode.weight = Math.ceil(Math.random() * 10);
        this.addEdge(i, destNode);
      }
    }
  }

  /**
   * Adding extra, random edges to match given percent density of graph
   * @param {Number} percent (0-100)
   */
  addRandom(percent) {
    percent /= 100;
    const density =
      (percent * (this.size * (this.size - 1))) / 2 - this.size + 1;
    let destNode = new Node();

    for (let i = 0; i < density; i++) {
      destNode.number =
        Math.floor(Math.random() * (this.size - 1)) + Math.round(Math.random());
      let n =
        Math.floor(Math.random() * (this.size - 1)) + Math.round(Math.random());

      while (destNode.number === n) {
        n =
          Math.floor(Math.random() * (this.size - 1)) +
          Math.round(Math.random());
      }
      destNode.weight = Math.ceil(Math.random() * 10);
      this.addEdge(n, destNode);
    }
  }

  /**
   * Breadth-first search algorithm
   * @param {Number} start Number of starting vertex
   */
  bfs(start) {
    console.log(`BFS`);
    let visited = [];
    let arr = [];
    for (let i = 0; i < this.size; i++) visited[i] = false;
    arr.push(start);
    visited[start] = true;
    while (arr.length !== 0) {
      let queElem = arr.shift();
      let l = this.AdjList.get(queElem); // geting nodes from AdjList
      let list = [];

      console.log(queElem);

      for (let i = 0; i < l.length; i++) {
        list.push(l[i].number); // geting numbers from nodes (from AdjList)
      }

      for (let edge in list) {
        let n = list[edge];

        if (!visited[n]) {
          visited[n] = true;
          arr.push(n);
        }
      }
    }
  }

  /**
   * DFS utility function
   * @param {Number} start Starting vertex
   * @param {Array} visited Array of visited vertexes
   */
  dfsUtil(start, visited) {
    visited[start] = true;

    console.log(start);

    let neighbours = this.AdjList.get(start);
    let neighboursNr = [];
    for (let i = 0; i < neighbours.length; i++) {
      neighboursNr.push(neighbours[i].number); // geting numbers from nodes (from AdjList)
    }
    for (let i in neighboursNr) {
      let elem = neighboursNr[i];
      if (!visited[elem]) this.dfsUtil(elem, visited);
    }
  }

  /**
   * Depth-first search algorithm using recursion
   * @param {Number} start starting vertex
   */
  dfs(start) {
    console.log(`DFS`);

    let visited = [];
    for (let i = 0; i < this.size; i++) visited[i] = false;
    this.dfsUtil(start, visited);
  }

  /**
   * Depth-first search algorithm (iteration version) using stack instead of recursion
   * @param {Number} start starting vertex
   */
  dfsIter(start) {
    console.log(`DFS iteration`);
    let visited = [],
      stack = [];
    for (let i = 0; i < this.size; i++) visited[i] = false;
    stack.push(start);
    while (stack.length) {
      start = stack[stack.length - 1];
      stack.pop();
      console.log(start);
      visited[start] = true;
      for (let i = this.AdjList.get(start).length - 1; i >= 0; i--)
        if (!visited[this.AdjList.get(start)[i].number])
          stack.push(this.AdjList.get(start)[i].number);
    }
  }

  /**
   * Dijkstra algorithm
   * @param {Number} start starting vertex
   * @param {Number} stop  Optional- checking patch to given vertex from start
   */
  dijkstra(start, stop) {
    let flag = false;
    if (stop === undefined) {
      stop = this.AdjList.size - 1;
      flag = true;
    }
    let road = [];
    let visited = [];
    let queue = [];
    for (let i = 0; i < this.AdjList.size; i++) {
      road[i] = Infinity;
      visited[i] = false;
    }
    road[start] = 0;
    queue.unshift(start);
    while (queue.length !== 0 || visited[stop - 1] === false) {
      let node = queue.pop();
      this.AdjList.get(node).forEach(e => {
        if (visited[e.number] === false) {
          road[e.number] =
            road[node] + e.weight < road[e.number]
              ? road[node] + e.weight
              : road[e.number];
          visited[e.number] = true;
          queue.unshift(e.number);
        }
      });
    }
    if (!flag) return road[stop - 1];
    return road;
  }
}

module.exports = Graph;
