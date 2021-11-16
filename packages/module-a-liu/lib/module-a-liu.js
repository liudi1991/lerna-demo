'use strict';

const sayHello=require("module-b-liu");
module.exports = moduleALiu;

function moduleALiu() {
    console.log(sayHello());
}
