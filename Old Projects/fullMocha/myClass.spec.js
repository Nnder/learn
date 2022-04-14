let MyClass = require('./myClass.js');
let myObj = new MyClass();
let sinon = require('sinon');
let chai = require('chai');
var expect = chai.expect;

describe('test suit', () =>{
    it('Test the add method ', function () {
       expect(myObj.add(1,2)).to.be.equal(3);
    });

    it('spy the add method ', function () {
        let spy = sinon.spy(myObj, 'add');
        let arg1 = 10, arg2 = 20;
        myObj.callAnotherFn(arg1,arg2);
        //sinon.assert.calledTwice(spy);
        //expect(spy.calledTwice).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;
    });

    it('spy the callback method ', function () {
        let callback = sinon.spy();
        myObj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true;
    });
});