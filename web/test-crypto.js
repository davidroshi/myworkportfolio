const crypto = require('crypto');
console.log('crypto.webcrypto:', !!crypto.webcrypto);
console.log('crypto.getRandomValues:', !!crypto.getRandomValues);
if (crypto.webcrypto) {
    console.log('crypto.webcrypto.getRandomValues:', !!crypto.webcrypto.getRandomValues);
}
