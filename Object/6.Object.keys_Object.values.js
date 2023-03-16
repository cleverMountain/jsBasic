// 获取键与值得数组给定
// 对象的自身可枚举属性组成的
Object.prototype.myKeys = function (obj) {
  let res = []
  for (let k in obj) {
    if (obj.propertyIsEnumerable(k)) {
      res.push(k)
    } 
  }
}

Object.prototype.myKeys = function (obj) {
  let res = []
  for (let k in obj) {
    if (obj.propertyIsEnumerable(k)) {
      res.push(obj[k])
    } 
  }
}