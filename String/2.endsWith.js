// 判断字符串以什么结尾

String.prototype.endsWith = function (str, num) {
  num = num || this.length
  const len = str.length
  let newStr = this.slice(0, num).slice(-len)
  return str === newStr

}


console.log('31212312'.endsWith('12', 8))