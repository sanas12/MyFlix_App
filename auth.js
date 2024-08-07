const jwt = require("jsonwebtoken");
const passport = require("passport");

require("./passport"); // Your local passport file
const jwtSecret = "your_secret_key_here";

/**
 * Generates a JSON Web Token (JWT) for a user.
 *
 * @param {Object} user - The user object.
 * @param {string} user.Username - The username of the user.
 * @returns {string} - The generated JWT.
 */
let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username, // This is the username you’re encoding in the JWT
    expiresIn: "7d", // This specifies that the token will expire in 7 days
    algorithm: "HS256", // This is the algorithm used to “sign” or encode the values of the JWT
  });
};

/**
 * POST login endpoint.
 *
 * @param {Object} router - The router object.
 */
module.exports = (router) => {
  router.post("/login", (req, res) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          message: "Something is not right",
          user: user,
        });
      }
      req.login(user, { session: false }, (error) => {
        if (error) {
          res.send(error);
        }
        let token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
};
