class Publish {
  constructor (el) {
    this.el = document.querySelector(el)
    this.pubPool = new Map()
  }
  addEvent (type, fn) {
    if (this.pubPool.has(type)) {
      this.pubPool.get(type).push(fn)
    } else {
      this.pubPool.set(type, [fn])
    }
  }
  sub(type) {
    let fnArr = this.pubPool.get(type)
  
    fnArr.forEach(cb => {
      this.el.addEventListener(type, cb)
    })
  }
}