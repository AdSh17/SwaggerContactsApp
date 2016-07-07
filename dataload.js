/**
 * Created by Aditi Kunal on 04-04-2016.
 */

"use strict";
/**Module dependencies **/

var Chance = require('chance'),       // Utility library to generate anything random ...
    mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost/contactsDevlopment', function(err){});

var _contact = new Schema({
  firstName :{
    type :String,
    default : '',
    trim : true
  },
  lastName :{
    type :String,
    default :'',
    trim :true
  }
});

var userContact = mongoose.model('Contact',_contact);

var chance2 = new Chance();
for(var i=0;i<5;i++){

  //create a new user
  var con = userContact({
    firstName   : chance2.first(),
    lastName    : chance2.last(),

  });

  //save the user
  con.save(function(err){
    if(err){
      console.error("Error creating User!!!");
      console.error(err);
    }
    else{
      console.log("User created successfully!!!");
    }
  })
}
