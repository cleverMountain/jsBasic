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
  }
}
function submit() {
  // if (!user.uname) {
  //   return alert('sad')
  // }
  // if (!user.upwd) {
  //   return alert('sad')
  // }
  let uname = strategy['unameEmpty'](user.uname, '用户')
  let upwd = strategy['upwdEmpty'](user.upwd, '密码')
  console.log(uname, upwd)
}
class Validator {
  constructor() {
    this.cache = []
  }
  add(dom, rules) {

  }
  start()
}
const validator = new Validator()
validator.add()
init()