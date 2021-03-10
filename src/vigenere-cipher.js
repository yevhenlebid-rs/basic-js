const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverseMode = true) {
    this.reverseMode = reverseMode
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('THROWN')
    }

    this.message = message.toUpperCase()
    this.key = key.toUpperCase()

    let cipheredString = ''

    for (let i = 0, j = 0; i < this.message.length; i++) {
      if (this.message[i].toUpperCase() !== this.message[i].toLowerCase()) {
        cipheredString += this.key[j]
        j++
      } else {
        cipheredString += this.message[i]
      }
      if (j === this.key.length) {
        j = 0
      }
    }

    let decryptedString = ''

    for (let i = 0; i < cipheredString.length; i++) {
      if (cipheredString[i].toUpperCase() !== cipheredString[i].toLowerCase()) {
        decryptedString += String.fromCharCode(((this.message.charCodeAt(i) + cipheredString.charCodeAt(i)) % 26 + 65))
      } else {
        decryptedString += cipheredString[i]
      }
    }

    return this.reverseMode ? decryptedString : decryptedString.split('').reverse().join('')
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('THROWN')
    }

    this.message = message.toUpperCase()
    this.key = key.toUpperCase()

    let encryptedString = ''
    let cipheredString = ''

    for (let i = 0, j = 0; i < this.message.length; i++) {
      if (this.message[i].toUpperCase() !== this.message[i].toLowerCase()) {
        cipheredString += this.key[j]
        j++
      } else {
        cipheredString += this.message[i]
      }
      if (j === this.key.length) {
        j = 0
      }
    }

    for (let i = 0; i < this.message.length; i++) {
      if (this.message[i].toUpperCase() !== this.message[i].toLowerCase()) {
        if ((this.message.charCodeAt(i) - cipheredString.charCodeAt(i)) < 0) {
          encryptedString +=
            String.fromCharCode(Math.abs(26) - Math.abs(this.message.charCodeAt(i) - cipheredString.charCodeAt(i)) + 65)
        } else if ((this.message.charCodeAt(i) - cipheredString.charCodeAt(i)) >= 0)
          encryptedString += String.fromCharCode(((this.message.charCodeAt(i) - cipheredString.charCodeAt(i)) % 26 + 65))
      } else {
        encryptedString += this.message[i]
      }
    }

    return this.reverseMode ? encryptedString : encryptedString.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
