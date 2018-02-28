import errorhandler from 'errorhandler';
import debug from 'debug';
import createApp from '@app/createApp';

(async () => {
  const app = await createApp();

  if (process.env.NODE_ENV === 'development') {
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
