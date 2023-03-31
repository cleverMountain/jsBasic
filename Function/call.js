Function.prototype.myCall = function (obj, ...argues) {
  obj.fn = this
  return obj.fn(...argues)
  delete obj.fn
}
let obj = { name: 'li', getName() { console.log(this.name) } }
let obj1 = { name: 'lili' }
obj.getName.myCall(obj1, 1, 2)