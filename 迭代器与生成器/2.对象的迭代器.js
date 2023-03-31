const obj = {
  a: 1,
  b: 2,
  c: 3
}

function generate (obj) {
  const keys = Object.keys(obj)
  const len = keys.length
  let index = 0
  this.next = function () {
    const key = keys[index++]
    return {
      key,
      value: obj[key],
      done: index < len ? false :  true
    }
  }
  return this
}

const objIte = generate(obj)
console.log(objIte.next())
console.log(objIte.next())
console.log(objIte.next())
console.log(objIte.next())