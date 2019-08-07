'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');


router.get('/:id', function(req, res, next) {
  models.Garden.findByPk(req.params.id).then(function(garden) {
    res.render('gardens/show', {
      title: 'SF Green Grounds',
      garden: garden
    });
  });
});


module.exports = router;
