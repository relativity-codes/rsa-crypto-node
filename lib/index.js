import crypto from 'crypto';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const publicKeyPath = process.env.PUBLIC_KEY_PATH || 'lib/keys/public_key.pem';
const privateKeyPath = process.env.PRIVATE_KEY_PATH || 'lib/keys/private_key.pem';

const rsaEncryption = {
  encryptWithPublicKey: (text) => {
    const publicKey = fs.readFileSync(publicKeyPath, 'utf-8');
    const buffer = Buffer.from(text, 'utf-8');
    const encrypted = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer);
    return encrypted.toString('base64');
  },

  decryptWithPrivateKey: (encryptedText) => {
    const privateKey = fs.readFileSync(privateKeyPath, 'utf-8');
    const buffer = Buffer.from(encryptedText, 'base64');
    const decrypted = crypto.privateDecrypt({ key: privateKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer);
    return decrypted.toString('utf-8');
  },

  encryptWithPrivateKey: (text) => {
    const privateKey = fs.readFileSync(privateKeyPath, 'utf-8');
    const buffer = Buffer.from(text, 'utf-8');
    const encrypted = crypto.privateEncrypt({ key: privateKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer);
    return encrypted.toString('base64');
  },

  decryptWithPublicKey: (encryptedText) => {
    const publicKey = fs.readFileSync(publicKeyPath, 'utf-8');
    const buffer = Buffer.from(encryptedText, 'base64');
    const decrypted = crypto.publicDecrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer);
    return decrypted.toString('utf-8');
  },
};

export default rsaEncryption;
