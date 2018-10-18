var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'going through it again!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'going through it again!');
            done();
        } );
    });
});