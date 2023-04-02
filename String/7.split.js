let str1 = '1,2,3,4,5'

String.prototype.split = function (separator, limit) {
  let str = this
  let res = []
  let i = str.indexOf(separator)
  while (i !== -1) {
    // 一边找一边截取字符串
    res.push(str.slice(0, i))
    str = str.slice(i + 1)
    i = str.indexOf(separator)
  }
  if (str) {
    res.push(str)
  }
  let length = res.length
  limit = limit || length
  res.length = limit
  return res
}
console.log(str1.split(',', 3))