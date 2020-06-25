const BST = require("./bst");

let tree = new BST();
tree.addData(8);
tree.addData(3);
tree.addData(10);
tree.addData(1);
tree.addData(6);
tree.addData(4);
tree.addData(7);
tree.addData(14);
tree.addData(13);
tree.removeNode(10);
const root = tree.getRoot;
console.log(root);

tree.printBST(root);
