var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'nah nah nah nah!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'nah nah nah nah!');
            done();
        } );
    });
});