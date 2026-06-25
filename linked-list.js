class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  print() {
    let current = this.head;
    let values = [];

    while (current.next) {
      values.push(current.value);
      current = current.next;
    }

    values.push(current.value);

    return values.join(" -> ");
  }

  prepend(value) {
    const current = this.head;

    const newNode = new Node(value);

    this.head = newNode;
    this.head.next = current;
  }

  insertAt(value, postion) {
    const newNode = new Node(value);

    if (postion === 0) {
      let previousHead = this.head;
      this.head = newNode;
      this.head.next = previousHead;
    } else {
      let index = 0;
      let current = this.head;
      let previous = null;

      while (index < postion && current) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = newNode;
      newNode.next = current;
    }
  }

  deleteNode(value) {
    if (this.head) return;
  }
}

const newList = new LinkedList();
newList.append(10);
newList.append(20);
newList.append(30);
newList.prepend(5);
newList.insertAt(15, 2);
newList.insertAt(40, 0);
console.log(newList.print());
