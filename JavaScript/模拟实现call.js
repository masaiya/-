// var numberFormat = function (value) {
//   var param = '';
//   var k = 1000;
//   var sizes = ['', '千','万', '亿', '万亿'];
//   if(value < k){
//     param += value;
//     param += '';
//   }else{
//     let i = Math.floor(Math.log(value) / Math.log(k)); 
//     param += ((value / Math.pow(k, i))).toFixed(1);
//     param += ' ' + sizes[i];
//   }
//   return param;
// }
var numberFormat = function (value) {
  var param = '';
  if(value < 1000){
    param += value;
  }else if(value < 10000){
    param += parseFloat(value / 1000).toFixed(1);
    param += 'K';
  } else {
    param += parseFloat(value / 10000).toFixed(1);
    param += 'W';
  }
  return param;
}
console.log(numberFormat(358450))