const DoubleLinkedList = require('./DoublyLinkedList')

const doubleLink = new DoubleLinkedList()

doubleLink.append('aaa')
doubleLink.append('bbb')
doubleLink.append("ccc")
console.log(doubleLink.removeAt(2))
