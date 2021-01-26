function myTrim(string) {
  return string.replace(/(^\s*)|(\s*$)/g, '');
}
var res = myTrim('  ab  cd  ');
console.log(res);
console.log('  ab  cd  '.trim());