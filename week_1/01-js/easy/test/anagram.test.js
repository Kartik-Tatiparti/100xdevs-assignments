const { expect } = require('chai');
const isAnagram = require('../anagram');


describe('isAnagram', function() {
    it('should return true for anagrams', function(){
        const result1 = isAnagram('abc', 'cab');
        const result2 = isAnagram('jkl', 'ljk');

        expect(result1).to.be.true;
        expect(result2).to.be.true;
    })

    it('should return false for non anagrams', function(){
        const result3 = isAnagram('Mumbai', 'Delhi');
        const result4 = isAnagram('Delhi', 'Tata');

        expect(result3).to.be.false;
        expect(result4).to.be.false;
    })
})