class newHistoryRouter {
  constructor(routes) {
    this.routes = routes;
    this.stack = []
    this.stackLimit = []
    this.isBack = false
    this._bindPopState();
  }

  // 初始化挂载路由
  init(path) {
    history.replaceState({ path: path }, null, path);
    // pushState相同
    // history.pushState({ path: path }, null, path);
    this.setRouter(path);
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
const router = new newHistoryRouter([
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
]);
router.init('/');
function clickRouter(path) {
  router.go(path);
}
function goBack() {
  router.back()
}
function goForward() {
  router.goto()
}