
// 使用substring替换substr与sub（开弃用了）

/**
 * 如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
如果省略 indexEnd，substring 提取字符一直到字符串末尾。
如果任一参数小于 0 或为 NaN，则被当作 0。
如果任一参数大于 stringName.length，则被当作 stringName.length。
如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个替换
 */
let str1 = '1,2,3,4,5'

String.prototype.substring = function (start, end) {
  if (end < 0 || isNaN(end)) {
    end = 0
  }
  if (start < end) {
    let tem = start
    start = end
    end = tem
  }
  let str = ''
  if (start === end) {
    str = ''
  }
  if (!end) {
    for (let i = 0; i < this.length; i++) {
      if (i >= start) {
        str += this[i]
      }
    }
  }
  for (let i = 0; i < this.length; i++) {
    if (i >= start && i < end) {
      str += this[i]
    }
  }
  return str
}
console.log(str1.substring(1, 'da'))