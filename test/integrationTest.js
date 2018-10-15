var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var url = 'http://localhost:8080/';

    it('should return \'The latest change from restApi!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'The latest change from restApi!');
            done();
        } );
    });
});