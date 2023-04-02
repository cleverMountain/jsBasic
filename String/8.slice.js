let str1 = '1,2,3,4,5'

String.prototype.slice = function (start, end) {
  let str = ''
  if (!end) {
    for (let i = 0; i < this.length; i++) {
      if (i >= start) {
        str += this[i]
      }
    }
  }
  if ((start || start === 0) && end) {
    for (let i = 0; i < this.length; i++) {
      if (i >= start && i < end) {
        str += this[i]
      }
    }
  }
  return str
}
console.log(str1.slice(1, 4))