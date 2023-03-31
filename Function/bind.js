Function.prototype.myBind = function (obj, ...argues) {
  obj.fn = this
  return function () {
    let res =  obj.fn(...argues)
    delete obj.fn
    return res
  }
}
let obj = { name1: 'li', getName() { console.log(this.name) } }
let obj1 = { name: 'lili' }
obj.getName.myBind(obj1, 1, 2)()
console.log(obj)
console.log(obj1)