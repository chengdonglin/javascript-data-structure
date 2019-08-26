
class MSet{
    constructor(){
        //属性
        this.items = {} //存放数据
    }
    /**
     *添加元素
     *
     * @param {*} value
     * @returns
     * @memberof MSet
     */
    add(value){
        // 判断当前集合是否已经包含该元素
        if(this.has(value)){
            return false
        }
        //元素添加到集合
        this.items[value] = value
        return true
    }
    /**
     *是否包含某个值
     *
     * @param {*} vaule
     * @returns
     * @memberof MSet
     */
    has(value){
        //hasOwnProperty判断是否有该属性
        return this.items.hasOwnProperty(value)
    }
    /**
     *删除值
     *
     * @param {*} value
     * @returns
     * @memberof MSet
     */
    remove(value){
        if(!this.has(value)){
            return false
        }
        delete this.items[value]
        return true
    }
    /**
     *清空集合
     *
     * @memberof MSet
     */
    clear(){
        this.items = {}
    }
    /**
     *集合大小
     *
     * @returns
     * @memberof MSet
     */
    size(){
        return Object.keys(this.items).length
    }
    /**
     * 集合所有的值
     *
     * @returns
     * @memberof MSet
     */
    values(){
        //返回所有键值
        return Object.keys(this.items)
    }
    /**
     *并集
     *
     * @param {*} otherSet
     * @memberof MSet
     */
    union(otherSet){
        //1. 创建新集合
        let unionSet = new MSet()
        //2. A集合添加到新集合
        let values = this.values()
        values.forEach(element => {
            unionSet.add(element)
        });
        //3. 取出b集合,添加
        values = otherSet.values()
        for (let index = 0; index < values.length; index++) {
            unionSet.add(values[index])
        }
        return unionSet
    }

    /**
     *交集
     *
     * @param {*} otherSet
     * @memberof MSet
     */
    intersection(otherSet){
        let intersection = new MSet()
        let values = this.values()
        for (let index = 0; index < values.length; index++) {
            const element = values[index];
            if (otherSet.has(element)) {
                intersection.add(element)
            }
        }
        return intersection
    }
    /**
     *差集
     *
     * @param {*} otherSet
     * @returns
     * @memberof MSet
     */
    difference(otherSet){
        let difference = new MSet()
        let values = this.values() 
        for (let index = 0; index < values.length; index++) {
            const element = values[index];
            if (!otherSet.has(element)) {
                difference.add(element)
            }
        }
        return difference
    }
    /**
     * 判断是否是子集
     *
     * @param {*} otherSet
     * @memberof MSet
     */
    subSet(otherSet){
        let values = this.values()
        for (let index = 0; index < values.length; index++) {
            const element = values[index];
            if(!otherSet.has(element)){
                return false
            }
        }
        return true
    }
}

module.exports = MSet;