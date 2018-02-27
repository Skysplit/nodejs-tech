const path = require('path');

const env = process.env.NODE_ENV || 'production';
const isDevelopment = env === 'development';
const isProduction = env === 'production';
const isTesting = env === 'testing';

const databases = {
  production: path.resolve(__dirname, 'database', 'production.sqlite'),
  development: path.resolve(__dirname, 'database', 'development.sqlite'),
  testing: ':memory:',
}

module.exports = {
  type: 'sqlite',
  database: databases[process.env.NODE_ENV] || databases.production,
  synchronize: !isProduction,
  logging: isDevelopment,
  entities: [
    'src/entity/**/*.ts'
  ],
  migrations: [
    'src/migration/**/*.ts'
  ],
  subscribers: [
    'src/subscriber/**/*.ts'
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
}
