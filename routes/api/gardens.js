'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models');
const interceptors = require('../interceptors');


router.get('/', interceptors.requireAdmin, function(req, res, next) {
  models.Garden.paginate({
    page: req.query.page || 1,
    order: [['name', 'ASC']]
  }).then(function({docs, pages, total}) {
    res.json(docs.map(d => d.toJSON()));
  });
});

router.post('/', function(req, res, next) {
  models.Garden.create({
	  name: req.body.name,
	  shortDescription: req.body.shortDescription,
    photoUrl: req.body.photoUrl,
    address: req.body.address,
    crossStreet: req.body.crossStreet,
    city: req.body.city,
    zipCode: req.body.zipCode,
    neighborhood: req.body.neighborhood,
    managedBy: req.body.managedBy,
    openHours: req.body.openHours,
    contactEmail: req.body.contactEmail,
    contactPhone: req.body.contactPhone,
    contactLink: req.body.contactLink,
  }).then(function(garden) {
    res.json(garden.toJSON());
  }).catch(function(error) {
    if (error.name == 'SequelizeValidationError') {
      res.status(422).json({
        status: 422,
        messages: error.errors
      });
    } else {
      res.sendStatus(500);
    }
  });
});

module.exports = router;
