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
		$('.nav').removeClass('colorblue');			
	}); 


	$('.btn-egyptian').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');	
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');													
		$('.item.egyptian').removeClass('hide');
		$('.nav').removeClass('colorblue');			
	});

	$('.btn-klein').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');									
		$('.item.klein').removeClass('hide');
		$('.nav').removeClass('colorblue');			
	});

	$('.btn-navy').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');									
		$('.item.navy').removeClass('hide');
		$('.nav').removeClass('colorblue');			
	});	

	$('.btn-prussian').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');									
		$('.item.prussian').removeClass('hide');
		$('.nav').removeClass('colorblue');			
	});	

	$('.btn-ultra').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');									
		$('.item.ultra').removeClass('hide');
		$('.nav').removeClass('colorblue');			
	});	

	$('.btn-reset').click(function(){
		$('.swatches').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');									
		$('.item').removeClass('hide');
		$('.nav').removeClass('colorblue');			
	});	


	$('.btn-swatches').click(function(){
		$('.item').addClass('hide');
		$('.book').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');							
		$('.swatches').removeClass('hide');
		$('.nav').removeClass('colorblue');			
	});


	$('.btn-contents').click(function(){
		$('.item').addClass('hide');
		$('.swatches').addClass('hide');
		$('.title').addClass('hide');
		$('.introduction').addClass('hide');		
		$('.btn-cerulean').removeClass('hide');					
		$('.book').removeClass('hide');	
		$('.nav').addClass('colorblue');	
	});



















});