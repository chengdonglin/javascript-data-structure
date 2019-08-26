/**
 * 哈希函数
 *
 * @param {*} str 字符串
 * @param {*} size 数组长度
 * @returns
 */
function hashCode(str, size){
    var hashCode =0;
    //霍纳法则
    for (let index = 0; index < str.length; index++) {
        hashCode = 37* hashCode +  str.charCodeAt(index)  
    }
    //取余操作
    let index = hashCode % size
    return index
}


module.exports = hashCode;