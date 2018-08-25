import jwt from 'jsonwebtoken';
import appSecret from './appSecret';

const createJWT = (payload: any, options?: jwt.SignOptions, secret = appSecret()) => (
  jwt.sign(payload, secret, options)
);

export default createJWT;
