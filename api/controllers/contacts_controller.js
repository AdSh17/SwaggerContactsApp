/**
 * Created by Aditi Kunal on 04-04-2016.
 */
'use strict';

/** Module dependencies **/

var mongoose   = require('mongoose'),
    Contact    = require("../models/contact.server.model");

/*** All contacts **/
module.exports ={
  getAllContacts : function(request, response)
  {
  Contact.find({}, function (err, contacts) {
    if (err) {
      console.error("Error in fetching contacts" + err);
    }
    else {
      console.log(" All Contacts retrieved !!! ");
      response.json(contacts);
    }
  });
},

// creating new contact
  create :function(request,response)
  {
    var contact = new Contact({
      firstName : request.swagger.params.firstName.value
      });

    contact.save(function(err,contact){
      if(err){
          console.log("error saving contact");
          response.status(500).json(err).end();
      }
      else{
        response.json({
             contact: contact[0]}).end();

      }
    });

  },

  getContact : function(request,response)
  {
    console.log("get Contact");
    var id = request.swagger.params.id.value;

    Contact.findById(request.swagger.params.id.value,function(err, contact) {
      if (err)
      {
        console.error("Error in fetching contact" + err);
        response.status(500).json(err).end();
      }
      else {
        console.log("Contacts retrieved !!! " + contact);

        response.json({
          contact: contact[0]}).end();

      }
    });
  },

  updateContact : function(request,response)
  {
    console.log("update Contact");
    var id = request.swagger.params.id.value;

    Contact.findById(request.swagger.params.id.value,function(err, contact) {
      if (err)
      {
        console.error("Error in fetching contact" + err);
        response.status(500).json(err).end();
      }
      else {
        contact.save(function(err,contact){
        console.log("Contacts retrieved !!! " + contact);
        
        response.json({contact : contact}).end();
      })
    }
  });
  },


};

