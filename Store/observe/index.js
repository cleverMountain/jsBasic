// @ts-nocheck


class Dep {
  constructor() {
    this.subs = []
  }
  depend(key) {
    Dep.target.addDep(key, this)
  }
  addSub(sub) {
    this.subs.push(sub)
    console.log(this.subs)
  }
  notify() {
    this.subs.forEach(sub => {
      for(let [k, cb] of sub) {
        cb(k)
      }
    })
  
  }
}


export default Dep