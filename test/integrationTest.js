var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'I\'m tired of changing this code!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'I\'m tired of changing this code!');
            done();
        } );
    });
});