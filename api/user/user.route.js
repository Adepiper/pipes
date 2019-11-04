const express = require('express');
const app = express();
const userRoutes = express.Router();
const bycrpt = require('bcryptjs');
const passport = require('./passport');

let User = require('./user');

userRoutes.post('/signup', (req, res) => {
  console.log(req.body);
  // let user = new User(req.body);

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).send('email already registered');
      } else {
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone
        });
        // console.log(newUser);

        bycrpt.genSalt(10, (err, salt) => {
          bycrpt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                // console.log(user);
                return res.status(200).status('you can login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch();
});

userRoutes.route('/login').get((req, res, next) => {
  passport.authenticate('local', {
    failureFlash: true
  })(req, res, next);
});

module.exports = userRoutes;
