// @ts-nocheck
import Dep from "./index"

function pushTarget(target) {
  Dep.target = target
}


class Watcher {
  constructor(root, data) {
    this.root = root
    this.keys = new Set() // 不可重复
    this.dep = new Dep()
    this.map = new Map()
    this.data = data
    this.get()
  }
  addDep(key, dep) {
    // console.log(this.root)
    if (this.keys.has(key)) {
      return
    } else {
      this.keys.add(key)
      this.getMap(key)
      dep.addSub(this.map)
    }
    // debugger
  }
  get() {
    pushTarget(this)
  }
  getMap(key) {
    const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/;
    Array.prototype.forEach.call(this.root.children, item => {
      // exec有全局标识的结果
      let res = defaultTagRE.exec(item.innerHTML)
      const cb = (key) => {
        item.innerHTML = this.data[key]
      }
      res && res[1] === key && this.map.set(key, cb)
    })
  }
}



export default Watcher