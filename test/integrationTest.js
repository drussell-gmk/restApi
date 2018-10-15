var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'We just implemented a new feature!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'We just implemented a new feature!');
            done();
        } );
    });
});