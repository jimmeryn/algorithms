/**
 * Node for DLL
 */
class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Double linked list implementation
 */
class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Check if list is empty
   * @returns {true} if list is empty
   * @returns {false} otherwise
   */
  isEmpty() {
    return this.length <= 0;
  }

  /**
   * Add node at the end of the list
   * @param {Number} data Value of added node
   */
  addEnd(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      node.prev = null;
      node.next = null;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  /**
   * Add node at the beginning of the list
   * @param {Number} data Value of added node
   */
  addFront(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      node.prev = null;
      node.next = null;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /**
   * Add node at given index to the list
   * @param {Number} data Value of added node
   * @param {Number} index index of added node
   */
  addAt(data, index) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      node.prev = null;
      node.next = null;
    } else {
      let current = index < this.length / 2 ? this.head : this.tail;
      const i = index < this.length / 2 ? 1 : -1;
      let counter = index < this.length / 2 ? 0 : this.length;

      while (current) {
        if (i === 1) current = current.next;
        else current = current.prev;
        if (counter === index) {
          node.prev = current.prev;
          node.next = current;
          current.prev.next = node;
          current.prev = node;
        }
        counter += i;
      }
    }
    this.length++;
  }

  /**
   * Remove last node from list
   */
  remove() {
    this.tail = this.tail.prev;
    this.tail.prev = null;
    this.length--;
  }

  /**
   * Remove node with given index from list
   * @param {Number} index
   */
  removeAt(index) {
    if (this.isEmpty()) {
    } else {
      let current = index < this.length / 2 ? this.head : this.tail;
      const i = index < this.length / 2 ? 1 : -1;
      let counter = index < this.length / 2 ? 0 : this.length;

      while (current) {
        if (i === 1) current = current.next;
        else current = current.prev;
        if (counter === index) {
          node.prev = current.prev;
          node.next = current;
          current.prev.next = node;
          current.prev = node;
        }
        counter += i;
      }
    }
    this.length--;
  }

  /**
   * Reverse whole list. First element becomes last and so on.
   */
  reverse() {
    let current = this.head;
    let next = new Node();
    let previous = new Node();
    while (current) {
      next = current.next;
      current.prev = next;
      current.next = previous;
      previous = current;
      current = current.prev;
    }
    this.tail = this.head;
    this.head = previous;
  }

  /**
   * Swapping 2 nodes with given values (first found value beggining from head)
   * @param {Number} one value of first node to swap
   * @param {Number} two value of second node to swap
   */
  swap(one, two) {
    let current = this.head;
    let first = current;
    let second = current;
    while (current !== this.tail) {
      if (first.data !== one || second.data !== two) {
        if (first.data !== one) {
          first = current.next;
        } else if (second.data !== two) {
          second = current.next;
        }
        current = current.next;
      } else {
        break;
      }
    }
    if (first.data === this.tail.data && this.tail.data !== one) {
      return;
    }
    if (second.data === this.tail.data && this.tail.data !== two) {
      return;
    }
    let firstData = first.data;
    first.data = second.data;
    second.data = firstData;
  }

  /**
   * Displaying list (loging it in console in order from head to tail)
   */
  display() {
    let current = this.head;
    console.log(current.data);
    while (current !== this.tail) {
      current = current.next;
      console.log(current.data);
    }
  }

  /**
   * Displaying list in revesrse order (loging it in console from tail to head)
   */
  displayReverse() {
    let current = this.tail;
    console.log(current.data);
    while (current !== this.head) {
      current = current.prev;
      console.log(current.data);
    }
  }
}

module.exports = List;
