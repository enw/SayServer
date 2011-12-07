
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , sio = require('socket.io')
  , say = require('say')

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// socket.io
var io = sio.listen(app);
io.sockets.on("connection", function ( socket ) {
  // console.log("connection");
  socket.on("user message", function(msg) {
    say.speak ("Alex", msg);    
  })
  
})

// Routes
app.get('*', routes.say);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
