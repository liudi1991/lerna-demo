'use strict';

const moduleB=require("module-b");

module.exports = moduleA;

function moduleA() {
    console.log(moduleB.sayHello());
}
