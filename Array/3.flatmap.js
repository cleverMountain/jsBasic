/**
 * flatmap => flat + map 该方法与map和flat深度值为1时相同
 */


// flatmap depth  深度永远为1

var arr = [1, 2, 3, 4];

arr.flatMap(x => [x, x * 2]);
// is equivalent to
arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]
