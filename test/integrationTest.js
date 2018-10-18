var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'making a change!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'making a change!');
            done();
        } );
    });
});