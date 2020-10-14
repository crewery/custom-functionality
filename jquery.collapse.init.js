(function ($) {

    $(".faqs").collapse({
        // options...
        query: 'div h3',
        open: function() {
            this.slideDown(150);
        },
        close: function() {
            this.slideUp(150);
        }
    });

})(jQuery);