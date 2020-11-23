$( document ).ready(function() {
    
 $( function() {
    $( ".drag-image").draggable();

  } );

 $( function() {
    $('.new-message3').addClass('hide');
    $('.new-message4').addClass('hide');    
    $('.new-message5').addClass('hide');    
    $('.new-message6').addClass('hide');    

    $('.btn-interface').addClass('hide'); 
    $('.btn-address').addClass('hide');    
    $('.btn-city').addClass('hide');    
    $('.btn-cloud').addClass('hide'); 
    $('.btn-earth').addClass('hide');     
    $('.interface-text').addClass('hide');  
    $('.address-text').addClass('hide');          
    $('.city-text').addClass('hide');  
    $('.cloud-text').addClass('hide'); 
    $('.earth-text').addClass('hide');       

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



  $('.btn-user').click(function(){  
    $('.btn-interface').removeClass('hide');   
    $('.interface-text').removeClass('hide');                
  }); 

  $('.btn-interface').click(function(){
    $('.btn-address').removeClass('hide');   
    $('.address-text').removeClass('hide');         
  });   

  $('.btn-address').click(function(){
    $('.btn-city').removeClass('hide');   
    $('.city-text').removeClass('hide');         
  });   

  $('.btn-city').click(function(){
    $('.btn-cloud').removeClass('hide');   
    $('.cloud-text').removeClass('hide');         
  }); 

  $('.btn-cloud').click(function(){
    $('.btn-earth').removeClass('hide');   
    $('.earth-text').removeClass('hide');         
  });       

});





