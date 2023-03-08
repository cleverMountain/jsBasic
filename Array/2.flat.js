//  打闪数组 深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
//  depth 参数，取嵌套数组的结构深度，



Array.prototype.myFlat = function (depth) {
  let arr = []
  let index = 0
  for (let i = 0; i < this.length; i++) {
    let type = Object.prototype.toString.call(this[i])
    console.log(type)
    if (type !== '[object Array]') {
      // 不是数组时直接concat
      arr = arr.concat(this[i])
    } else {
      if (index < depth) {
        // depth深度不够使，递归遍历
        arr = arr.concat(this[i].myFlat(--depth))
      } else {
        // 到达深度直接concat
        arr = arr.concat(this[i])
      }
    }
  }
  return arr
}