// console.log(1)

let obj = {
  a: 1
}



// 静态属性
function freeze(obj) {
  let desc = Object.getOwnPropertyDescriptors(obj)
  console.log(desc)
  let obj1 = {}
  // 重写descipter
  for (let k in obj) {
    Object.defineProperty(obj1, k, {
      configurable: false,
      enumerable: false,
      value: obj[k],
      writable: false,
    })
  }
  // 禁止添加新属性
  Object.preventExtensions(obj)
  Object.preventExtensions(obj1)
  return obj1
}
let b = freeze(obj)
b.a = 3
b.c = 1
obj.c = 10
console.log(b)
console.log(obj)