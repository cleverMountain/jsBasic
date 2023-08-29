// @ts-nocheck
// const parser = require('@babel/parser');
// const traverse = require('@babel/traverse').default;

// const code = `const message = 'Hello, World!'; console.log(message);`;

// const ast = parser.parse(code);
// debugger
// traverse(ast, {
//   enter(path) {
//     if (path.isIdentifier({ name: 'message' })) {
//       debugger
//       path.node.name = 'newMessage';
//     }
//   },
// });

// console.log(ast);
const babel = require('@babel/core');
console.log(babel)

const code = `const message = 'Hello, World!'; console.log(message);`;
// 1. 代码解析（Parse）
const ast = babel.parse(code);

// 2. AST 遍历（Traverse）
babel.traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: 'message' })) {

      path.node.name = 'newMessage';
    }
  },
});

// 3. 代码转换（Transform）
const plugins = [/* 插件列表 */];
const transformedAst = babel.transform(ast);
console.log(transformedAst)
debugger
// 4. 代码生成（Generate）
const transformedCode = babel.generate(transformedAst).code;
console.log(transformedCode)
debugger