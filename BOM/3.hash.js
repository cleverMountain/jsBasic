(function () {
  class HashRouter {
    constructor(options) {
      const { routes, routerEle, contentEle } = options
      this.routes = routes // 路由
      this.routerEle = routerEle
      this.contentEle = contentEle
      this.stack = [] // 保存路由的栈
      this.stackLimit = []
      this.isBack = false
      this.init()

    }
    init() {
      this.firstLoad()
      this.observeHash()
      this.routerEle.addEventListener('click', this.handleRouterClick.bind(this), false)
    }
    handleRouterClick(ev) {
      const e = ev || window.event
      const target = e.target || e.srcElement
      // 方法  this指向谁调用  [参数]
      const index = Reflect.apply(Array.prototype.indexOf, this.routerEle.children, [target])
      this.changeClassName(index)
      if (index < 4 && index != -1) {
        const url = this.routes[index]['path']
        this.matchPage(url)
      }
      else if (index == 4) {
        this.go()
      } else {
        this.back()
      }
    }
    changeClassName(index) {
      const length = this.routerEle.children.length
      for (let i = 0; i < length; i++) {
        this.routerEle.children[i].className = 'item'
      }
      if (index == -1) return
      this.routerEle.children[index].className += ' current'
    }
    // 监听hash
    observeHash() {
      // 通过hashChange监听路由变化
      window.addEventListener('hashchange', (e) => {
        const url = e.newURL.split('#')[1]
        this.stack.push(url)
        this.stackLimit.push(url)
        // this.isBack = false
        this.matchPage(url)
      })
    }
    // 第一次加载
    firstLoad() {
      this.matchPage()
    }
    // 加载页面
    matchPage(url) {
      // 通过location.href改变hash路由
      window.location.href = url ? `#${url}` : '#/'
      if (url) {
        const component = this.routes.find(item => item.path === url).component
        this.contentEle.innerHTML = component
      } else {
        this.contentEle.innerHTML = this.routes[0].component
      }
    }
    go() {
      if (this.stack.length === this.stackLimit.length) {
        return
      }
      const length = this.stack.length
      const cur = this.stackLimit[length]
      cur && this.matchPage(cur)
      this.stack.push(cur)

    }
    back() {
      let cur
      if (!this.isBack) {
        cur = this.stack[this.stack.length - 2]
        console.log(this.stack)
        this.stack.length -= 2
      } else {
        cur = this.stack.pop()
      }
      this.isBack = true
      this.matchPage(cur || '#/')

    }
  }
  const routes = [
    {
      path: "/",
      name: "index",
      component: "<div>首页内容</div>"
    },

    {
      path: "/cart",
      name: "cart",
      component: "<div>购物车内容</div>"
    },
    {
      path: "/shop",
      name: "shop",
      component: "<div>商城内容</div>"
    },
    {
      path: "/mine",
      name: "mine",
      component: "<div>我的内容</div>"
    }
  ]
  const routerEle = document.getElementsByClassName('left')[0]
  const contentEle = document.getElementsByClassName('right')[0]
  const hashRouter = new HashRouter({ routes, routerEle, contentEle })
  // function goBack() {
  //   hashRouter.back()
  // }
  // function goForward() {
  //   hashRouter.go()
  // }
})()