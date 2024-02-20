# Node.js RSA Encryption Module

This Node.js module provides functions for RSA encryption and decryption using public and private keys. It utilizes the `crypto` module for cryptographic operations and supports loading keys from environment variables or default paths.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Encrypt with Public Key](#encrypt-with-public-key)
  - [Decrypt with Private Key](#decrypt-with-private-key)
  - [Encrypt with Private Key (Non-Standard)](#encrypt-with-private-key-non-standard)
  - [Decrypt with Public Key (Non-Standard)](#decrypt-with-public-key-non-standard)
- [Testing](#testing)
- [License](#license)

## Installation

To use this module, make sure you have Node.js installed. Then, install the required dependencies:

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root of your project.

2. Add the paths to your public and private key files as environment variables:

   ```env
   PUBLIC_KEY_PATH=../keys/public_key.pem
   PRIVATE_KEY_PATH=../keys/private_key.pem
   ```

## Usage

```javaScript
import rsaEncryption from './path/to/rsaEncryption';
```

### Encrypt with Public Key

```javaScript
const textToEncrypt = 'Hello, World!';
const encryptedText = rsaEncryption.encryptWithPublicKey(textToEncrypt);
console.log('Encrypted:', encryptedText);
```

### Decrypt with Private Key

```javaScript
const encryptedText = '...'; // Replace with the actual encrypted text
const decryptedText = rsaEncryption.decryptWithPrivateKey(encryptedText);
console.log('Decrypted:', decryptedText);
```

### Encrypt with Private Key (Non-Standard)

```javaScript
const textToEncrypt = 'Hello, World!';
const encryptedText = rsaEncryption.encryptWithPrivateKey(textToEncrypt);
console.log('Encrypted with Private Key:', encryptedText);

```

### Decrypt with Public Key (Non-Standard)

```javaScript
const encryptedText = '...'; // Replace with the actual encrypted text
const decryptedText = rsaEncryption.decryptWithPublicKey(encryptedText);
console.log('Decrypted with Public Key:', decryptedText);
```

**Note:** The last two methods (encrypting with the private key and decrypting with the public key) are non-standard use cases and may have security implications. Please use them cautiously based on your specific requirements.

## Testing

To run tests, make sure you have Mocha and Chai installed:

```bash
npm install mocha chai --save-dev
```

then run test

```bash
npm test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
