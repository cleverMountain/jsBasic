// 填充字符串
let str = 'aa'

String.prototype.padStart = function (len, padStr) {

  padStr = padStr || ' '
  let str = ''
  for (let i = 0; i < len - this.length; i++) {
    if (i == 0) {
      str = padStr + this
    } else {
      str = padStr + str
    }

  }

  return str
}


console.log(str.padStart(5, 'b'))

let str1 = 'aa'
String.prototype.padEnd = function (len, padStr) {

  padStr = padStr || ' '
  let str = ''
  for (let i = 0; i < len - this.length; i++) {
    if (i == 0) {
      str = this + padStr
    } else {
      str += padStr
    }

  }

  return str
}
console.log(str1.padEnd(6, 'c'))