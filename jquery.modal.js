//  USAGE:
//  $('.modal').modal();

(function($){

    $.fn.extend({

        modal: function(options) {

            var defaults = {
                overlay: 0.8,
                closeButton: '.close'
            };

            var overlay = $('<div id="curtain"></div>');

            $("body").append(overlay);

            options =  $.extend(defaults, options);

            var o = options, modal_id = $(this);

            // $("#lean_overlay").click(function() {
            //      close_modal(modal_id);
            // });

            $(o.closeButton).click(function() {
                 close_modal(modal_id);
            });

            var modal_height = $(modal_id).outerHeight(),
                modal_width = $(modal_id).outerWidth();

            $('body, html').css('overflow', 'hidden');

            overlay.fadeTo(400,o.overlay);

            $(modal_id).css({
                'position' : 'fixed',
                'z-index': 5000,
                'left' : 50 + '%',
                'margin-left' : - (modal_width / 2),
                'top' : ($(window).height() / 2) - (modal_height / 2)
            });

            $(modal_id).show(400);

            e.preventDefault();

            function close_modal(modal_id){
                overlay.fadeOut(800);
                $(modal_id).hide(600);
                $('body, html').css('overflow', 'auto');
            }

        }
    });

})(jQuery);
