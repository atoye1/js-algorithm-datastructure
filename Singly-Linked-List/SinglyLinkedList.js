'use strict';
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
      this.head.next = this.tail; // pain point here!
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    let poppedNode = this.tail;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null
    }
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const shiftedNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return shiftedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = currentHead;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    const targetNode = this.get(index);
    if (targetNode) {
      targetNode.val = value;
      return true;
    };
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    const beforeNode = this.get(index - 1);
    const insertNode = new Node(val);
    insertNode.next = beforeNode.next;
    beforeNode.next = insertNode;
    if (index === this.length) this.tail = insertNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    var prevNode = this.get(index - 1);
    var removed = prev.next;
    prevNode.next = removed.next;
    this.length--;
    return removed
  }

  reverse() {
    if (this.length <= 1) return this;
    let currNode = this.head;
    this.head = this.tail;
    this.tail = currNode;
    let nextNode;
    let prevNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    return this;
  }

  print() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.val)
      currentNode = currentNode.next;
    }
    console.log(arr);
    return;
  }
}

// var singlyLinkedList = new SinglyLinkedList();
// assert(singlyLinkedList.head === null, "head of empty ssl should be null");
// assert(singlyLinkedList.tail === null, "tail of empty ssl should be null");
// assert(singlyLinkedList.length === 0, "lenght of empty ssl should be 0");
// singlyLinkedList.push(1);
// assert(singlyLinkedList.tail === singlyLinkedList.head, "head and tail should be same on 1 length ssl");
// assert(singlyLinkedList.head.next === singlyLinkedList.tail, "head of 1 length ssl should points tail");
// singlyLinkedList.pop();
// console.assert(singlyLinkedList.head === null, "head of empty ssl should be null");
// console.assert(singlyLinkedList.tail === null, "tail of empty ssl should be null");
// console.assert(singlyLinkedList.length === 0, "lenght of empty ssl should be 0");

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25).pop();
singlyLinkedList.print();
singlyLinkedList.reverse(); // true
singlyLinkedList.print();
// console.log(singlyLinkedList);
// singlyLinkedList.insert(100, 12); // false
// singlyLinkedList.length // 5
// singlyLinkedList.head.val // 5
// singlyLinkedList.head.next.val // 10
// singlyLinkedList.head.next.next.val // 12
// singlyLinkedList.head.next.next.next.val // 15
// singlyLinkedList.head.next.next.next.next.val // 20
// console.log(singlyLinkedList);

// singlyLinkedList.insert(5, 25); // true
// console.log(singlyLinkedList);
// singlyLinkedList.head.next.next.next.next.next.val //25
// singlyLinkedList.tail.val // 25

module.exports = SinglyLinkedList