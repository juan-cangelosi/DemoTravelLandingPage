$(document).ready(function() {
          
	$("nav ul li.hassubmenu a").append('<span class="fa fa-angle-down"></span>');
    $("nav ul li.hassubmenu .submenu a").children('.fa-angle-down').remove();
    $(".breadcrumb ul li a").append('<span class="fa fa-angle-right"></span>');
    $(".submenu").parent("li.hassubmenu").children("a").attr("href", "javascript:void()");

    $("nav ul li.hassubmenu").click(function() {
        $(this).children(".submenu").slideToggle("fast");
    });
    

    $(".mobtitle span.fa-navicon").click(function() {
                        $("nav.topmenu").slideDown("fast");
                        $(this).hide();
                        $(this).next("span.fa-close").show();
                        });
     
    
    $(".mobtitle span.fa-close").click(function() {
                        $("nav.topmenu").slideUp("fast");
                        $(this).hide();
                        $(this).prev("span.fa-navicon").show();
    });

    $("#owl-demo").owlCarousel({
        navigation : false,
        pagination : true,
        items : 4,
        autoPlay : true,
        stopOnHover : true
    });

});

$(function() {
            $('.topbutton').hide();
            $(window).scroll(function() {
                if($(this).scrollTop() > 50) {
                    $('.topbutton').show();   
                } else {
                    $('.topbutton').fadeOut();
                }
            });
         
            $('.topbutton').click(function() {
                $('body,html').animate({scrollTop:0},800);
            }); 
});
