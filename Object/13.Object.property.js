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
      const obj = {}
      for (let k in data) {
        Object.defineProperty(obj, k, {
          get() {
            console.log('get')
            return data[k]
          },
          set(newVal) {
            console.log(`${k}: ${newVal}`)
            data[k] = newVal
            _this.compute()
          }
        })
      }
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
      this.buttonsEle.children[index].className += ' current'
    }
  }
  let ca = new Calculator()

})()