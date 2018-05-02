import jwt from 'jsonwebtoken';
import appSecret from './appSecret';

export default (payload: any, options?: jwt.SignOptions) => jwt.sign(payload, appSecret, options);
