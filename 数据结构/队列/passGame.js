const Queue = require('./Queue')

//击鼓传花




function passGame(nameList,num){
    const queue = new Queue()
    for(let i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i])
    }
    // 开始数数字
    //不是num,重新加入队列
    //是num的时候,从队列删除

   while(queue.size()>1){
    for(let i=0;i<num-1;i++){
        //num之前的人放入队列的末尾
        queue.enqueue(queue.dequeue())
    }
    // num这个人,直接删除
    queue.dequeue()
   }
   //4. 获取剩下的那个人
   console.log(queue.size())
   return nameList.indexOf(queue.peek())
}

const nameList = ['wt','gt','lush','what','hh']
console.log(passGame(nameList,3))