/**
 * 用户名 密码 年龄 性别 data
 * 
 * 任何一个数据都有可能改变或者被访问
 * 
 * 都要进行日志打印
 */


class Target {
  constructor(data, el) {
    this.data = data
    this.observer = new Observer(el)
    this.init()
  }
  init() {
    this.validateData(this.data)
    this.data = this.proxyData(this.data)
    
  }
  validateData(data) {
    const { username, password } = data
    username.length < 6 && (data.username = '')
    password.length < 6 && (data.pasword = '')

  }
  // 使用defineproperty
  // proxyData() {
  //   const _this = this
  //   // 代理 挂载到target上
  //   for (let k in this.data) {
  //     Object.defineProperty(this, k, {
  //       get() {
  //         this.observer.updateLog('get', k, _this.data[k])
  //         return _this.data[k]
  //       },
  //       set(newVal) {

  //         this.observer.updateLog('set', k, _this.data[k], newVal)

  //         _this.data[k] = newVal
  //       }
  //     })
  //   }
  // }
  proxyData(target) {
    let _this = this
    const handler = {
      set(target, key, value, receiver) {
        _this.observer.updateLog('set', key, target[key], value)
        return Reflect.set(target, key, value, receiver) // true | false
      },
      get(target, key, receiver) {
        _this.observer.updateLog('get', key, target[key])
      //  return Reflect.get(target, key, receiver)
      // return target[key]
      },
      // 是否存在，使用in
      has(target, key) {
       return Reflect.has(target, key)
      }
    }
    return new Proxy(target, handler)

  }
}

// 要干嘛，打印日志
class Observer {
  constructor(el) {
    this.el = document.querySelector(el)
    this.logPool = []
  }
  updateLog(type, key, oldValue, newValue) {
    switch (type) {
      case 'get':
        this.getProp(key, oldValue)
        break
      case 'set':
  
        this.setProp(key, oldValue, newValue)
    }
  }
  getProp(key, value) {
    const o = {
      type: 'get',
      dateTime: new Date(),
      key,
      value
    }
    this.logPool.push(o)
    this.log(o)
  }
  setProp(key, oldValue, newValue) {
    const o = {
      type: 'set',
      dateTime: new Date(),
      key,
      oldValue,
      newValue
    }
    this.logPool.push(o)
    this.log(o)
  }
  log(o) {

    const { type, dateTime, key } = o
    const oLi = document.createElement('li')
    let htmlStr = ''
    switch (type) {
      case 'get':
        htmlStr = `${dateTime}: get, I Got the Key ${key}`
        break
      case 'set':
        htmlStr = `${dateTime}: set, I Set the Key ${key}`
    }
    oLi.innerHTML = htmlStr
    this.el.appendChild(oLi)
  }
}