const HashTable = require('./HashTable')


const hash = new HashTable()

hash.put("abc",123)
hash.put('cba',321)
hash.put("nba",521)
hash.put("mba",520)
hash.put("abc1",123)
hash.put('cba1',321)
hash.put("nba1",521)
hash.put("mba1",520)
hash.remove("abc")
hash.remove('cba')
hash.remove("nba")
hash.remove("mba")
console.log(hash.capatity())
