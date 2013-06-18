var mongoose = require( 'mongoose' );


var articleSchema = new mongoose.Schema({
	title: String,
	content: String
});

var photoSchema = new mongoose.Schema({
	title: String,
	url: String,
});

var albumSchema = new mongoose.Schema({
	title: String,
	photos: [photoSchema]
});

var videoSchema = new mongoose.Schema({
	title: String,
	url: String
});

mongoose.model('Article', articleSchema);
mongoose.model('Photo', photoSchema);
mongoose.model('Album', albumSchema);
mongoose.model('Video', videoSchema);

mongoose.connect('mongodb://localhost/wearechangingbrazil');

var Article = mongoose.model("Article");
var Photo = mongoose.model("Photo");
var Album = mongoose.model("Album");
var Video = mongoose.model("Video");

Article.remove().exec();
Photo.remove().exec();
Album.remove().exec();
Video.remove().exec();

var article1 = new Article({ title: 'Artigo 1', content: 'Conteúdo do Artigo 1' });
article1.save();

var album1 = new Album( { title: 'Rio de Janeiro, 17/Jun/2013', photos: [] });
album1.photos.push( { title: 'Foto 1', url: 'http://veja4.abrilm.com.br/assets/images/2013/6/155053/protestos-tarifa-transporte-rio-de-janeiro-20130617-04-size-598.jpg?1371511266' } );
album1.photos.push( { title: 'Foto 2', url: 'http://veja2.abrilm.com.br/assets/images/2013/6/155037/protestos-tarifa-transporte-rio-de-janeiro-20130617-03-size-598.jpg?1371506613' } );
album1.photos.push( { title: 'Foto 3', url: 'http://www.jb.com.br/media/fotos/capa/2013/06/17/409x277crop/protesto.jpg' } );
album1.photos.push( { title: 'Foto 4', url: 'https://pbs.twimg.com/media/BNAJgAzCUAE8-5x.jpg:large' } );
album1.photos.push( { title: 'Foto 5', url: 'https://pbs.twimg.com/media/BM_VuTLCMAA8bY9.jpg:large' } );
album1.photos.push( { title: 'Foto 6', url: 'http://i.imgur.com/qC7ECup.jpg' } );
album1.save();

var album2 = new Album({ title: 'Album 2', photos: [] });
album2.photos.push( { title: 'Foto 1', url: 'http://sphotos-a.ak.fbcdn.net/hphotos-ak-prn1/1017249_4935759311079_2086620153_n.jpg' } );
album2.photos.push( { title: 'Foto 2', url: 'http://sphotos-a.ak.fbcdn.net/hphotos-ak-prn1/1017249_4935759311079_2086620153_n.jpg' } );
album2.save();

var album3 = new Album({ title: 'Brasília, 18/Jun/2003', photos: [] });
album3.photos.push( { title: 'Foto 1', url: 'http://www.robsonpiresxerife.com/blog/wp-content/uploads/2013/06/protesto-DF.jpg' } );
album3.photos.push( { title: 'Foto 2', url: 'http://www.gazetamaringa.com.br/midia_tmp/398--congresso080656.jpg' } );
album3.save();

var album4 = new Album({ title: 'São Paulo, 13/Jun/2003', photos: [] });
album4.photos.push( { title: 'Foto 1', url: 'http://24.media.tumblr.com/193d55061d3d9fa7c74ec2a4c9645715/tumblr_mohxnnwRWh1svdbg3o1_1280.jpg' } );
album4.photos.push( { title: 'Foto 2', url: 'http://i.imgur.com/x5QzU2z.jpg' } );
album4.photos.push( { title: 'Foto 3', url: 'http://i.imgur.com/dDJi8G9.jpg' } );
album4.photos.push( { title: 'Foto 4', url: 'http://i.imgur.com/0pcEZKD.jpg' } );
album4.photos.push( { title: 'Foto 5', url: 'http://images.redetv.com.br/siteredetv/grupos/jornalismo/redetvinoticias/fotos/GAL_7169/grandes/IFOT_63894.jpg' } );
album4.save();

var video1 = new Video({ title: 'Please Help Us [Brazil] - #changebrazil', url: 'http://www.youtube.com/embed/EFPT6vatLHY' });
video1.save();

var video2 = new Video({ title: 'UMA SENHORA DE CORAGEM :: BRASIL ACORDOU :: MARACANÃ 16/06/2013', url: 'http://www.youtube.com/embed/-0tkWH0CS0w' });
video2.save();

var video3 = new Video({ title: 'Protestos no Brasil contra a tarifa de transporte são brutalmente dispersados pela polícia.', url: 'http://www.youtube.com/embed/4Iq3TnC3IP0' });
video3.save();