import passport from 'passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import appSecret from '@server/utils/appSecret';

const strategyOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: appSecret(),
};

interface JWTPayload {
  /**
   * When the token was issued at
   */
  iat: number;
}

passport.use(
  new Strategy(strategyOptions, async (payload: JWTPayload, done) => {
    /**
     * TODO: Validate token payload
     */
    return done(null, false);
  }),
);

export default passport.authenticate('jwt', {
  session: false,
});
