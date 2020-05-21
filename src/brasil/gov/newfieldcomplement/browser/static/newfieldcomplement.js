$(document).ready(function(){

    // tratamento da coluna direita vazia
    if (!$.trim($('div#faceted-right-column').html())) {
        $('div#center-content-area').addClass('no-right-margin')
    }

    //collapse
    $('.filter-btn').click(function () {
        var container = $('#collapse-form');

        if (container.hasClass('show')) {
            container.removeClass('show');
            return false;
        }

        container.addClass('show');
        return false;
    });


});
