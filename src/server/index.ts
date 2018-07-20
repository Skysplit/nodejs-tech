import debug from 'debug';
import errorhandler from 'errorhandler';
import createApp from '@server/createApp';
import isProduction from '@server/utils/isProduction';
import createNextApp from '@next/index';

export default async () => {
  const { PORT, NODE_ENV } = process.env;
  const info = debug('app:info');
  const app = createApp();

  createNextApp().then((nextApp) => {
    info('NextJS app is ready!');
    app.use(nextApp);
  });

  if (!isProduction()) {
    app.use(errorhandler());
  }

  const port = PORT || 8000;
  const server = app.listen(port);

  server.on('error', error => debug('app:error')(error));
  server.on('listening', () => {
    info('App is running on port %d', port);
    info('App environment is %s', NODE_ENV);
  });
};
