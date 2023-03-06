// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
// concat 是浅拷贝，当元数据改变后，新数据也会变化

Array.prototype.myConcat = function (...argues) {
console.log(argues)
  let _this = this

  for (let i = 0; i < argues.length; i++) {
    if (Object.prototype.toString.call(argues[i]) !== "[object Array]") {

      _this = [..._this, argues[i]]
    } else {
      console.log(argues[i])
      // 浅拷贝一层
      _this = [..._this, ...argues[i]]
 
    }
    return _this
  }
}
