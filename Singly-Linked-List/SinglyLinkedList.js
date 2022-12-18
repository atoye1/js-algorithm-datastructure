'use strict';
const assert = (condition, message) => {
  const assertionError = new Error(message);
  assertionError.name = 'assertionError'
  if (!condition) throw assertionError;
  return;
}

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
      // this.head.next = this.tail; // pain point here!
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this.length++;
    return this.length;
  }
  pop2() {
    if (this.length === 0) return undefined;
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    let returnNode = this.tail;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return returnNode;
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
}

const singlyLinkedList = new SinglyLinkedList();
assert(singlyLinkedList.head === null, "head of empty ssl should be null");
assert(singlyLinkedList.tail === null, "tail of empty ssl should be null");
assert(singlyLinkedList.length === 0, "lenght of empty ssl should be 0");
singlyLinkedList.push(1);
assert(singlyLinkedList.tail === singlyLinkedList.head, "head and tail should be same on 1 length ssl");
assert(singlyLinkedList.head.next === singlyLinkedList.tail, "head of 1 length ssl should points tail");
singlyLinkedList.pop();
console.assert(singlyLinkedList.head === null, "head of empty ssl should be null");
console.assert(singlyLinkedList.tail === null, "tail of empty ssl should be null");
console.assert(singlyLinkedList.length === 0, "lenght of empty ssl should be 0");