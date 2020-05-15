$(document).ready(function(){
   
    /*for the sticky navigaation */
    $('.js-section-features').waypoint(function(dropdown){
         if(dropdown == 'down'){
             
          $('nav').addClass('sticky')   
             
         } else{
             
          $('nav').removeClass('sticky')   
             
         }
    }, {
  offset: '70px;'
})
    /* scroll on button */ 
    

    $('js-scrol-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js-section-featurs').offset().top},1000);
        
        
    })

    
    /*animation on scroll */
    
    $('.js-wp-1').waypoint(function(direction){
        
         $('.js-wp-1').addClass('animated fadeIn');
    }, {
        
        
     offset: '40%'
        
    });
    
    
    
    
     $('.js-wp-2').waypoint(function(direction){
        
         $('.js-wp-2').addClass('animated fadeInUp');
    }, {
        
        
     offset: '40%'
        
    });
    
    
    
    
    
     $('.js-wp-3').waypoint(function(direction){
        
         $('.js-wp-3').addClass('animated fadeInUp');
    }, {
        
        
     offset: '40%'
        
    });
    
    

     $('.js-wp-4').waypoint(function(direction){
        
         $('.js-wp-4').addClass('animated fadeIn');
    }, {
        
        
     offset: '40%'
        
    });
    
    
});