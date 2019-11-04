const express= require('express'),
      path= require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./db'),
      userRoutes = require('./user/user.route')


      mongoose.Promise = global.Promise
      mongoose.connect(config.DB, {useNewUrlParser: true})
        .then(
          () => {console.log('Database is connected')},
          err => {console.log ('Can not connect to database' +err)}
        );

      const app = express()
      let port = process.env.port || 3000
      app.use(bodyParser.json())
      app.use(cors())
          app.use('/user', userRoutes)
      const server = app.listen(() => {
            console.log(`listening on port ${port}`)
      })


