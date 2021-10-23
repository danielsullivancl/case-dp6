// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


/*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics_debug.js','ga');
*/



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');


ga('create', 'UA-12345-6', 'auto');


url_atual = window.location.href


//*********************************** pageview e eventos da index.html *********************************************

if (url_atual.indexOf('index.html') > -1)) {

	ga('send', 'pageview', '/index.html');
	document.getElementById("link-contato").addEventListener('click', function(){
		event_send(hitType = 'event', eventCategory = 'menu', 
			eventAction = 'entre_em_contato', eventLabel = 'link_externo')
	});

	document.getElementById("link-download").addEventListener('click', function(){
		event_send(hitType = 'event', eventCategory = 'menu', 
			eventAction = 'download_pdf', eventLabel = 'download_pdf')
	});	
}



//*********************************** pageview e eventos da analise.html *********************************************
if (url_atual.indexOf('analise.html') > -1)) {
	ga('send', 'pageview', '/analise.html');

	document.getElementById("btn-lorem").addEventListener('click', function(){
		event_send(hitType = 'event', eventCategory = 'analise', 
			eventAction = 'ver_mais', eventLabel = 'Lorem')
	});

	document.getElementById("btn-ipsum").addEventListener('click', function(){
		event_send(hitType = 'event', eventCategory = 'analise', 
			eventAction = 'ver_mais', eventLabel = 'Ipsum')
	});

	document.getElementById("btn-dolor").addEventListener('click', function(){
		event_send(hitType = 'event', eventCategory = 'analise', 
			eventAction = 'ver_mais', eventLabel = 'Dolor')
	});
}



//*********************************** pageview e eventos da sobre.html *********************************************
if (url_atual.indexOf('sobre.html') > -1) {

	ga('send', 'pageview', '/sobre.html');

	input_name = document.getElementById("nome");
	input_name.addEventListener('change', function(){
		event_send(hitType = 'event', eventCategory = 'contato', 
			eventAction = 'nome', eventLabel = 'preencheu')
	});

	input_email = document.getElementById("email");
	input_email.addEventListener('change', function(){
		event_send(hitType = 'event', eventCategory = 'contato', 
			eventAction = 'email', eventLabel = 'preencheu')
	});

	input_telefone = document.getElementById("telefone");
	input_telefone.addEventListener('change', function(){
		event_send(hitType = 'event', eventCategory = 'contato', 
			eventAction = 'telefone', eventLabel = 'preencheu')
	});


	checkbox_aceito = document.getElementById("aceito");
	checkbox_aceito.addEventListener('change', function(){
		//action = checkbox_aceito.checked ? 'aceito' : 'não aceito'
		event_send(hitType = 'event', eventCategory = 'contato', 
			eventAction = 'aceito', eventLabel = 'preencheu')
	});


	form = document.getElementById("form-sobre");
	form.addEventListener('submit', function(){
		event_send(hitType = 'event', eventCategory = 'contato', 
			eventAction = 'enviado', eventLabel = 'enviado')
	});

}

function event_send(hitType, eventCategory, eventAction, eventLabel) {
	ga('send', {
	  hitType: hitType,
	  eventCategory: eventCategory,
	  eventAction: eventAction,
	  eventLabel: eventLabel
	});
}
