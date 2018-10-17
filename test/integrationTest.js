var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'changing master directly!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'changing master directly!');
            done();
        } );
    });
});