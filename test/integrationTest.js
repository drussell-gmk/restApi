var assert = require('assert');
var request = require('request');

describe('Test endpoint', function() {
    var ec2Dns = process.env.EC2_DNS;
    console.log(`EC2 DNS: ${ec2Dns}`);
    var url = `http://${ec2Dns}:8080`;

    it('should return \'You made it!\'', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'You made it!');
            done();
        } );
    });
});