// 方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组。
// 不包括原型上


// 只获取不可枚举的属性
var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target); // 只可获取可枚举的
var nonenum_only = enum_and_nonenum.filter(function(key) {
    var indexInEnum = enum_only.indexOf(key);
    if (indexInEnum == -1) {
        // 没有发现在 enum_only 健集中意味着这个健是不可枚举的，
        // 因此返回 true 以便让它保持在过滤结果中
        return true;
    } else {
        return false;
    }
});

console.log(nonenum_only);
