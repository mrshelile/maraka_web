// import * as CryptoJS from "crypto-js"

// const key:string = "Th1sM@r@ka!135790";

// //To encrypt input data
// function encrypt(word: string): string {
//     let cipher:string = CryptoJS.AES.encrypt(word, key).toString();
//     let base64: string = CryptoJS.enc.Base64.stringify(cipher);
//     return base64;
// }

// //To decrypt input data
// function decrypt(cipher: string) {
//     let base64: CryptoJS.LibWordArray = CryptoJS.enc.Base64.parse(cipher);
//     return CryptoJS.AES.decrypt(base64, key).toString(CryptoJS.enc.Utf8);
// }

// export { encrypt, decrypt };

import * as CryptoJS from "crypto-js";

const key:string = "Th1sM@r@ka!135790";

// Function to convert to a URL-safe Base64 string
function toUrlSafeBase64(base64: string): string {
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// Function to convert from a URL-safe Base64 string
function fromUrlSafeBase64(urlSafeBase64: string): string {
  let base64 = urlSafeBase64.replace(/-/g, '+').replace(/_/g, '/');
  // Pad with '=' to make the length of the string a multiple of 4
  while (base64.length % 4) {
    base64 += '=';
  }
  return base64;
}

// To encrypt input data
function encrypt(word: string): string {
  let cipher: CryptoJS.lib.CipherParams = CryptoJS.AES.encrypt(word, key);
  let base64 = cipher.toString();
  return toUrlSafeBase64(base64);
}

// To decrypt input data
function decrypt(urlSafeCipher: string): string {
  let base64 = fromUrlSafeBase64(urlSafeCipher);
  let bytes = CryptoJS.AES.decrypt(base64, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export { encrypt, decrypt };
