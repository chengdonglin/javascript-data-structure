const hashCode = require('./HashCode')

/**
 *哈希表:基于链地址法
 *
 * @class HashTable
 */
class HashTable{
    constructor(){
        this.storage =[] //存放元素
        this.count = 0 //用于计算当前数组已经存放的长度
        this.limit = 7 //数组的长度
        this.loadFactory = 0.75 //扩容因子
        this.deleFactory = 0.25 //缩小因子
    }
    /**
     *插入/修改操作
     * 步骤: 1. 根据key获取index
     *       2. 根据index去除bucket
     *       3. 如果bucket不存在,创建桶,并且放置再该索引的位置
     *       4. 判断新增还是修改操作
     * @param {*} key
     * @param {*} value
     * @memberof HashTable
     */
    put(key,value){
        const index = hashCode(key,this.limit)
        let bucket = this.storage[index]
        if (bucket == null) {
            bucket =[]
            this.storage[index] =bucket
        }
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i];
            if(tuple[0]==key){
                tuple[1] = value
                return true
            }         
        }
        bucket.push([key,value])
        this.count +=1
        //判断扩容操作
        if(this.count > this.limit * this.loadFactory){
            const newPrime = this.getPrime(this.limit *2)
            this.resize(newPrime)
        }
        return true
    }
    /**
     *获取操作
     *  1. 根据key获取index
     *  2. 根据index获取bucket
     *  3. 判断bucket算法为null
     *  4. 线性查找bucket每一个key算法等于传入key
     * @param {*} key
     * @memberof HashTable
     */
    get(key){
        const index = hashCode(key,this.limit)
        const bucket = this.storage[index]
        if (bucket ==null) {
            return null
        }
        for(let i=0;i<bucket.length;i++){
            const tuple = bucket[i]
            if(tuple[0]==key){
                return tuple[1]
            }
        }
        return null;
    }
    /**
     *删除
     *
     * @param {*} key
     * @returns
     * @memberof HashTable
     */
    remove(key){
        const index = hashCode(key,this.limit)
        let bucket = this.storage[index]
        if(bucket ==null){
            return null
        }
        for(let i=0;i<bucket.length;i++){
            const tuple = bucket[i]
            if(tuple[0]==key){
                bucket.splice(i,1)
                this.count --
                if(this.limit>7 &&this.count<this.limit*0.25){
                    let newSize=Math.floor(this.limit/2)
                    let newPrime = this.getPrime(newSize)
                    this.resize(newPrime)
                }
            }
            return tuple[1]
        }
        return null
    }

    isEmpty(){
        return this.count == 0
    }

    size(){
        return this.count
    }
    /**
     *扩容操作
     *
     * @param {*} newLimit
     * @memberof HashTable
     */
    resize(newLimit){
        const oldStorage = this.storage
        this.storage = []
        this.count =0
        this.limit = newLimit
        for (let i = 0; i < oldStorage.length; i++) {
            const bucket = oldStorage[i];
            if (bucket ==null) {
                continue
            }
            for(let j=0;j<bucket.length;j++){
                let tuple = bucket[j]
                this.put(tuple[0],tuple[1])
            }
        }
    }
    /**
     *判断质数
     *
     * @param {*} num
     * @returns
     * @memberof HashTable
     */
    isPrime(num){
        const temp = parseInt(Math.sqrt(num))
        for(let i=2;i<=temp;i++){
            if (num % i ==0) {
                return false
            }
        }
        return true
    }
    /**
     *获取质数
     *
     * @param {*} num
     * @memberof HashTable
     */
    getPrime(num){
        while(!this.isPrime(num)){
            num++
        }
        return num
    }

    capatity(){
        return this.limit
    }
}

module.exports = HashTable