var say = require("say");

/*
* GET home page.
*/

exports.index = function(req, res){
res.render('index', { title: 'Express' })
};
exports.say = function(req, res){
  var what = req.query.what;
  if (!what) {
    // say.speak ("Alex", "say what?");
  } else {
    // say.speak ("Cellos", what);
    // say.speak ("Alex", what.replace("frog", "swag"));
    say.speak ("Alex", what + ". swag.");
    console.log("say",what);
  }
  res.render('speech', { title: 'Speech' })
};
