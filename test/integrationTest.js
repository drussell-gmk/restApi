var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'And we changed something again!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'And we changed something again!');
            done();
        } );
    });
});