const MSet = require('./MSet')

const setA = new MSet()
const setB = new MSet()

setA.add("nba")
setA.add("cba")
setA.add("wba")

setB.add("nba")
setB.add("cba")
setB.add("wba")


console.log(setB.subSet(setA))
// const setC = setA.difference(setB)
// console.log(setC.values())