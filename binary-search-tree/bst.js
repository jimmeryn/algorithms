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
   * Finding minimum node starting from given Node
   * @param {*} node
   */
  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  /**
   * Removing given node from BST
   * @param {Node} node
   * @param {Number} key
   */
  removeNode(node, key) {
    if (root === null) return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
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
