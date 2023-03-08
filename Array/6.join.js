// join 分割数组，成为字符串


Array.prototype.myJoin = function (separator) {
  separator = separator || ''
  let res = ''
  for (let i = 0; i < this.length; i++) {
    res += this[i] + separator
  }
  return res.slice(0, res.length)
}

// split() 字符串方法，将字符串组合成数组
  