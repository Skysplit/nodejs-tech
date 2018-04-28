import errorhandler from 'errorhandler';
import { Application } from 'express';
import isProduction from '@app/utils/isProduction';

/**
 * Register error handler when not in production mode
 */
export default (app: Application) => {
  if (!isProduction()) {
    app.use(errorhandler())   ;
  }

  return app;
};
