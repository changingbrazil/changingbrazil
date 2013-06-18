// select current sidebar item (according to URL)

//var action = $( location ).attr( 'href' ).replace( 'http://127.0.0.1:3000' , "" );

var action = window.location.pathname;

if (action === "/") action = "/news";

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