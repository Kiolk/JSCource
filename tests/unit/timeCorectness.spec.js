const HomeTask3 = require('../../src/task3');

describe('Test', () => {
    it('first', () => {
        expect(3).toEqual(3)
    })

    it('isTimeValid', () => {
        expect(HomeTask3.isTimeValide(12, 12)).not.toBeTruthy();
        expect(HomeTask3.isTimeValide(13, 12)).not.toBeTruthy();
    })

    it('', () => {
        
    })
});
