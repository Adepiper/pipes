const express = require('express')
const app = express()
const userRoutes = express.Router()
const bycrpt = require('bcryptjs')
const passport = require('./passport')

let User = require('./user')

userRoutes.route('/signup').post((req, res)=> {
  let user = new User(req.body);

    User.findOne({email: email})
      .then( user => {
        if (user){
          res.status(400).send("email already registered")
        } else {
          const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            phone,
          })


           bycrpt.genSalt(10, (err, salt) => {
             bycrpt.hash(newUser.password, salt, (err, hash) => {
               if (err) throw err

               newUser.password = hash
               newUser.save()
                .then(user => {
                  res.status(200).status("you can login")
                })
                .catch(err => console.log(err))
             })
           })
        }
      })
      .catch()

})

userRoutes.route('/login').get((req, res, next) => {
    passport.authenticate('local', {
      failureFlash: true
    })(req, res, next)
})


module.exports = userRoutes;
