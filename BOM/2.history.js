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
      // this._bindPopState();
    }

    // 初始化挂载路由
    // init(path) {
    //   history.replaceState({ path: path }, null, path);
    //   // pushState相同
    //   // history.pushState({ path: path }, null, path);
    //   this.setRouter(path);
    // }
    init() {
      this.routerEle.addEventListener('click', this.handleRouterClick.bind(this), false)
    }
    handleRouterClick(ev) {
      const e = ev || window.event
      const target = e.target || e.srcElement
      // 方法  this指向谁调用  [参数]
      const index = Reflect.apply(Array.prototype.indexOf, this.routerEle.children, [target])
      this.changeClassName(index)
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
    go(path) {
      history.pushState({ path: path }, null, path);
      this.setRouter(path);
      this.stack.push(path)
      this.isBack = false
      this.stackLimit.push(path)
    }

    // 监听popstate方法
    _bindPopState() {
      window.addEventListener("popstate", (e) => {
        const path = e.state && e.state.path;
        console.log(e)
        this.setRouter(path);
      });
    }

    // 设置路由
    setRouter(path) {
      let curRoute = this.routes.find((route) => route.path === path);
      if (!curRoute) {
        this.routes.find((route) => route.path === "/");
      }

      let { component } = curRoute;
      document.getElementById("right").innerHTML = component;
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

  // router.init('/');
  // function clickRouter(path) {
  //   router.go(path);
  // }
  // function goBack() {
  //   router.back()
  // }
  // function goForward() {
  //   router.goto()
  // }
})()