
// 改变原数组，返回长度
Array.prototype.push = function (item) {
  this[this.length] = item
  return this.length
}
let arr = [1, 2]
console.log(arr.push(3))
console.log(arr)



// 删除最后一个元素并返回删除的元素
Array.prototype.pop = function () {
  let res = this[this.length - 1]
  // 改变长度就可删除数组
  this.length--
  return res
}

let arr1 = [1, 2]
console.log(arr1.pop())
console.log(arr1)


// 删除第一个元素并返回删除的元素
Array.prototype.shift = function () {
  let res = this[0]
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1]
  }
  this.length--
  return res
}

let arr2 = [1, 2]
console.log(arr2.shift())
console.log(arr2)


// 添加第一个元素并返回长度
Array.prototype.unshift = function (item) {
  for (let i = this.length; i >= 0; i--) {
   if (i === 0) {
    this[i] = item
   } else {
    this[i] = this[i- 1]
   }
  }
 
 return this.length

}

let arr3 = [1, 2]
console.log(arr3.unshift(3))
console.log(arr3)