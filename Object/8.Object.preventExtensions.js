// 阻止扩展

// 可修改，可删除，不可新增
const obj = {a: 1, b: 2}
Object.preventExtensions(obj)
obj.a = 3
obj.c = 10
delete obj.a
console.log(obj)