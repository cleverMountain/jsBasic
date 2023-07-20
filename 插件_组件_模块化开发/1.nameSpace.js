nameSpace ('math', [], function () {
  function add(a, b) { return a + b }
  function sub(a, b) { return a - b }
  return {
    add,
    sub
  }
})


nameSpace ('calculator', ['math'], function (m) {
  let action = 'add'
  function compute(a, b) {
    m[action](a, b)
  }
  return {
    compute
  }
})



function nameSpace

