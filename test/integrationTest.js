var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'work work work!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'work work work!');
            done();
        } );
    });
});