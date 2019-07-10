const express = require('express');
const router = express.Router();

const gardensRouter = require('./gardens');
const usersRouter = require('./users');

router.use('/gardens', gardensRouter);
router.use('/users', usersRouter);

module.exports = router;
