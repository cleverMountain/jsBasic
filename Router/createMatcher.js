
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