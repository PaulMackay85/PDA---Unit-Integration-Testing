var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // calculator.add() - add 1 to 4 and get 5
  it('it should be able to add 1 to 4 and get 5', function (){
    calculator.previousTotal = 4
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5)
  })

  // calculator.subtract() subtract 4 from 7 and get 3
  it('it should be able to subtract 4 from 7 and get 3', function (){
    calculator.previousTotal = 7
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('it should be able to multiply 3 by 5 and get 15', function () {
    calculator.previousTotal = 3
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  })

  // calculator.divide() - divide 21 by 7 and get 3
  it('it should be able to divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

  // calculator.numberClick() - concatenate multiple number button clicks
  it('it should be able to concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, 123)
  })

  // calculator.operatorClick() - chain multiple operations together
  it('it should be able to chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3)
  })

  // calculator.clearClick() - clear the running total without affecting the calculation
  it('it should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 13)
  })
});
