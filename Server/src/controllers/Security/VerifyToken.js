import jwt from 'jsonwebtoken';
import { token as frase } from '../../index.js';

export const VerifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, frase);
    if (Date.now() > payload.exp) {
      res.json({ message: 'expired token', status: false });
    } else {
      res.json({ status: true });
      next();
    }
  } catch (error) {
    res.json({ message: 'no token provided', status: false });
  }
};
