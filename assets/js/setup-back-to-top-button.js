window.setupBackToTopButton = function () {
    function updateBackToTopButton() {
        if ($(window).scrollTop() > 50) { 
            $('#back-to-top-button').fadeIn(); 
        } else { 
            $('#back-to-top-button').fadeOut(); 
        } 
    }

    $(window).scroll(updateBackToTopButton); 

    updateBackToTopButton();

    $('#back-to-top-button').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
};
