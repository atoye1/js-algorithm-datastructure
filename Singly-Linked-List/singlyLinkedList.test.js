const SinglyLinkedList = require('./singlyLinkedList');
describe('SinglyLinkedList', () => {
  test('push should work correctly', () => {
    let sll = new SinglyLinkedList();
    sll.push(1);
    expect(sll.head.val).toBe(1);
    console.log(1)
    // expect(sll.head.next).toBe(sll.tail.val);
    expect(sll.tail.val).toBe(3);
    expect(sll.pop().val).toBe(1);
    console.log(2)
    console.log(3)
  })
})