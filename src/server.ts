import debug from 'debug';
import errorhandler from 'errorhandler';
import createApp from '@app/createApp';
import createConnection from '@app/database';
import isProduction from '@app/utils/isProduction';

(async () => {
  await createConnection();
  const app = createApp();

  if (!isProduction()) {
    app.use(errorhandler());
  }

  const port = process.env.PORT || 8000;
  const server = app.listen(port);

  server.on('error', error => debug('app:error')(error));
  server.on('listening', () => {
    const info = debug('app:info');
    info('App is running on port %d', port);
    info('App environment is %s', process.env.NODE_ENV);
  });
})();
