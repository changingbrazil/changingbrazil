
/**
 * Module dependencies.
 */

var express = require('express')
  , db = require('./models/db')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get( '/', routes.index );
app.get( '/news', routes.index );
app.get( '/photos', routes.photos );
app.get( '/videos', routes.videos );
app.get( '/discussions', routes.discussions );
app.get( '/discussions/:id', routes.discussionItem );
app.get( '/contribute', routes.contribute );
app.get( '/users', user.list );


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
