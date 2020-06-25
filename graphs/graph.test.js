const Graph = require("./graph");

let graph = new Graph();
graph.createBinTree(15);
graph.addRandom(50);
graph.printGraph();
graph.bfs(0);
graph.dfs(0);
graph.dfsIter(0);
const start = 0;
const stop = 1;
console.log(
  `shortest path from ${start} to ${stop}: ${graph.dijkstra(start, stop)}`
);
let ms = "";
graph.dijkstra(start).forEach(e => (ms += `${e} `));
console.log(`Shortest path from ${start} to all elements:`);
console.log(ms);
