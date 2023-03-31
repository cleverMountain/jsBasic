/**
 * 1.生成器是一个函数，执行该函数可以返回一个迭代器
 * 2.迭代器是一个对象，该对象有一个next方法，调用next可以返回value(迭代值)与done(是否迭代完成)
 */


let arr = [1, 2, 3]
function generate(arr) {
  const len = arr.length
  let index = 0
  this.next = function () {
    // next方法返回一个对象
    return {
      done: index < len ? false : true,
      value: arr[index++]
    }
  }
  // 返回一个对象，对象身上有一个next方法
  return this
}

let arrIte = generate(arr)
console.log(arrIte)
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())

// 模拟for of
function forOf(arrIte, cb) {
  let res = { done: false }
  while (!res.done) {
    res = arrIte.next()
    res.value && cb(res.value)
  }
}
forOf(arrIte, (value) => {
  console.log(value)
})