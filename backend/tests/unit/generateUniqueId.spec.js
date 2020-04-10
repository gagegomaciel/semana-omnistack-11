const genererateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = genererateUniqueId();

        expect(id).toHaveLength(8);
    }) ;
});