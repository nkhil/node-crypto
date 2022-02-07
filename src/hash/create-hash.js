const crypto = require('crypto')

const phrase = 'wall horse plant water phone dog mettle pill book glass'
const hash = crypto.createHash('sha256').update(phrase).digest('base64')
