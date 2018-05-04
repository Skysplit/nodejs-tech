import passport from 'passport';
import { RequestHandler, Request } from 'express';
import { Strategy, IStrategyOptions } from 'passport-local';
import { get } from 'lodash';
import User, { UserInterface } from '@app/module/user/user.model';
import { verifyPassword } from '@app/utils/password';
import createJWT from '@app/utils/createJWT';
import isProduction from '@app/utils/isProduction';

interface UserRequest extends Request {
  user: UserInterface;
}

const strategyOptions: IStrategyOptions = {
  usernameField: 'email',
};

passport.use(
  new Strategy(strategyOptions, async (email, password, done) => {
    const user = await User.findOne({ email });

    if (!user) {
      return done(null, false);
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (isPasswordValid) {
      return done(null, user);
    }

    // Password is not valid
    done(null, false);
  }),
);

const local: RequestHandler = (req: UserRequest, res, next) => (
  passport.authenticate('local', (err, user: User, info) => {
    if (err) {
      return res.status(500).json({
        message: 'There was an error while performing request',
        error: isProduction ? undefined : err,
      });
    }

    if (!user) {
      return res.status(422).json({
        message: get(info, 'message', 'Incorrect credentials'),
      });
    }

    return res.json({
      success: true,
      token: createJWT(user.toJSON()),
    });
  })(req, res, next)
);

export default local;
