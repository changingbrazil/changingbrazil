var mongoose = require('mongoose');

var Article = mongoose.model("Article");
var Photo = mongoose.model("Photo");
var Album = mongoose.model("Album");
var Video = mongoose.model("Video");
var Discussion = mongoose.model("Discussion");

var title = 'Changing Brazil - A Hora de Mudar é Agora!';

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

exports.discussions = function(req, res)
{
	Discussion.find(function (err, discussions) {
		res.render( 'discussions', { title: title, discussions: discussions } );
	});
};

exports.discussionItem = function(req, res)
{
	var fullUrl = req.protocol + "://" + "changingbrazil.org" + req.url;

	Discussion.findOne({ url: req.url }, function (err, discussionItem) {
		if ( ! err && discussionItem != null )
		{
			res.render( 'discussionItem', {
				title: title + " - " + discussionItem.title,
				discussionItem: discussionItem,
				fullUrl: fullUrl,
			});
		} else
		{
			res.render( 'helpus', { title: title } );
		}
	});
};

exports.helpus = function(req, res)
{
	res.render( 'helpus', { title: title } );
<<<<<<< HEAD
};
=======
};
>>>>>>> 6817ff7de6dd541d33e5b87af59a2e50d5930e92
