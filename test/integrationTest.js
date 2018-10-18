var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'finally getting it to work!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'finally getting it to work!');
            done();
        } );
    });
});