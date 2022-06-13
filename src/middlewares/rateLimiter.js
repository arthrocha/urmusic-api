const rateLimit = require('express-rate-limit');

const limit = rateLimit ({ 
    max: 3, // max requisições 
    windowMs: 0.5 * 60 * 1000,
    message: {message: 'Muitas requisições a partir deste IP, tente novamente após 30 segundos' }
  });

module.exports = limit

