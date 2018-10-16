var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'here we go again!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'here we go again!');
            done();
        } );
    });
});