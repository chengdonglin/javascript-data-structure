/**
 * 栈的封装
 * push(element):添加一个元素到栈顶位置
 * pop():移除栈顶元素,同时返回被移除的元素
 * peek():返回栈顶的元素,不对栈做任何修改
 * isEmpty():判断栈里面算法有数据
 * sie():返回栈的元素
 * toString():将栈结构的内容以字符串形式返回
 */

// function Stack(){
//     this.item=[]
// }
// Stack.prototype.push = function(element){
//     this.item.push(element)
// }
// Stack.prototype.pop = function(){
//     return this.item.pop()
// }
// Stack.prototype.peek=function(){
//     return this.item[this.item.length -1]
// }
// Stack.prototype.isEmpty = function(){
//     return this.item.length == 0
// }
// Stack.prototype.size = function(){
//     return this.item.length
// }
// Stack.prototype.toString = function(){
//     var resultString=''
//     this.item.forEach(ele=>{
//         resultString+=ele + ' '
//     })
//     return resultString
// }

class Stack{
    constructor(){
        this.item=[]
    }
    push(element){
        this.item.push(element)
    }
    pop(){
        return this.item.pop()
    }
    peek(){
        return this.item[this.item.length -1]
    }
    isEmpty(){
        return this.item.length == 0
    }
    size(){
        return this.item.length
    }
    toString(){
        var resultString=''
        this.item.forEach(ele=>{
            resultString+=ele + ' '
        })
        return resultString
    }
}

module.exports = Stack;
