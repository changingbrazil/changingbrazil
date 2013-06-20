var mongoose = require( 'mongoose' );


var articleSchema = new mongoose.Schema({
	title: String,
	content: String,
	url: String,
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
	url: String,
	description: String,
	date: Date,
});

var discussionSchema = new mongoose.Schema({
	title: String,
	url: String,
	imageURL: String,
	description: String
});

mongoose.model('Article', articleSchema);
mongoose.model('Photo', photoSchema);
mongoose.model('Album', albumSchema);
mongoose.model('Video', videoSchema);
mongoose.model('Discussion', discussionSchema);

mongoose.connect('mongodb://localhost/wearechangingbrazil');

var Article = mongoose.model("Article");
var Photo = mongoose.model("Photo");
var Album = mongoose.model("Album");
var Video = mongoose.model("Video");
var Discussion = mongoose.model("Discussion");

Article.remove().exec(function(error) {
	Photo.remove().exec(function(error) {
		Album.remove().exec(function(error) {
			Video.remove().exec(function(error) {
				Discussion.remove().exec(function(error) {
					(new Article({ title: 'Artigo 1', content: 'Conteúdo do Artigo 1', url: '/news/artigo1' })).save();
					(new Article({ title: 'Artigo 2', content: 'Conteúdo do Artigo 2', url: '/news/artigo2' })).save();
					(new Article({ title: 'Artigo 3', content: 'Conteúdo do Artigo 3', url: '/news/artigo3' })).save();

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

					(new Video(
						{
							url: 'http://www.youtube.com/embed/v9rgOwH99nc',
							title: 'MUDA BRASIL - FAZ SENTIDO',
							date: new Date( 2013, 05, 18 ),
							description: 'MUDA BRASIL!\nNão é pelos 20 centavos! É pelos 2.2 trilhões acumulados só nos últimos 17 meses! Cadê o nosso dinheiro?'
						}
					)).save();

					(new Video(
						{
							url: 'http://www.youtube.com/embed/v5iSn76I2xs',
							title: 'Anonymous Brasil - As 5 causas!',
							date: new Date( 2013, 05, 18 ),
							description: 'Baixem, postem nas suas contas para que não suma da internet e compartilhem!'
						}
					)).save();

					(new Video(
						{
							url: 'http://www.youtube.com/embed/x2b4Dtav2jU',
							title: 'O prefeito do Rio mente',
							date: new Date( 2013, 05, 18 ),
							description: 'A representatividade política desse Parlamento é muito ruim, por isso tem medo da sociedade, mas não é destruindo o prédio da Alerj que vão conseguir essa mudança política. É ocupando as ruas. Sete capitais já reduziram o valor passagem e isso se deu pela forte capacidade de mobilização da sociedade. Nesse sentido, o prefeito do Rio mente de forma irresponsável dizendo que aceita receber a liderança do movimento, que ele sabe que não existe, de forma debochada. Diz que não vai subsidiar empresas de ônibus. Mentira. Ele já subsidia. O prefeito e a sua base reduziram o ISS de 2% para 0,01% e, em dois anos, deixaram de arrecadar quase R$ 100 milhões. O nome disso é subsídio disfarçado. As passagens são caras e a prefeitura não tem qualquer controle sobre as empresas. A prefeitura paga quase 50 milhões por ano para a Rio Ônibus colocar o validador que controla a frequência dos alunos da rede. Há muito dinheiro público dentro dos interesses econômicos dessas empresas. Queremos que tenha coragem para abrir a caixa-preta, que reveja a licitação de carta marcada que fez em 2010. É para isso que a sociedade está indo para a rua. O senhor Eduardo Paes terá que ceder como as outras capitais já fizeram, porque esse movimento vai crescer e será vitorioso", afirmou Marcelo Freixo, nesta terça-feira (18/6), no plenário da Alerj.'
						}
					)).save();

					(new Video(
						{
							url: 'http://www.youtube.com/embed/B7t60-ro_5U',
							title: 'Don\'t come to Brazil / Não venha para a copa',
							date: new Date( 2013, 05, 18 ),
							description: 'For all the world to see these facts and decide if they want to even come to the World Cup/Para que todos do mundo vejam esses fatos e decidem se querem mesmo vir para a Copa do Mundo.'
						}
					)).save();

					(new Video(
						{
							url: 'http://www.youtube.com/embed/AIBYEXLGdSg',
							title: 'Please Help Us [Brazil] - #changebrazil',
							date: new Date( 2013, 05, 14 ),
							description: 'Reddit http://www.reddit.com/r/Brazil/comments<br>9gag - http://9gag.com/gag/aKzwogj/<br>Buzzfeed - http://www.buzzfeed.com/frischeisen/changebrazil-a-worldwide-call-for-help-bfg6'
						}
					)).save();

					(new Video(
						{
							url: 'http://www.youtube.com/embed/AsDvik2DChI',
							title: 'PEC 33 e 37 - Dica Atualidades',
							date: new Date( 2013, 04, 08 ),
							description: ''
						}
					)).save();



					(new Discussion(
						{
							title: "PEC 33 e 37",
							url: "/discussions/pec-33-e-37",
							imageURL: 'pec-33-e-37.jpg',
							description: 'Duas propostas de emenda constitucional que ameaçam seriamente o equilíbrio dos três poderes (veja detalhes na nossa seção de vídeos). Hora de focar o protesto neste tópico?'
						}
					)).save();

					(new Discussion(
						{
							title: "Violência de Manifestantes",
							url: "/discussions/violencia-nos-protestos",
							imageURL: 'violencia-de-manifestantes.jpg',
							description: 'Os protestos têm sido pacíficos em grande parte. Infelizmente, uma minoria de manifestantes costuma atacar lojas, carros e o patrimônio público. A revolta do povo justifica este tipo de violência, mesmo numa democracia? Como controlar exageros dentro de uma multidão?'
						}
					)).save();
					//(new Discussion({ title: "Corrupção", url: "/discussions/protestosEmSaoPaulo" })).save();
					//(new Discussion({ title: "Importância do Voto", url: "/discussions/copaDoMundo" })).save();
					
					(new Discussion(
						{
							title: "Falta de Transparência",
							url: "/discussions/falta-de-transparencia.jpg",
							imageURL: 'falta-de-transparencia.jpg',
							description: 'Não enxergamos boa parte do que é feito pelos políticos. Não sabemos ao certo para onde vai o dinheiro dos impostos. Não sabemos como foram gastos os investimentos na Copa. Não sabemos sequer como está votando aquele deputado que elegemos. Com tanta escuridão, fica difícil ter consciência política. Como podemos pressionar o governo a ser mais transparente? Como encontrar e apresentar esses dados ao povo, de uma forma que todos entendam?'
						}
					)).save();
					
					// (new Discussion(
					// 	{
					// 		title: "Discriminação",
					// 		url: "/discussions/discriminacao",
					// 		imageURL: 'violencia.jpg',
					// 	}
					// )).save();
				});
			});
		});
	});
});
