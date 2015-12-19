var express = require('express');
var Const = require('../const');

module.exports = function(wagner) {
  var api = express.Router();

  var Duty = wagner.invoke(function(Duty) {
    return Duty;
  });

  api.get('/get_duty', function(req, res) {
    if (!req.query.id) {
      return res.json({ status: Const.STATUS.FAILED, 
                        comment: 'ID is not specified' });
    }
    Duty.getDuty(req.query.id, function(duty) {
      return res.json({ status: Const.STATUS.OK,
                        result: duty });
    });
  });

  return api;
}

