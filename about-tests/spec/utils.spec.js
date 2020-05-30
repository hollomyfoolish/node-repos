const {isUserOldEnough} = require('../src/utils');

describe('utils test', () => {
    it('should return false if given number is smaller than 18', () => {
        expect(isUserOldEnough(15)).toBe(false);
    });

    it('should return true if given number is equal or bigger than 18', () => {
        expect(isUserOldEnough(18)).toBe(true);
        expect(isUserOldEnough(20)).toBe(true);
    });

    xit('should return true if given number is equal or bigger than 18 - 2', () => {
        expect(isUserOldEnough(18)).toBe(true);
        expect(isUserOldEnough(20)).toBe(true);
    });

    it('should return true if given number is equal or bigger than 18 - 3', () => {
        expect(isUserOldEnough(18)).toBe(true);
        expect(isUserOldEnough(20)).toBe(true);
    });
});