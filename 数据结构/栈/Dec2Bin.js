var Stack = require('./stack.js');


function dec2bin(decNumber){
    var stack = new Stack();
    while(decNumber >0){
        stack.push(decNumber%2)
        decNumber = Math.floor(decNumber / 2)
    }
    var binaryString = ''
    while(!stack.isEmpty()){
        binaryString += stack.pop()
    }
    return binaryString
}

console.log(dec2bin(100))

