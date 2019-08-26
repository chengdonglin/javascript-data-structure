class QueueElement{
    constructor(element,priority){
        this.element = element
        this.priority = priority
    }
}

class PriorityQueue{
    constructor(){
        this.item =[]
    }
    //插入
    enqueue(element,priority){
        const queueElement = new QueueElement(element,priority)
        if(this.item.length==0){
            this.item.push(queueElement)
        }else{
            let add = false;
            for (let index = 0; index < this.item.length; index++) {
               if(queueElement.priority<this.item[index]){
                this.item.splice(index,0,queueElement)
                add = true
                break
               }
            }
            if (!add){
                this.item.push(queueElement)
            }
        }
    }
    dequeue(){
        return this.item.shift()
    }
    front(){
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
            resultString += item.element + ' '
        })
        return resultString
    }
}

module.exports = PriorityQueue;