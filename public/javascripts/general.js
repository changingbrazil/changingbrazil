if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}

// select current sidebar item (according to URL)

var action = window.location.pathname;

// if (action === "/") action = "/news";

if (action.startsWith("/news")) { // rewrite for /discussions/foo
	action = "/news/";
}

if (action.startsWith("/discussions")) { // rewrite for /discussions/foo
	action = "/discussions/";
}

$( 'a[href="' + action + '"]' ).parent( ).addClass( 'active' );
//

// Facebook API
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Twitter API
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


$(document).ready(function() {
  var currentUrl = location.href;

  $(".fb-like-self").html(
    '<div class="fb-like" data-href="' + currentUrl + '" data-send="false" data-width="450" data-show-faces="true"></div>'
  );
  $(".fb-send-self").html(
    '<div class="fb-send" data-href="' + currentUrl + '"></div>'
  );
  $(".fb-comments-self").html(
    '<div class="fb-comments" data-href="' + currentUrl + ' data-width="470" data-num-posts="30"></div>'
  );
  $(".twitter-tweet-self").html(
    '<a href="https://twitter.com/share" class="twitter-share-button" data-via="changingbrazil" data-lang="pt" data-hashtags="changingbrazil">Tweetar</a>'
  );
  $(".fb-comments-self").html(
    '<fb:comments href="' + currentUrl +'"></fb:comments>'
  );
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-41880139-1', 'changingbrazil.org');
ga('send', 'pageview');