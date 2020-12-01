// 基本实现扁平化
function flat(array) {
  let result = [];
  for(let key of array) {
    if(Array.isArray(key)) {
      result = result.concat(flat(key));
    } else {
      result.push(key);
    }
  }
  return result;
}

// 2. 利用flat来扁平化数组
var array = [14,48,[2,99,7,3,[4,5],6],7];
console.log(array.flat(Infinity));

// 3. 利用reduce简化
function flatten(array) {
  return array.reduce((prev, cur) => {
    if(Array.isArray(cur)) {
      prev= prev.concat(flatten(cur));
    } else {
      prev = prev.concat(cur);
    }
    return prev;
  },[])
}
var res = flatten([14,48,[2,99,7,3,[4,5],6],7]);
console.log(res);