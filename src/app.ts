import * as express from 'express';
import { urlencoded, json } from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import routes from './routes';

const app = express();

// App settings
app.disable('x-powered-by');

// Global middleware
app.use(compression());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(json());

// Mount routes
app.use(routes);

export default app;
