setTimeout(() => {
	console.log('setTimeout')
}, 0)
console.log('t1') //
fetch('http://dict.qq.com')
 .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {
   console.log('myJson');
 })
 .catch(function(err) {
 	console.log(err)
 })
console.log('fetch zhi hou')
async function async1() {
	console.log('async1 start')
	await async2()
	console.log('async1 end')
}
async1()
console.log('t2')
new Promise((resolve) => {
	console.log('promise')
	resolve()
}).then(() => {
	console.log('promise.then')
})
console.log('t3')
async function async2() {
	console.log('async2')
}
console.log('t4')

// t1