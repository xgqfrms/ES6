# ES6 In Depth: let and const

https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/


http://blog.herobs.cn/es6-in-depth/

http://blog.herobs.cn/es6-in-depth-let-and-const/


https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const


## es6 `let` & `emoji`

https://gist.github.com/xgqfrms-GitHub/19479fdadbbc05356aceaf56073bec6d


https://github.com/xgqfrms-GitHub/Native-JavaScript/blob/master/es6-emoji.html

https://jsfiddle.net/sybn4h33/3/


```js
    let messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!"];
    for (var i = 0; i < messages.length; i++) {
        console.log(`inner i = ${i}`);
        setTimeout(function () {
            console.log(`messages[i] = ${messages[i]}`);
        }, 0);
    }
    console.log(`outer i = ${i}`);


    let messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!"];
    for (let i = 0; i < messages.length; i++) {
        console.log(`inner i = ${i}`);
        setTimeout(function () {
            console.log(`messages[i] = ${messages[i]}`);
        }, 0);
    }
    console.log(`outer i = ${i}`);

```


![es6 `let` & `emoji`](https://cloud.githubusercontent.com/assets/18028768/25885002/931f36a2-3588-11e7-8bb0-bcfb86da1c18.png)















