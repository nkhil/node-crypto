const crypto = require('crypto')
const fs = require('fs')

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  // The standard secure default length for RSA keys is 2048 bits
  modulusLength: 2048,
})

// *********************************************************************
//
// To export the public key:

const exportedPublicKeyBuffer = publicKey.export({ type: 'pkcs1', format: 'pem' })
fs.writeFileSync('public.pem', exportedPublicKeyBuffer, { encoding: 'utf-8' })
// *********************************************************************


// *********************************************************************
//
// To export the private key

const exportedPrivateKeyBuffer = privateKey.export({ type: 'pkcs1', format: 'pem' })
fs.writeFileSync('private.pem', exportedPrivateKeyBuffer, { encoding: 'utf-8' })

// *********************************************************************
