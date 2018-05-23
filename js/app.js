// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top,
			menuHeight = $('nav').innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

		//RESPONSIVIDADE -- CORES E TAMANHOS
    	$(window).on('resize', function() {
		  var win = $(this);
		  if (win.width() <= 300) {

		    $('#123').addClass('black-text');
		    $('#123').removeClass('white-text');
		    $('#bg1').addClass('bg-small');
		    $('#bg1').removeClass('bg-large');

		  } else {
		    $('#123').addClass('white-text');
		    $('#123').removeClass('black-text');
		    
		  }

		  if (win.width() <= 430) {
		    $('#bg1').addClass('bg-small');
		    $('#bg1').removeClass('bg-large');
		  }else{
		  	$('#bg1').addClass('bg-large');
		    $('#bg1').removeClass('bg-small');
		  }
		});

    	  // INICIALIZAÇÃO MENU
		   $(document).ready(function(){
	      $('.sidenav').sidenav();
	    });








