const fs = require('fs')
const crypto = require('crypto')

const dataToEncrypt = fs.readFileSync('data_to_encrypt.txt', { encoding: 'utf-8' })

const publicKey = Buffer.from(fs.readFileSync('public.pem', { encoding: 'utf-8' }))

const encryptedData = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  // We convert the data string to a buffer using `Buffer.from`
  Buffer.from(dataToEncrypt)
)

fs.writeFileSync('encrypted_data.txt', encryptedData.toString('base64'), { encoding: 'utf-8' })
