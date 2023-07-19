// @ts-nocheck
const user = {}
const init = () => {
  getDom()
  bindEvent()
}
function getDom() {
  window.unameEle = document.getElementById('uname')
  window.upwdEle = document.getElementById('upwd')
  window.btn = document.getElementById('btn')
}
function bindEvent() {
  unameEle.addEventListener('input', handleChangeUname, false)
  upwdEle.addEventListener('input', handleChangeUpwd, false)
  btn.addEventListener('click', submit, false)
}
function handleChangeUname() {
  user.uname = this.value
}
function handleChangeUpwd() {
  user.upwd = this.value
}

init()
/**
 * 策略
 */
const strategy = {
  o: {},
  unameEmpty(uname, message) {
    if (!uname) {
      return alert(message)

    }
    this.o.uname = uname
    return uname
  },
  upwdEmpty(upwd, message) {
    if (!this.o.uname) {
      return
    } else {
      if (!upwd) {
        return alert(message)
      }
      return upwd
    }
  },
  minLength(uname, errMsg, length) {
    if (uname.length < length) {
      return alert(errMsg)
    }
    // return uname
  }
}
/**
 * 策略模式验证，也算是发布订阅模式
 */
class Validator {
  constructor() {
    this.cache = []
  }
  add(dom, rules) {

    rules.forEach(rule => {
      let { strage, errMsg } = rule
      let length
      if (strage.includes(':')) {
        const strageArr = strage.split(':')

        strage = strageArr[0]
        length = strageArr[1]
      }
      this.cache.push(() => {
        return strategy[strage].call(strategy, dom.value, errMsg, length)
      })
    })
  }
  start() {
    return this.cache.map(cb => cb())
  }
}

function startValidator() {
  const validator = new Validator()
  validator.add(window.unameEle, [
    { strage: 'unameEmpty', errMsg: '用户名不为空' },
    { strage: 'minLength:6', errMsg: '用户名要大于六位' }

  ])
  validator.add(window.upwdEle, [
    { strage: 'upwdEmpty', errMsg: '密码不为空' }
  ])
  return validator.start()
}


function submit() {
  // if (!user.uname) {
  //   return alert('sad')
  // }
  // if (!user.upwd) {
  //   return alert('sad')
  // }
  // let uname = strategy['unameEmpty'](user.uname, '用户')
  // let upwd = strategy['upwdEmpty'](user.upwd, '密码')
  // console.log(uname, upwd)
  let res = startValidator()
  console.log(res)
}
