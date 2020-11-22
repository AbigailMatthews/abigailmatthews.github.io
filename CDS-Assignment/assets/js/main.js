$( document ).ready(function() {
    
 $( function() {
    $( ".drag-image").draggable();

  } );

 $( function() {
    $('.new-message3').addClass('hide');
    $('.new-message4').addClass('hide');    
    $('.new-message5').addClass('hide');    
    $('.new-message6').addClass('hide');    
  } );  


  $('.btn-time').click(function(){
    $('.btn-time').addClass('hide');                        
    $('.new-message3').removeClass('hide');     
  }); 

  $('.btn-energy').click(function(){
    $('.btn-energy').addClass('hide');                        
    $('.new-message4').removeClass('hide');     
  }); 

  $('.btn-speed').click(function(){
    $('.btn-speed').addClass('hide');                        
    $('.new-message5').removeClass('hide');     
  }); 

  $('.btn-carbon').click(function(){
    $('.btn-carbon').addClass('hide');                        
    $('.new-message6').removeClass('hide');     
  }); 


});


