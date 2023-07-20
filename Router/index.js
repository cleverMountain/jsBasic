// @ts-nocheck
import HTML5History from "./history/history"
import createMatcher from "./createMatcher"

class Router {
  constructor(options) {
    const { routes, mode } = options
    // 创建matcher映射表
    this.matcher = createMatcher(routes || [], this)
    if (mode === 'history') {
      this.history = new HTML5History(this)
    } else {
      this.history = new hashHistory(this)
    }
  }
  init() {

  }
  push(path) {

    this.history.changeUrl(path)
    
  }
  beforeEach(cb) {
    this.history.ccc(cb)
  }
}

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => {
      return `<h1>about</h1>`
    } //Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => {
      return `<h1>home</h1>`
    },
  }
]

const router = new Router({
  routes,
  mode: 'history'
})
router.addRout(
  {
    path: '/shop',
    name: 'Shop',
    component: () => {
      return `<h1>shop</h1>`
    },
  }
)
router.addRouts([
  {
    path: '/cart',
    name: 'Cart',
    component: () => {
      return `<h1>cart</h1>`
    },
  }
])

console.log(router)

export default router
