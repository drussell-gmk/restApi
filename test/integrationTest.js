var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'i need more features!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'i need more features!');
            done();
        } );
    });
});