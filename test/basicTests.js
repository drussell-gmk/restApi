var assert = require('assert');
// var request = require('request');
var controller = require('../api/controllers/mainController');
var http_mocks = require('node-mocks-http');
// var should = require('should');

function buildResponse() {
    return http_mocks.createResponse({eventEmitter: require('events').EventEmitter})
}

describe('Test controller testGet', function() {
    it('should return \'We just implemented a new feature!\'', (done) => {
        var response = buildResponse();
        var request = http_mocks.createRequest({
            method: 'GET',
            url: '/'
        });

        response.on('end', function() {
            var body = response._getData();
            assert.equal(body, 'We just implemented a new feature!');
            done()
        });

        controller.testGet(request, response);
    });
});

// describe('Test endpoint', function() {
//     var url = 'http://localhost:3000/test';

//     it('should return \'You made it!\'', (done) => {
//         request(url, (error, response, body) => {
//             assert.equal(body, 'You made it!');
//             done();
//         } );
//     });
// });