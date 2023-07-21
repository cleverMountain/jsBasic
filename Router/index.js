// @ts-nocheck
import HTML5History from "./history/history"
import hashHistory from "./history/hash"
import createMatcher from "./createMatcher"

class Router {
  constructor(options) {
    const { routes, mode } = options
    this.beforeHooks = []
    this.afterHooks = []
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
  // 前置守卫
  beforeEach(cb) {
    this.beforeHooks.push(cb)
  }
  // 后置守卫
  afterEach(cb) {
    this.afterHooks.push(cb)
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
  mode: 'hash'
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
router.beforeEach((to, from, next) => {
  // console.log(to, '1')
  next()
})
router.beforeEach((to, from, next) => {
  // console.log(to, '2')
  next()
})
router.afterEach((to, from) => {
  console.log(to, from)
})
console.log(router)

export default router
