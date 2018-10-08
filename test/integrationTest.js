var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost';

    it('should return \'You made it!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'You made it!');
            done();
        } );
    });
});