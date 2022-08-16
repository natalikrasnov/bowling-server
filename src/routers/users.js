const express = require('express');
const router = new express.Router();

const {success, fail} = require('../middleware/sendStatus')
const { getUserData } = require('../middleware/userData')

router.get('/users',/*checkData ,*/ getUserData, success );

module.exports = router;