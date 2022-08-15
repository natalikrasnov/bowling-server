const express = require('express');
const router = new express.Router();

const {success, fail} = require('../middleware/sendStatus')

router.get('/user',/*checkData ,*/ getUserData, success );

module.exports = router;