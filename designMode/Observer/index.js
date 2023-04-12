; (() => {
  const target = new Target({
    username: 'aaaaaaaaaa',
    password: '231231212'
  }, '#list')

  const init = () => {
    console.log(target)
    console.log(target.data.username)
    target.data.password = 2000000
  }
  init()
})(); 