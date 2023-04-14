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
// for a specific university.
exports.university_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await university.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle university create on POST.
exports.university_create_post = async function(req, res) {
    console.log(req.body)
    let document = new university();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"universityname":"goat", "cost":12, "size":"large"}
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
// Handle university update form on PUT.
exports.university_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await university.findById( req.params.id)
 // Do updates of properties
 if(req.body.universityname)
 toUpdate.universityname = req.body.universityname;
 if(req.body.departmentname) toUpdate.cost = req.body.departmentname;
 if(req.body.score) toUpdate.size = req.body.score;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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