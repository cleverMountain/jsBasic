// entries() 方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对,所以具有可迭代接口，可以使用next调用，并且可以使用for of来遍历
// 当在稀疏数组上使用时，entries() 方法迭代空槽，就像它们的值为 undefined 一样

let k = ['a', 'b', 'c'].entries()
// console.log(k)
// console.log(k.next())
// console.log(k.next())
// console.log(k.next())
// console.log(k.next())

Array.prototype.myEntries = function () {
  let myLength = this.length
  let index = 0
  // 具有一个next方法
  this.next = function () {
    return {
      done: index < myLength ? false :  true,
      value: index < myLength ? [index, this[index++]] : undefined
    }
    
  }
  return this
}

let ite = ['a', 'b', 'c'].myEntries()

for (const [index, element] of ite) {
  console.log(index, element);
}
// 0 'a'
// 1 'b'
// 2 'c'
// console.log(ite)
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())