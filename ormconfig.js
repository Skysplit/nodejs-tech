const path = require('path');

const env = process.env.NODE_ENV || 'production';

const commonConfig = {
  name: 'default',
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  migrationsRun: true,
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
};

const productionConfig = {
  ...commonConfig,
  type: 'mysql',
  host: 'localhost',
  database: 'nodetech_production',
  entities: ['dist/module/**/*.model.js'],
  migrations: ['dist/migration/**/*.js'],
  subscribers: ['dist/subscriber/**/*.js'],
}

const developmentConfig = {
  ...commonConfig,
  logging: true,
  type: 'mysql',
  host: 'localhost',
  database: 'nodetech_development',
  entities: ['src/module/**/*.model.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
};


const testingConfig = {
  ...developmentConfig,
  migrationsRun: false,
  logging: false,
  type: 'mysql',
  database: 'nodetech_testing',
};

const config = {
  production: productionConfig,
  development: developmentConfig,
  testing: testingConfig,
}

module.exports = config[env] || config.production;
