var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'no more load balancer!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'no more load balancer!');
            done();
        } );
    });
});