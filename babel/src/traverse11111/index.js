import visitors from "./visitor.js"

function traverse(parent, opts = {}, scope, state, parentPath, visitSelf) {
  // if (!parent) return;
  // if (!opts.noScope && !scope) {
  //   if (parent.type !== "Program" && parent.type !== "File") {
  //     throw new Error("You must pass a scope and parentPath unless traversing a Program/File. " + `Instead of that you tried to traverse a ${parent.type} node without ` + "passing scope and parentPath.");
  //   }
  // }
  // if (!parentPath && visitSelf) {
  //   throw new Error("visitSelf can only be used when providing a NodePath.");
  // }
  // if (!VISITOR_KEYS[parent.type]) {
  //   return;
  // }
  visitors.explode(opts);
  (0, _traverseNode.traverseNode)(parent, opts, scope, state, parentPath, null, visitSelf);
}