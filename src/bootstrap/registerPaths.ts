import { register } from 'tsconfig-paths';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const configFile = isProduction ? 'tsconfig.production.json' : 'tsconfig.json';
const configFilePath = path.resolve(process.cwd(), configFile);

// tslint:disable-next-line no-var-requires
const config = require(configFilePath);

register({
  baseUrl: '.',
  paths: config.compilerOptions.paths,
});
