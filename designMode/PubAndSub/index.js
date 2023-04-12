; ((doc) => {
  const init = function () {
    let publish = new Publish('#btn')
    publish.addEvent('click', btn)
    publish.sub('click')

  }
  function btn() {
    console.log(1)
  }
  init()
})(document);