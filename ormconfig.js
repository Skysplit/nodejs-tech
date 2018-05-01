
const path = require('path');

const env = process.env.NODE_ENV || 'production';
const isDevelopment = env === 'development';
const isProduction = env === 'production';
const isTesting = env === 'testing';

const databases = {
  production: {
    type: 'sqlite',
    database: path.resolve(__dirname, 'database', 'production.sqlite'),
  },
  development: {
    type: 'sqlite',
    database: path.resolve(__dirname, 'database', 'development.sqlite'),
  },
  testing: {
    type: 'sqlite',
    testing: ':memory:',
  }
}

const entities = {
  production: ['dist/**/*.model.js'],
  testing: ['src/**/*.model.ts'],
  development: ['src/**/*.model.ts'],
}

const migrations = {
  production: ['dist/migration/**/*.js'],
  testing: ['src/migration/**/*.ts'],
  development: ['src/migration/**/*.ts'],
}

const subscribers = {
  production: ['dist/subscriber/**/*.js'],
  testing: ['src/subscriber/**/*.ts'],
  development: ['src/subscriber/**/*.ts'],
}


module.exports = {
  ...(databases[env] || databases.production),
  synchronize: !isProduction,
  logging: isDevelopment,
  entities: entities[env] || entities.production,
  migrations: migrations[env] || migrations.production,
  subscribers: subscribers[env] || subscribers.production,
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
}
