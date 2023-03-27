Array.prototype.includes1 = function (item) {
  let res = false
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) {
      res = true
    }

  }
  return res
}

let arr = [1, 2, 3]
console.log(arr.includes1(6))