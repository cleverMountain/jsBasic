export default class History {
  constructor (router) {
    this.router = router
    this.template = null
    this.current = '/'
    this.container = document.getElementsByClassName('content')[0]
  }
  transitioTo(path) {
 
    let route = path
    this.current = route
    this.template = this.router.matcher[path].component()
    this.render()
  }
  render() {
    this.container.innerHTML = this.template
  }
}