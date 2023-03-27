Array.prototype.join = function (separator) {
  separator = separator || ','
  let str = ''
  for (let i = 0; i < this.length; i++) {
    if (i < this.length - 1) {
      str += this[i] + separator
    } else {
      str += this[i]
    }
  }
  // return str.slice(0, -1)
  return str
}

let arr = [1, 2, 3]
console.log(arr.join())