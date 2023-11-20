import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as TwitterStrategy } from "passport-twitter";

import Users from "../user/repositories.js";
import CommandUser from "../user/command-domain.js";
import QueryUser from "../user/query-domain.js";

const command = new CommandUser();
const query = new QueryUser();
const user = new Users();

export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `/auth/google/oauth`,
        scope: ["profile", "email"],
      },
      async function (accessToken, refreshToken, profile, callback) {
        const response = await command.findOrCreate(profile);
        // console.log("response", response);
        callback(null, response);
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: `/auth/facebook/oauth`,
        // scope: ["profile", "email"],
      },
      async function (accessToken, refreshToken, profile, callback) {
        console.log("profile");
        console.log(accessToken);
        console.log(profile);
        const params = { where: { googleId: profile.id }, default: { googleId: profile.id } };
        // const result = await user.findOrCreateUser(params);
        // console.log("result", result);
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
        callback(null, profile);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
