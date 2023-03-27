Array.prototype.indexOf = function (item) {
  let index = -1
  for (let i = 0; i< this.length; i++) {
    if (this[i] === item) {
      index = i
      break
    }
  }
  return index
}

let arr = [1, 2, 3, 1]
console.log(arr.indexOf(1))