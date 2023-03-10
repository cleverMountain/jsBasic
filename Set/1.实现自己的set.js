class Set1 {
  constructor() {
    this.arr = []
  }
  add(value) {
    if (this.arr.includes(value)) {
      return '集合已经包含该值'
    } else {
      this.arr.push(value)
    }
  }
  has(value) {
    return this.arr.includes(value) ? true : false
  }
  delete (value) {
    if (this.arr.includes(value)) {
      let index = this.arr.findIndex(item => item === value)
      this.arr.splice(index, 1)
    }
  }
  clear () {
    this.arr.length = 0
  }
  entries() {
    let index = 0
    let len = this.arr.length
    this.next = function () {
      
    }
  }
}
let set1 = new Set1()
set1.add(1)
set1.add(2)
set1.add(3)
set1.delete(2)
console.log(set1.has(1))
// set1.clear()
console.log(set1)
let ite = set1.entries()