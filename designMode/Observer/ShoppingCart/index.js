class Observer {
  constructor() {
    this.deps = new Dep()
  }
  add(type, fn) {
    this.deps.add(type, fn)
  }
  notify() {
    this.deps.start()
  }
}

class Dep {
  constructor () {
    this.subs = {}
  }
  add(type, fn) {
    let target = this.subs[type]
    if (!target) {
      this.subs[type] = [fn]
    } else {
      this.subs[type].push(fn)
    }
  }
  start() {
    Object.values(this.subs).flat().forEach(cb => cb())
  }
}


const observer = new Observer()
observer.add('xm', () => {
  console.log('小明10元')
})
observer.add('xy', () => {
  console.log('小樱20元')
})

observer.notify()