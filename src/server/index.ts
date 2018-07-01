import debug from 'debug';
import errorhandler from 'errorhandler';
import createConnection from '@server/database';
import createApp from '@server/createApp';
import isProduction from '@server/utils/isProduction';
import createNextApp from '@next/index';

(async () => {
  const info = debug('app:info');

  console.log('test');

  await createConnection();
  const app = createApp();

  createNextApp().then((nextApp) => {
    info('NextJS app is ready!');
    app.use(nextApp);
  });

  if (!isProduction) {
    app.use(errorhandler());
  }

  const port = process.env.PORT || 8000;
  const server = app.listen(port);

  server.on('error', error => debug('app:error')(error));
  server.on('listening', () => {
    info('App is running on port %d', port);
    info('App environment is %s', process.env.NODE_ENV);
  });
})();
