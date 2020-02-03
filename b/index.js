const channels = require('biot-core/channels');
const eventBus = require('ocore/event_bus');
const core = require('biot-core');

(async () => {
    await core.init('test');
    eventBus.emit('biot_ok');
})();

channels.setCallBackForPaymentReceived(async (amount, asset, message, aa_address, handle) => {
    console.error('paymentReceived', amount, asset, message, aa_address);
    return handle(null, 'ok');
});

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