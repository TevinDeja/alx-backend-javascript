const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 1.4, 2.4)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 1.4, 2.6)).to.be.closeTo(0.3333, 0.0001);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
  });

  describe('Invalid operation', () => {
    it('should throw an error for invalid operation type', () => {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw(Error);
    });
  });
});
