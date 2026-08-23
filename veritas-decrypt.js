import { pqc } from '@pqc-sdk/core';

async function testPQC() {
    console.log('Generating keys...');
    const pair = await pqc.keys.generate();

    const originalMessage = 'Ta gatis venore a domis perna prime note sekune kande ta sol klare obskuri e tene porta kapte ta flori per pane';
    console.log('Original message:', originalMessage);

    console.log('Encrypting...');
    const ciphertext = await pqc.encrypt(originalMessage, pair.publicKey);

    console.log('Decrypting...');
    const plaintext = await pqc.decrypt(ciphertext, pair.secretKey);

    const decryptedMessage = new TextDecoder().decode(plaintext);
    console.log('Decrypted message:', decryptedMessage);
    console.log('Integrity:', originalMessage === decryptedMessage ? 'OK' : 'FAIL');
}

testPQC();