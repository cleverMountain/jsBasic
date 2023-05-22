
(function () {

  class Computed {
    constructor() {

    }
    compute() {
      const { firstNumber, secondNumber, filed } = this.data
      const one = Number(firstNumber) || 0
      const two = Number(secondNumber) || 0
      switch (filed) {
        case '+':
          this.resultEle.innerHTML = one + two
          break
        case '-':
          this.resultEle.innerHTML = one - two
          break
        case '*':
          this.resultEle.innerHTML = one * two
          break
        case '/':
          this.resultEle.innerHTML = one / two
          break
      }
    }
  }

  class Calculator extends Computed {
    constructor() {
      super()
      this.resultEle = document.getElementsByClassName('result')[0]
      this.firstNumEle = document.getElementsByClassName('f-input')[0]
      this.secondNumEle = document.getElementsByClassName('s-input')[0]
      this.buttonsEle = document.getElementsByClassName('button-group')[0]
      this.data = this.definData()
      this.init()
    }
    init() {
      this.bindEvent()
    }
    definData() {
      const _this = this
      const data = {
        firstNumber: 0,
        secondNumber: 0,
        filed: '+'
      }

      let obj = new Proxy(data, {
        get(target, key, receiver) {
          // receiver 源数据
     
         return  Reflect.get(target, key, receiver)
          return target[key]
        },
        set(target, key, value,receiver) {
         
          // let res = target[key] = value
          const res = Reflect.set(target, key, value, receiver)
          _this.compute()
          return res

        }
      })
      return obj
    }
    bindEvent() {
      this.firstNumEle.addEventListener('input', this.handFirstInput.bind(this), false)
      this.secondNumEle.addEventListener('input', this.handSecondInput.bind(this), false)
      this.buttonsEle.addEventListener('click', this.handClick.bind(this), false)
    }
    handFirstInput(ev) {
      const e = ev || window.event
      const target = e.target || e.srcElement
      this.data.firstNumber = target.value
    }
    handSecondInput(ev) {
      const e = ev || window.event
      const target = e.target || e.srcElement
      this.data.secondNumber = target.value
    }
    handClick(ev) {
      const e = ev || window.event
      const target = e.target || e.srcElement

      const index = Array.prototype.indexOf.call(this.buttonsEle.children, target)
      const current = this.buttonsEle.children[index]
      this.changeClassName(index)
      this.data.filed = current.innerHTML


    }
    changeClassName(index) {
      const length = this.buttonsEle.children.length
      for (let i = 0; i < length; i++) {
        this.buttonsEle.children[i].className = 'button'
      }
      if (index == -1) return
      this.buttonsEle.children[index].className += ' current'
    }
  }
  let ca = new Calculator()
  console.log(ca)
})()