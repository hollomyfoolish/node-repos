const utils = require('../src/utils');

describe('utils test', () => {
    it('should return false if given number is smaller than 18', () => {
        expect(utils.isUserOldEnough(15)).toBe(false);
    });

    it('should return true if given number is equal or bigger than 18', () => {
        expect(utils.isUserOldEnough(18)).toBe(true);
        expect(utils.isUserOldEnough(20)).toBe(true);
    });
});