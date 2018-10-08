var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://ec2-107-21-192-164.compute-1.amazonaws.com:8080';

    it('should return \'You made it!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'You made it!');
            done();
        } );
    });
});