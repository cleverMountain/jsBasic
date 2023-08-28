// var babel = require("@babel/core");
const ppp = require('./parse')
let str = `
  let a = () => {
    return 1
  }
`

console.log(ppp.parse(str))
debugger