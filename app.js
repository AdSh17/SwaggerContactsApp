'use strict';

var SwaggerExpress = require('swagger-express-mw'),
     app           = require('express')(),
     mongoose      = require("mongoose");

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

 var db = mongoose.connect('mongodb://localhost/swaggerDB',function(err){
   if(err){
     console.log("Error connecting db !!!");
   }
   else {
      console.log("Db Connected Successfully!!!");
      app.listen(8081,function(){
        console.log("Swagger Contacts app is running on port : 8081");
      });
   }
 });




 /**- if (swaggerExpress.runner.swagger.paths['/contact']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/contact?name=Scott');
  } **/
});
