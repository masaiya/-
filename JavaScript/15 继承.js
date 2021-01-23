// 实现 Man 继承 People

// 原型链继承
/*
function People() {
  this.type = 'people'
  this.a = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc'
  }
}
People.prototype.eat = function() {
  console.log("吃东西啦");
}
function Man(name) {
  this.name = name;
  this.color = 'black';
}

// 实现：把子类的原型设置为父类的实例对象  Man.prototype = new People();
// 缺点：父类的引用类型属性会被子类的所有实例共享，实例之间不再具有独特性；子类实例无法向父类构造函数传参
Man.prototype = new People();
var man1 = new Man('aaa');
console.log(man1);
man1.a.a = 'oooo';
console.log(man1.a); // { a: 'oooo', b: 'bbb', c: 'ccc' }
man1.eat();

var man2 = new Man('bbb');
console.log(man2);
console.log(man2.a); // { a: 'oooo', b: 'bbb', c: 'ccc' }
man2.eat();
*/


// 构造函数继承
// 实现：在子类的中调用父类
// 优点：可以在子类构造函数中向父类传递参数；
// 缺点：子类实例无法使用父类原型对象上的属性和方法
/*
function People(type) {
  this.type = type
  this.a = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc'
  }
}
People.prototype.eat = function() {
  console.log("吃东西啦");
}
function Man(name,type) {
  this.name = name;
  this.color = 'black';
  People.call(this, type);
}
var man1 = new Man('aaa', 'male');
man1.a.a = 'oooo';
console.log(man1); // Man { name: 'aaa', color: 'black', type: 'male', a: { a: 'oooo', b: 'bbb', c: 'ccc' }}
man1.eat(); // error

var man2 = new Man('bbb', 'female');
console.log(man2); //Man { name: 'bbb', color: 'black', type: 'female', a: { a: 'aaa', b: 'bbb', c: 'ccc' }}
man2.eat(); // error
*/

// 组合继承
// 实现：结合构造函数继承和原型链继承之优点，实现继承
// 优点：可以在子类构造函数中向父类传递参数；子类实例可以继承父类原型对象上的属性和方法
function People(type) {
  this.type = type
  this.a = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc'
  }
}
People.prototype.hello = 'hello';
People.prototype.eat = function(name) {
  console.log("吃东西啦~ " + name);
}
function Man(name,type) {
  this.name = name;
  this.color = 'black';
  People.call(this, type);
}
Man.prototype = new People();
var man1 = new Man('aaa', 'male');
man1.a.a = 'oooo';
console.log(man1); // Man { name: 'aaa', color: 'black', type: 'male', a: { a: 'oooo', b: 'bbb', c: 'ccc' }}
man1.eat('man1'); // 吃东西啦~ man1
man1.hello = 'no hello';
console.log(man1.hello);

var man2 = new Man('bbb', 'female');
console.log(man2); // Man { name: 'bbb', color: 'black', type: 'female', a: { a: 'aaa', b: 'bbb', c: 'ccc' }}
man2.eat('man2'); // 吃东西啦~ man2
console.log(man2.hello);

console.log('-------------------------');

// ES6 extends继承
class Father {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.money = 10000;
  }
  toString() {
    return "name: " + this.name + " age: " + this.age;
  }
  static mySay() {
    console.log("i am father!");
  }
}
class Son extends Father {
  constructor(name, age, love) {
    super(name, age);
    this.love = love;
  }
  toString() {
    return super.toString() + " love: " + this.love;
  }
  getMoney() {
    console.log(this.money);
  }
}
var son = new Son('pipi', 18, 'mmm');
var res = son.toString();
console.log(res);
son.getMoney();