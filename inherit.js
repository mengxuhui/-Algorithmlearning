/*
 * @@Description: js集成方式
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-10 09:40:42
 * @LastEditTime: 2020-08-10 10:11:00
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