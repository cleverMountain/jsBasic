// Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
const str = '323'

// 手写
function arrayFrom(iterate, cb, thisArg) {
  for (let i = 0; i < iterate.length; i++) {
    cb.call(thisArg, iterate[i], i)
  }
}

arrayFrom(str, function (item, index) {
  console.log(item, index, this)
}, { a: 1 })


// 类数组定义
/**
 * 1.有length属性
 * 2.key值是自然数，可以通过下标访问value(可以不连续)
 * 3.不能调用数组的方法
 */
// 常见类数组： 字符串; 函数的 arguments； DOM 的 NodeList； 
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
  __proto__: Array.prototype // arrayLike是一个实例，通过__proto__访问数组的原型，就可以使用数组的方法了
}
console.log(arrayLike)

Array.from(arrayLike, function (item, index) {
  console.log(item, index, this)
}, { a: 1 })
arrayLike.push(1)
console.log(arrayLike)




// 可迭代对象的定义