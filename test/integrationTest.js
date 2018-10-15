var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'This is the latest and greatest code!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'This is the latest and greatest code!');
            done();
        } );
    });
});