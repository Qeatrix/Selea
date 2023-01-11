import crypto from 'crypto-js';

const EncryptHandler = (userKey, userPassword) => {
    const salt = crypto.lib.WordArray.random(16); 

    const iv = crypto.lib.WordArray.random(16);

    const key = crypto.PBKDF2(userKey, salt, {keySize: 256/32, iterations: 10000, hasher: crypto.algo.SHA256});
    const encrypted = crypto.AES.encrypt(userPassword, key, {iv: iv}).ciphertext;

    return crypto.lib.WordArray.create().concat(salt).concat(iv).concat(encrypted).toString(crypto.enc.Base64);
}

const DecryptHandler = (userKey, encryptedPassword) => {
    const encrypted =  crypto.enc.Base64.parse(encryptedPassword);

    const salt_len = 16;
    const iv_len = 16;

    const salt = crypto.lib.WordArray.create(
    encrypted.words.slice(0, salt_len / 4 )
    );
    const iv = crypto.lib.WordArray.create(
    encrypted.words.slice(0 + salt_len / 4, (salt_len+iv_len) / 4 )
    );

    const key = crypto.PBKDF2(
    userKey,
    salt,
    { keySize: 256/32, iterations: 10000, hasher: crypto.algo.SHA256}
    );

    const decrypted = crypto.AES.decrypt(
    {
        ciphertext: crypto.lib.WordArray.create(
        encrypted.words.slice((salt_len + iv_len) / 4)
        )
    },
    key,
    {iv: iv}
    );


    return decrypted.toString(crypto.enc.Utf8);
}

export const Encrypt = EncryptHandler;
export const Decrypt = DecryptHandler;