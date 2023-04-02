let str1 = ' j j 1 '

String.prototype.trimStart = function () {
  let str = ''
  for (let i = 0; i < this.length; i++) {
    if (i == 0 && this[0] === ' ') {
      continue
    }
    str += this[i]
  }
  console.log(str.length)
  return str
}



String.prototype.trimEnd = function () {
  let str = ''
  for (let i = 0; i < this.length; i++) {
    if (i == this.length - 1 && this[i] === ' ') {
      continue
    }
    str += this[i]
  }
  console.log(str.length)
  return str
}



String.prototype.trimAll = function () {
  let str = ''
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== ' ') {
      str += this[i]
    }
  }
  return str
}
