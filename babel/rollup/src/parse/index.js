import getParser from "./parser"

function parse(input, options) {
  if (options) {

  } else {
    const parser = getParser(options, input)
    // 使用解析器的parse方法将input转化成ast语法树
    const ast = parser.parse()
    // return getParser(options, input).parse();
    return ast
  }
}

export { parse }