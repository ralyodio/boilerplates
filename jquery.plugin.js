;(function($){
    /*
    * aettinger - Boiler plate for jQuery plugin
    * $("div").myFunc({ my_option: 'some option' });
    *
    */
    $.fn.extend({
        myFunc: function( opts ) {
            //default options
            var opts = $.extend({
            }, opts);

            return this.each(function(){
                var $el = $(this);

								//do stuff here
								if ( opts.my_option ) {
								}
            });
        }
    });
})(jQuery);
