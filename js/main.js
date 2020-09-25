$(document).ready(function(){
    /*портфолио*/
    $('.wd').click(function(){
        if($(this).attr('val')=='off') {
            $('.section__portfolio__btn').attr('val', 'off')
            $(this).attr('val', 'on');
            $('.section__portfolio__btn').removeClass('focused');
            $(this).addClass('focused');
            $('.section__portfolio__imgBlock > div').hide(300);
            $('.section__portfolio__imgBlock > div.wd').show(300);    
        }
    });
    $('.ud').click(function(){
        if($(this).attr('val')=='off') {
            $('.section__portfolio__btn').attr('val', 'off')
            $(this).attr('val', 'on');
            $('.section__portfolio__btn').removeClass('focused');
            $(this).addClass('focused');
            $('.section__portfolio__imgBlock > div').hide(300);
            $('.section__portfolio__imgBlock > div.ud').show(300);    
        }
    });
    $('.moc').click(function(){
        if($(this).attr('val')=='off') {
            $('.section__portfolio__btn').attr('val', 'off')
            $(this).attr('val', 'on');
            $('.section__portfolio__btn').removeClass('focused');
            $(this).addClass('focused');
            $('.section__portfolio__imgBlock > div').hide(300);
            $('.section__portfolio__imgBlock > div.moc').show(300);    
        }
    });
    $('.all').click(function(){
        if($(this).attr('val')=='off') {
            $('.section__portfolio__btn').attr('val', 'off');
            $(this).attr('val', 'on');    
            $('.section__portfolio__btn').removeClass('focused');
            $(this).addClass('focused');       
            $('.section__portfolio__imgBlock > div').show(300);
        }
    });

    /*слайдер*/
    $('.member_slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    /*меню*/
    $('ul.menu a').click(function(){
        var target = $(this).attr('href'); 
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });

    /*Выпадающее меню*/
    $('.menu__mobil').click(function(){
        $('nav').slideToggle(500);
        $('ul.menu').css({
            'display':'flex', "flex-direction":"column"
        });

    })

    /*кнопка вверх*/
    $(window).scroll(function(){
        if($(this).scrollTop() !=0)
            $('#to_top').fadeIn();
        else 
            $('#to_top').fadeOut();
    });
    $('#to_top').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 800)
    });
})

