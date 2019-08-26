const PriorityQueue = require('./PriorityQueue')

const prorityQueue = new PriorityQueue()

prorityQueue.enqueue('nba',1)
prorityQueue.enqueue('nlba',2)
prorityQueue.enqueue('cba',3)
prorityQueue.enqueue('wcba',5)
prorityQueue.enqueue('xxx',4)
console.log(prorityQueue.toString())
