var express = require('express');
var router = express.Router();
var app = express();
const profile = require('../src/api');
router.use("/profile", profile);
console.log('------------route-----')
module.exports = router;