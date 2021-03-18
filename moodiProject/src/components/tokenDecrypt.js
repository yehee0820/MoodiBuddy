let keyLength = 0;
let keyInt = 0;
let ciphertextInt = 0;
let plaintext = '';

function token_decrypt(ciphertext, key) {
    keyLength = key.length();
    keyInt = key.charCodeAt(0);
    ciphertextInt = ciphertext.charCodeAt(0);
    
}


// def token_decrypt(ciphertext, key):
//     key_length = len(key)
//     key_as_int = [ord(i) for i in key]
//     ciphertext_int = [ord(i) for i in ciphertext]
//     plaintext = ''
//     for i in range(len(ciphertext_int)):
//         value = (ciphertext_int[i] - key_as_int[i % key_length]) % 26
//         plaintext += chr(value + 65)
//     return plaintext.lower()