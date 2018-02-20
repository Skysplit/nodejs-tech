import './env';
import * as errorhandler from 'errorhandler';
import * as debug from 'debug';
import app from './app';

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler());
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  const info = debug('app:info');
  info(`App is running on port ${port}`);
  info(`App environment is ${process.env.NODE_ENV}`);
});
