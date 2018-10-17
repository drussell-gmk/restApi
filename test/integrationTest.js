var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'never gonna give you up!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'never gonna give you up!');
            done();
        } );
    });
});