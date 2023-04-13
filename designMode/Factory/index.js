import ModalFactory from "./factory.js"

  ; (() => {

    const init = () => {
      let dom = document.getElementsByClassName('btn')[0]
      let modal = document.getElementsByClassName('header')[0]
      let modalactory = new ModalFactory(modal)
      dom.addEventListener('click', handler)
      function handler(e) {
        const status = e.target.dataset.status
        const modal = modalactory.create('这是一个工厂模式的应用场景', status)
        console.log(modal)
        modal.log('我来了')
      }


    }
    init()
  })();