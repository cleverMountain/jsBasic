(function () {
  class newHistoryRouter {
    constructor(options) {
      const { routes, routerEle, contentEle } = options
      this.routes = routes;
      this.routerEle = routerEle
      this.contentEle = contentEle
      this.stack = []
      this.stackLimit = []
      this.isBack = false
      this.init()
    }

    init() {
      this.initFirstPage()
      this.bindPopState()
      this.routerEle.addEventListener('click', this.handleRouterClick.bind(this), false)
    }
    initFirstPage () {
      this.go(0)
    }
    handleRouterClick(ev) {
      const e = ev || window.event
      const target = e.target || e.srcElement
      // 方法  this指向谁调用  [参数]
      const index = Reflect.apply(Array.prototype.indexOf, this.routerEle.children, [target])
      this.changeClassName(index)
      if (index < 4 && index != -1) {
        this.go(index)
      } else if (index == 4) {
        this.goto()
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
    // 路由跳转
    go(index) {
      const path = this.routes[index].path
      // pushState 添加路由时使用pushState
      history.pushState({ path: path }, null, path);
      this.changeContent(path);
      this.stack.push(path)
      this.isBack = false
      this.stackLimit.push(path)
    }
    // 监听popstate方法
    bindPopState() {
      // popState监听路由变化，只有 window.history.forward()与window.history.back()才会触发
      window.addEventListener("popstate", (e) => {
        const path = e.state && e.state.path;
        this.changeContent(path);
      });
    }

    // 改变页面
    changeContent(path) {
      let curContent = this.routes.find((route) => route.path === path);
      console.log(curContent)
      if (!curContent) {
        this.routes.find((route) => route.path === "/");
        return
      }
      let { component } = curContent && curContent;
      this.contentEle.innerHTML = component;
    }
    goto() {
      window.history.forward()
    }
    back() {
      window.history.back()
    }
  }
  const routes = [
    {
      path: "/",
      name: "index",
      component: "<div>首页内容</div>"
    },
    {
      path: "/shop",
      name: "shop",
      component: "<div>商城内容</div>"
    },
    {
      path: "/cart",
      name: "cart",
      component: "<div>购物车内容</div>"
    },
    {
      path: "/mine",
      name: "mine",
      component: "<div>我的内容</div>"
    }
  ]
  const routerEle = document.getElementsByClassName('left')[0]
  const contentEle = document.getElementsByClassName('right')[0]
  const router = new newHistoryRouter({ routes, routerEle, contentEle });
})()