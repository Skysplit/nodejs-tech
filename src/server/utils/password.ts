import { hash, compare } from 'bcrypt';

const HASH_ROUNDS = 13;

export const hashPassword = (password: string, rounds = HASH_ROUNDS) => hash(password, rounds);

export const verifyPassword = (password: string, hash: string) => compare(password, hash);
