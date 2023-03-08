/**
 * 
 *  forEach, filter, map, reduce, some, every, find
 */

// forEach传入一个回调函数，及this指向
let arr = [1, 2, 3]
Array.prototype.myForEach = function  (cb, obj) {
  // 利用this特性，谁调用指向谁
  const _this = this
  for(let i = 0; i < _this.length; i++) {
    // 改变this指向
    cb.call(obj, _this[i], i, _this)
  }
}
arr.myForEach((item, index, array) => {
  // 箭头函数的this只与外部相关，指向window
  console.log(item, index, array)
  console.log(this)
}, {a: 1})
arr.myForEach(function (item, index, array) {
  console.log(item, index, array)
  console.log(this)
}, {a: 1})







// filter 传入一个回调函数，及this指向,返回满足条件的数组
Array.prototype.myFilter = function (cb, obj) {
  const _this = this
  let res = []
  for (let i = 0; i < _this.length; i++) {
    // 如果回调函数返回值满足条件,则把该项放进新数组
    if (cb.call(obj, _this[i], i, _this)) {
      res.push(_this[i])
    }
  }
  return res
}




// filter 传入一个回调函数，及this指向,返回满足条件的一个值
Array.prototype.myFind = function (cb, obj) {
  const _this = this
  for (let i = 0; i < _this.length; i++) {
    if (cb.call(obj, _this[i], i, _this)) {
      return _this[i]
    }
  }
}




// map filter 传入一个回调函数，及this指向,重新返回一个数组

Array.prototype.myMap = function (cb, obj) {
  const _this = this
  let res = []
  for (let i = 0; i < _this.length; i++) {
    // 将回调函数返回值放进新数组
    res.push(cb.call(obj, _this[i], i, _this))
  }
  return res
}




// some  传入一个回调函数，及this指向,其中任意一项满足条件则返回true
Array.prototype.mySome = function (cb, obj) {
  const _this = this
  let res = false
  for (let i = 0; i < _this.length; i++) {
    if (cb.call(obj, _this[i], i, _this)) {
      // 某个为true，返回true
      return true
    } else {
      // 都为false，则res一直为false
      res = false
    }
  }
  return res
}





// every  传入一个回调函数，及this指向,所有项满足条件则返回true
Array.prototype.myEvery = function (cb, obj) {
  const _this = this
  let res = true
  for (let i = 0; i < _this.length; i++) {
    if (cb.call(obj, _this[i], i, _this)) {
      // 某个为true，则res一直为true
      res = true
    } else {
      // 一个为false，直接返回false
      return false
    }
  }
  return res
}






// reduce 传入一个回调函数，及this指向,实现汇总
Array.prototype.myReduce = function (cb, initialValue) {
  const _this = this
  for(let i = 0; i < _this.length; i++) {
    // initialValue累积
    initialValue = cb(initialValue, _this[i], i, _this)
  }
  return initialValue
}
