'use strict';

var validator = require('validator');
var twilio = require('twilio');
var accountSid = 'AC1b703b4f4f07d1927c31acaf2d4ec83f';
var authToken = '25f054aac6df3cbc8547da7f8a808191';
var fromNum = '+19133534144';
var client = new twilio.RestClient(accountSid, authToken);
// var client = new twilio.RestClient(accountSid, authToken);

/**
 * Render the main application page
 */
exports.renderIndex = function (req, res) {

  var safeUserObject = null;
  if (req.user) {
    safeUserObject = {
      displayName: validator.escape(req.user.displayName),
      provider: validator.escape(req.user.provider),
      username: validator.escape(req.user.username),
      created: req.user.created.toString(),
      roles: req.user.roles,
      profileImageURL: req.user.profileImageURL,
      email: validator.escape(req.user.email),
      lastName: validator.escape(req.user.lastName),
      firstName: validator.escape(req.user.firstName),
      additionalProvidersData: req.user.additionalProvidersData
    };
  }

  res.render('modules/core/server/views/index', {
    user: safeUserObject
  });
};

/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('modules/core/server/views/500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('modules/core/server/views/404', {
        url: req.originalUrl
      });
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};

exports.sendSms = function (req, res) {
  console.log("sendSms");
  console.log(req.body);
  client.messages.create({
      body: req.body.content,
      to: req.body.to,  // Text this number
      from: fromNum // From a valid Twilio number
  }, function(err, message) {
      if(err) {
          console.error(err.message);
      } else {
        return res.status(202).send({
          message: "Sent"
        });
      }
  });
};