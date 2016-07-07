/**
 * Created by Aditi Kunal on 04-04-2016.
 */

"use strict";

/** Module dependencies **/

var mongoose = require("mongoose"),
      Schema = mongoose.Schema;

var _contact = new Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Contact',_contact);

