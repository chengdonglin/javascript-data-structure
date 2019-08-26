/**
 *节点
 *
 * @class Node
 */
class Node{
    constructor(key){
        this.left = null
        this.right = null
        this.key = key
    }
}
/**
 *二叉搜索树
 *
 * @class BinarySearchTree
 */
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(key){
        const newNode = new Node(key)
        if(this.root==null){
            this.root = newNode
        } else{
            this.insertNode(this.root,newNode)
        }
    }

    search(key){

    }

    remove(key){

    }
    /**
     *先序遍历 1. 访问根节点 2. 先序遍历其左子树 3. 先序遍历其右子树
     *
     * @memberof BinarySearchTree
     */
    preOrderTraversal(handler){
        this.preOrderTraversalNode(this.root,handler)
    }
    preOrderTraversalNode(node,handler){
        if (node !==null) {
            handler(node.key)
            this.preOrderTraversalNode(node.left,handler)
            this.preOrderTraversalNode(node.right,handler)
        }
    }
    /**
     *中序遍历
     *
     * @param {*} handler
     * @memberof BinarySearchTree
     */
    midOrderTraversal(handler){
        this.midOrderTraversalNode(this.root,handler)
    }
    midOrderTraversalNode(node,handler){
        if (node !==null) {
            this.midOrderTraversalNode(node.left,handler)
            handler(node.key)
            this.midOrderTraversalNode(node.right,handler)
        }
    }

    insertNode(node,newNode){
        if(newNode.key < Node.key){//左查找
            if(node.left ==null){
                node.left = newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        } else{//右查找
            if(node.right==null){
                node.right=newNode
            } else{
                this.insertNode(node.right,newNode)
            }
        }
    }
}

module.exports = BinarySearchTree;
