var assert = require('assert');
var controller = require('../api/controllers/mainController');
var http_mocks = require('node-mocks-http');

function buildResponse() {
    return http_mocks.createResponse({eventEmitter: require('events').EventEmitter})
}

describe('Test controller testGet', function() {
    it('should return \'work work work!\'', (done) => {
        var response = buildResponse();
        var request = http_mocks.createRequest({
            method: 'GET',
            url: '/'
        });

        response.on('end', function() {
            var body = response._getData();
            assert.equal(body, 'work work work!');
            done()
        });

        controller.testGet(request, response);
    });
});