/*스크롤 이미지 애니메이션*/
$(document).ready(function() {
    $(window).scroll( function(){
			
        $('image').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight()/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},700);
            }
            
        }); 
    });
});