var express = require('express');
const university_controlers= require('../controllers/university');
var router = express.Router();

/* GET home page. */
router.get('/', university_controlers.university_view_all_Page );
module.exports = router;
