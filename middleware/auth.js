const jwt = require('jsonwebtoken');


module.exports = (req, res, next) =>{
    let token = req.headers["authorization"];
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    token = token?.substring(7);
    jwt.verify(token, 'secretToken', (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      req.userId = decoded;
      next();
    });
}