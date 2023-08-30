# @babel/core
1. babel的核心作用是将源码转化成ast树再将ast树转化成需要的另一种ast树，最后通过Generate生成代码

# @babel/preset-env
1. 预设，转换代码的规则

# 调试
node --inspect-brk .\index.js
chrome://inspect/#devices


# parse 内容
1. 获取解析器parser(getParser)
```js
const code = `
  const message = "Hello, world!";
  console.log(message);
`;
const ast = parser.parse(code);

function parse(input, options) {
  if (options) {

  }else {
    // options不存在
    // 接14370，获取特定版本的解析器
    let parser = getParser(options, input)
    console.log(parser)
    // 使用解析器的parse方法将input转化成ast语法树
    let ast = parser.parse()
    // return getParser(options, input).parse();
    return ast
  }
}
```

2. getParser(过程)
```js
function getParser(options, input) {
  // 构建解析器实例
  let cls = Parser;
  if (options != null && options.plugins) {
    validatePlugins(options.plugins);
    cls = getParserClass(options.plugins);
  }
  return new cls(options, input);
}
class Parser extends StatementParser {
  constructor(options, input) {
    // 获取解析选项, 这里是defaultOptions
    options = getOptions(options);
    console.log(options, 'before')
    // 将defaultOptions及input传入
    super(options, input);
    console.log(options, 'after')
    this.options = options;
    // 初始化作用域
    this.initializeScopes();
    // 插件
    this.plugins = pluginsMap(this.options.plugins);
    this.filename = options.sourceFilename;
  }
  getScopeHandler() {
    return ScopeHandler;
  }
  parse() {
    debugger
    // 进入初始化作用域
    this.enterInitialScopes();
    const file = this.startNode();
    const program = this.startNode();
    this.nextToken();
    file.errors = null;
    this.parseTopLevel(file, program);
    file.errors = this.state.errors;
    return file;
  }
}
// 默认选项
const defaultOptions = {
  sourceType: "script",
  sourceFilename: undefined,
  startColumn: 0,
  startLine: 1,
  allowAwaitOutsideFunction: false,
  allowReturnOutsideFunction: false,
  allowNewTargetOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowSuperOutsideMethod: false,
  allowUndeclaredExports: false,
  plugins: [],
  strictMode: null,
  ranges: false,
  tokens: false,
  createParenthesizedExpressions: false,
  errorRecovery: false,
  attachComment: true,
  annexB: true
};
// 把选项拿到，如果不传则是默认选项defaultOptions
function getOptions(opts) {
  // 获取默认defaultOptions
  if (opts == null) {
    return Object.assign({}, defaultOptions);
  }
  // if (opts.annexB != null && opts.annexB !== false) {
  //   throw new Error("The `annexB` option can only be set to `false`.");
  // }
  // const options = {};
  // for (const key of Object.keys(defaultOptions)) {
  //   var _opts$key;
  //   options[key] = (_opts$key = opts[key]) != null ? _opts$key : defaultOptions[key];
  // }
  return options;
}
```
