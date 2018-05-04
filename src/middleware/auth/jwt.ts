import passport from 'passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import User, { UserInterface } from '@app/module/user/user.model';
import appSecret from '@app/utils/appSecret';

const strategyOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: appSecret,
};

interface JWTPayload extends UserInterface {
  /**
   * When the token was issued at
   */
  iat: number;
}

passport.use(
  new Strategy(strategyOptions, async (payload: JWTPayload, done) => {
    const user = await User.findOne({
      id: payload.id,
      email: payload.email,
    });

    if (user) {
      done(null, user.toJSON());
    } else {
      done(null, false);
    }
  }),
);

export default passport.authenticate('jwt', {
  session: false,
});
