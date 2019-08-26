const Queue = require('./Queue')

const queue = new Queue()



queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue('d')
console.log(queue.toString())
queue.dequeue();
console.log(queue.toString())

console.log(queue.peek())