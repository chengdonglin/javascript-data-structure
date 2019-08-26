/**
 *字典
 *
 * @class Dictionay
 */
class Dictionay{
    constructor(){
        this.items = {}
    }

    /**
     *字典添加键值对
     *
     * @param {*} key
     * @param {*} value
     * @memberof Dictionay
     */
    set(key,value){
        this.items[key] = value
    }
    /**
     *是否包含某个key
     *
     * @param {*} key
     * @returns
     * @memberof Dictionay
     */
    has(key){
        return this.items.hasOwnProperty(key)
    }
    /**
     *从字典移除元素
     *
     * @param {*} key
     * @returns
     * @memberof Dictionay
     */
    remove(key){
        if(!this.has(key)) return false
        delete this.items[key]
        return true
    }
    /**
     *获取key对应的value
     *
     * @param {*} key
     * @returns
     * @memberof Dictionay
     */
    get(key){
        return this.has(key) ? this.items[key] : undefined
    }
    /**
     *获取所有的keys
     *
     * @returns
     * @memberof Dictionay
     */
    keys(){
        return Object.keys(this.items)
    }
    /**
     *获取所有的value
     *
     * @returns
     * @memberof Dictionay
     */
    values(){
        return Object.values(this.items)
    }

    size(){
        return this.keys().length
    }

    clear(){
        this.items={}
    }
}

module.exports = Dictionay;