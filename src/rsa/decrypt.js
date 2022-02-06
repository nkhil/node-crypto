const crypto = require('crypto')
const fs = require('fs')

const encryptedData = fs.readFileSync('encrypted_data.txt', { encoding: 'utf-8' })
const privateKey = fs.readFileSync('private.pem', { encoding: 'utf-8' })

const decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    // In order to decrypt the data, we need to specify the
    // same hashing function and padding scheme that we used to
    // encrypt the data in the previous step
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  Buffer.from(encryptedData, 'base64'),
)

fs.writeFileSync('decrypted_data.txt', decryptedData.toString('utf-8'), { encoding: 'utf-8' })
