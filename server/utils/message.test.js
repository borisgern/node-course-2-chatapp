var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'sender';
    var text = 'text';
    var message = generateMessage(from, text);

    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'sender';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19'
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message).toMatchObject({from, url});
    expect(typeof message.createdAt).toBe('number');
  });
});
