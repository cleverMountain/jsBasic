
// set 参数 target: 目标对象 key: key value ：值
// get 参数 target: 目标对象 key: key
// vue3响应式简单实现

; ((doc) => {
  function init() {
    const changIner = (cur) => {
      const el = doc.getElementById('app')
      el.innerHTML = cur
    }
    function isObj(value) {
      return Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]'
    }
    function reactive(target) {
      const handler = {
        set(target, key, value, receiver) {
          debugger
          // console.log(target, key, value, receiver)
          // target: 目标对象 key: key value ：值
          // 消除数组length的影响
          if (!target.hasOwnProperty(key)) {
            changIner(value)
          }
          return Reflect.set(target, key, value, receiver) // true | false
        },
        get(target, key, receiver) {
          
          // console.log(target, key, receiver)
          // target: 目标对象 key: key valu
          // 返回值
          // 如果返回的是对象或者数组则再进行一次代理
          const proxyTarget = Reflect.get(target, key, receiver)
          if (isObj(target[key])) {
            return reactive(proxyTarget)
          }
          return proxyTarget 
        },
        // 是否存在，使用in
        has(target, key) {
          return Reflect.has(target, key)
        }
      }
      return new Proxy(target, handler)
    }
    let obj = { a: 1, b: 2, d: { e: 1 }, f: [1, 2] }

    let res = reactive(obj)
    console.log('a' in res)
    setTimeout(() => {
      res.f.push(100)
    }, 2000);
  }

  init()
})(document);