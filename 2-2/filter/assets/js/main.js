$( document ).ready(function() {
    
 $( function() {
    $( ".drag-image").draggable();

  } );

 $( function() {
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.btn-cerulean').addClass('hide');												
		$('.title').removeClass('hide');
  } );  


	$('.btn-cerulean').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.btn-cerulean').addClass('hide');
		$('.introduction').removeClass('hide');													
		$('.title').removeClass('hide');
	}); 


	$('.btn-egyptian').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');	
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');													
		$('.item.egyptian').removeClass('hide');
	});

	$('.btn-klein').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');									
		$('.item.klein').removeClass('hide');
	});

	$('.btn-navy').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');									
		$('.item.navy').removeClass('hide');
	});	

	$('.btn-prussian').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');									
		$('.item.prussian').removeClass('hide');
	});	

	$('.btn-ultra').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');									
		$('.item.ultra').removeClass('hide');
	});	

	$('.btn-reset').click(function(){
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');									
		$('.item').removeClass('hide');
	});	


	$('.btn-swatches').click(function(){
		$('.item').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');							
		$('.swatches').removeClass('hide');
	});


	$('.btn-contents').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');					
		$('.book').removeClass('hide');		
	});



















});