const jwt = require('../utils/jwt');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const user = jwt.validateToken(token);
    if(!user) {
      res.status(401).send('Unauthorized');
    }
    req.user = user;
  }
  next();
};