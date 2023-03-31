// 连接字符串，对于连接数组非常有效

String.prototype.concat = function () {
  let str = this
  for (let i = 0; i < arguments.length; i++) {
    str += arguments[i].toString()
  }
  return str
}
console.log('s'.concat('1', '2', 2, {a: 1},['1', '2']))