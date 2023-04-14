var university = require('../models/university');
// List of all university
// List of all university
exports.university_list = async function(req, res) {
    try{
    theuniversity = await university.find();
    res.send(theuniversity);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific university.
exports.university_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: university detail: ' + req.params.id);
};
// Handle university create on POST.
exports.university_create_post = async function(req, res) {
    console.log(req.body)
    let document = new university();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"university_type":"goat", "cost":12, "size":"large"}
    document.universityname = req.body.universityname;
    document.departmentname = req.body.departmentname;
    document.score = req.body.score;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle university delete form on DELETE.
exports.university_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: university delete DELETE ' + req.params.id);
};
// Handle university update form on PUT.
exports.university_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: university update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.university_view_all_Page = async function(req, res) {
    try{
    theuniversity = await university.find();
    res.render('university', { title: 'university Search Results', results: theuniversity });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };