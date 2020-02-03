const channels = require('./node_modules/biot-core/channels.js');
const eventBus = require('ocore/event_bus');
const core = require('biot-core');

const peerPairingCode = 'AzzQsOamob6NNWfOYfxDQuzFZYf8M5P6DUN4GswvfcfC@obyte.org/bb-test#test';

(async () => {
    await core.init('test');
    eventBus.emit('biot_ok');
    eventBus.on('channels_init', () => {
        channels.createNewChannel(peerPairingCode, 100000, {
            salt: true,
            timeout: 600
        }, function (error, aa_address, unit) {
            console.error('result', error, aa_address, unit);
            if (error) {
                console.error(error);
                return;
            }
            let i = 0;
            let interval = setInterval(() => {
                channels.sendMessageAndPay(aa_address, '', 100, (error, response) => {
                    console.error('pay', error, response);
                });
                i++;
                if (i === 15) {
                    clearInterval(interval);
                    channels.close(aa_address, console.error);
                }
            }, 10000);
        });
    });
})();

eventBus.on("channel_created_by_peer", function (peer_payment_address, aa_address) {
    console.error('channel_created_by_peer', peer_payment_address, aa_address);
});
eventBus.on("channel_refilled", function (aa_address, amount) {
    console.error('channel_refilled', aa_address, amount);
});
eventBus.on("my_deposit_became_stable", function (amount, unit) {
    console.error('my_deposit_became_stable', amount, unit);
});
eventBus.on("peer_deposit_became_stable", function (amount, deposit_unit) {
    console.error('peer_deposit_became_stable', amount, deposit_unit);
});
eventBus.on("channel_closed_with_fraud_proof", function (aa_address, amount_received_at_closing) {
    console.error('channel_closed_with_fraud_proof', aa_address, amount_received_at_closing);
});
eventBus.on("channel_closed", function (aa_address, amount_received_at_closing) {
    console.error('channel_closed', aa_address, amount_received_at_closing);
});
eventBus.on("refused_deposit", function (deposit_unit) {
    console.error('refused_deposit', deposit_unit);
});