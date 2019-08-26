const BinarySearchTree = require('./BinarySearchTree')

const tree = new BinarySearchTree()

tree.insert(11)
tree.insert(9)
tree.insert(15)
tree.insert(7)
tree.insert(4)

let resultString = ""
tree.midOrderTraversal(function(key){
    resultString += key + " "
})
console.log(resultString)