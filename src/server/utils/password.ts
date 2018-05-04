import { hashSync, compareSync } from 'bcrypt';

const HASH_ROUNDS = 13;

export const hashPassword = (password: string) => hashSync(password, HASH_ROUNDS);

export const verifyPassword = (password: string, hash: string) => compareSync(password, hash);
