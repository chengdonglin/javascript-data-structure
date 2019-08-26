

class Queue{
    constructor(){
        this.item = []
    }
    enqueue(element){
        this.item.push(element)
    }
    dequeue(){
        return this.item.shift()
    }
    peek(){
        return this.item[0]
    }
    isEmpty(){
        return this.item.length==0
    }
    size(){
        return this.item.length
    }
    toString(){
        let resultString =''
        this.item.forEach(item=>{
            resultString += item + ' '
        })
        return resultString
    }
}

module.exports = Queue;