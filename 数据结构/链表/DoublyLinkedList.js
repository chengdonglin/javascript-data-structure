
/**
 *
 * 节点
 * @class Node
 */
class Node{
    constructor(data){
        this.data = data
        this.prex = null
        this.next = null
    }
}


/**
 *双向链表
 *
 * @class DoublyLinkedList
 */
class DoublyLinkedList{
    /**
     * 属性
     * @memberof DoublyLinkedList
     */
    constructor(){
        this.head =null //当前链表的头节点
        this.tail = null //当前链表的尾部节点
        this.length =0 //当前链表的长度
    }
    /**
     *追加方法
     *
     * @param {*} element
     * @memberof DoublyLinkedList
     */
    append(element){
        const newNode = new Node(element)
        let current = this.head  //当前节点的位置
        //判断是否是第一个节点
        if (this.length==0) {
            this.head =newNode
            this.tail = newNode
        } else{
            newNode.prex=this.tail //新节点的前一个指向最初的末尾节点
            this.tail.next=newNode //原来的末尾节点指向新节点
            this.tail = newNode //现在末尾指向新节点
        }
        this.length += 1
    }
    /**
     *字符串
     *
     * @memberof DoublyLinkedList
     */
    toString(){
        return this.backwardString()
    }
    /**
     *向后循环
     *
     * @returns
     * @memberof DoublyLinkedList
     */
    forwardString(){
        let current = this.tail
        var resultString =""
        while(current){
            resultString +=current.data + " "
            current = current.prex
        }
        return resultString
    }

    /**
     *  向前循环
     *
     * @returns
     * @memberof DoublyLinkedList
     */
    backwardString(){
        let current = this.head
        let resultString = ""
        while(current){
            resultString +=current.data+" "
            current=current.next
        }
        return resultString
    }
    /**
     *  链表长度
     *
     * @returns
     * @memberof DoublyLinkedList
     */
    size(){
        return this.length
    }
    /**
     * 指定位置添加数据
     *
     * @param {*} position
     * @param {*} element
     * @memberof DoublyLinkedList
     */
    insert(position,element){
        if (position <0||position>this.length) {
            return false
        }
        const newNode = Node(element)
        // 判断原来链表的长度
        if (this.length ==0) {
            this.head = newNode
            this.tail = newNode
        } else{
            //判断position是否为0
            if (position ==0) {
                //原来的第一个节点.prev = newNode
                this.head.prex=newNode
                newNode.next = this.head
                this.head = newNode
            } else if(position==this.length){
                newNode.prex=this.tail
                this.tail.next=newNode
                this.tail=newNode
            } else {
                let current = this.head
                let index =0
                while(index <position){
                    current = current.next
                    index += 1
                }
                //修改指针
                newNode.next = current //新节点的下一节点指向当前节点
                newNode.prex = current.prex //
                current.prex.next = newNode
                current.prex = newNode
            }
        }
    }
    /**
     *获取指定位置的元素
     *
     * @param {*} position
     * @memberof DoublyLinkedList
     */
    get(position){
        if (position <0 || position >= this.length) {
            return null;
        }
        //this.length /2 > position 从头遍历 
        let current = this.head
        let index = 0
        while(index<position){
            current = current.next
            index +=1
        }
        return current.data
    }
    /**
     * 是否包含某个元素
     *
     * @param {*} element
     * @memberof DoublyLinkedList
     */
    indexOf(element){
        let current = this.head
        let index =0
        while(current){
            if(current.data == element){
                return index
            }
            current = current.next
            index +=1
        }
        return -1
    }
    /**
     *更新指定位置的元素
     *
     * @param {*} position
     * @param {*} element
     * @memberof DoublyLinkedList
     */
    update(position,element){
        if (position <0 || position>=this.length) {
            return false
        }
        let current = this.head
        let index = 0
        while(index < position){//寻找正确的节点
            current = current.next
            index ++
        }
        current.data = element
        return true
    }
    /**
     *删除指定位置的节点
     *
     * @param {*} position
     * @memberof DoublyLinkedList
     */
    removeAt(position){
        if(position <0 || position>=this.length){
            return false
        }
        let current = this.head
        //只有一个节点
        if(this.length == 1){
            this.head =null
            this.tail =null
        } else{
            //length>1 是否删除第一个节点
            if(position ==0){
                this.head.next.prex =null
                this.head=this.head.next
            }else if(position==this.length -1){//最后一个节点
                current = this.tail
                this.tail.prex.next =null
                this.tail = this.tail.prex
            } else{
                let index =0
                while(index<position){//找到指定位置
                    current = current.next
                }
                current.prex.next = current.next
                current.next.prex = current.prex
            }
        }
        this.length -= 1
        return current.data
    }
    /**
     *删除元素
     *
     * @param {*} element
     * @memberof DoublyLinkedList
     */
    remove(element){
        const position = this.indexOf(element)
        return this.removeAt(position)
    }
}


module.exports = DoublyLinkedList;