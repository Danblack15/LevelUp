jQuery(function () {

    var block_offset = $('footer').offset().top;//расстояние от верха до блока

    $('.scroll_order').click(function () {//функция по клику на кнопку

        $('html, body').animate({ scrollTop: block_offset }, 600);//скролл к блоку
        return false;

    });

    //TIMER
    $(document).ready(function () {

        var sec = $('.sec').text(),
            min = $('.min').text();

        setInterval(function () {

            if (sec > 0) {
                sec--;
                if (sec < 10) {
                    $('.sec').text('0' + sec)
                } else {
                    $('.sec').text(sec)
                }

            } else {
                if (min > 0) {
                    min--;
                    if (min < 10) {
                        $('.min').text('0' + min);
                    } else {
                        $('.min').text(min);
                    }
                    sec = 59;
                    $('.sec').text(sec);
                } else {
                    alert('Акция закончилась!');
                }
            }

        }, 1000);

    });

})