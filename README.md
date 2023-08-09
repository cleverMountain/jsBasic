# jsBasic
1. js相关知知识
2. 重写数组、对象、函数等内置对象方法



# 模仿vue-router实现自己的router

1. 概括：路由一般分为hash与history，哈希模式可以通过hashChange来监听路由变化，并且可以通过window.location.hash来修改路由，history模式通过popState来监听路由变化而且可以通过pushState改变路由。此外hash路由不会使页面重新加载，history会导致页面跳转。


2. 通过类实现router，并传入路由与模式
```js
const router = new Router({
  routes,
  mode: 'hash'
})
```

3. 通过createMatcher方法创建路由映射表，并且添加方法addRouts与addRout到路由的原型对象上
```js
let index = 0
const matcher = {}
export default function createMatcher(routes, self) {
  index++
  routes.forEach(route => {
    const { path } = route
    matcher[path] = route
  })
  if (index === 1) {
    // 在第一次创建matcher映射表时将addRouts与addRout绑定到router原型上
    const routerPrototype =  self.constructor.prototype
    routerPrototype.addRouts = function (routes) {
      createMatcher(routes)
    }
    routerPrototype.addRout = function (route) {
      createMatcher([route])
    }
  }
  return matcher
}
```


4. 创建一个路由的base类，hash与history通过extends继承共同的属性
```js
export default class History {
  constructor (router) {

  }
  transitioTo(path) {
  }
  render() {

  }
}
export default class HashHistory extends History {
  constructor(router) {
    super(router)
    this.init()
  }
}
export default class HTML5History extends History {
  constructor (router) {
    super(router)
    this.init()
  }
}

```

5. 具体实现过程，源码


6. 路由守卫的实现,类似发布订阅模式
```js
// 收集守卫
class Router {
  constructor(options) {
    this.beforeHooks = []
    this.afterHooks = []
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

// 触发守卫
function runQueue (queue, to, from, cb) {
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
```