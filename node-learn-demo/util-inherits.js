var util = require('util')

function Base(params) {
    this.name="base"
    this.base=1991
    this.sayHello = function () {
        console.log('Hello' + this.name);
    }
}

Base.prototype.showName = function () {
    console.log(this.name);
}

function Sub() {
    this.name = 'sub'
}

util.inherits(Sub, Base)

let objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log("objBase", objBase);

let objSub = new Sub()
objSub.showName()
// objSub.sayHello()
console.log('objSub', objSub);