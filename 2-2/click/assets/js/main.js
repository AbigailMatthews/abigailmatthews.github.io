$(document).ready(function(){
	console.log('hello world');

	$('.btn-box').click(function(){
		$('.box').toggleClass('active');
	});

	$('.box').click(function(){
		$(this).toggleClass('active');
	});

	$('.btn-slide').click(function(){
		$('.slide').toggleClass('active');
	});

	$('.btn-alert').click(function(){
	$('.alert').toggleClass('active');
	});

	$('.btn-egyptian').click(function(){
		$('.item').addClass('hide');
		$('.item.egyptian').removeClass('hide');
	});


	$('.btn-klein').click(function(){
		$('.item').addClass('hide');
		$('.item.klein').removeClass('hide');
	});

	$('.btn-navy').click(function(){
		$('.item').addClass('hide');
		$('.item.navy').removeClass('hide');
	});	

	$('.btn-prussian').click(function(){
		$('.item').addClass('hide');
		$('.item.prussian').removeClass('hide');
	});	

	$('.btn-ultra').click(function(){
		$('.item').addClass('hide');
		$('.item.ultra').removeClass('hide');
	});	

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
	});	



});
