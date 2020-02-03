exports.bServeAsHub = false;
exports.bLight = true;
exports.bSingleAddress = true;

exports.storage = 'sqlite';
exports.hub = 'obyte.org/bb-test';
exports.deviceName = 'Test device address';
exports.permanent_pairing_secret = '*';
exports.KEYS_FILENAME = 'keys.json';

exports.minChannelTimeoutInSecond = 600;
exports.maxChannelTimeoutInSecond = 1000;
exports.defaultTimeoutInSecond = 600;

exports.unconfirmedAmountsLimitsByAssetOrChannel = {
    "base": {
        max_unconfirmed_by_asset: 10000000,
        max_unconfirmed_by_channel: 10000000,
        minimum_time_in_second: 1
    }
};

exports.enabledReceivers = ['obyte-messenger'];

exports.httpDefaultPort = 6800;