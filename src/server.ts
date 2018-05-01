import debug from 'debug';
import createApp from '@app/createApp';
import createConnection from '@app/database';
import useErrorHandler from '@app/utils/useErrorHandler';

(async () => {
  await createConnection();
  const app = await createApp();

  useErrorHandler(app);

  const port = process.env.PORT || 8000;
  const server = app.listen(port);

  server.on('error', error => debug('app:error')(error));
  server.on('listening', () => {
    const info = debug('app:info');
    info('App is running on port %d', port);
    info('App environment is %s', process.env.NODE_ENV);
  });
})();
