const express = require('express');
const router = express.Router();

const gardensRouter = require('./gardens');
const uploadsRouter = require('./uploads');
const usersRouter = require('./users');

router.use('/gardens', gardensRouter);
router.use('/uploads', uploadsRouter);
router.use('/users', usersRouter);

module.exports = router;
