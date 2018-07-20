import jwt from 'jsonwebtoken';
import appSecret from './appSecret';

export default (payload: any, options?: jwt.SignOptions, secret = appSecret()) => jwt.sign(payload, secret, options);
