import bcrypt from 'bcrypt';
import util from 'util';

const HASH_ROUNDS = 13;

const hash = util.promisify(bcrypt.hash);
const verify = util.promisify(bcrypt.compare);

export const hashPassword = async (password: string) => (
  await hash(password, HASH_ROUNDS)
);

export const verifyPassword = async (password: string, hash: string) => (
  verify(password, hash)
);
