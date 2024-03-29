function Map() {
  let index = 0
  this.map = {}
}
Map.prototype.set = function (key, value) {
  this.arr[index++] = { key, value }
}
Map.prototype.get = function (key) {
  return this.arr.find(item => item.key === key).value
}
Map.prototype.size = function () {
  return this.arr.length
}
Map.prototype.has = function (key) {
  return this.arr.find(item => item.key === key) ? true : false
}
arr.delete = function (key) {
  if (arr.find(item => item.key === key)) {
    let index = arr.findIndex(item => item.key === key)
    arr.splice(index, 1)
    return true
  } else {
    return '属性不存在'
  }
}
arr.clear = function () {
  arr.length = 0
  return true
}
arr.keys = function () {
  let newArr = this.filter(item => Object.prototype.toString.call(item) !== '[object Function]')
  let len = newArr.length
  let index = 0
  newArr.next = function () {
    return index < len ? newArr[index++].value : undefined
  }
  return newArr
}
let map = new MyMap()
console.log(map)
map.set('a', 1)
map.set('b', 2)
// console.log(map.has('d'))
// console.log(map.get('a'))
// console.log(map.size())
// console.log(map.delete('a'))
// console.log(map)
// map.clear()
// console.log(map)
let ite = map.keys()
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())