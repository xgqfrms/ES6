# ES6 In Depth: Classes

https://hacks.mozilla.org/category/es6-in-depth/

https://hacks.mozilla.org/2015/07/es6-in-depth-classes/



http://blog.herobs.cn/es6-in-depth/

http://blog.herobs.cn/es6-in-depth-classes/

http://blog.herobs.cn/es6-in-depth-subclassing/


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes


https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md


## Classes


```js
// 类声明

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


```


```js
// 类表达式

/* 匿名类 */ 
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

/* 命名的类 */ 
let Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};


```




```js
// 原型方法

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  } 
  get area() {
    return this.calcArea()
  }
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(10, 10);

console.log(square.area);
// 100


```




```js
// 静态方法

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));


```


```js
//  


```



```js
//  使用 extends 创建子类

class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
// 'Mitzie barks.'
d.speak();

```





```js
//  也可以扩展传统的基于函数的“类”：

function Animal (name) {
  this.name = name;  
}
Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak();

```





```js
//  请注意，类不能扩展常规（不可构造/非构造的）对象。如果要继承常规对象，可以改用Object.setPrototypeOf():


var Animal = {
  speak() {
    console.log(this.name + ' makes a noise.');
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}
Object.setPrototypeOf(Dog.prototype, Animal);

var d = new Dog('Mitzie');
d.speak();


```


```js
//  Species : 你可能希望在派生数组类 MyArray 中返回 Array对象。

class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); 
// false
console.log(mapped instanceof Array);   
// true


```



```js
//  使用 super 调用超类 : super 关键字用于调用对象的父对象上的函数。

class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

```


```js
//  Mix-ins 混合 : 一个以超类作为输入的函数和一个继承该超类的子类作为输出可以用于在ECMAScript中实现混合：

var calculatorMixin = Base => class extends Base {
  calc() { }
};

var randomizerMixin = Base => class extends Base {
  randomize() { }
};

// 使用 mix-ins 的类可以像下面这样写：


class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

```



## es5

```js
//  
function Circle(radius) {  
  this.radius = radius;
  Circle.circlesMade++;
}

Circle.draw = function draw(circle, canvas) { /* canvas drawing code */ };

Object.defineProperty(Circle, "circlesMade", {  
  get: function() {
    return this._count ? this._count : 0;
  },
  set: function(val) {
    this._count = val;
  }
});

Circle.prototype = {  
  area() {
    return Math.PI * this.radius * this.radius;
  },

  get radius() {
    return this._radius;
  },
  set radius(radius) {
    radius = Number.parseFloat(radius);
    if (isNaN(radius)) throw new Error("Circle radius must be a number.");
    this._radius = radius;
  }
};

```

## es6

```js
//  

class Circle {  
  constructor(radius) {
    this.radius = radius;
    Circle.circlesMade++;
  };

  static draw(circle, canvas) { /* canvas drawing code */ };

  static get circlesMade() {
    return this._count ? this._count : 0;
  };
  static set circlesMade(val) {
    this._count= val;
  };

  area() {
    return Math.PI * this.radius * this.radius;
  };

  get radius() {
    return this._radius;
  };
  set radius(radius) {
    radius = Number.parseFloat(radius);
    if (Number.isNaN(radius)) throw new Error("Circle radius must be a number.");
    this._radius = radius;
  };
}
```



```js
//  


```




```js
//  


```



```js
//  


```




```js
//  


```










