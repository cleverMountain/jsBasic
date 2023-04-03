// Number.parseInt(string, radix) // 默认是10进制, 2-36 否则NaN, 0也是10进制， 

// string < 10 && string > radix NaN
console.log(parseInt(9, 7)) // 1 * 10 + 2 * 0 => 12


console.log([1, 2, 3].map((item, index) => parseInt(item, index)))
/**
 * parseInt(1, 0)
 * parseInt(2, 1)
 * parseInt(3, 2)
 */


//  numObj.toString([radix]) 默认10 也是介于2-36之间
console.log((10).toString(2)) // 1010
console.log((10).toString(3)) // 0101