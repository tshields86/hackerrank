/* https://www.hackerrank.com/challenges/ctci-contacts/problem */

class ContactCharNode {
  constructor(char = '*') {
    this.char = char;
    this.children = new Map();
    this.size = 0;
    this.contact = [];
  }
};

class ContactList extends ContactCharNode {
  constructor() {
    super();
  }

  add(contact) {
    let node = this;
    for (let char of contact) {
      if (!node.children.has(char)) {
        node.children.set(char, new ContactCharNode(char));
      }
      node = node.children.get(char);
      node.size++;
    }
    node.contact.push(contact);
  }

  find(string) {
    let node = this;
    for (let char of string) {
      if (node.children.has(char)) node = node.children.get(char);
      else return 0;
    }
    return node.size;
  }
};

const findPartialContacts = opContactsArray => {
  const contactList = new ContactList();
  opContactsArray.forEach(([op, value]) => {
    if (op === 'add') contactList[op](value);
    if (op === 'find') console.log(contactList[op](value));
  });
};