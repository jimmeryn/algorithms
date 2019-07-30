/**
 * Node class implementation for BST
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Binary search tree implementation
 */
class BST {
  constructor() {
    this.root = null;
  }

  /**
   * get root of bst
   * @returns {Node} Root node
   */
  get getRoot() {
    return this.root;
  }

  /**
   * Adding new node to BST
   * @param {Node} node
   * @param {Node} newNode
   */
  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.addNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.addNode(node.right, newNode);
    }
  }

  /**
   * Adding data to BST
   * @param {Number} data
   */
  addData(data) {
    let node = new Node(data);
    if (this.root === null) this.root = node;
    else this.addNode(this.root, node);
  }

  /**
   * Removing given node from BST
   * @param {*} node
   * @param {*} key
   */
  removeNode(node, key) {
    if (root === null) return null;
    else if (key < node.data) {
    }
  }

  /**
   * Removing given data from BST
   * @param {Number} data
   */
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  /**
   * Printing BST to console starting from given node
   * @param {Node} node starting node
   */
  printBST(node) {
    if (node !== null) {
      this.printBST(node.left);
      console.log(node.data);
      this.printBST(node.right);
    }
  }
}

module.exports = BST;
