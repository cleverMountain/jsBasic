// // @ts-nocheck
// // const parser = require('@babel/parser');
// // const traverse = require('@babel/traverse').default;

// // const code = `const message = 'Hello, World!'; console.log(message);`;

// // const ast = parser.parse(code);
// // debugger
// // traverse(ast, {
// //   enter(path) {
// //     if (path.isIdentifier({ name: 'message' })) {
// //       debugger
// //       path.node.name = 'newMessage';
// //     }
// //   },
// // });

// // console.log(ast);
// const babel = require('@babel/core');
// console.log(babel)

// const code = `const message = '321'`;
// // 1. 代码解析（Parse）
// const ast = babel.parse(code);

// // 2. AST 遍历（Traverse）
// babel.traverse(ast, {
//   enter(path) {
//     if (path.isIdentifier({ name: 'message' })) {

//       path.node.name = 'newMessage';
//     }
//   },
// });
// console.log(11)
// // 3. 代码转换（Transform）
// const plugins = [/* 插件列表 */];
// debugger
// const transformedAst = babel.transform(ast);

// console.log(transformedAst)
// debugger
// // 4. 代码生成（Generate）
// const transformedCode = babel.generate(transformedAst).code;
// console.log(transformedCode)
// debugger
const babel = require("@babel/core");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;

// 要转换的代码
const code = `
  const message = "Hello, world!";
  console.log(message);
`;

// 解析（Parsing）
const ast = parser.parse(code);

debugger
// 遍历（Traversing）
traverse(ast, {
  enter(path) {
    // 转换（Transformation）
    if (path.isIdentifier({ name: "message" })) {
      path.node.name = "newMessage";
    }
  },
});

// 代码生成（Code Generation）
const transformedCode = generator(ast).code;
console.log(transformedCode);