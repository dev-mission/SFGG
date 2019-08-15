'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models');
const interceptors = require('../interceptors');
const helpers = require('../helpers');


router.get('/', interceptors.requireAdmin, function(req, res, next) {
  models.Garden.paginate({
    page: req.query.page || 1,
    order: [['name', 'ASC']]
  }).then(function({docs, pages, total}) {
    res.json(docs.map(d => d.toJSON()));
  });
});

router.post('/', function(req, res, next) {
  let garden = models.Garden.build({
	  name: req.body.name,
	  shortDescription: req.body.shortDescription,
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
  });
  helpers.handleUpload(garden, "photoUrl", req.body.photoUrl, 'gardens/photo')
    .then(function(garden) {
      return garden.save();
    })
    .then(function(garden) {
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

router.get('/:id', interceptors.requireAdmin, function(req, res, next) {
  models.Garden.findByPk(req.params.id).then(function(garden) {
    if (garden) {
      res.json(garden.toJSON());
    } else {
      res.sendStatus(404);
    }
  }).catch(function(error) {
    res.sendStatus(500);
  });
});

router.patch('/:id', interceptors.requireAdmin, function(req, res, next) {
  models.Garden.findByPk(req.params.id).then(function(garden) {
    return helpers.handleUpload(garden, "photoUrl", req.body.photoUrl, 'gardens/photo');
  }).then(function(garden) {
    return garden.update({
      name: req.body.name,
      shortDescription: req.body.shortDescription,
      photoUrl: garden.photoUrl,
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
    });
  }).then(function(garden){
    res.json(garden.toJSON());
  }).catch(function(error) {
    console.log(error);
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
