const crypto = require('crypto');

const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const randomId = (bytes = 32) => crypto.randomBytes(bytes).toString('hex'); // 64 chars

module.exports = { sha256, randomId };
