define(['jquery'], function($) {
    'use strict';
    
    $(function(){
        $(document).on('click','#search_toggle_div',function(){
            if(!$('#open_bar').hasClass('d-none')){
                $('#close_bar').removeClass('d-none');
                $('#open_bar').addClass('d-none');
                $('.elx_style .field.search').show();
            }else{
                $('#close_bar').addClass('d-none');
                $('#open_bar').removeClass('d-none');
                $('.elx_style .field.search').hide();
            }
        })
    });
    return;
});