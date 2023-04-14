var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var university_controller = require('../controllers/university');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// university ROUTES ///
// POST request for creating a university.
router.post('/university', university_controller.university_create_post);
// DELETE request to delete university.
router.delete('/university/:id', university_controller.university_delete);
// PUT request to update university.
router.put('/university/:id', university_controller.university_update_put);
// GET request for one university.
router.get('/university/:id', university_controller.university_detail);
// GET request for list of all university items.
router.get('/university', university_controller.university_list);
module.exports = router;