
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.login = function(req, res) {
  // remember the username
  var username = req.query.username;
  if(username!="Brian" && username!="Annette"){
  	username="Guest";
  }
  console.log('username is: '+username);
  req.session.username = username;

  // send them back to the homepage
  res.redirect('index');
}

exports.logout = function(req, res) {
  req.session.username = null;

  res.redirect('/');
}