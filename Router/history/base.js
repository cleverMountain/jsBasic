export default class History {
  constructor (router) {
    this.router = router
    this.template = null
    this.current = '/'
    this.container = document.getElementsByClassName('content')[0]
  }
  transitioTo(path) {
    let queue = this.router.beforeHooks
    // 去重
    if (this.current === path) {
      return
    }
    let before = this.current
    let route = path
    runQueue(queue, this.current, route, () => {
      this.current = route
      this.template = this.router.matcher[path].component()
      this.render()
      this.router.afterHooks.forEach(cb => cb(this.current, before))
    })
  }
  render() {
    this.container.innerHTML = this.template
  }
}

function runQueue (queue, to, from, cb) {
  // queue.forEach(cb => cb(1, 2, () => {}))
  // console.log(to, from)

  function next(index) {
    // queue执行完毕后，执行回调函数
    if (index >= queue.length) {
      return cb()
    }
    let hook = queue[index]
    // to from next
    hook(to, from, () => {
      next(index + 1)
    })
  }
  next(0)
}