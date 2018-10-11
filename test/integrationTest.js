var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'This is the dev instance!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'This is the dev instance!');
            done();
        } );
    });
});