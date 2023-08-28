module.exports = function() {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        console.log(path.node)
        // 逆转名称：JavaScript -> tpircSavaJ
        path.node.name = name
          .split("")
          .reverse()
          .join("");
      },
    },
  };
}