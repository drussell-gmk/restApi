var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'another one bites the test!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'another one bites the test!');
            done();
        } );
    });
});