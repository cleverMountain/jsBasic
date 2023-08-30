(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.babel = factory());
})(this, (function () { 'use strict';

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
    // return options;
  }

  class Parser extends StatementParser {
    constructor(options, input) {
      // 获取解析选项, 这里是defaultOptions
      options = getOptions(options);
      console.log(options, 'before');
      // 将defaultOptions及input传入
      super(options, input);
      console.log(options, 'after');
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

  function getParser(options, input) {
    // 构建解析器实例
    let cls = Parser;
    if (options != null && options.plugins) ;
    return new cls(options, input);
  }

  function parse(input, options) {
    if (options) ; else {
      const parser = getParser(options, input);
      // 使用解析器的parse方法将input转化成ast语法树
      const ast = parser.parse();
      // return getParser(options, input).parse();
      return ast
    }
  }

  const babel = Object.create(null);
  // 定义parse
  Object.defineProperty(babel, 'parse', {
    get() {
      return parse
    }
  });

  return babel;

}));
