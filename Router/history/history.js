import History from "./base";

export default class HTML5History extends History {
  constructor (router) {
   
    super(router)
    this.init()
  }
  init() {
    
    window.addEventListener('pushstate', () => {
      debugger
    })
  }
}

