Array.prototype.myFill = function (value, start, end) {
  // 谁调用指向谁，重写关键(bind,call,apply一起其他数组方法亦如此)
  const arr = this
  const len = arr.length
  const newArr = []
  if (!start && !end) {
    // 都无
    for (let i = 0; i < len; i++) {
      newArr.push(value)
    }
  } else if (start && end) {
    // 都有
    for (let i = 0; i < len; i++) {
      if (start <= i && end > i) {
        newArr.push(value)
      } else {
        newArr.push(arr[i])
      }
    }
  } else if (start && !end) {
    // start有end无
    for (let i = 0; i < len; i++) {
      if (i >= start) {
        newArr.push(value)
      } else {
        newArr.push(arr[i])
      }
    }
  }
  return newArr
}