var mongoose = require('mongoose');

var Article = mongoose.model("Article");
var Photo = mongoose.model("Photo");
var Album = mongoose.model("Album");
var Video = mongoose.model("Video");

var title = 'Changing Brazil';

exports.index = function(req, res)
{
	Article.find(function (err, articles) {
		res.render( 'index', { title: title, articles: articles } );
	});
};

exports.photos = function(req, res)
{
	Album.find(function (err, albums) {
		res.render( 'photos', { title: title, albums: albums } );
	});
};

exports.videos = function(req, res)
{
	Video.find(function (err, videos) {
		res.render( 'videos', { title: title, videos: videos } );
	});
};

exports.forum = function(req, res)
{
    res.render( 'forum', { title: title } );
};
