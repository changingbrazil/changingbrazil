
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
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.compress());
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
app.get( '/news', routes.news );
app.get( '/news/:id', routes.newsItem );
app.get( '/photos', routes.photos );
app.get( '/videos', routes.videos );
//app.get( '/editorial', routes.editorial );
app.get( '/editorial/bem-vindo', routes.editorial );
app.get( '/discussions', routes.discussions );
app.get( '/discussions/:id?', routes.discussionItem );
//app.get( /^\/discussions\/\:i\d(\?.+)?/g, routes.discussionItem );
app.get( '/helpus', routes.helpus );
app.get( '/users', user.list );


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
