// const SINGLE = 'SINGLE';
// const DOUBLE = 'DOUBLE';
// const LONG = 'LONG';
const IFTTT_URL = 'https://maker.ifttt.com/trigger/';
const IFTTT_WEBHOOK_KEY = '/with/key/bmbA-DEC3Vfcwg-qCYmDqM';

var request = require('request-promise');

exports.handler = (event, context, callback) => {

    console.log('Event:', event);
    var clickType = event.clickType;
    triggerWink(clickType);

};

function triggerWink(clickType) {
    request(IFTTT_URL + clickType + IFTTT_WEBHOOK_KEY);
}