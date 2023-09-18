
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


// 遍历（Traversing
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