let str1 = ' j j 1 '

String.prototype.trim = function () {

  let str = ''
  for (let i = 0; i < this.length; i++) {
    if (i == 0 && this[0] === ' ') {
      continue
    }
    if (i == this.length - 1 && this[i] === ' ') {
      continue
    }
    str += this[i]

  }
  console.log(str.length)
  return str
}

console.log(str1.trim())