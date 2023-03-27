Array.prototype.lastIndexOf = function (item) {
  let index = -1
  for (let i = 0; i< this.length; i++) {
    if (this[i] === item) {
      index = i
    }
  }
  return index
}

let arr = [1, 2, 3, 1]
console.log(arr.lastIndexOf(1))