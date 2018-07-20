import passport from 'passport';
import { RequestHandler } from 'express';
import { Strategy, IStrategyOptions } from 'passport-local';
import createJWT from '@server/utils/createJWT';
import isProduction from '@server/utils/isProduction';

const strategyOptions: IStrategyOptions = {
  usernameField: 'email',
};

passport.use(
  new Strategy(strategyOptions, async (email, password, done) => {
    /**
     * TODO: verify username ad password
     */

    // Password is not valid
    return done(null, false);
  }),
);

const local: RequestHandler = (req, res, next) => (
  passport.authenticate('local', (err, user, info) => {
    /**
     * TODO: validate user authenticity
     */

    if (err) {
      return res.status(500).json({
        message: 'There was an error while performing request',
        error: isProduction ? undefined : err,
      });
    }

    if (!user) {
      const { message = 'Incorrect credentials' } = info || {};
      return res.status(422).json({ message });
    }

    return res.json({
      success: true,
      token: createJWT(user.toJSON()),
    });
  })(req, res, next)
);

export default local;
