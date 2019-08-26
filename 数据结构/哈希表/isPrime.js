
/**
 *判断是否是质数
 * 除了1和本身才可以整数
 *  1. 效率低
 * @param {*} num
 */
function isPrime1(num){
    for(var i=2;i<num-1;i++){
        if(num % i ==0){
            return false
        }
    }
    return true
}
/**
 *更高效的制数判断
 * 通过平方根
 * @param {*} num
 * @returns
 */
function isPrime(num){
    const temp = parseInt(Math.sqrt(num))
    for(let i=0;i<temp;i++){
        if (num % i ==0) {
            return false
        }
    }
    return true
}

module.exports = {
    isPrime:isPrime,
    isPrime1:isPrime1
}
