// 获取原型对象

/**
 * 实例的__proto__ = 构造函数的prototype(也是一个实例)
 * 构造函数的prototype(实例对象)的__proto__ === 构造他的构造函数的prototype
 */

let obj = {}
console.dir(obj)
console.log(obj.__proto__ === Object.prototype)
let obj1 = Object.create({})
console.log(obj1)
console.log(Object.getPrototypeOf(obj1))


function getPrototype (obj) {
  return obj.__proto__
}



const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1); // true