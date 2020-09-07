/*
 * @@Description: js继承方式
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-10 09:40:42
 * @LastEditTime: 2020-09-01 17:06:23
 * @LastEditors: i.mengxh@gmail.com
 */

// 1. 利用原型链实现集成，将父类的实例作为子类的原型
// 2. 原型链继承的主要问题： 引用类型的属性被所有实例共享 在创建Child的实例的时候，不能向Parent传参。来自原型对象的属性是所有实例所共享；

function Parent() {
    this.name = 'Jhon';
    this.address = 'ChengDu';
    this.children = ['A', 'B'];
}

Parent.prototype.children = function () {
    console.log(this.children);
};

Parent.prototype.getDemo = function () {
    console.log(this.address);
};

// 实现继承
function Child() {

}

// 子类调用父类的方法，并在子类中重写父类的方法
(function () {
    // 创建一个没有实例方法的类
    var Super = function () { };
    Super.prototype = Parent.prototype;
    Child.prototype = new Super();
    Child.prototype.constructor = Child; // 需要修复下构造函数
    Child.prototype.getDemo = function (food) {
        console.log("SubClass." + this.name + '正在吃：' + food);
        Super.prototype.eat.apply(this, Array.prototype.slice.apply(arguments));
    };
})();

Child.prototype = new Parent();

const child1 = new Child();
child1.children.push('C');

const child2 = new Child();

child2.children.push('D');

// console.log(child1.getDemo());// ['A', 'B', 'C', 'D']


// 借用构造函数;优点： 避免了引用类型的属性被所有实例共享 可以直接在Child中向Parent传参
// 缺点： 方法都在构造函数中定义了，每次创建实例都会创建一遍方法，函数复用就无从谈起了
function Parent2(age) {
    this.name = ['Jhon', 'Nick'];
    this.age = age;
    this.getName = function () {
        console.log(this.name);
    };

    this.getAge = function () {
        console.log(this.age);
    };
}

function Child2(age) {
    Parent2.call(this, age);
}

const child3 = new Child2('18');
child3.name.push('Wlen');

console.log(child3.getName()); // [ 'Jhon', 'Nick', 'Wlen' ]

const child4 = new Child2('19');
child4.name.push('zhis');

console.log(child4.getName()); // [ 'Jhon', 'Nick', 'zhis' ]
console.log(child4.getAge()); // 19

// 组合继承
/**
 * 组合继承就是将原型链和借用构造函数的技术结合到一起，
 * 发挥二者长处的一种继承模式，背后思想是使用原型链实现对原型属性和方法的继承，
 * 通过借用构造函数实现对实例属性的继承。这样，既能够保证能够通过原型定义的方法实现函数复用，又能够保证每个实例有自己的属性
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.address = 'GanSu';
}

Person.prototype.sayHello = function () {
    console.log('hello ' + this.name);
};

function Child3(name, age) {
    Person.call(this, name, age);
}

Child3.prototype = new Person();

Child3.prototype.constructor = Child3;// 校正构造函数

const child5 = new Child3('aline', 24);

console.log(child5.sayHello()); // hello aline

// 组合继承既具有原型链继承能够复用函数的特性，
// 又有借用构造函数方式能够保证每个子类实例能够拥有自己的属性以及向超类传参的特性，
// 但组合继承也并不是完美实现继承的方式，因为这种方式在创建子类时会调用两次超类的构造函数。

// 四、原型式继承：对对象表达式进行继承，思想是借助原型可以基于已有的对象创建新对象
// 在object()函数内部，先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，
// 最后返回这个临时类型的一个新实例。本质上object()就是完成了一次浅复制操作
function object(obj) {
    function Fun() { };
    Fun.prototype = obj;
    return new Fun();
}

let person = {
    name: 'Hgtk',
    age: 24,
    friends: ['A', 'B', 'C', 'D']
};

let person1 = object(person);
person1.name = 'Huzi';
console.log(person1.name, 'person1.name'); // Huzi person1.name

let person2 = object(person);
person2.name = 'Huze';
person2.friends.push('G');

console.log(person2.friends, 'person2.friends'); // [ 'A', 'B', 'C', 'D', 'G' ] 'person2.friends'
console.log(person1.friends, 'person1.friends'); // [ 'A', 'B', 'C', 'D', 'G' ] 'person2.friends'
/**
 *ECMAScript5通过新增Object.create()方法规范化了原型式继承，这个方法接收两个参数：一个用作新对象原型的对象和为新对象定义属性的对象
 */

var persond = {
    name: 'alice',
    friends: ['leyla', 'court', 'van']
};

var p1 = Object.create(persond);
p1.name = 'p1';
p1.friends.push('p1');

var p2 = Object.create(persond);
p2.name = 'p2';
p2.friends.push('p2');

console.log(p1.name);
console.log(persond.friends);

// 寄生式集成：与原型式继承紧密相关的一种思路，即创建一个仅用于封装继承函数过程的函数，该函数在内部以某种方式来增强对象，最后返回对象。
function object2(obj) {
    function F() { };
    F.prototype = obj;
    return new F();
}
// 个仅用于封装继承函数过程的函数
function func1(original) {
    // let clone = Object.create(original); // 创建新对象
    let clone = object2(original); // 创建新对象
    clone.sayHell = function () { // 增强对象，添加属性或方法
        console.log(this.name);
    };

    return clone;  // 返回新对象
}

var demoPerson = {
    name: 'Hgibe',
    age: 24
};

console.log('func1(demoPerson)', func1(demoPerson).sayHell()); // Hgibe
/**
 * 新对象不仅具有 person 对象的属性和方法，还有自己的 sayHell() 方法
 * 缺陷：使用寄生式继承来为对象添加函数，会由于不能做到函数复用造成效率降低，这一点与构造函数模式类似
 */


// ES6继承方式

class ParentEs6 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.sayHell();
    }

    sayHell() {
        return this.height * this.width;
    }
}

class ChildEs6 extends ParentEs6 {
    constructor(height, width) {
        super(height, width); // 通过super向基类传值
        this.name = 'Jhone';
    }
}
const parentes = new ParentEs6(10, 20);
const childes = new ChildEs6(10, 30);
console.log(parentes.area); // 200
console.log(childes.area); // 300


https://juejin.im/post/6844903696111763470