import debug from 'debug';
import errorhandler from 'errorhandler';
import createApp from '@server/createApp';
import isProduction from '@server/utils/isProduction';
import createNextApp from '@next/index';

const runServer = async () => {
  const { PORT, NODE_ENV } = process.env;
  const app = createApp();

  createNextApp().then((nextApp) => {
    debug('app:info')('NextJS app is ready!');
    app.use(nextApp);
  });

  if (!isProduction()) {
    app.use(errorhandler());
  }

  const port = parseInt(PORT || '8000', 10);
  const server = app.listen(port);

  server.on('error', error => debug('app:error')(error));
  server.on('listening', () => {
    debug('app:info')('App is running on port %d', port);
    debug('app:info')('App environment is %s', NODE_ENV);
  });

  return server;
};

export default runServer;
