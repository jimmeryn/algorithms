const List = require("./dll");

let list = new List();
list.addEnd(1);
list.addEnd(2);
list.addEnd(3);
list.addEnd(4);
list.addEnd(5);
list.addEnd(6);
list.display();
console.log(`new`);
list.swap(5, 6);
list.reverse();
list.removeAt(0);
list.displayReverse();
