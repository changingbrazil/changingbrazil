var mongoose = require('mongoose');

var Article = mongoose.model("Article");
var Photo = mongoose.model("Photo");
var Album = mongoose.model("Album");
var Video = mongoose.model("Video");
var Discussion = mongoose.model("Discussion");

var title = 'Changing Brazil - Discussões, artigos e vídeos para mudar o Brasil!';

exports.index = function(req, res)
{
	res.render( 'index', { title: title } );
};

exports.news = function(req, res)
{
	Article.find(function (err, articles) {
		res.render( 'news', { title: title, articles: articles } );
	});
};

exports.editorial = function(req, res)
{
	var markdownExample = "A First Level Header\n====================\nSecond Level Header\n---------------------\nNow is the time for all good men to come to\nthe aid of their country. This is just a\nregular paragraph.\nThe quick brown fox jumped over the lazy\ndog's back.\n### Header 3\n> This is a blockquote.\n> \n> This is the second paragraph in the blockquote.\n>\n> ## This is an H2 in a blockquote";
	res.render( 'editorial', { title: title, markdownExample: markdownExample } );
};

exports.newsItem = function(req, res)
{
	var fullUrl = req.protocol + "://" + "changingbrazil.org" + req.url;

	Article.findOne({ url: req.url }, function (err, newsItem) {
		if ( ! err && newsItem != null )
		{
			res.render( 'newsItem', {
				title: title,
				newsItem: newsItem,
				fullUrl: fullUrl,
			});
		} else
		{
			res.render( 'helpus', { title: title } );
		}
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

	Discussion.findOne({ url: "/discussions/" + req.params.id }, function (err, discussionItem) {
		if ( ! err && discussionItem != null )
		{
			res.render( 'discussionItem', {
				title: title,
				item: discussionItem,
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
};
