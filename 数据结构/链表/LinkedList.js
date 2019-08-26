
/**
 * 单向链表
 */

class Node{
    /**
     * 节点类
     * @param {*} data 
     */
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    //属性
    constructor(){
        this.head = null
        this.length =0
    }
    /**
     * 往末尾追加节点
     * @param {*} element 
     */
    append(element){
        //创建新节点
        const newNode = new Node(element)
        //判断是否添加的是第一个节点
        if(this.length==0){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){//找到最后一个节点
                current=current.next
            }
            //最后节点的next指向新节点
            current.next = newNode
        }
        this.length +=1
    }
    /**
     * 返回节点内容字符串
     */
    toString(){
        //定义变量
        let current = this.head
        let ListString =''
        while(current){
            ListString+=current.data + ' '
            current = current.next
        }
        return ListString;
    }
    /**
     * 指定位置添加节点
     * @param {*} position 
     * @param {*} data 
     */
    insert(position,data){
        //越界判断
        if(position<0 || position>this.length) return false;
        // 创建节点
        const newNode = new Node(data)
        // 判断插入的位置是否是第一个
        if(position==0){
            newNode.next=this.head  //原来第一个
            this.head = newNode
        }else{
            let index = 0
            let previous = null
            let current=this.head
            while(index++ < position){
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }
        this.length +=1
        return true
    }
    /**
     * 返回指定位置的数据
     * @param {*} position 
     */
    get(position){
        //越界判断
        if(position<0||position>=this.length) return null
        // 获取对应value
        let current = this.head
        let index=0;
        while(index<position){
            current=current.next
            index++
        }
        return current.data
    }
    /**
     * 返回指定元素的下标
     * @param {*} element 
     */
    indexOf(element){
        let current = this.head
        let index =0;
        while( current){
            if(current.data == element){
                return index;
            }
            current = current.next
            index += 1
        }
        return -1;
    }
    /**
     * 修改指定位置节点的数据
     * @param {*} position 
     * @param {*} element 
     */
    update(position,element){
        if(position<0 || position >= this.length) return false
        let current = this.head
        let index =0
        while(index < position){
            current = current.next
            index +=1
        }
        //讲position位置的node的data改为element
        current.data = element
        return true
    }
    /**
     * 删除指定位置的节点
     * @param {*} position 
     */
    removeAt(position){
        if(position<0 || position>=this.length) return null
        let current = this.head
        //是否删除第一个
        if(position==0){
            this.head = this.head.next
        }else{
            let index = 0
            let previous = null;
            while(index < position){
                previous = current
                current = current.next
                index ++
            }
            //前一个节点的next指向current的next即可
            previous.next = current.next
        }
        this.length -=1
        return current.data
    }
    /**
     * 删除指定元素
     * @param {*} element 
     */
    remove(element){
        //获取元素在列表的位置
        const position = this.indexOf(element)
        return this.removeAt(position)
    }
    size(){
        return this.length
    }
    isEmpty(){
        return this.length == 0
    }
}



module.exports = LinkedList;