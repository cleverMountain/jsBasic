// 1.Object.assign() 方法将所有可枚举（Object.propertyIsEnumerable() 返回 true）的自有（Object.hasOwnProperty() 返回 true）属性
// 2.从一个或多个源对象复制到目标对象，返回修改后的对象。
// 3.原型上以及原型链上的属性不赋值
// 4.不适合拷贝属性的getters和setters，如果要考虑赋值可以使用Object.getOwnPropertyDescriptor() 和 Object.defineProperty()
// 5.浅拷贝
console.log(Object.assign({ a: 1 }, { b: 1 }, { c: 3 }))


Object.prototype.myAssign = function () {
  let obj = {}
  Reflect.apply(Array.prototype.forEach, arguments, [(item) => {
    for (let k in item) {
      // 有自己的属性并且可以被遍历
      if (item.hasOwnProperty(k) && item.propertyIsEnumerable(k)) {
        obj[k] = item[k]
      }
    }
  }])
  return obj
}
console.log(Object.myAssign({ a: 1 }, { b: 1 }, { c: 3 }))