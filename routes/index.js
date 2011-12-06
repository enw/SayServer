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
    say.speak ("Alex", "say what?");
  } else {
    say.speak ("Alex", what);
  }
  res.render('speech', { title: 'Speech' })
};
